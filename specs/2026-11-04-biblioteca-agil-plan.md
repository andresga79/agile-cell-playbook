# Biblioteca ágil · Plan de implementación

> **Para agentes:** SUB-SKILL REQUERIDO: usar superpowers:subagent-driven-development (recomendado) o superpowers:executing-plans para implementar este plan tarea por tarea. Los pasos usan checkboxes (`- [ ]`) para el seguimiento.

**Objetivo:** agregar al playbook una biblioteca de fichas de consulta rápida (Scrum, Kanban, métricas de flujo, Scrumban y temas complementarios) con su ruta de estudio, y dos capítulos transversales nuevos: llegar a un equipo nuevo y la escalera de Scrumban.

**Arquitectura:** las páginas Markdown nuevas viven en `docs/biblioteca/<área>/` y en `docs/fases/`. Un hook nuevo de MkDocs (`hooks/fichas.py`) valida en cada build la plantilla de las fichas y de las transversales nuevas, y hace que el build falle si no se cumplen. Se publica directo a `main` por áreas; cada área es una tarea que pasa `mkdocs build --strict` antes del push.

**Stack:** MkDocs 1.6.1, Material 9.5.39, Python 3.12 (con `unittest` de la librería estándar para probar el hook) y Mermaid.

**Spec:** `specs/2026-11-04-biblioteca-agil-design.md`. Quien ejecute el plan lee el spec y este plan.

## Restricciones globales

- Sin dependencias nuevas en `requirements.txt`.
- Todo push a `main` pasa antes `mkdocs build --strict` sin WARNING ni ERROR (desde `.venv`).
- Ficha: entre **400 y 700 palabras**. Encabezados H2 exactos y en este orden: `Qué es`, `Para qué sirve (y cuándo no)`, `Cómo se aplica`, `Errores típicos`, `Qué observar al llegar a un equipo`, `Relacionado`, `Para profundizar`.
- Cabecera de ficha: una línea `**En una frase:** …` y una línea `**Área:** … · **Lectura:** ~N min`.
- "Para profundizar": solo fuentes primarias, con su año. Si un dato no se puede verificar, no se pone.
- Métricas: se conserva el vocabulario del playbook (lead time y cycle time según el Kanban Method). Cuando se cite la Kanban Guide, se aclara la equivalencia (spec §4.5).
- Las transversales nuevas usan los 8 H2 de la plantilla, en orden: `Objetivo de negocio`, `Entradas`, `Actividades`, `Artefactos`, `Métricas`, `Roles`, `Criterios de salida`, `Antipatrones`. Se permiten H2 extra entre ellos.
- Tono: español neutro con tuteo. Sin datos personales del mantenedor.
- Nunca se enlaza a una página que todavía no existe. Los enlaces hacia áreas posteriores se agregan cuando esa área se publica.
- Cada publicación parcial se registra en `## [Sin publicar]` de `docs/changelog.md`.
- Si al terminar la Tarea 4 no hay tiempo para cerrar la Entrega 2 antes del 2026-11-13, se mueven a la Entrega 3, en este orden: `flight-levels`, `kmm` y `escalamiento`. Al moverlas se quitan del nav y del índice de su área.
- Commits con la línea `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.

## Puntos de atención en la revisión

1. **Enlaces entre áreas publicadas en distinto momento:** una ficha de Scrum que enlace a Kanban antes de que Kanban exista rompe el build estricto. Cada tarea de área termina con un paso que agrega los enlaces de vuelta a las fichas anteriores.
2. **Fuentes inventadas o con año incorrecto**, en un sitio público sin revisión humana previa. Cada tarea de área incluye un paso de verificación contra la fuente oficial, y quien revise la tarea comprueba las fuentes de una muestra de fichas.
3. **Lectura en el iPhone:** tablas anchas o Mermaid grandes que obligan a hacer zoom. Regla: tablas de 4 columnas como máximo y diagramas de 8 nodos como máximo. Quien revise mira cada área en un viewport de 390 px.
4. **Siglas en pantalla táctil:** sin `content.tooltips`, `abbr` no se ve en el móvil. La Tarea 2 lo aplica, y cada sigla nueva va a `includes/abreviaturas.md`.
5. **Versiones archivadas:** los tags antiguos no tienen `hooks/fichas.py` ni `docs/biblioteca/`. El hook solo se registra en el `mkdocs.yml` del árbol actual, así que no afecta a esas versiones. Hay que verificar que el deploy de la Tarea 2 siga archivando de 0.1.0 a 0.4.0 sin error.

---

## Mapa de archivos

```
hooks/fichas.py                         Validación de fichas y transversales nuevas (Tarea 1)
tests/test_fichas.py                    Pruebas unittest del hook (Tarea 1)
docs/biblioteca/index.md                Portada de la biblioteca (Tarea 2)
docs/biblioteca/ruta-de-estudio.md      Sesiones de estudio; crece por área (Tareas 2 a 6 y 7)
docs/biblioteca/scrum/…                 Tarea 3
docs/biblioteca/kanban/…                Tarea 4
docs/biblioteca/flujo/…                 Tarea 5
docs/biblioteca/scrumban/…              Tarea 6
docs/caja-de-herramientas/diario-observacion.md     Tarea 7
docs/fases/transversal-llegar-equipo-nuevo.md       Tarea 7
docs/fases/transversal-scrumban-paso-a-paso.md      Tarea 8
docs/biblioteca/{lean,ingenieria,producto,personas,facilitacion}/…  Tareas 9 a 13
Modificados: mkdocs.yml, docs/changelog.md, docs/versiones.md, docs/glosario.md,
             includes/abreviaturas.md, docs/fases/00, 03 y 05, docs/como-usar.md,
             docs/caja-de-herramientas/assessment-madurez.md, docs/caja-de-herramientas/index.md,
             docs/casos/tomar-celula.md
