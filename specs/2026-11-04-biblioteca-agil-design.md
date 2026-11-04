# Diseño · Biblioteca ágil, llegada a un equipo nuevo y escalera de Scrumban

**Fecha:** 2026-11-04 · **Repositorio:** `agile-cell-playbook` · **Estado:** borrador para aprobación

## 1. Intención y por qué

Este diseño responde a un caso frecuente: una persona Scrum Master o Agile Coach llega a un equipo que no conoce. Su plan para las primeras semanas tiene tres pasos:

1. **Observar** sin cambiar nada todavía.
2. **Profundizar** su conocimiento mientras observa.
3. **Implementar Scrumban paso a paso**, de forma evolutiva y no como un big bang.

El equipo que encuentre puede ser de cualquier tipo: sin marco, con "Scrum a medias" o con Kanban sin disciplina.

Antes de llegar, esa persona necesita **estudiar**. Durante el trabajo necesita **consultas rápidas**: abrir una duda puntual y tener la respuesta en 2 o 3 minutos, a menudo desde el teléfono.

El playbook actual dice **qué hacer y en qué orden** para formar o tomar una célula. Scrum, Kanban y Lean aparecen ahí solo como herramientas al servicio de las fases, sin explicarse a fondo. Además, Scrumban hoy es solo una rama del árbol de decisión de la Fase 3 (`docs/fases/03-sistema-de-trabajo.md`, §3.2) y aparece en el caso `tomar-celula.md`. **No existe una guía para implementarlo.**

El playbook es genérico (no menciona empresas), así que esta biblioteca de conocimiento vive dentro de él.

## 2. Qué se construye: tres piezas, tres momentos

| Momento | Pieza | Pregunta que responde |
|---|---|---|
| Antes de llegar | **Biblioteca** de fichas + **ruta de estudio** | ¿Qué es esto y cómo funciona de verdad? |
| Semanas 1 a 3 en el equipo | **Transversal · Llegar a un equipo nuevo** (guía de observación) | ¿Qué miro, qué pregunto y cómo decido por dónde empezar? |
| Después | **Transversal · Implementar Scrumban paso a paso** (escalera) | ¿Cuál es el próximo paso pequeño y cómo sé que ya puedo darlo? |

Todas las piezas se conectan entre sí. La guía de observación termina con un diagnóstico que recomienda una **puerta de entrada** en la escalera. Ese diagnóstico también puede concluir que Scrumban no conviene (ver §6). Cada peldaño y cada señal de la guía enlazan a la ficha que explica el concepto.

## 3. Objetivos, no-objetivos y anti-objetivos

**Objetivos**

- Consultar cualquier tema en 2 o 3 minutos, también desde el teléfono.
- Cubrir Scrum, Kanban, métricas de flujo y Scrumban **a nivel avanzado**, más allá de lo básico.
- Tener una ruta de estudio corta que se pueda completar en unas dos semanas.
- Tener una escalera de Scrumban con **varias puertas de entrada** según el punto de partida del equipo.

**No-objetivos (por ahora)**

- Lectura en voz alta o audio.
- Seguimiento del progreso de estudio con checkboxes que se guarden.
- Versión en inglés.
- Los puntos técnicos de `MEJORAS.md` (son otro proyecto). Hay una sola excepción, indicada en §7.
- Preparación de entrevistas.
- Reescribir las páginas existentes para unificar el vocabulario de métricas (ver §4.5).

**Anti-objetivos (fracasaría aunque "funcione")**

- **Fichas largas que parecen capítulos.** Si una ficha no se lee en 3 minutos, no sirve para consultar rápido.
- **Duplicar contenido** que ya existe en el playbook, en vez de enlazarlo.
- **Dogma** del tipo "la guía dice X, así que hay que hacer X". Cada ficha explica el *para qué* y cuándo **no** aplica.
- **Contenido genérico** que no ayuda a diagnosticar. Toda ficha tiene que decir qué observar en un equipo real.
- **Citas, cifras, autores o años inventados.** Solo fuentes primarias verificables.
- Romper el `mkdocs build --strict`.

## 4. Pieza 1 · Biblioteca

### 4.1 Ubicación y navegación

