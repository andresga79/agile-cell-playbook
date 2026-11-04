# Glosario

Accountability
:   En Scrum, responsabilidad de la que alguien rinde cuentas. La Scrum Guide 2020 define tres: Product Owner, Scrum Master y Developers. Ver [la ficha](biblioteca/scrum/accountabilities.md).

ADR
:   *Architecture Decision Record*. Documento breve que registra una decisión, su contexto y consecuencias.

Agente de IA
:   Herramienta de IA que ejecuta tareas de varios pasos con cierta autonomía (abrir PRs, correr comandos) bajo permisos definidos.

Asistente de código
:   Herramienta de IA que sugiere o genera código dentro del editor o del flujo de revisión.

BDD
:   *Behaviour-Driven Development*. Práctica de acordar el comportamiento esperado con ejemplos concretos en lenguaje de negocio (Given / When / Then) y automatizarlos como pruebas. Ver [la ficha](biblioteca/ingenieria/bdd.md).

Blue / Green
:   Estrategia de despliegue con dos ambientes de producción idénticos; se cambia el tráfico de uno a otro y se vuelve atrás al instante si falla.

Branch by abstraction
:   Técnica para reemplazar una parte grande del sistema por etapas, detrás de una capa intermedia, sin abrir una rama de larga vida. Ver [Trunk-based development](biblioteca/ingenieria/trunk-based.md).

Bucle de realimentación
:   En pensamiento sistémico, cadena de causas que vuelve sobre sí misma. Los bucles de refuerzo amplifican un cambio y los de equilibrio lo frenan. Ver [Pensamiento sistémico](biblioteca/lean/pensamiento-sistemico.md).

Bus factor
:   Cantidad de personas que tendrían que faltar para que el equipo no pueda seguir operando una parte del sistema.

C4
:   Modelo de diagramas de arquitectura en cuatro niveles: contexto, contenedores, componentes y código.

CAB
:   *Change Advisory Board*. Comité que aprueba cambios a producción.

Canary
:   Liberación gradual a un porcentaje pequeño del tráfico para detectar problemas antes de llegar a todos los usuarios.

CD3
:   *Cost of Delay Divided by Duration*. Prioriza dividiendo el costo de demora por semana entre la duración estimada.

CFD
:   *Cumulative Flow Diagram*. Gráfico que muestra la cantidad de ítems por estado a lo largo del tiempo. Ver [Cómo leer un CFD](biblioteca/flujo/cfd.md).

Change failure rate
:   Porcentaje de despliegues que causan una falla en producción que requiere corrección. En la guía vigente de DORA se llama *change fail rate*. Ver [DORA](biblioteca/ingenieria/dora.md).

Change lead time
:   En DORA, tiempo desde que un cambio se registra en el control de versiones (commit) hasta que está en producción. Es un tramo más corto que el lead time del playbook. Ver [DORA](biblioteca/ingenieria/dora.md).

Clase de servicio
:   Política que define cómo se trata un tipo de ítem según su urgencia y costo de demora. Ver [la ficha](biblioteca/kanban/clases-de-servicio.md).

Cost of Delay
:   Valor que se pierde por cada unidad de tiempo que un ítem no está en producción.

Cycle time
:   Tiempo desde que se empieza a trabajar en un ítem hasta que se termina.

    En la Kanban Guide, *cycle time* abarca desde el punto de inicio hasta el de término que define el equipo; si el inicio es el punto de compromiso y el término la entrega, equivale al lead time de esta guía. Ver [Métricas y vocabularios](biblioteca/flujo/metricas-y-vocabularios.md).

Daily Scrum
:   Evento diario de 15 minutos en que los Developers inspeccionan el avance hacia el Sprint Goal y ajustan su plan. Ver [la ficha](biblioteca/scrum/daily-scrum.md).

Definition of Workflow
:   En la Kanban Guide, el conjunto explícito de acuerdos de un sistema Kanban: qué es un ítem, cuándo empieza y termina, sus estados, cómo se controla el WIP, las políticas de flujo y el SLE. Ver [Kanban en una página](biblioteca/kanban/kanban-en-una-pagina.md).

Dependencia externa
:   Trabajo, recurso o aprobación que una célula necesita de otra célula o de un tercero para terminar un ítem.

Desperdicio
:   En lean (*muda*), todo lo que consume tiempo o esfuerzo sin acercar valor al cliente. Ver [Los desperdicios en software](biblioteca/lean/desperdicios.md).

Developers
:   En Scrum, las personas del equipo que crean cualquier aspecto de un incremento usable en cada Sprint, sin importar su especialidad.