```

**Slugs fijos** (los enlaces entre tareas dependen de ellos):

| Área | Archivos (además de `index.md`) |
|---|---|
| `scrum/` | `scrum-en-una-pagina` · `accountabilities` · `sprint-y-planning` · `daily-scrum` · `sprint-review` · `retrospectiva` · `artefactos-y-compromisos` · `refinamiento` · `antipatrones-scrum` · `ebm` · `escalamiento` |
| `kanban/` | `kanban-en-una-pagina` · `kanban-method` · `visualizar` · `wip-y-pull` · `politicas-explicitas` · `clases-de-servicio` · `cadencias-kanban` · `statik` · `kmm` · `flight-levels` |
| `flujo/` | `metricas-y-vocabularios` · `ley-de-little` · `work-item-age` · `cfd` · `scatterplot-sle` · `pronostico-probabilistico` |
| `scrumban/` | `que-es-scrumban` · `cuando-scrumban` · `cadencia-y-flujo` · `antipatrones-scrumban` |
| `lean/` | `lean-en-una-pagina` · `desperdicios` · `principios-de-flujo` · `pensamiento-sistemico` |
| `ingenieria/` | `xp` · `bdd` · `trunk-based` · `dora` · `space` |
| `producto/` | `continuous-discovery` · `okrs` · `impact-mapping` · `jtbd` · `shape-up` |
| `personas/` | `team-topologies` · `seguridad-psicologica` · `desarrollo-de-equipos` · `management-30` · `posturas-de-coaching` · `agile-fluency` |
| `facilitacion/` | `liberating-structures` · `cynefin` · `kotter-adkar` · `resistencia-al-cambio` |

**Patrón de cada `index.md` de área:** un H1 con el nombre del área, un párrafo de 2 a 3 líneas y una tabla `| Ficha | En una frase |` con un enlace por ficha. No se valida como ficha.

**Patrón de una sesión en `ruta-de-estudio.md`:**

```markdown
### Sesión N · <Título> (~25 min)

