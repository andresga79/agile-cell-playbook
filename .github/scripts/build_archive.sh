#!/usr/bin/env bash
# Construye una copia congelada de cada tag vX.Y.Z en <site>/versiones/<tag>/
# sin tocar la versión actual publicada en la raíz.
#
# - Los tags que ya están archivados en la rama gh-pages se copian tal cual,
#   sin reconstruirlos (las versiones archivadas no cambian).
# - Solo se construyen los tags nuevos, cada uno con las dependencias de su
#   propio requirements.txt en un entorno virtual aislado.
# - REBUILD_ARCHIVE=1 fuerza a reconstruir todos los tags.
set -euo pipefail

SITE_DIR="$(cd "${1:-site}" && pwd)"
REPO_DIR="$(git rev-parse --show-toplevel)"
WORK_DIR="$(mktemp -d)"
trap 'cd "$REPO_DIR"; git worktree prune; rm -rf "$WORK_DIR"' EXIT

PUBLICADO="refs/remotes/origin/gh-pages"
if [ "${REBUILD_ARCHIVE:-0}" = "1" ]; then
  echo "REBUILD_ARCHIVE=1: se reconstruyen todos los tags."
  PUBLICADO=""
else
  # Código 2 = la rama no existe (primer deploy). Cualquier otro error
  # (red, credenciales) aborta: no se confunde con "no hay nada archivado".
  rc=0
  git ls-remote --exit-code --heads origin gh-pages >/dev/null || rc=$?
  if [ "$rc" -eq 2 ]; then
    echo "No hay rama gh-pages publicada: se construyen todos los tags."
    PUBLICADO=""
  elif [ "$rc" -ne 0 ]; then
    echo "::error::No se pudo consultar la rama gh-pages (código $rc)."
    exit 1
  else
    git fetch --quiet --no-tags origin "+gh-pages:$PUBLICADO"
  fi
fi

for tag in $(git tag --list 'v*' --sort=version:refname); do
  echo "::group::Archivo $tag"
  out="$SITE_DIR/versiones/$tag"

  if [ -n "$PUBLICADO" ] && git cat-file -e "$PUBLICADO:versiones/$tag/index.html" 2>/dev/null; then
    rm -rf "$out"
    mkdir -p "$SITE_DIR/versiones"
    git archive "$PUBLICADO" "versiones/$tag" | tar -x -C "$SITE_DIR"
    echo "$tag ya estaba archivado: se conserva la copia publicada."
  else
    wt="$WORK_DIR/$tag"
    venv="$WORK_DIR/venv-$tag"
    git worktree add --detach --quiet "$wt" "$tag"
    python3 -m venv "$venv"
    "$venv/bin/pip" install --quiet --disable-pip-version-check -r "$wt/requirements.txt"
    # Cada tag se construye con su propia configuración y dependencias;
    # sin --strict porque las versiones antiguas no se corrigen.
    (cd "$wt" && "$venv/bin/mkdocs" build --quiet -d "$out")
    python3 "$REPO_DIR/.github/scripts/archive_banner.py" "$out" "$tag"
    git worktree remove --force "$wt"
    echo "$tag construido."
  fi
  echo "::endgroup::"
done

# Red de seguridad: ninguna versión que ya estaba publicada puede faltar en
# el sitio nuevo (ghp-import --force reemplaza la rama completa).
if [ -n "$PUBLICADO" ]; then
  for dir in $(git ls-tree -d --name-only "$PUBLICADO" versiones/); do
    if [ ! -f "$SITE_DIR/$dir/index.html" ]; then
      echo "::error::$dir está publicado en gh-pages pero falta en el sitio nuevo (¿se borró su tag?). No se publica."
      exit 1
    fi
  done
fi