DoR / DoD
:   *Definition of Ready* y *Definition of Done*. Acuerdos sobre cuándo un ítem puede empezar y cuándo está terminado.

DORA
:   *DevOps Research and Assessment*. Programa de investigación sobre entrega de software y sus métricas. La guía vigente usa cinco: change lead time, deployment frequency, failed deployment recovery time, change fail rate y deployment rework rate. El playbook usa las cuatro clásicas: frecuencia de despliegue, lead time de cambios, change failure rate y tiempo de recuperación. Ver [la ficha](biblioteca/ingenieria/dora.md).

EBM
:   *Evidence-Based Management*. Guía de Scrum.org para medir y mejorar el valor de un producto con metas por niveles y cuatro áreas clave de valor. Ver [la ficha](biblioteca/scrum/ebm.md).

Eficiencia de flujo
:   Proporción del lead time en que un ítem recibe trabajo activo.

Empirismo
:   Idea de que el conocimiento viene de la experiencia y las decisiones se toman sobre lo observado. En Scrum se apoya en transparencia, inspección y adaptación.

Exit plan
:   Plan de salida acordado en el contrato con un proveedor: traslape, entregables, propiedad intelectual y continuidad del servicio.

Expedito
:   Clase de servicio para urgencias, como un incidente crítico: se salta la fila y tiene un límite de WIP de 1.

Fake door
:   Experimento que muestra una opción que aún no existe para medir cuántas personas la eligen.

Feature flag
:   Mecanismo para activar o desactivar funcionalidades sin desplegar código nuevo.

Flight Levels
:   Modelo de pensamiento de Klaus Leopold que distingue tres niveles de trabajo: operativo, coordinación y estrategia. Ver [la ficha](biblioteca/kanban/flight-levels.md).

Happiness Door
:   Técnica de Management 3.0 en que cada persona marca cómo se siente al cerrar una reunión, para ver tendencias de ánimo.

Impact Mapping
:   Técnica que conecta una meta de negocio con actores, impactos esperados en su comportamiento y entregables.

Increment
:   En Scrum, paso concreto y usable hacia el Product Goal. Cumple la Definition of Done y se suma a los anteriores; puede haber varios por Sprint.

Jidoka
:   Pilar del Sistema de Producción Toyota: detener el proceso apenas aparece un problema para no seguir produciendo defectos. Ver [Lean en una página](biblioteca/lean/lean-en-una-pagina.md).

Kanban Guide
:   Guía de Daniel Vacanti y John Coleman (kanbanguides.org) que define Kanban como una estrategia para optimizar el flujo de valor. Ver [Kanban en una página](biblioteca/kanban/kanban-en-una-pagina.md).

Kanban Guide for Scrum Teams
:   Guía de Scrum.org (Daniel Vacanti y Yuval Yeret, versión de enero de 2021) que suma a Scrum prácticas de flujo y cuatro métricas sin reemplazar ninguna parte de Scrum. Ver [Combinar cadencia y flujo](biblioteca/scrumban/cadencia-y-flujo.md).

Kanban Method
:   Método de cambio evolutivo de David J. Anderson y Kanban University, con principios de cambio y de servicio y seis prácticas generales. Ver [la ficha](biblioteca/kanban/kanban-method.md).

KMM
:   *Kanban Maturity Model*. Modelo de Anderson y Bozheva con siete niveles de madurez organizacional. Ver [la ficha](biblioteca/kanban/kmm.md).

Kudo Cards
:   Tarjetas de reconocimiento entre pares de Management 3.0.

Lead time
:   Tiempo desde que se compromete un ítem hasta que está disponible en producción.

    En la Kanban Guide, el mismo tramo se llama *cycle time* cuando el equipo define el inicio en el punto de compromiso y el término en la entrega; ver [Métricas y vocabularios](biblioteca/flujo/metricas-y-vocabularios.md). No es el *change lead time* de DORA, que va del commit a producción.

Lean
:   Forma de gestionar el trabajo que nace del Sistema de Producción Toyota y se centra en el valor para el cliente, el flujo y la mejora continua. Ver [Lean en una página](biblioteca/lean/lean-en-una-pagina.md).

LeSS
:   *Large-Scale Scrum*. Marco de Craig Larman y Bas Vodde para que varios equipos trabajen sobre un producto con un solo Product Owner y un solo Product Backlog. Ver [la ficha](biblioteca/scrum/escalamiento.md).

Ley de Little
:   Relación entre promedios de un sistema estable: tiempo en el sistema = WIP ÷ throughput. Vale solo si se cumplen sus supuestos. Ver [la ficha](biblioteca/flujo/ley-de-little.md).

