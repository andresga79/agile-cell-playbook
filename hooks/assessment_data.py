"""Hook de MkDocs: genera assets/data/assessment.json a partir del assessment.

Fuente única de las preguntas: docs/caja-de-herramientas/assessment-madurez.md
- Tablas de la sección "## Cuestionario" (columnas ID | Pregunta | ...),
  agrupadas bajo encabezados "### N · Dimensión".
- Tabla "### De dimensión a fase" para las fases a reforzar.

La calculadora (docs/assets/js/assessment.js) lee el JSON generado.
El build falla con un mensaje claro si el cuestionario no tiene
6 dimensiones y 30 preguntas, o si falta una fase para alguna dimensión.
"""

import json
import os
import posixpath
import re

from mkdocs.exceptions import PluginError

SOURCE = "caja-de-herramientas/assessment-madurez.md"
OUTPUT = "assets/data/assessment.json"
EXPECTED_DIMENSIONS = 6
EXPECTED_QUESTIONS = 30

_ID_RE = re.compile(r"^([A-Z]{2})(\d+)$")
_DIM_HEADING_RE = re.compile(r"^###\s+\d+\s*·\s*(.+?)\s*$")
_LINK_RE = re.compile(r"\[([^\]]+)\]\(([^)\s]+)\)")

_data = None


def _fail(msg):
    raise PluginError(f"assessment_data: {msg} (fuente: docs/{SOURCE})")


def _cells(line):
    """Celdas de una fila de tabla Markdown, sin los bordes."""
    body = line.strip()
    if body.startswith("|"):
        body = body[1:]
    if body.endswith("|"):
        body = body[:-1]
    return [c.strip() for c in body.split("|")]


def _plain(text):
    """Quita enlaces y énfasis de Markdown."""
    text = _LINK_RE.sub(lambda m: m.group(1), text)
    text = re.sub(r"(\*\*|\*|__|_|`)", "", text)
    return re.sub(r"\s+", " ", text).strip()


def _page_url(md_path, use_directory_urls):
    """Ruta relativa a la raíz del sitio para un .md (sin barra inicial)."""
    if md_path == "index.md" or md_path.endswith("/index.md"):
        return md_path[: -len("index.md")]
    base = md_path[:-3]
    return base + "/" if use_directory_urls else base + ".html"


def _parse(text, docs_dir, use_directory_urls):
    lines = text.splitlines()
    dimensions = []
    in_questionnaire = False
    current = None

    for line in lines:
        if line.startswith("## "):
            in_questionnaire = line.strip() == "## Cuestionario"
            current = None
            continue
        if not in_questionnaire:
            continue
        heading = _DIM_HEADING_RE.match(line)
        if heading:
            current = {"id": None, "name": heading.group(1), "phases": None,
                       "phaseLinks": [], "questions": []}
            dimensions.append(current)
            continue
        if current is None or not line.lstrip().startswith("|"):
            continue
        cells = _cells(line)
        if len(cells) < 2:
            continue
        match = _ID_RE.match(cells[0])
        if not match:
            continue  # encabezado o separador
        prefix = match.group(1)
        if current["id"] is None:
            current["id"] = prefix
        elif current["id"] != prefix:
            _fail(f"la pregunta {cells[0]} está bajo '{current['name']}', "
                  f"cuyas preguntas usan el prefijo {current['id']}")
        current["questions"].append({"id": cells[0], "text": _plain(cells[1])})

    dimensions = [d for d in dimensions if d["questions"]]
    questions = [q["id"] for d in dimensions for q in d["questions"]]

    if len(dimensions) != EXPECTED_DIMENSIONS:
        _fail(f"se esperaban {EXPECTED_DIMENSIONS} dimensiones con preguntas en "
              f"'## Cuestionario' y se encontraron {len(dimensions)}")
    if len(questions) != EXPECTED_QUESTIONS:
        _fail(f"se esperaban {EXPECTED_QUESTIONS} preguntas (filas con ID tipo PR1) "
              f"y se encontraron {len(questions)}")
    if len(set(questions)) != len(questions):
        dupes = sorted({q for q in questions if questions.count(q) > 1})
        _fail(f"IDs de pregunta repetidos: {', '.join(dupes)}")
    if len({d["id"] for d in dimensions}) != len(dimensions):
        _fail("dos dimensiones usan el mismo prefijo de ID")

    # Tabla "De dimensión a fase"
    phases = {}
    in_phase_table = False
    for line in lines:
        if line.startswith("#"):
            in_phase_table = line.strip() == "### De dimensión a fase"
            continue
        if not in_phase_table or not line.lstrip().startswith("|"):
            continue
        cells = _cells(line)
        if len(cells) < 2 or cells[0] in ("Dimensión", "") or set(cells[0]) <= set("-: "):
            continue
        phases[cells[0]] = cells[1]

    source_dir = posixpath.dirname(SOURCE)
    for dim in dimensions:
        raw = phases.get(dim["name"])
        if not raw:
            _fail(f"la dimensión '{dim['name']}' no aparece en la tabla "
                  "'### De dimensión a fase'")
        dim["phases"] = _plain(raw)
        for label, href in _LINK_RE.findall(raw):
            path, _, anchor = href.partition("#")
            target = posixpath.normpath(posixpath.join(source_dir, path))
            if not os.path.isfile(os.path.join(docs_dir, target)):
                _fail(f"el enlace '{href}' de la dimensión '{dim['name']}' "
                      "no apunta a un archivo existente")
            url = _page_url(target, use_directory_urls) + (f"#{anchor}" if anchor else "")
            dim["phaseLinks"].append({"text": _plain(label), "url": url})

    return {
        "source": SOURCE,
        "dimensions": dimensions,
    }


def on_pre_build(config, **kwargs):
    global _data
    path = os.path.join(config["docs_dir"], SOURCE)
    if not os.path.isfile(path):
        _fail("no se encontró el archivo")
    with open(path, encoding="utf-8") as fh:
        text = fh.read()
    _data = _parse(text, config["docs_dir"], config["use_directory_urls"])


def on_post_build(config, **kwargs):
    if _data is None:
        _fail("no se generaron datos en on_pre_build")
    out = os.path.join(config["site_dir"], OUTPUT)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w", encoding="utf-8") as fh:
        json.dump(_data, fh, ensure_ascii=False, indent=1)