**Lee:** [Ficha A](scrum/x.md) · [Ficha B](scrum/y.md)
**Pregúntate:** <una pregunta de autoevaluación>
**Ejercicio:** <una tarea corta aplicada a un equipo imaginario o a uno anterior>
```

---

## Entrega 1 · Núcleo (0.5.0)

### Tarea 1: hook de validación de fichas

**Archivos:**
- Crear: `hooks/fichas.py`
- Crear: `tests/test_fichas.py`
- Modificar: `mkdocs.yml` (`hooks:` agrega `- hooks/fichas.py`)

**Interfaces que produce** (en `hooks/fichas.py`):
- `FICHA_SECCIONES: tuple[str, ...]`: los 7 H2 de las restricciones globales.
- `TRANSVERSAL_SECCIONES: tuple[str, ...]`: los 8 H2 de la plantilla.
- `TRANSVERSALES_VALIDADAS = {"fases/transversal-llegar-equipo-nuevo.md", "fases/transversal-scrumban-paso-a-paso.md"}`.
- `contar_palabras(markdown: str) -> int`: cuenta tokens `\w+` (Unicode) y excluye los bloques de código cercados (```` ``` ````), incluidos los de Mermaid.
- `es_ficha(src_path: str) -> bool`: es `True` para `biblioteca/<área>/<slug>.md` con `slug != "index"`. Es `False` para `biblioteca/index.md`, `biblioteca/ruta-de-estudio.md` y cualquier `index.md`.
- `validar_ficha(markdown: str) -> list[str]`: devuelve los errores en español (lista vacía si la ficha es válida).
- `validar_transversal(markdown: str) -> list[str]`.
- `on_page_markdown(markdown, page, config, files)`: si `es_ficha(page.file.src_uri)` o la ruta está en `TRANSVERSALES_VALIDADAS` y hay errores, lanza `PluginError(f"fichas: {ruta}: " + "; ".join(errores))`. Si no, devuelve `markdown` sin cambios.

- [ ] **Paso 1: escribir las pruebas que deben fallar** en `tests/test_fichas.py` (`unittest`; agrega `hooks/` a `sys.path`). Usa un helper `ficha(palabras=500, secciones=FICHA_SECCIONES, frase=True, area=True, anio=True)` que arma un Markdown de prueba.
  - `test_ficha_valida_sin_errores`: `validar_ficha(ficha()) == []`.
  - `test_ficha_corta`: con `palabras=300`, algún error contiene `"400"`.
  - `test_ficha_larga`: con `palabras=800`, algún error contiene `"700"`.
  - `test_ficha_sin_frase`: con `frase=False`, algún error contiene `"En una frase"`.
  - `test_ficha_sin_area_lectura`: con `area=False`, algún error contiene `"Área"`.
  - `test_ficha_seccion_faltante`: sin `"Errores típicos"`, algún error contiene `"Errores típicos"`.
  - `test_ficha_orden_incorrecto`: con dos secciones intercambiadas, algún error contiene `"orden"`.
  - `test_ficha_seccion_extra`: con un H2 `"Extra"` agregado, algún error contiene `"Extra"`.
  - `test_ficha_sin_anio_en_fuentes`: "Para profundizar" sin ningún año `(19|20)\d\d`, algún error contiene `"año"`.
  - `test_contar_palabras_ignora_codigo`: `contar_palabras("uno dos\n```mermaid\na b c d\n```\ntres") == 3`.
  - `test_es_ficha`: `"biblioteca/scrum/daily-scrum.md"` da `True`; `"biblioteca/scrum/index.md"`, `"biblioteca/index.md"`, `"biblioteca/ruta-de-estudio.md"` y `"fases/03-sistema-de-trabajo.md"` dan `False`.
  - `test_transversal_valida_con_h2_extra`: los 8 H2 en orden, más `"Puertas de entrada"` entre `Actividades` y `Artefactos`, da `[]`.
  - `test_transversal_falta_seccion`: sin `"Roles"`, algún error contiene `"Roles"`.

- [ ] **Paso 2: correr las pruebas y confirmar que fallan**
  Comando: `.venv/bin/python -m unittest discover -s tests -v`
  Esperado: ERROR `ModuleNotFoundError: No module named 'fichas'`.

- [ ] **Paso 3: implementar `hooks/fichas.py`** con las interfaces de arriba. Docstring del módulo al estilo de `hooks/assessment_data.py`: qué valida y por qué. En la ficha los H2 deben ser **exactamente** `FICHA_SECCIONES`. En la transversal, `TRANSVERSAL_SECCIONES` debe aparecer como subsecuencia en orden.

- [ ] **Paso 4: correr las pruebas y confirmar que pasan**
  Comando: `.venv/bin/python -m unittest discover -s tests -v`. Esperado: `OK` (13 pruebas).

- [ ] **Paso 5: registrar el hook y comprobar el build**
  Agregar `- hooks/fichas.py` en `hooks:` de `mkdocs.yml`.
  Comando: `.venv/bin/mkdocs build --strict`. Esperado: termina sin WARNING (todavía no hay fichas).

- [ ] **Paso 6: commit**
  `git add hooks/fichas.py tests/test_fichas.py mkdocs.yml && git commit -m "Hook que valida la plantilla de las fichas de la biblioteca"`

