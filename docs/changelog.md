# Changelog

Historial de versiones de la metodología. Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y versionado semántico:

- **Mayor (1.0, 2.0):** cambia la estructura de fases.
- **Menor (0.2, 0.3):** se agregan o modifican contenidos o herramientas.
- **Parche (0.1.1):** correcciones y aclaraciones.

Lo publicado después del último tag aparece en `[Sin publicar]`.

## Próximas iteraciones sugeridas

- Validar el assessment y los casos de ejemplo con células reales y calibrar los criterios.
- Versión en inglés de la guía.

## [Sin publicar]

### Agregado

- **Qué hago si…**: nueva sección con 35 situaciones frecuentes de un Scrum Master o coach, en seis temas: eventos, roles, flujo, métricas y compromisos, personas y cambio, y tu llegada. Cada una incluye la respuesta en corto, qué está pasando, qué hacer, frases para decir, qué no hacer y enlaces a las fichas y herramientas. El build valida su plantilla y que el índice las enlace todas.
- Portada con accesos rápidos a Qué hago si…, Llegar a un equipo nuevo, Scrumban paso a paso y la Biblioteca.
- **Pronóstico Monte Carlo**: campo opcional **Usar solo las últimas N semanas** para pronosticar solo con las semanas recientes. Los datos se guardan en el navegador, y **Compartir enlace** genera una URL con el historial y la pregunta, igual que la calculadora de madurez.
- Pruebas automáticas de los hooks (`unittest`) y de la lógica de las calculadoras (`node --test`). El CI las corre antes de publicar.
- Dependabot actualiza cada mes las dependencias de Python y las *actions*.

### Cambiado

- **Gobierno con proveedores** sigue la plantilla de 8 partes de las transversales (objetivo de negocio, entradas, actividades, artefactos, métricas, roles, criterios de salida y antipatrones), y el build la valida.
- Publicación:
    - Cada deploy conserva las versiones ya archivadas y solo construye los tags nuevos, cada uno con su propio `requirements.txt`.
    - El workflow corre con permisos de solo lectura, salvo el job que publica.
    - La revisión de enlaces externos corre solo los lunes o a pedido, y abre un issue si encuentra enlaces rotos.
- Chart.js se carga con verificación de integridad (SRI). Los scripts de las calculadoras se cargan desde la configuración del sitio, ya no con rutas relativas en cada página.

### Corregido

- **Calculadora de madurez**: la fecha por defecto usa el día local. En Chile, después de las 21:00, mostraba el día siguiente.
- **Pronóstico Monte Carlo**: rechaza una fecha de inicio imposible (por ejemplo, 30 de febrero) en vez de convertirla en otra fecha.
- El build falla con un mensaje claro si al assessment le falta uno de los prefijos de dimensión que usan las reglas de priorización (FL, IN, CA). Antes, la regla dejaba de aplicarse sin aviso.

## [0.7.0] · 2026-11-04

### Agregado

