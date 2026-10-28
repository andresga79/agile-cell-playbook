#!/usr/bin/env bash
# Construye una copia congelada de cada tag vX.Y.Z en <site>/versiones/<tag>/
# sin tocar la versión actual publicada en la raíz.
set -euo pipefail

SITE_DIR="$(cd "${1:-site}" && pwd)"
REPO_DIR="$(git rev-parse --show-toplevel)"
WORK_DIR="$(mktemp -d)"
trap 'cd "$REPO_DIR"; git worktree prune; rm -rf "$WORK_DIR"' EXIT

for tag in $(git tag --list 'v*' --sort=version:refname); do
  echo "::group::Archivo $tag"
  wt="$WORK_DIR/$tag"
  git worktree add --detach --quiet "$wt" "$tag"
  out="$SITE_DIR/versiones/$tag"
  # Cada tag se construye con su propia configuración; sin --strict porque
  # las versiones antiguas no se corrigen.
  (cd "$wt" && mkdocs build --quiet -d "$out")
  python3 "$REPO_DIR/.github/scripts/archive_banner.py" "$out" "$tag"
  git worktree remove --force "$wt"
  echo "::endgroup::"
done