### Tarea 2: estructura de la biblioteca, S1 y P6

**Archivos:**
- Crear: `docs/biblioteca/index.md`, `docs/biblioteca/ruta-de-estudio.md`
- Modificar: `mkdocs.yml` (`theme.features` + `nav`), `docs/changelog.md`

**Interfaces que produce:** la entrada `Biblioteca` en `nav`, que las tareas siguientes amplían, y la sección `## [Sin publicar]` del changelog.

- [ ] **Paso 1: S1.** Agregar `- content.tooltips` a `theme.features` en `mkdocs.yml`.
- [ ] **Paso 2: portada `docs/biblioteca/index.md`.** Incluye:
  - Para qué sirve: consulta en 2 o 3 minutos.
  - Cómo leer una ficha: una tabla con las 7 secciones y una línea por cada una.
  - Una tabla de áreas que crece por tarea. Por ahora solo menciona las áreas en texto, sin enlaces.
  - Un enlace a `ruta-de-estudio.md`.
  - Un admonition `note` que explica que las fichas complementan las fases y no las reemplazan.
- [ ] **Paso 3: `ruta-de-estudio.md`.** Contiene una introducción (10 sesiones de ~25 min, pensadas para el teléfono, en orden Scrum → Kanban → Flujo → Scrumban) y la tabla `| Sesión | Tema |` con las 10 filas en texto plano. Las sesiones con detalle se agregan en las tareas de cada área.
- [ ] **Paso 4: nav.** Agregar en `mkdocs.yml`, entre "Caja de herramientas" y "Casos de ejemplo":
  ```yaml
    - Biblioteca:
        - biblioteca/index.md
        - Ruta de estudio: biblioteca/ruta-de-estudio.md
  ```
- [ ] **Paso 5: P6.** Agregar en `docs/changelog.md`, sobre `## [0.4.0]`:
  - El bloque `## [Sin publicar]` con `### Agregado`, que dice "Biblioteca: portada y ruta de estudio. Tooltips de siglas en pantallas táctiles".
  - Una línea en la introducción del changelog: lo publicado después del último tag aparece en `[Sin publicar]`.
- [ ] **Paso 6: verificar.** Comandos: `.venv/bin/python -m unittest discover -s tests` → `OK`; `.venv/bin/mkdocs build --strict` → sin WARNING. Con `mkdocs serve`, revisar en un viewport de 390 px que la pestaña Biblioteca aparezca en el menú.
- [ ] **Paso 7: commit y push.** Hacer `git add` de los archivos, `git commit -m "Biblioteca: estructura, ruta de estudio y tooltips en móvil"` y `git push`. Después, `gh run watch` → éxito. Confirmar en el log de "Publicar guía" que se archivaron v0.1.0 a v0.4.0 (punto de atención 5).

### Tarea 3: área Scrum (11 fichas)

**Archivos:**
- Crear: `docs/biblioteca/scrum/index.md` y las 11 fichas de la tabla de slugs.
- Modificar: `mkdocs.yml` (nav), `docs/biblioteca/index.md`, `docs/biblioteca/ruta-de-estudio.md` (sesiones 1 a 3), `docs/glosario.md`, `includes/abreviaturas.md`, `docs/changelog.md`.

**Usa:** `hooks/fichas.py` (Tarea 1) y la entrada Biblioteca del nav (Tarea 2).

**Contenido que debe estar** (además de la plantilla):
- `scrum-en-una-pagina`: empirismo (transparencia, inspección y adaptación), los 5 valores y el marco 3-5-3 en una tabla.
- `accountabilities`: PO, SM y Developers, con lo que cambió en la Scrum Guide 2020 (de roles a accountabilities y un solo equipo). Incluye las posturas del SM con su fuente, verificando si hoy se atribuyen a Scrum.org.
- `sprint-y-planning`: las 3 preguntas de la Planning (por qué, qué y cómo) y el timebox.
- `artefactos-y-compromisos`: el par artefacto ↔ compromiso (Product Backlog ↔ Product Goal, Sprint Backlog ↔ Sprint Goal, Increment ↔ DoD). Enlaza a `../../caja-de-herramientas/dor-dod.md`.
- `refinamiento`: es una actividad continua, no un evento.
- `antipatrones-scrum`: una tabla por accountability y evento.
- `ebm`: las 4 áreas clave de valor (Current Value, Unrealized Value, Time-to-Market y Ability to Innovate).
- `escalamiento`: Nexus, LeSS y SAFe en una tabla de 4 columnas como máximo, con la crítica de que conviene "descalar antes de escalar". Enlaza a `../../caja-de-herramientas/tablero-dependencias.md`.