- **Biblioteca · Lean y flujo**: 4 fichas (Lean en una página, Los desperdicios en software, Principios de flujo de Reinertsen y Pensamiento sistémico), con su índice de área. Distinguen los siete desperdicios de Ohno de su traducción al software de los Poppendieck y enlazan a Cost of Delay y WSJF y a Value Stream Mapping sin repetirlos.
- Glosario: bucle de realimentación, desperdicio, jidoka, lean, pensamiento sistémico, punto de apalancamiento y tamaño de lote. Sigla TPS.
- Llegar a un equipo nuevo: tres señales de diagnóstico enlazadas a las fichas de Lean. Varias fichas del núcleo enlazan a la nueva área en "Relacionado".
- **Biblioteca · Ingeniería**: 5 fichas (Extreme Programming, BDD, Trunk-based development, DORA y SPACE), con su índice de área. DORA presenta las cinco métricas vigentes de dora.dev, aclara que su *change lead time* (del commit a producción) no es el lead time del playbook y enlaza a la Fase 5 y al catálogo de métricas sin repetirlos; BDD enlaza a DoR y DoD.
- Glosario: BDD, branch by abstraction, change lead time, SPACE, TDD y XP; DORA y trunk-based development actualizados con enlace a su ficha. Siglas XP, BDD, TDD y SPACE.
- Llegar a un equipo nuevo: tres señales de diagnóstico enlazadas a las fichas de Ingeniería. Fichas del núcleo y de Lean enlazan a la nueva área en "Relacionado".
- **Biblioteca · Producto**: 5 fichas (Continuous discovery, OKRs, Impact mapping, Jobs to be Done y Shape Up), con su índice de área. Continuous discovery enlaza a la Fase 1 y OKRs al roadmap por outcomes sin repetirlos; Jobs to be Done separa las escuelas de Christensen y Moesta y de Ulwick, y Shape Up explica en qué choca con Scrum.
- Glosario: apetito, continuous discovery, JTBD, OKR, opportunity solution tree, product trio y Shape Up; Impact Mapping actualizado con enlace a su ficha. Siglas OKR, JTBD y ODI.
- Llegar a un equipo nuevo: tres señales de diagnóstico enlazadas a las fichas de Producto. Fichas del núcleo de Scrum enlazan a la nueva área en "Relacionado".
- **Biblioteca · Personas y equipos**: 6 fichas (Team Topologies, Seguridad psicológica, Desarrollo de equipos, Management 3.0, Posturas de coaching y Agile Fluency), con su índice de área. Management 3.0 enlaza al Delegation Board y a la Fase 5 §5.5 sin repetirlos; Desarrollo de equipos presenta a Tuckman con sus críticas, y Posturas de coaching se centra en los seis papeles de Adkins sin repetir las posturas del SM.
- Glosario: Agile Fluency, carga cognitiva, ley de Conway, Management 3.0, modelo de Tuckman, seguridad psicológica y Team Topologies; Moving Motivators actualizado con enlace a su ficha.
- Llegar a un equipo nuevo: tres señales de diagnóstico enlazadas a las fichas de Personas y equipos, y enlace a Posturas de coaching desde "Tu postura". Fichas del núcleo de Scrum enlazan a la nueva área en "Relacionado".
- **Biblioteca · Facilitación y cambio**: 4 fichas (Liberating Structures, Cynefin, Kotter y ADKAR, y Resistencia al cambio), con su índice de área. Cynefin usa la elección entre Scrum, Scrumban y Kanban como ejemplo de decidir según el contexto; Kotter y ADKAR explica por qué Kotter queda grande para un solo equipo, y Resistencia al cambio conecta con el cambio evolutivo del Kanban Method y la escalera de Scrumban.
- Glosario: ADKAR, Cynefin, Liberating Structures y ocho pasos de Kotter. Sigla ADKAR.
- Llegar a un equipo nuevo: tres señales de diagnóstico enlazadas a las fichas de Facilitación y cambio, y la fila de Antipatrones de Scrumban pasa junto a las demás de "Tablero y 1:1". Implementar Scrumban paso a paso y varias fichas del núcleo (Retrospectiva, Kanban Method, STATIK y Cuándo sí y cuándo no Scrumban) enlazan a la nueva área.

### Corregido

- Escalera Scrumban: señal del peldaño 5 y métrica de edad coherentes con el SLE; resumen de señales por peldaño, enlace a los puntajes de entrada y la escalera también aplica si ya conoces al equipo.
- Crédito de la Kanban Guide a Daniel Vacanti y John Coleman (kanbanguides.org), sin atribuirla a ProKanban.org.
- Daily Scrum ("elimina la necesidad de otras reuniones"), retrospectiva (fase "Generar comprensión") y cadencias de Kanban (nota sobre la revisión del servicio).
- Scrumban: "no solo por calendario" en la planificación por umbral, y el trabajo no planificado se cuenta por lo que llegó.
- Métricas: throughput con la misma redacción en ambas escuelas; llegada a un equipo nuevo sin repetición en la elección de puerta.
- Biblioteca (Lean, Ingeniería): precisiones de fuentes. Reinertsen propone una «segunda generación» del lean; XP 2.ª edición rehace los principios; el plazo de 24 horas de trunk-based se atribuye a la integración continua; los límites de WIP se presentan como regla de pull.
- Biblioteca (Producto, Facilitación): OKRs distingue métrica y línea base y revisa durante el ciclo; JTBD alinea la competencia del batido con la fuente (un bagel o una dona); 1-2-4-All sin duración fija, porque las fuentes difieren.
- Biblioteca (Personas): los cinco niveles de conflicto se atribuyen a Speed Leas; Tuckman 1965 incluye grupos naturales y pocos eran equipos de trabajo; al llegar a un equipo se observa primero, de acuerdo con Llegar a un equipo nuevo.
- Glosario y Llegar a un equipo nuevo: carga cognitiva como esfuerzo mental con límite; tabla de señales de diagnóstico reagrupada por «Dónde se ve».

