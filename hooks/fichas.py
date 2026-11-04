"""Hook de MkDocs: valida la plantilla de las fichas de la biblioteca.

Valida dos tipos de página:
- Fichas: docs/biblioteca/<área>/<slug>.md (todo menos los index.md y
  ruta-de-estudio.md). Entre 400 y 700 palabras, cabecera con
  "**En una frase:**" y "**Área:** … · **Lectura:** …", H2 exactamente
  iguales a FICHA_SECCIONES y en ese orden, y al menos un año en
  "Para profundizar" (solo fuentes primarias con su año).
- Transversales nuevas (TRANSVERSALES_VALIDADAS): los H2 de
  TRANSVERSAL_SECCIONES deben aparecer en orden; se permiten H2 extra.

Así la plantilla no se degrada a medida que crece la biblioteca.
El build falla con un mensaje claro que indica la página y los errores.
"""

import re

from mkdocs.exceptions import PluginError

FICHA_SECCIONES = (
    "Qué es",
    "Para qué sirve (y cuándo no)",
    "Cómo se aplica",
    "Errores típicos",
    "Qué observar al llegar a un equipo",
    "Relacionado",
    "Para profundizar",
)

TRANSVERSAL_SECCIONES = (
    "Objetivo de negocio",
    "Entradas",
    "Actividades",
    "Artefactos",
    "Métricas",
    "Roles",
    "Criterios de salida",
    "Antipatrones",
)

TRANSVERSALES_VALIDADAS = {
    "fases/transversal-llegar-equipo-nuevo.md",
    "fases/transversal-scrumban-paso-a-paso.md",
}

MIN_PALABRAS = 400
MAX_PALABRAS = 700

_FENCE_RE = re.compile(r"^\s*(```|~~~)")
_H2_RE = re.compile(r"^##\s+(.+?)\s*#*\s*$")
_WORD_RE = re.compile(r"\w+")
_YEAR_RE = re.compile(r"(19|20)\d\d")
_FRASE_RE = re.compile(r"^\*\*En una frase:\*\*\s*\S", re.MULTILINE)
_AREA_RE = re.compile(r"^\*\*Área:\*\*.+\*\*Lectura:\*\*", re.MULTILINE)


def _sin_codigo(markdown):
    """Líneas del Markdown fuera de bloques de código cercados."""
    dentro = False
    for linea in markdown.splitlines():
        if _FENCE_RE.match(linea):
            dentro = not dentro
            continue
        if not dentro:
            yield linea


def contar_palabras(markdown):
    """Cuenta tokens \\w+ (Unicode) sin los bloques de código cercados."""
    return len(_WORD_RE.findall("\n".join(_sin_codigo(markdown))))


def _h2(markdown):
    return [m.group(1) for m in map(_H2_RE.match, _sin_codigo(markdown)) if m]


def _seccion(markdown, nombre):
    """Texto de la sección H2 `nombre` (hasta el siguiente H2)."""
    cuerpo, activa = [], False
    for linea in _sin_codigo(markdown):
        m = _H2_RE.match(linea)
        if m:
            activa = m.group(1) == nombre
        elif activa:
            cuerpo.append(linea)
    return "\n".join(cuerpo)


def es_ficha(src_path):
    """True para biblioteca/<área>/<slug>.md con slug distinto de index."""
    partes = src_path.split("/")
    return (
        len(partes) == 3
        and partes[0] == "biblioteca"
        and partes[2].endswith(".md")
        and partes[2] != "index.md"
    )


def validar_ficha(markdown):
    """Errores de la ficha en español; lista vacía si es válida."""
    errores = []

    palabras = contar_palabras(markdown)
    if palabras < MIN_PALABRAS:
        errores.append(f"tiene {palabras} palabras; el mínimo es {MIN_PALABRAS}")
    elif palabras > MAX_PALABRAS:
        errores.append(f"tiene {palabras} palabras; el máximo es {MAX_PALABRAS}")

    if not _FRASE_RE.search(markdown):
        errores.append("falta la línea '**En una frase:** …'")
    if not _AREA_RE.search(markdown):
        errores.append("falta la línea '**Área:** … · **Lectura:** ~N min'")

    encontradas = _h2(markdown)
    for nombre in FICHA_SECCIONES:
        if nombre not in encontradas:
            errores.append(f"falta la sección '{nombre}'")
    for nombre in encontradas:
        if nombre not in FICHA_SECCIONES:
            errores.append(f"sección no prevista en la plantilla: '{nombre}'")
    previstas = [n for n in encontradas if n in FICHA_SECCIONES]
    if previstas != [n for n in FICHA_SECCIONES if n in previstas]:
        errores.append("las secciones no siguen el orden de la plantilla")

    if "Para profundizar" in encontradas and not _YEAR_RE.search(
        _seccion(markdown, "Para profundizar")
    ):
        errores.append("'Para profundizar' no indica el año de ninguna fuente")

    return errores


def validar_transversal(markdown):
    """Errores de una transversal; los H2 extra están permitidos."""
    errores = []
    encontradas = _h2(markdown)
    for nombre in TRANSVERSAL_SECCIONES:
        if nombre not in encontradas:
            errores.append(f"falta la sección '{nombre}'")
    previstas = [n for n in encontradas if n in TRANSVERSAL_SECCIONES]
    if previstas != [n for n in TRANSVERSAL_SECCIONES if n in previstas]:
        errores.append("las secciones no siguen el orden de la plantilla")
    return errores


def on_page_markdown(markdown, page, config, files):
    ruta = page.file.src_uri
    if es_ficha(ruta):
        errores = validar_ficha(markdown)
    elif ruta in TRANSVERSALES_VALIDADAS:
        errores = validar_transversal(markdown)
    else:
        return markdown
    if errores:
        raise PluginError(f"fichas: {ruta}: " + "; ".join(errores))
    return markdown