- [ ] **Paso 1: verificar las fuentes.** Con WebFetch, confirmar en scrumguides.org la versión vigente de la Scrum Guide y su año, y en scrum.org la versión vigente de la guía de EBM. Anotar la versión y el año exactos para usarlos en "Para profundizar".
- [ ] **Paso 2: escribir las 11 fichas.** Solo enlazan a páginas existentes: otras fichas de Scrum, fases y herramientas.
- [ ] **Paso 3: escribir `scrum/index.md`** con el patrón de índice de área.
- [ ] **Paso 4: escribir las sesiones 1 a 3 de la ruta** con el patrón de sesión: fundamentos y accountabilities; eventos; compromisos, EBM y escalamiento.
- [ ] **Paso 5: actualizar glosario y siglas.** Términos nuevos en el glosario (Product Goal, Sprint Goal, Increment, Evidence-Based Management y los que falten) y siglas en `includes/abreviaturas.md` (EBM, SM, LeSS, SAFe). En la portada de la biblioteca, convertir el área Scrum en enlace.
- [ ] **Paso 6: nav.** Bajo Biblioteca, agregar el grupo `Scrum:` con `biblioteca/scrum/index.md` y las 11 fichas con sus títulos.
- [ ] **Paso 7: changelog.** En `[Sin publicar]`, agregar "Biblioteca · Scrum: 11 fichas" y las sesiones 1 a 3.
- [ ] **Paso 8: verificar.** Comando: `.venv/bin/mkdocs build --strict` → sin WARNING. El hook no reporta errores. Revisar 3 fichas en un viewport de 390 px.
- [ ] **Paso 9: commit y push.** Hacer `git commit -m "Biblioteca: área Scrum"` y `git push`. Después, `gh run watch` → éxito. Comprobar que `https://andresga79.github.io/agile-cell-playbook/biblioteca/scrum/` responde 200.

### Tarea 4: área Kanban (10 fichas)

Misma estructura de pasos que la Tarea 3. Lo que cambia es esto:

**Archivos:** `docs/biblioteca/kanban/` (índice y 10 fichas), las sesiones 4 a 6, y además la Fase 3.

**Contenido que debe estar:**
- `kanban-en-una-pagina`: una tabla de 3 columnas que compara la Kanban Guide (Vacanti y Coleman) con el Kanban Method (Anderson).
- `kanban-method`: los principios de gestión del cambio y de prestación de servicio, y las 6 prácticas generales.
- `visualizar`: los puntos de compromiso y de entrega.
- `politicas-explicitas`: solo concepto. La plantilla vive en `../../caja-de-herramientas/politicas-tablero.md` y se enlaza, no se copia.
- `clases-de-servicio`: los 4 perfiles. Enlaza a `../../caja-de-herramientas/cost-of-delay-wsjf.md`.
- `cadencias-kanban`: las 7 cadencias. Enlaza a `../../caja-de-herramientas/calendario-cadencias.md`.
- `statik`: los pasos de STATIK.
- `kmm`: los niveles del KMM.
- `flight-levels`: los 3 niveles.

- [ ] **Paso 1: verificar las fuentes.** Con WebFetch, confirmar en kanbanguides.org la versión y el año vigentes de la Kanban Guide, y en kanban.university las prácticas y los principios del Kanban Method, los niveles del KMM y los pasos de STATIK. Confirmar los niveles de Flight Levels en flightlevels.io.
- [ ] **Pasos 2 a 7:** igual que en la Tarea 3: fichas, índice, sesiones 4 a 6, glosario y siglas (STATIK, KMM), nav y changelog. **Agregado:**
  - En la Fase 3 §3.3, enlazar "Límites de WIP" a `../biblioteca/kanban/wip-y-pull.md` y "Clases de servicio" a `../biblioteca/kanban/clases-de-servicio.md`.
  - En la Fase 3 §3.5, enlazar las cadencias a `../biblioteca/kanban/cadencias-kanban.md`.
  - En las fichas de Scrum que mencionan WIP o flujo, agregar en "Relacionado" el enlace a la ficha de Kanban (enlaces de vuelta, punto de atención 1).