## [0.6.0] · 2026-11-04

### Agregado

- **Transversal · Llegar a un equipo nuevo**: la agenda de las primeras tres semanas de quien llega como SM o coach (escuchar y medir, observar, diagnosticar y devolver), con su postura, preguntas para los 1:1, qué no hacer, una tabla de señales de diagnóstico enlazada a las fichas y cómo elegir la puerta de entrada.
- Nueva herramienta: **diario de observación**.
- Biblioteca: sesión 10 de la ruta de estudio, "Preparar la llegada a un equipo".
- **Transversal · Implementar Scrumban paso a paso**: una escalera de diez peldaños, del 0 al 9, que se sube por criterio cumplido y no por calendario. Cada peldaño trae su objetivo, cómo hacerlo, su señal de "listo, sigue", una duración como referencia, su riesgo principal y las fichas que lo explican. Incluye cuándo conviene Scrum con flujo, Scrumban o Kanban con cadencias, las puertas de entrada y qué se conserva y qué se transforma al venir de "Scrum a medias".

### Cambiado

- El assessment de madurez avisa, en su plan de 3 semanas, que la transversal lo envuelve cuando quien lo aplica llega nuevo. La Fase 0 §0.2, la ruta Tomar de "Cómo usar la guía", el caso "Tomar una célula", el índice de fases y la portada de la biblioteca enlazan a la transversal.
- La Fase 3 §3.2, la ficha "Qué es Scrumban", el índice de fases y la transversal de llegada enlazan a la escalera.

## [0.5.0] · 2026-11-04

### Agregado

- Biblioteca: portada y ruta de estudio. Tooltips de siglas en pantallas táctiles.
- Biblioteca · Scrum: 11 fichas (Scrum en una página, accountabilities, Sprint y Planning, Daily Scrum, Sprint Review, retrospectiva, artefactos y compromisos, refinamiento, antipatrones, Evidence-Based Management y escalamiento) y las sesiones 1 a 3 de la ruta de estudio.
- Biblioteca · Kanban: 10 fichas (Kanban en una página, principios y prácticas del Kanban Method, visualizar, WIP y sistema pull, políticas explícitas, clases de servicio, cadencias, STATIK, Kanban Maturity Model y Flight Levels) y las sesiones 4 a 6 de la ruta de estudio. La Fase 3 enlaza a las fichas de WIP, clases de servicio y cadencias.
- Biblioteca · Métricas de flujo: 6 fichas (métricas y sus dos vocabularios, Ley de Little, work item age, CFD, scatterplot y SLE, y pronóstico probabilístico) y las sesiones 7 y 8 de la ruta de estudio. La Fase 5 y el catálogo de métricas enlazan a las fichas; el glosario suma Ley de Little, scatterplot de tiempos y work item age, y aclara la equivalencia de lead time y cycle time con la Kanban Guide.
- Biblioteca · Scrumban: 4 fichas (qué es Scrumban y de dónde viene, cuándo sí y cuándo no, combinar cadencia y flujo, y antipatrones) y la sesión 9 de la ruta de estudio. La Fase 3 §3.2 enlaza a "Cuándo Scrumban"; las fichas de Sprint y Planning, cadencias de Kanban, métricas y vocabularios y pronóstico probabilístico enlazan al área; el glosario suma Kanban Guide for Scrum Teams y planificación por umbral.

## [0.4.0] · 2026-10-28

### Agregado

