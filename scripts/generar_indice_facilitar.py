"""Genera docs/facilitar/index.md y el bloque de nav de la sección Facilitar.

Uso: python3 scripts/generar_indice_facilitar.py .  Escribe el índice e imprime el bloque
de nav para mkdocs.yml. Para un guion nuevo, agregar su slug a GRUPOS.
"""
import pathlib
import re
import sys

repo = pathlib.Path(sys.argv[1])
d = repo / "docs" / "facilitar"

GRUPOS = [
    ("Eventos de Scrum", ["sprint-planning", "daily", "sprint-review", "retrospectiva", "refinamiento"]),
    ("Cadencias de Kanban", ["reposicion", "revision-de-entrega"]),
    ("Tu llegada (semana 3)", ["taller-de-brechas", "devolucion-del-diagnostico"]),
]
RETROS = ["starfish", "velero", "4ls", "mad-sad-glad", "linea-de-tiempo",
          "start-stop-continue", "cinco-porques", "radar-del-equipo", "triz", "lean-coffee"]


def leer(f):
    t = f.read_text(encoding="utf-8")
    titulo = re.search(r"^# (.+)$", t, re.M).group(1).strip()
    corto = re.search(r"^\*\*En corto:\*\*\s*(.+)$", t, re.M).group(1).strip()
    dur = re.search(r"^\*\*Duración:\*\*\s*(.+?)\s*·", t, re.M)
    return titulo, corto, (dur.group(1).strip() if dur else "")


existentes = {f.stem for f in (d / "eventos").glob("*.md")}
esperados = {s for _, slugs in GRUPOS for s in slugs}
if existentes != esperados:
    sys.exit(f"eventos distintos de lo esperado: sobran {existentes - esperados}, faltan {esperados - existentes}")

out = ["# Facilitar", "",
       "Cómo conducir cada evento y conversación: agendas minuto a minuto, frases para facilitar y qué hacer cuando algo se tuerce. Las fichas de la [biblioteca](../biblioteca/index.md) explican qué es cada evento; aquí está cómo llevarlo a la práctica.",
       "",
       "!!! tip \"Si acabas de llegar\"",
       "    En las primeras semanas, facilita los eventos como el equipo los hace hoy y usa estos guiones para observar qué falta. Los cambios se proponen después de la devolución del diagnóstico, como experimentos.",
       ""]
for grupo, slugs in GRUPOS:
    out += [f"## {grupo}", ""]
    for s in slugs:
        titulo, corto, dur = leer(d / "eventos" / f"{s}.md")
        out.append(f"- **[{titulo}](eventos/{s}.md)**" + (f" · {dur}" if dur else "") + "  ")
        out.append(f"  {corto}")
    out.append("")
out += ["## Retrospectivas y preguntas", "",
        "- **[Formatos de retrospectiva](retros/index.md)**  ",
        "  10 formatos con paso a paso, variante remota y una tabla para elegir según la situación del equipo.",
        "- **[Banco de preguntas de coaching](preguntas-de-coaching.md)**  ",
        "  Preguntas abiertas para abrir, profundizar y pasar a la acción, en la Retro, con el PO y con la gerencia.",
        ""]
(d / "index.md").write_text("\n".join(out), encoding="utf-8")

nav = ["  - Facilitar:", "      - facilitar/index.md"]
for grupo, slugs in GRUPOS:
    nav.append(f'      - "{grupo}":')
    for s in slugs:
        titulo, _, _ = leer(d / "eventos" / f"{s}.md")
        nav.append(f'          - "{titulo}": facilitar/eventos/{s}.md')
nav.append("      - Formatos de retrospectiva:")
nav.append("          - facilitar/retros/index.md")
for s in RETROS:
    titulo, _, _ = leer(d / "retros" / f"{s}.md")
    nav.append(f'          - "{titulo}": facilitar/retros/{s}.md')
nav.append("      - Banco de preguntas de coaching: facilitar/preguntas-de-coaching.md")
print("\n".join(nav))