- [ ] **Pasos 8 y 9:** igual que en la Tarea 3, con el commit `"Biblioteca: área Kanban"`.

### Tarea 5: área Métricas de flujo (6 fichas)

Misma estructura de pasos que la Tarea 3.

**Archivos:** `docs/biblioteca/flujo/` (índice y 6 fichas), las sesiones 7 y 8, y además la Fase 5, `catalogo-metricas.md` y el glosario.

**Contenido que debe estar:**
- `metricas-y-vocabularios`: una tabla de equivalencias de 3 columnas (Concepto, Kanban Method/playbook, Kanban Guide), con las filas WIP, throughput, lead time ↔ cycle time (Guide), cycle time (Method), work item age y SLE. Se basa en el spec §4.5.
- `ley-de-little`: la fórmula `CT promedio = WIP promedio / TH promedio` y sus supuestos (sistema estable, mismas unidades y trabajo que entra y sale), según Vacanti.
- `work-item-age`: es un indicador adelantado, a diferencia del cycle time, que llega tarde.
- `scatterplot-sle`: los percentiles 50, 85 y 95. Cómo se construye una SLE (por ejemplo, "85 % en 12 días o menos").
- `pronostico-probabilistico`: solo el concepto. Enlaza a `../../caja-de-herramientas/pronostico-monte-carlo.md`.

- [ ] **Paso 1: verificar las fuentes:** *Actionable Agile Metrics for Predictability* (Vacanti, edición y año) y el texto de la Kanban Guide sobre las métricas.
- [ ] **Pasos 2 a 7:** igual que en la Tarea 3, con las sesiones 7 y 8. **Agregado:**
  - En la Fase 5 §5.1 y §5.4, enlazar a `../biblioteca/flujo/metricas-y-vocabularios.md` y a `../biblioteca/flujo/pronostico-probabilistico.md`.
  - En `catalogo-metricas.md`, un admonition `tip` con un enlace a la ficha de vocabularios.
  - En el glosario, en "Cycle time" y "Lead time", agregar una segunda línea: "En la Kanban Guide, *cycle time* abarca desde el punto de compromiso hasta terminado; ver [Métricas y vocabularios](biblioteca/flujo/metricas-y-vocabularios.md)."
  - Enlaces de vuelta desde las fichas de Kanban.
- [ ] **Pasos 8 y 9:** igual que en la Tarea 3, con el commit `"Biblioteca: área Métricas de flujo"`.

### Tarea 6: área Scrumban (4 fichas) y cierre de 0.5.0

Misma estructura de pasos que la Tarea 3, con un cierre de versión al final.

**Archivos:** `docs/biblioteca/scrumban/` (índice y 4 fichas), la sesión 9, la Fase 3 §3.2, `docs/versiones.md` y el changelog.

**Contenido que debe estar:**
- `que-es-scrumban`: el origen en Corey Ladas (*Scrumban: Essays on Kanban Systems for Lean Software Development*, 2008; verificar el año) y la diferencia entre "Scrumban como transición" y "Scrumban como destino".
- `cuando-scrumban`: aplica los umbrales de la Fase 3 §3.2 (<20 %, 20 % a 50 % y >50 %) y enlaza a `../../fases/03-sistema-de-trabajo.md#32-elegir-el-marco-segun-la-demanda`. Antes de escribir el ancla, verificarla en el HTML que genera el build.
- `cadencia-y-flujo`: Sprint Goal con WIP, planificación por umbral (*on-demand planning*) y la Kanban Guide for Scrum Teams (verificar el año en scrum.org).
- `antipatrones-scrumban`: incluye "Scrum sin compromiso con un tablero" y "Kanban sin límites de WIP".

- [ ] **Paso 1: verificar las fuentes** (Ladas y la Kanban Guide for Scrum Teams).
- [ ] **Pasos 2 a 7:** igual que en la Tarea 3, con la sesión 9. **Agregado:**
  - En la Fase 3 §3.2, después del diagrama, agregar la línea: "Para entender cada opción, ver [Cuándo Scrumban](../biblioteca/scrumban/cuando-scrumban.md)."
  - Enlaces de vuelta desde Scrum (sprint-y-planning), Kanban (cadencias-kanban) y Flujo (scrumban).