- **Casos de ejemplo**: tres recorridos ficticios con números coherentes (crear una célula, tomar una célula existente y traspaso de proveedor a equipo interno).
- **Transversal · IA en la célula**: casos de uso por fase, cambios en DoD y revisión, seguridad y propiedad intelectual, medición como experimento con línea base y cláusulas con proveedores.
- **Pronóstico Monte Carlo** interactivo: "¿cuándo?" y "¿cuánto?" con percentiles 50, 85 y 95 a partir del throughput histórico.
- Nuevas herramientas: Cost of Delay y WSJF, seguridad en el flujo, mapa de stakeholders, plan de onboarding y offboarding, roadmap por outcomes, calendario de cadencias, Value Stream Mapping, acuerdos de trabajo distribuido y tablero de dependencias.
- **Calculadora de madurez**: guarda los puntajes en el navegador, comparte resultados por enlace y compara dos aplicaciones.
- **Versiones archivadas**: cada versión publicada queda disponible en `versiones/vX.Y.Z/`, sin cambiar las URLs de la versión actual.
- Versión imprimible de toda la guía, fecha de última actualización en cada página y tooltips para siglas.
- Glosario: 34 términos nuevos.
- Plantillas de issue "Error o enlace roto" y "Caso de una célula real", y revisión semanal de enlaces externos.

### Cambiado

- Las fases y herramientas existentes enlazan a las nuevas plantillas; ya no quedan artefactos sin plantilla.
- Las preguntas del assessment tienen una sola fuente: la calculadora las lee desde `assessment-madurez.md` al construir el sitio.
- Chart.js se carga solo en las páginas que lo usan.
- Fase 6: el Delegation Board se revisa cada trimestre, igual que en su plantilla.
- README y Contribuir actualizados con la estructura y el proceso de publicación de versiones.

## [0.3.0] · 2026-10-28

### Agregado

- **Transversal · Traspaso de proveedor a equipo interno**: cinco etapas (preparar, shadowing, reverse shadowing, operación autónoma y cierre) que avanzan por criterios, con inventario de activos, métricas que no deben degradarse, RACI, criterios de salida y antipatrones.
- **Plan de traspaso** en la caja de herramientas: inventario de activos, mapa de conocimiento con niveles 0–3, criterios de avance por etapa y registro de consultas al proveedor.
- Glosario: exit plan, mapa de conocimiento, shadowing, reverse shadowing y traslape.

### Cambiado

- Inicio y Cómo usar la guía: la ruta Tomar distingue el caso de traspaso desde un proveedor.
- Gobierno con proveedores: el plan de salida enlaza al traspaso y exige activos a nombre del cliente desde el inicio.
- Fase 0 y assessment: el traspaso como entrada y EQ5 como indicador del traslape necesario.
- Fases 3 a 6 completan la plantilla de 8 partes: roles en 3 y 4; entradas, métricas y roles en 5; entradas, roles y criterios de salida en 6.
- Gobierno con proveedores: criterios de salida.

## [0.2.0] · 2026-10-28

### Agregado

- **Assessment de madurez** con 30 preguntas en seis dimensiones (producto, flujo, ingeniería, calidad, equipo y relación con negocio), criterios observables para los niveles 1, 3 y 5, fuente de evidencia por pregunta, plan de aplicación de 3 semanas y reglas de priorización de fases.
- **Calculadora de madurez** interactiva: autoevaluación y observación por pregunta, radar con ambas miradas, alerta de brechas de más de 1 punto, orden sugerido de fases y exportación de resultados en Markdown.

### Cambiado

- Fase 0: la sección 0.2 enlaza al assessment y la calculadora, y el criterio de salida exige brechas conversadas y orden de fases acordado.
- Contribuir: el mantenedor publica directo a `main` con validación local; las contribuciones externas siguen por pull request.

## [0.1.1] · 2026-10-28

### Corregido

- URLs del repositorio y del sitio apuntan a la cuenta `andresga79`.
- Enlaces al Agile Metric Hub.

## [0.1.0] · 2026-10-28

### Agregado

- Estructura de 7 fases (0 a 6) y página transversal de gobierno con proveedores.
- Caja de herramientas con 10 plantillas: Team Canvas, Delegation Board, Lean Canvas e hipótesis, User Story Map, ADR, DoR/DoD, políticas del tablero, checklist de producción, catálogo de métricas y retrospectiva basada en datos.
- Glosario.
- Publicación automática en GitHub Pages con MkDocs Material.