- Nueva pestaña **"Biblioteca"** en `nav`, entre "Caja de herramientas" y "Casos de ejemplo".
- Carpeta `docs/biblioteca/` con una subcarpeta por área. Cada área tiene un `index.md` (aprovecha `navigation.indexes`) con una tabla de sus fichas y una línea de resumen por ficha.
- `docs/biblioteca/index.md`: qué es la biblioteca, cómo leer una ficha, el mapa de áreas y el enlace a la ruta de estudio.
- `docs/biblioteca/ruta-de-estudio.md`: ver §4.4.

### 4.2 Plantilla de ficha (fija para todas)

```markdown
# <Concepto>

**En una frase:** <definición de una línea>.
**Área:** <Scrum | Kanban | Flujo | Scrumban | …> · **Lectura:** ~N min

## Qué es
## Para qué sirve (y cuándo no)
## Cómo se aplica
## Errores típicos
## Qué observar al llegar a un equipo
## Relacionado
## Para profundizar
```

Reglas de la plantilla:

- **Entre 400 y 700 palabras** por ficha. Si un tema no cabe, se divide en dos fichas.
- "Qué observar al llegar" es una lista de **señales concretas** (en el tablero, en las ceremonias o en los datos) y es lo que alimenta la guía de observación.
- "Relacionado" enlaza a otras fichas y a las fases y herramientas del playbook que ya existen. Lo que ya está desarrollado ahí no se repite (por ejemplo, políticas del tablero, Monte Carlo, Cost of Delay o DoR/DoD).
- "Para profundizar" incluye **solo fuentes primarias**: guía oficial, libro del autor o artículo original, con su año. Si un dato no se puede verificar, no se incluye.
- Se usan tablas, admonitions y diagramas Mermaid cuando ayudan a leer rápido en el móvil. Los diagramas se mantienen chicos.
- Mismo tono que el resto del sitio: español neutro con tuteo.

### 4.3 Catálogo

**Entrega 1 · Núcleo (unas 30 fichas)**, en orden de construcción y publicación:

| Orden | Área | Fichas |
|---|---|---|
| 1 | **Scrum** (11) | Scrum en una página (empirismo, pilares y valores) · Accountabilities (PO, SM y Developers; incluye las posturas del SM) · El Sprint y Sprint Planning · Daily Scrum · Sprint Review · Sprint Retrospective · Artefactos y compromisos (Product Goal, Sprint Goal y DoD) · Refinamiento del Product Backlog · Antipatrones de Scrum · Evidence-Based Management · Escalamiento: Nexus, LeSS y SAFe con mirada crítica |
| 2 | **Kanban** (10) | Kanban en una página (Kanban Guide vs. Kanban Method) · Principios y prácticas del Kanban Method · Visualizar: diseño del tablero y puntos de compromiso y entrega · WIP y sistema pull · Políticas explícitas (enlaza a la herramienta existente) · Clases de servicio · Las cadencias de Kanban · STATIK · Kanban Maturity Model · Flight Levels |
| 3 | **Métricas de flujo** (6) | Las métricas de flujo y sus dos vocabularios (ver §4.5) · Little's Law y sus supuestos · Work item age y aging WIP · Cómo leer un CFD · Scatterplot, percentiles y SLE · Pronóstico probabilístico (enlaza al Monte Carlo existente) |
| 4 | **Scrumban** (4) | Qué es Scrumban y de dónde viene (Ladas, 2008) · Cuándo sí y cuándo no (enlaza a la Fase 3 §3.2) · Combinar cadencia y flujo (Sprint Goal con WIP, planificación por umbral y Scrum con métricas de flujo) · Antipatrones de Scrumban |

**Si falta tiempo**, se recortan primero (y pasan a la Entrega 3) estas fichas, en este orden: Flight Levels, Kanban Maturity Model y Escalamiento. La Entrega 2 tiene prioridad sobre ellas.

**Entrega 3 · Complementarias (unas 25 fichas):**