Mapa de conocimiento
:   Matriz que cruza áreas funcionales, técnicas y operativas con las personas que las dominan y su nivel. Mide el avance de un traspaso.

Matriz poder / interés
:   Herramienta que ubica a cada stakeholder según su capacidad de influir y su interés en el producto, para definir cómo involucrarlo.

Métrica de vanidad
:   Indicador que crece sin reflejar valor, como las líneas de código generadas.

Monte Carlo
:   Simulación que usa datos históricos de throughput para pronosticar fechas o alcance con probabilidades. Ver [Pronóstico probabilístico](biblioteca/flujo/pronostico-probabilistico.md).

Moving Motivators
:   Juego de Management 3.0 para conocer qué motiva a cada persona y cómo lo afecta un cambio.

MVO
:   *Minimum Viable Outcome*. El cambio mínimo y medible en el comportamiento del usuario o negocio que valida una apuesta.

MVP
:   *Minimum Viable Product*. El producto mínimo construido para aprender si se logra el MVO.

Nexus
:   Marco de Scrum.org para que 3 a 9 Scrum Teams trabajen sobre un mismo producto, con foco en la integración. Ver [la ficha](biblioteca/scrum/escalamiento.md).

Offboarding
:   Salida planificada de una persona, con traspaso de responsabilidades, conocimiento y accesos.

Pensamiento sistémico
:   Mirar los resultados como producto de la estructura de un sistema (stocks, flujos, bucles y demoras) y no del esfuerzo individual. Ver [la ficha](biblioteca/lean/pensamiento-sistemico.md).

Personal Map
:   Herramienta de Management 3.0 para conocer el contexto personal de cada integrante del equipo.

Planificación por umbral
:   Planificar cuando la lista de ítems listos baja de un nivel acordado (el *punto de pedido* de Corey Ladas), en vez de hacerlo solo por calendario. Ver [Combinar cadencia y flujo](biblioteca/scrumban/cadencia-y-flujo.md).

Postmortem
:   Análisis sin culpa de un incidente para entender sus causas y definir acciones que eviten que se repita.

Product Backlog
:   Lista emergente y ordenada de lo que necesita el producto. Su compromiso es el Product Goal.

Product Goal
:   Estado futuro del producto que sirve de objetivo de largo plazo para el Scrum Team. Ver [Artefactos y compromisos](biblioteca/scrum/artefactos-y-compromisos.md).

Punto de apalancamiento
:   Lugar de un sistema donde un cambio pequeño produce un efecto grande. Según Donella Meadows, las reglas y las metas pesan más que los números. Ver [Pensamiento sistémico](biblioteca/lean/pensamiento-sistemico.md).

Punto de compromiso
:   Línea del tablero a partir de la cual el equipo se compromete a terminar un ítem; antes de ella solo hay opciones. Ver [Visualizar](biblioteca/kanban/visualizar.md).

Punto de entrega
:   Línea del tablero donde el ítem llega al cliente o queda disponible para usarse. Ver [Visualizar](biblioteca/kanban/visualizar.md).

Refinamiento
:   Actividad continua (no un evento) de dividir y detallar los ítems del Product Backlog. Ver [la ficha](biblioteca/scrum/refinamiento.md).

Reposición
:   Cadencia de Kanban (*replenishment*) en la que se eligen qué opciones cruzan el punto de compromiso. Ver [Las cadencias de Kanban](biblioteca/kanban/cadencias-kanban.md).

Reverse shadowing
:   Etapa de un traspaso en que el equipo receptor ejecuta el trabajo real y el equipo saliente revisa y corrige.

Roadmap Ahora / Siguiente / Después
:   Roadmap en tres horizontes de certeza decreciente, expresado en problemas y outcomes en lugar de fechas y funcionalidades.

SAFe
:   *Scaled Agile Framework*. Marco de Scaled Agile para coordinar varios equipos, desde el nivel de equipo hasta el portafolio. Ver [la ficha](biblioteca/scrum/escalamiento.md).

SAST
:   *Static Application Security Testing*. Análisis estático del código propio en busca de vulnerabilidades.

SBOM
:   *Software Bill of Materials*. Inventario de los componentes incluidos en cada versión.

SCA
:   *Software Composition Analysis*. Análisis de dependencias de terceros por vulnerabilidades y licencias.

Scatterplot de tiempos
:   Gráfico en que cada punto es un ítem terminado, con su fecha de término y cuánto tardó; se lee con percentiles. Ver [la ficha](biblioteca/flujo/scatterplot-sle.md).

Scrum Master
:   Accountability de Scrum que responde por la efectividad del Scrum Team y por que Scrum se entienda y practique en el equipo y la organización.

