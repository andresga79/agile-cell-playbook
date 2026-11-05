"""Hook de MkDocs: valida la plantilla de las fichas de la biblioteca.

Valida dos tipos de página:
- Fichas: docs/biblioteca/<área>/<slug>.md (todo menos los index.md y
  ruta-de-estudio.md). Entre 400 y 700 palabras, cabecera con
  "**En una frase:**" y "**Área:** … · **Lectura:** …", H2 exactamente
  iguales a FICHA_SECCIONES y en ese orden, y al menos un año en
  "Para profundizar" (solo fuentes primarias con su año).
- Transversales nuevas (TRANSVERSALES_VALIDADAS): los H2 de
  TRANSVERSAL_SECCIONES deben aparecer en orden; se permiten H2 extra.
- Situaciones "Qué hago si…": docs/situaciones/<slug>.md (todo menos
  index.md). Entre 250 y 500 palabras, cabecera con "**En corto:**" y
  "**Tema:** … · **Lectura:** …", H2 exactamente iguales a
  SITUACION_SECCIONES y en ese orden, y al menos un enlace en "Relacionado".
  El índice (situaciones/index.md) debe enlazar todas las situaciones.
- Guiones de eventos: docs/facilitar/eventos/<slug>.md. Entre 300 y 700
  palabras, cabecera "**En corto:**" y "**Duración:** … · **Participan:** …",
  H2 = GUION_SECCIONES, una tabla en "Agenda" y un enlace en "Relacionado".
- Formatos de retro: docs/facilitar/retros/<slug>.md. Entre 250 y 500
  palabras, cabecera "**En corto:**" y "**Duración:** … · **Ideal para:** …",
  H2 = RETRO_SECCIONES y un enlace en "Relacionado".
  facilitar/index.md debe enlazar todos los guiones y retros/index.md todos
  los formatos.

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
    "fases/transversal-gobierno-proveedores.md",
}

MIN_PALABRAS = 400
MAX_PALABRAS = 700

SITUACION_SECCIONES = (
    "Qué está pasando",
    "Qué hacer",
    "Qué decir",
    "Qué no hacer",
    "Relacionado",
)

SITUACION_MIN_PALABRAS = 250
SITUACION_MAX_PALABRAS = 500

GUION_SECCIONES = ("Antes", "Agenda", "Si algo se tuerce", "Después", "Relacionado")
GUION_MIN_PALABRAS = 300
GUION_MAX_PALABRAS = 700

RETRO_SECCIONES = (
    "Cuándo usarlo",
    "Preparación",
    "Paso a paso",
    "Variante remota",
    "Origen",
    "Relacionado",
)
RETRO_MIN_PALABRAS = 250
RETRO_MAX_PALABRAS = 500

_FENCE_RE = re.compile(r"^\s*(```|~~~)")
_H2_RE = re.compile(r"^##\s+(.+?)\s*#*\s*$")
_WORD_RE = re.compile(r"\w+")
_YEAR_RE = re.compile(r"(19|20)\d\d")
_FRASE_RE = re.compile(r"^\*\*En una frase:\*\*\s*\S", re.MULTILINE)
_AREA_RE = re.compile(r"^\*\*Área:\*\*.+\*\*Lectura:\*\*", re.MULTILINE)
_CORTO_RE = re.compile(r"^\*\*En corto:\*\*\s*\S", re.MULTILINE)
_TEMA_RE = re.compile(r"^\*\*Tema:\*\*.+\*\*Lectura:\*\*", re.MULTILINE)
_DURACION_PARTICIPAN_RE = re.compile(r"^\*\*Duración:\*\*.+\*\*Participan:\*\*", re.MULTILINE)
_DURACION_IDEAL_RE = re.compile(r"^\*\*Duración:\*\*.+\*\*Ideal para:\*\*", re.MULTILINE)
_TABLA_RE = re.compile(r"^\s*\|.+\|\s*$", re.MULTILINE)
_ENLACE_RE = re.compile(r"\]\([^)\s]+\.md(#[^)\s]*)?\)")


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


def _errores_secciones(encontradas, plantilla):
    """H2 exactamente iguales a `plantilla` y en ese orden."""
    errores = []
    for nombre in plantilla:
        if nombre not in encontradas:
            errores.append(f"falta la sección '{nombre}'")
    for nombre in encontradas:
        if nombre not in plantilla:
            errores.append(f"sección no prevista en la plantilla: '{nombre}'")
    previstas = [n for n in encontradas if n in plantilla]
    if previstas != [n for n in plantilla if n in previstas]:
        errores.append("las secciones no siguen el orden de la plantilla")
    return errores


def es_situacion(src_path):
    """True para situaciones/<slug>.md con slug distinto de index."""
    partes = src_path.split("/")
    return (
        len(partes) == 2
        and partes[0] == "situaciones"
        and partes[1].endswith(".md")
        and partes[1] != "index.md"
    )


def validar_situacion(markdown):
    """Errores de una situación "Qué hago si…"; lista vacía si es válida."""
    errores = []

    palabras = contar_palabras(markdown)
    if palabras < SITUACION_MIN_PALABRAS:
        errores.append(f"tiene {palabras} palabras; el mínimo es {SITUACION_MIN_PALABRAS}")
    elif palabras > SITUACION_MAX_PALABRAS:
        errores.append(f"tiene {palabras} palabras; el máximo es {SITUACION_MAX_PALABRAS}")

    if not _CORTO_RE.search(markdown):
        errores.append("falta la línea '**En corto:** …'")
    if not _TEMA_RE.search(markdown):
        errores.append("falta la línea '**Tema:** … · **Lectura:** ~N min'")

    encontradas = _h2(markdown)
    errores += _errores_secciones(encontradas, SITUACION_SECCIONES)

    if "Relacionado" in encontradas and not _ENLACE_RE.search(
        _seccion(markdown, "Relacionado")
    ):
        errores.append("'Relacionado' no enlaza a ninguna página (.md)")

    return errores


def _sin_enlace(markdown, rutas, predicado, base):
    """Rutas que cumplen `predicado` y que el índice en `base` no enlaza."""
    faltan = []
    for ruta in rutas:
        if predicado(ruta):
            relativa = ruta[len(base):]
            if f"]({relativa})" not in markdown and f"]({relativa}#" not in markdown:
                faltan.append(relativa)
    return sorted(faltan)


def situaciones_sin_enlace(markdown, rutas):
    """Situaciones de `rutas` que el índice no enlaza (por nombre de archivo)."""
    return _sin_enlace(markdown, rutas, es_situacion, "situaciones/")


def _es_pagina_de(carpeta):
    def predicado(src_path):
        partes = src_path.split("/")
        return (
            len(partes) == 3
            and partes[0] == "facilitar"
            and partes[1] == carpeta
            and partes[2].endswith(".md")
            and partes[2] != "index.md"
        )
    return predicado


es_guion = _es_pagina_de("eventos")
es_formato_retro = _es_pagina_de("retros")


def _validar_pagina(markdown, minimo, maximo, cabeceras, secciones):
    """Validación común: palabras, líneas de cabecera, H2 y enlace en Relacionado."""
    errores = []
    palabras = contar_palabras(markdown)
    if palabras < minimo:
        errores.append(f"tiene {palabras} palabras; el mínimo es {minimo}")
    elif palabras > maximo:
        errores.append(f"tiene {palabras} palabras; el máximo es {maximo}")
    for patron, texto in cabeceras:
        if not patron.search(markdown):
            errores.append(f"falta la línea '{texto}'")
    encontradas = _h2(markdown)
    errores += _errores_secciones(encontradas, secciones)
    if "Relacionado" in encontradas and not _ENLACE_RE.search(_seccion(markdown, "Relacionado")):
        errores.append("'Relacionado' no enlaza a ninguna página (.md)")
    return errores


def validar_guion(markdown):
    """Errores de un guion de evento; lista vacía si es válido."""
    errores = _validar_pagina(
        markdown, GUION_MIN_PALABRAS, GUION_MAX_PALABRAS,
        [(_CORTO_RE, "**En corto:** …"),
         (_DURACION_PARTICIPAN_RE, "**Duración:** … · **Participan:** …")],
        GUION_SECCIONES,
    )
    if "Agenda" in _h2(markdown) and not _TABLA_RE.search(_seccion(markdown, "Agenda")):
        errores.append("'Agenda' no tiene una tabla minuto a minuto")
    return errores


def validar_formato_retro(markdown):
    """Errores de un formato de retrospectiva; lista vacía si es válido."""
    return _validar_pagina(
        markdown, RETRO_MIN_PALABRAS, RETRO_MAX_PALABRAS,
        [(_CORTO_RE, "**En corto:** …"),
         (_DURACION_IDEAL_RE, "**Duración:** … · **Ideal para:** …")],
        RETRO_SECCIONES,
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
    errores += _errores_secciones(encontradas, FICHA_SECCIONES)

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
    elif es_situacion(ruta):
        errores = validar_situacion(markdown)
    elif ruta in TRANSVERSALES_VALIDADAS:
        errores = validar_transversal(markdown)
    elif es_guion(ruta):
        errores = validar_guion(markdown)
    elif es_formato_retro(ruta):
        errores = validar_formato_retro(markdown)
    elif ruta == "situaciones/index.md":
        faltan = situaciones_sin_enlace(markdown, [f.src_uri for f in files])
        errores = [f"el índice no enlaza: {', '.join(faltan)}"] if faltan else []
    elif ruta == "facilitar/index.md":
        faltan = _sin_enlace(markdown, [f.src_uri for f in files], es_guion, "facilitar/")
        if "](retros/index.md)" not in markdown:
            faltan.append("retros/index.md")
        errores = [f"el índice no enlaza: {', '.join(faltan)}"] if faltan else []
    elif ruta == "facilitar/retros/index.md":
        faltan = _sin_enlace(markdown, [f.src_uri for f in files], es_formato_retro, "facilitar/retros/")
        errores = [f"el índice no enlaza: {', '.join(faltan)}"] if faltan else []
    else:
        return markdown
    if errores:
        raise PluginError(f"fichas: {ruta}: " + "; ".join(errores))
    return markdown