| Área | Fichas |
|---|---|
| **Lean y flujo** | Lean en una página · Los desperdicios en software · Principios de flujo de Reinertsen · Pensamiento sistémico |
| **Ingeniería** | XP · BDD · Trunk-based development · DORA · SPACE |
| **Producto** | Continuous discovery (Torres) · OKRs · Impact mapping · Jobs to be Done · Shape Up |
| **Personas y equipos** | Team Topologies · Seguridad psicológica · Desarrollo de equipos (Tuckman) · Management 3.0 (enlaza a lo existente) · Posturas de coaching (Adkins) · Agile Fluency |
| **Facilitación y cambio** | Liberating Structures · Cynefin · Kotter y ADKAR · Manejo de la resistencia al cambio |

### 4.4 Ruta de estudio

`docs/biblioteca/ruta-de-estudio.md`: **unas 10 sesiones de ~25 minutos**, pensadas para hacer en el teléfono, en este orden: Scrum → Kanban → métricas de flujo → Scrumban. Cada sesión indica:

- Qué fichas leer.
- Una pregunta de autoevaluación.
- Un ejercicio corto aplicado a un equipo imaginario o a uno anterior.

La ruta crece junto con las fichas. Cada publicación por área agrega solo las sesiones de esa área, para que nunca haya enlaces a páginas que todavía no existen (el build estricto fallaría). La última sesión, "Preparar la llegada", se agrega en la Entrega 2 y enlaza a la Pieza 2.

### 4.5 Vocabulario de métricas de flujo

Hay dos escuelas con términos distintos:

- **Kanban Guide** (Vacanti y Coleman, ProKanban): habla de WIP, throughput, *cycle time* (desde el punto de compromiso hasta terminado), *work item age* y SLE. No usa "lead time".
- **Kanban Method** (Anderson, Kanban University): distingue *lead time* (desde el compromiso hasta producción) de *cycle time* (desde que se empieza hasta que se termina). También aporta las clases de servicio, STATIK y el KMM.

El playbook ya usa el vocabulario del Kanban Method: lead time P85 aparece en `catalogo-metricas.md`, Fase 5, el assessment, `politicas-tablero.md`, `cost-of-delay-wsjf.md` y el glosario.

**Decisión:** las fichas enseñan **las dos escuelas lado a lado**. La ficha "Las métricas de flujo y sus dos vocabularios" incluye una tabla de equivalencias, y en las demás fichas los términos se usan como en el playbook (lead time y cycle time según el Kanban Method). Cuando una ficha cite la Kanban Guide, aclara la equivalencia. Las páginas existentes no se reescriben. Solo se agrega al glosario una nota de equivalencia en "Cycle time" y "Lead time", y en los términos de métricas un enlace a la ficha. *(Decisión del diseñador.)*

## 5. Pieza 2 · Transversal · Llegar a un equipo nuevo

- Archivo: `docs/fases/transversal-llegar-equipo-nuevo.md`. En el nav va junto a las demás transversales.
- Sigue la **plantilla de 8 partes** que exige `contribuir.md`.
- **Enfoque:** es la agenda personal de quien llega como SM o coach.

**Relación con el assessment existente** *(decisión del diseñador)*: `assessment-madurez.md` ya tiene un plan de 3 semanas (S1: datos de Jira y línea base; S2: reuniones 1:1 y observación de ceremonias; S3: puntaje y taller de brechas). La guía de llegada **es ese mismo plan, visto desde quien llega**, no un calendario aparte:

- **Semana 1 · Escuchar y medir:** reuniones 1:1, mapa de stakeholders (herramienta existente), entender el negocio, preguntas abiertas y extracción de datos de Jira para la línea base (la S1 del assessment).
- **Semana 2 · Observar:** ceremonias, tablero y conversaciones, con un diario de observación (la S2 del assessment).
- **Semana 3 · Diagnosticar y devolver:** puntaje del assessment, taller de brechas con el equipo y **recomendación de puerta de entrada** (la S3 del assessment).

Se agrega lo que el assessment no cubre:

- La postura de quien llega.
- Las preguntas que conviene hacer.
- **Qué NO hacer** en las primeras semanas: cambiar ceremonias, imponer herramientas u opinar sin datos.
- El diario de observación.
- Una tabla de **señales de diagnóstico** que reúne las señales "Qué observar al llegar" de las fichas, con enlace a cada una.

Cambios en las páginas existentes:

- **`assessment-madurez.md`**, en "Plan de 3 semanas": un aviso (admonition) que diga que, si quien aplica el assessment llega nuevo al equipo, la transversal Llegar a un equipo nuevo envuelve este mismo plan. No se cambia el plan ni el orden de las preguntas.
- **Fase 0 §0.2:** un enlace a la transversal.
- **`como-usar.md`:** en la ruta "Tomar una célula", un enlace a la transversal.

**Puerta de entrada vs. "orden sugerido de fases" de la calculadora:** son salidas distintas que se complementan. La calculadora ordena **qué fases del playbook reforzar**. La puerta de entrada dice **en qué peldaño de la escalera empezar**, y se decide principalmente con la dimensión **Flujo** del assessment, el % de demanda no planificada (Fase 3 §3.1) y las señales observadas. La transversal incluye una tabla corta que traduce el puntaje de Flujo y las señales en una puerta de entrada. No se cambia la calculadora.

**Nueva herramienta:** `docs/caja-de-herramientas/diario-observacion.md`, una plantilla de diario de observación (fecha, contexto, qué vi, hipótesis y ficha relacionada). Se agrega al índice de la caja y al nav.

La transversal se enlaza también desde la portada de la biblioteca y desde el caso `tomar-celula.md`.

## 6. Pieza 3 · Transversal · Implementar Scrumban paso a paso

- Archivo: `docs/fases/transversal-scrumban-paso-a-paso.md`, con la plantilla de 8 partes. Las "Actividades" son los peldaños.
- **Principio:** empezar por donde estás, con cambios evolutivos y pequeños. Se avanza por **criterio cumplido, no por calendario**, igual que en el traspaso de proveedor que ya existe.
- **Peldaños propuestos** (el builder puede ajustar el orden fino):
  0. Observar y tomar la línea base (viene de la Pieza 2).
  1. Visualizar el trabajo real: todo el trabajo y sus tipos.
  2. Políticas explícitas (entrar y salir de cada columna, DoR y DoD).
  3. Limitar el WIP: primero un límite total, después por columna.
  4. Sistema pull y "empezar por la derecha".
  5. Métricas de flujo y SLE.
  6. Cadencias: replenishment (también por umbral), review y retro con datos.
  7. Clases de servicio.
  8. Pronóstico probabilístico.
  9. Mejora continua con experimentos.
- **Cada peldaño indica:** objetivo, cómo hacerlo, **señal de "listo, sigue"**, duración típica, riesgo principal y fichas relacionadas.

**Tabla de puertas de entrada:**

| Si encuentras… | Entras por… | Lo primero que cuidas |
|---|---|---|
| Equipo sin marco, todo urgente | Peldaño 1, visualizar | No imponer ceremonias, solo hacer visible |
| "Scrum a medias" (sprints que no cierran, mucho trabajo no planificado) | Peldaños 2 y 3, políticas + WIP dentro del sprint | Mantener lo que funciona (Sprint Goal, retro) y agregar flujo |
| Kanban sin disciplina (tablero sin límites ni métricas) | Peldaños 3 y 4, WIP + pull | Sumar cadencias |
| Equipo maduro | Peldaños 5 y 8, métricas + pronóstico | Afinar, no cambiar |

**Cuándo no conviene Scrumban** *(decisión del diseñador, para evitar el dogma)*: el capítulo abre con una sección "¿Es Scrumban lo que este equipo necesita?". Esa sección aplica el árbol de la Fase 3 §3.2:

- Si menos del 20 % de la demanda es no planificada y Scrum funciona, la recomendación es **mantener Scrum y sumar las prácticas de flujo**: los peldaños 1 a 5 y 8 sirven igual, como en la Kanban Guide for Scrum Teams.
- Si más del 50 % es no planificado, la recomendación es **Kanban con cadencias**: se recorre la misma escalera sin la capa de sprints.

La escalera es útil en los tres casos. Lo que cambia es qué cadencias se agregan en el peldaño 6.

- Para el caso "Scrum a medias", una sección dice **qué se conserva de Scrum** y qué se transforma.
- Se enlaza desde: la Fase 3 §3.2 (rama Scrumban), la ficha "Qué es Scrumban" y la Pieza 2.