Scrumban
:   Combinación de la cadencia de Scrum con la gestión de flujo y límites de WIP de Kanban. Corey Ladas lo propuso en 2008 como camino desde Scrum hacia un sistema pull; hoy también nombra un híbrido estable. Ver [Qué es Scrumban](biblioteca/scrumban/que-es-scrumban.md).

Shadowing
:   Etapa de un traspaso en que el equipo receptor observa al equipo saliente trabajar sobre casos reales y pregunta.

Sistema pull
:   Sistema en que se empieza un ítem nuevo solo cuando hay capacidad libre, en vez de asignar trabajo sin mirar el WIP. Ver [WIP y sistema pull](biblioteca/kanban/wip-y-pull.md).

SLE
:   *Service Level Expectation*. Pronóstico basado en datos del tiempo en que se completará un ítem (ej. 85 % en 10 días). Ver [Scatterplot, percentiles y SLE](biblioteca/flujo/scatterplot-sle.md).

SPACE
:   Marco de cinco dimensiones para hablar de productividad de developers: satisfacción y bienestar, desempeño, actividad, comunicación y colaboración, y eficiencia y flujo. Ver [la ficha](biblioteca/ingenieria/space.md).

Sprint
:   Ciclo de duración fija, de un mes o menos, que contiene todos los eventos de Scrum. Ver [la ficha](biblioteca/scrum/sprint-y-planning.md).

Sprint Backlog
:   El Sprint Goal, los ítems del Product Backlog seleccionados para el Sprint y el plan para entregarlos.

Sprint Goal
:   Único objetivo del Sprint. Da foco y flexibilidad sobre el trabajo exacto necesario para lograrlo.

STATIK
:   *Systems Thinking Approach to Introducing Kanban*. Pasos del Kanban Method para diseñar un sistema Kanban desde el servicio y su cliente. Ver [la ficha](biblioteca/kanban/statik.md).

STRIDE
:   Modelo de amenazas: suplantación, alteración, repudio, exposición de información, denegación de servicio y elevación de privilegios.

Swarming
:   Práctica en que varias personas del equipo se juntan sobre un mismo ítem para destrabarlo o terminarlo antes de empezar otro.

Tamaño de lote
:   Cantidad de trabajo que pasa junta de una etapa a la siguiente. Lotes más chicos acortan las colas y aceleran la retroalimentación. Ver [Principios de flujo](biblioteca/lean/principios-de-flujo.md).

TDD
:   *Test-Driven Development*. Escribir primero una prueba que falla, luego el código mínimo que la hace pasar, y después mejorar el diseño. En XP se llama *test-first*.

Threat modeling
:   Análisis de cómo puede atacarse una funcionalidad antes de construirla.

Three amigos
:   Conversación entre PO, desarrollo y QA para acordar los criterios de aceptación de una historia antes de construirla.

Throughput
:   Cantidad de ítems terminados por unidad de tiempo. Ver [Métricas y vocabularios](biblioteca/flujo/metricas-y-vocabularios.md).

Time to first deploy
:   Tiempo desde que una persona se incorpora hasta que su primer cambio llega a producción.

Timebox
:   Duración máxima fija de una reunión o actividad; al cumplirse, termina.

Traslape
:   Periodo en que el equipo saliente y el entrante trabajan juntos para transferir conocimiento sin cortar el servicio.

Trunk-based development
:   Práctica de integrar cambios a la rama principal al menos una vez al día, sin ramas de larga vida. Ver [la ficha](biblioteca/ingenieria/trunk-based.md).

Value Stream Map
:   Diagrama del flujo de valor de la idea al usuario, con tiempos de proceso y de espera por etapa.

Ventana de solapamiento
:   Franja horaria en que todas las personas de una célula distribuida están disponibles.

Walking skeleton
:   Implementación mínima de punta a punta que atraviesa toda la arquitectura y llega a producción.

WIP
:   *Work in Progress*. Trabajo iniciado y no terminado. Ver [WIP y sistema pull](biblioteca/kanban/wip-y-pull.md).

Work item age
:   Tiempo que lleva un ítem en curso desde que empezó hasta hoy. Es una de las cuatro métricas de la Kanban Guide; el playbook la llama WIP aging. Ver [la ficha](biblioteca/flujo/work-item-age.md).

WSJF
:   *Weighted Shortest Job First*. Prioriza dividiendo el Cost of Delay entre el tamaño del trabajo, con escalas relativas.

XP
:   *Extreme Programming*. Valores, principios y prácticas de Kent Beck, como programación en pares, integración continua y test-first, para que cambiar el software siga siendo barato. Ver [la ficha](biblioteca/ingenieria/xp.md).