- [ ] **Pasos 8 y 9:** igual que en la Tarea 3, con el commit `"Biblioteca: área Scrumban"`.
- [ ] **Paso 10: cerrar la 0.5.0.**
  - En el changelog, renombrar `[Sin publicar]` a `## [0.5.0] · <fecha de hoy>` y dejar un `## [Sin publicar]` vacío encima.
  - En `docs/versiones.md`, agregar la fila 0.5.0 como "Versión actual" con la novedad "Biblioteca: Scrum, Kanban, métricas de flujo y Scrumban", y pasar la 0.4.0 a "[Archivada](…/versiones/v0.4.0/)".
  - Correr `mkdocs build --strict`, hacer commit `"v0.5.0: biblioteca núcleo"` y push.
  - Crear el tag: `git tag -a v0.5.0 -m "v0.5.0: biblioteca núcleo"` y `git push origin v0.5.0`.
  - Crear el release: `gh release create v0.5.0 --verify-tag --title "v0.5.0: biblioteca núcleo" --notes "<sección del changelog>"`.
  - `gh run watch` → éxito, y comprobar que `…/versiones/v0.4.0/` responde 200.

## Entrega 2 · Llegada y escalera (0.6.0, a más tardar el 2026-11-13)

### Tarea 7: Transversal · Llegar a un equipo nuevo + diario de observación

**Archivos:**
- Crear: `docs/caja-de-herramientas/diario-observacion.md`, `docs/fases/transversal-llegar-equipo-nuevo.md`
- Modificar:
  - `mkdocs.yml`: nav. La transversal va después de "IA en la célula" y la herramienta después de "Mapa de stakeholders".
  - `docs/caja-de-herramientas/index.md`: fila `| [Diario de observación](diario-observacion.md) | 0, transversal | Coaching |`.
  - `docs/caja-de-herramientas/assessment-madurez.md`: un admonition `tip` justo debajo de `### Plan de 3 semanas`. No cambiar la tabla del plan ni las preguntas, porque el hook `assessment_data.py` y los enlaces compartidos dependen de ellas.
  - `docs/fases/00-diagnostico-onboarding.md` §0.2, `docs/como-usar.md` (ruta Tomar, debajo del diagrama) y `docs/casos/tomar-celula.md` ("Semanas 1–3"): una línea con enlace a la transversal.
  - `docs/biblioteca/ruta-de-estudio.md` (sesión 10, "Preparar la llegada"), `docs/biblioteca/index.md` y el changelog.

**Usa:** el hook (valida esta transversal) y las fichas de las Tareas 3 a 6.

**Contenido que debe estar:**
- Los 8 H2 de la plantilla.
- **Actividades:**
  - Semana 1 · Escuchar y medir: reuniones 1:1, el mapa de stakeholders, el negocio, las preguntas abiertas y la extracción de Jira (S1 del assessment).
  - Semana 2 · Observar: ceremonias, tablero y diario (S2 del assessment).
  - Semana 3 · Diagnosticar y devolver: puntaje, taller de brechas y recomendación de puerta de entrada (S3 del assessment).
- **Secciones H2 extra entre `Actividades` y `Artefactos`:**
  - `Qué no hacer en las primeras semanas`.
  - `Señales de diagnóstico`: una tabla `| Señal | Dónde se ve | Ficha |` armada a partir de las secciones "Qué observar al llegar" de las fichas de Scrum, Kanban, Flujo y Scrumban.
  - `Elegir la puerta de entrada`: una tabla que traduce el puntaje de la dimensión Flujo del assessment, el % de demanda no planificada y las señales en una puerta de entrada.
- Mientras no exista la Tarea 8, la puerta de entrada se describe en texto. El enlace a la escalera se agrega en la Tarea 8.

- [ ] **Paso 1: escribir `diario-observacion.md`.** Encabezado `**Fase:** 0 · Transversal llegar a un equipo nuevo` y una plantilla en tabla `| Fecha | Contexto | Qué vi | Hipótesis | Ficha relacionada |` con 2 filas de ejemplo.
- [ ] **Paso 2: escribir la transversal** con el contenido de arriba.
- [ ] **Paso 3: agregar los enlaces y avisos en las páginas existentes**, según la lista de archivos.
- [ ] **Paso 4: escribir la sesión 10 de la ruta**, que enlaza a la transversal y al diario.
- [ ] **Paso 5: verificar.** `unittest` → `OK`; `mkdocs build --strict` → sin WARNING (el hook valida la transversal). Comprobar que la calculadora de madurez sigue cargando las 30 preguntas: abrir `calculadora-madurez/` en `mkdocs serve`.
- [ ] **Paso 6: changelog, commit y push.** Registrar en `[Sin publicar]`, hacer commit `"Transversal: llegar a un equipo nuevo y diario de observación"` y push. Después, `gh run watch` → éxito.