## 7. Restricciones

- **Fechas:**
  - Entrega 1: lo antes posible, **publicada por áreas** a medida que se termina cada una.
  - Entrega 2: a más tardar el **2026-11-13**.
  - Entrega 3: sin fecha fija.
- **Stack:** se usa el sitio MkDocs existente con las versiones fijadas en `requirements.txt` (Material 9.5.39), sin dependencias nuevas.
- **Publicación y revisión:** se publica **directo a `main`** cuando `mkdocs build --strict` pasa sin warnings. No hay una revisión previa del mantenedor: revisa en el sitio publicado y se corrige después. Por eso la verificación de fuentes la hace quien escribe, al momento de escribir.
- **Versionado:** se usa el patrón del punto P6 de `MEJORAS.md`.
  - Las publicaciones parciales se registran en una sección **`[Sin publicar]`** de `docs/changelog.md`.
  - Al completar cada entrega, esa sección pasa a ser la versión **menor** correspondiente (0.5.0, 0.6.0 y 0.7.0), con su tag, su release y su fila en `docs/versiones.md`, según `contribuir.md`.
- **Glosario y siglas:** los términos nuevos van a `docs/glosario.md` y las siglas a `includes/abreviaturas.md`.
- **Excepciones a los no-objetivos**, ambas en la Entrega 1:
  - Se aplica el punto **S1 de `MEJORAS.md`** (agregar `content.tooltips` a `theme.features`). Sin eso, las siglas no se ven en el móvil.
  - Se aplica el punto **P6 de `MEJORAS.md`** (sección `[Sin publicar]` en el changelog), que es necesario para publicar por áreas. *(Decisión del diseñador.)*
- **Fuentes:** al citar la Scrum Guide, la Kanban Guide u otras guías, hay que verificar la versión vigente y su año. No se transcriben párrafos largos: se resume y se enlaza.
- **Archivos de trabajo:** `specs/` (este diseño, sin datos personales) y `MEJORAS.md` se commitean al repo. Quedan fuera de `docs/`, así que no se publican en el sitio.

## 8. Entregas

| # | Contenido | Versión | Fecha objetivo |
|---|---|---|---|
| 1 | S1 y P6 · Pestaña Biblioteca, portada y fichas por área (Scrum → Kanban → Flujo → Scrumban), cada área con sus sesiones de la ruta de estudio, sus términos de glosario y siglas, y sus enlaces desde las fases 3 y 5 | 0.5.0 | Lo antes posible, por áreas |
| 2 | Transversal Llegar a un equipo nuevo, Transversal Scrumban paso a paso, diario de observación, sesión "Preparar la llegada", enlaces y avisos en las páginas existentes | 0.6.0 | ≤ 2026-11-13 |
| 3 | Fichas complementarias (unas 25) y fichas recortadas de la Entrega 1, si las hubo | 0.7.0 | Sin fecha fija |

## 9. Lo que dejo al builder

- El título exacto y el orden de las fichas dentro de cada área.
- Qué diagramas incluir y dónde.
- Los slugs de los archivos (minúsculas, con guiones, en español).
- El reparto exacto de las fichas en las sesiones de la ruta de estudio.
- La redacción de los ejercicios y preguntas de autoevaluación.
- La tabla que traduce el puntaje de Flujo y las señales en una puerta de entrada.

## 10. Decisiones del diseñador (para que el mantenedor las revise)

- Que la biblioteca viva dentro del playbook y no en un sitio aparte.
- El catálogo de fichas, su reparto por entrega y el orden de recorte.
- Que la llegada y la escalera sean **capítulos transversales** con la plantilla de 8 partes, y no fichas.
- Que la llegada absorba el plan de 3 semanas del assessment, y que en el assessment solo se agregue un aviso.
- Que el diagnóstico pueda concluir "Scrum + flujo" o "Kanban con cadencias" en vez de Scrumban.
- Que se enseñen las dos escuelas de métricas, conservando el vocabulario actual del playbook.
- Que la ruta de estudio tenga unas 10 sesiones de ~25 minutos.
- Aplicar S1 y P6 de `MEJORAS.md` en la Entrega 1.
- Que el audio quede fuera por ahora.
