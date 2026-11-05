"""Genera docs/situaciones/index.md y el bloque de nav a partir de las situaciones.

Uso: python3 scripts/generar_indice_situaciones.py .  Escribe el índice e imprime el bloque
de nav para mkdocs.yml. Correrlo después de agregar o editar una situación.
"""
import pathlib
import re
import sys

repo = pathlib.Path(sys.argv[1])
d = repo / "docs" / "situaciones"
TEMAS = ["Eventos", "Roles", "Flujo", "Métricas y compromisos", "Personas y cambio", "Tu llegada"]

por_tema = {t: [] for t in TEMAS}
for f in sorted(d.glob("*.md")):
    if f.name == "index.md":
        continue
    t = f.read_text(encoding="utf-8")
    titulo = re.search(r"^# (.+)$", t, re.M).group(1).strip()
    corto = re.search(r"^\*\*En corto:\*\*\s*(.+)$", t, re.M).group(1).strip()
    tema = re.search(r"^\*\*Tema:\*\*\s*(.+?)\s*·", t, re.M).group(1).strip()
    if tema not in por_tema:
        sys.exit(f"tema desconocido en {f.name}: {tema}")
    por_tema[tema].append((f.name, titulo, corto))

total = sum(len(v) for v in por_tema.values())
out = ["# Qué hago si…", "",
       "Respuestas rápidas para situaciones frecuentes de un Scrum Master o coach. Cada una dice qué está pasando, qué hacer, qué decir y qué evitar, y enlaza a la ficha o herramienta que lo explica a fondo.",
       "",
       "!!! tip \"Cómo usarla\"",
       "    Busca tu situación por tema o con el buscador. Si tienes un minuto, basta con la respuesta en corto. Si tienes cinco, lee la situación completa antes de la reunión.",
       "",
       f"**{total} situaciones** en {len([t for t in TEMAS if por_tema[t]])} temas.",
       ""]
for tema in TEMAS:
    if not por_tema[tema]:
        continue
    out += [f"## {tema}", ""]
    for nombre, titulo, corto in por_tema[tema]:
        out.append(f"- **[{titulo}]({nombre})**  ")
        out.append(f"  {corto}")
    out.append("")
(d / "index.md").write_text("\n".join(out), encoding="utf-8")

nav = ["  - Qué hago si…:", "      - situaciones/index.md"]
for tema in TEMAS:
    if not por_tema[tema]:
        continue
    nav.append(f"      - {tema}:")
    for nombre, titulo, _ in por_tema[tema]:
        titulo_yaml = titulo.replace('"', '\\"')
        nav.append(f'          - "{titulo_yaml}": situaciones/{nombre}')
print("\n".join(nav))