### Tarea 8: Transversal · Implementar Scrumban paso a paso y cierre de 0.6.0

**Archivos:**
- Crear: `docs/fases/transversal-scrumban-paso-a-paso.md`
- Modificar: `mkdocs.yml` (nav, después de la Tarea 7), la Fase 3 §3.2, `docs/biblioteca/scrumban/que-es-scrumban.md` ("Relacionado"), `docs/fases/transversal-llegar-equipo-nuevo.md` (enlace en "Elegir la puerta de entrada"), `docs/changelog.md` y `docs/versiones.md`.

**Contenido que debe estar:**
- Los 8 H2 de la plantilla.
- Las **Actividades** son los peldaños 0 a 9 del spec §6, cada uno como `### Peldaño N · <nombre>` con los campos Objetivo, Cómo, Señal de "listo, sigue", Duración típica, Riesgo principal y Fichas.
- **Secciones H2 extra antes de `Actividades`:**
  - `¿Es Scrumban lo que este equipo necesita?`: los tres casos del spec §6 (Scrum + flujo, Scrumban y Kanban con cadencias), con qué cambia en el peldaño 6 en cada caso.
  - `Puertas de entrada`: la tabla de 4 filas del spec §6, sin cambios.
- **Sección H2 extra antes de `Artefactos`:** `Si vienes de "Scrum a medias"`, con qué se conserva y qué se transforma.

- [ ] **Paso 1: escribir la transversal.**
- [ ] **Paso 2: agregar los enlaces.**
  - En la Fase 3 §3.2, "Para implementarlo paso a paso, ver [Scrumban paso a paso](transversal-scrumban-paso-a-paso.md)".
  - En `que-es-scrumban`, en "Relacionado".
  - En la llegada, en "Elegir la puerta de entrada".
- [ ] **Paso 3: verificar.** `unittest` → `OK`; `mkdocs build --strict` → sin WARNING. Revisar las tablas de los peldaños en un viewport de 390 px.
- [ ] **Paso 4: commit, push y cierre de 0.6.0.** Commit `"Transversal: implementar Scrumban paso a paso"`, push, y cierre igual que en el Paso 10 de la Tarea 6, con la novedad "Llegada a un equipo nuevo y escalera de Scrumban". `gh run watch` → éxito.

## Entrega 3 · Complementarias (0.7.0, sin fecha)

### Tareas 9 a 13: áreas complementarias

Una tarea por área, en este orden: **9 Lean** · **10 Ingeniería** · **11 Producto** · **12 Personas** · **13 Facilitación**. Cada una sigue la estructura de pasos de la Tarea 3: verificar fuentes, fichas, índice, glosario y siglas, nav, changelog, build estricto, commit y push. Los slugs son los de la tabla de slugs.

Contenido que no se puede omitir:
- **Lean:** `principios-de-flujo` cita a Reinertsen (*The Principles of Product Development Flow*, 2009; verificar el año) y enlaza a `../../caja-de-herramientas/cost-of-delay-wsjf.md` y `value-stream-map.md`.
- **Ingeniería:** `dora` enlaza a la Fase 5 y no duplica el catálogo de métricas. `bdd` enlaza a `dor-dod.md`.
- **Producto:** `continuous-discovery` enlaza a la Fase 1. `okrs` enlaza a `roadmap-outcomes.md`.
- **Personas:** `management-30` enlaza a `delegation-board.md` y a la Fase 5 §5.5, y no las duplica.
- **Facilitación:** `cynefin` enlaza a `cuando-scrumban` como ejemplo de cómo elegir un enfoque según el contexto.
- **Al cerrar cada área:** se agregan enlaces "Relacionado" desde las fichas del núcleo que correspondan y se suma una fila de señales a la tabla de la transversal de llegada, si el área aporta señales observables.

Al terminar la Tarea 13, se cierra la 0.7.0 igual que en el Paso 10 de la Tarea 6, con la novedad "Biblioteca complementaria". Si en la Entrega 1 se recortaron fichas (Flight Levels, KMM o Escalamiento), se agregan aquí antes del cierre.
