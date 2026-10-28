# Glosario

ADR
:   *Architecture Decision Record*. Documento breve que registra una decisión, su contexto y consecuencias.

Agente de IA
:   Herramienta de IA que ejecuta tareas de varios pasos con cierta autonomía (abrir PRs, correr comandos) bajo permisos definidos.

Asistente de código
:   Herramienta de IA que sugiere o genera código dentro del editor o del flujo de revisión.

Blue / Green
:   Estrategia de despliegue con dos ambientes de producción idénticos; se cambia el tráfico de uno a otro y se vuelve atrás al instante si falla.

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
:   *Cumulative Flow Diagram*. Gráfico que muestra la cantidad de ítems por estado a lo largo del tiempo.

Change failure rate
:   Porcentaje de despliegues que causan una falla en producción que requiere corrección.

Clase de servicio
:   Política que define cómo se trata un tipo de ítem según su urgencia y costo de demora.

Cost of Delay
:   Valor que se pierde por cada unidad de tiempo que un ítem no está en producción.

Cycle time
:   Tiempo desde que se empieza a trabajar en un ítem hasta que se termina.

Dependencia externa
:   Trabajo, recurso o aprobación que una célula necesita de otra célula o de un tercero para terminar un ítem.

DoR / DoD
:   *Definition of Ready* y *Definition of Done*. Acuerdos sobre cuándo un ítem puede empezar y cuándo está terminado.

DORA
:   Cuatro métricas de desempeño de entrega de software: frecuencia de despliegue, lead time de cambios, change failure rate y tiempo de recuperación.

Eficiencia de flujo
:   Proporción del lead time en que un ítem recibe trabajo activo.

Exit plan
:   Plan de salida acordado en el contrato con un proveedor: traslape, entregables, propiedad intelectual y continuidad del servicio.

Expedito
:   Clase de servicio para urgencias, como un incidente crítico: se salta la fila y tiene un límite de WIP de 1.

Fake door
:   Experimento que muestra una opción que aún no existe para medir cuántas personas la eligen.

Feature flag
:   Mecanismo para activar o desactivar funcionalidades sin desplegar código nuevo.

Happiness Door
:   Técnica de Management 3.0 en que cada persona marca cómo se siente al cerrar una reunión, para ver tendencias de ánimo.

Impact Mapping
:   Técnica que conecta una meta de negocio con actores, impactos esperados en su comportamiento y entregables.

Kudo Cards
:   Tarjetas de reconocimiento entre pares de Management 3.0.

Lead time
:   Tiempo desde que se compromete un ítem hasta que está disponible en producción.

Mapa de conocimiento
:   Matriz que cruza áreas funcionales, técnicas y operativas con las personas que las dominan y su nivel. Mide el avance de un traspaso.

Matriz poder / interés
:   Herramienta que ubica a cada stakeholder según su capacidad de influir y su interés en el producto, para definir cómo involucrarlo.

Métrica de vanidad
:   Indicador que crece sin reflejar valor, como las líneas de código generadas.

Monte Carlo
:   Simulación que usa datos históricos de throughput para pronosticar fechas o alcance con probabilidades.

Moving Motivators
:   Juego de Management 3.0 para conocer qué motiva a cada persona y cómo lo afecta un cambio.

MVO
:   *Minimum Viable Outcome*. El cambio mínimo y medible en el comportamiento del usuario o negocio que valida una apuesta.

MVP
:   *Minimum Viable Product*. El producto mínimo construido para aprender si se logra el MVO.

Offboarding
:   Salida planificada de una persona, con traspaso de responsabilidades, conocimiento y accesos.

Personal Map
:   Herramienta de Management 3.0 para conocer el contexto personal de cada integrante del equipo.

Postmortem
:   Análisis sin culpa de un incidente para entender sus causas y definir acciones que eviten que se repita.

Reverse shadowing
:   Etapa de un traspaso en que el equipo receptor ejecuta el trabajo real y el equipo saliente revisa y corrige.

Roadmap Ahora / Siguiente / Después
:   Roadmap en tres horizontes de certeza decreciente, expresado en problemas y outcomes en lugar de fechas y funcionalidades.

SAST
:   *Static Application Security Testing*. Análisis estático del código propio en busca de vulnerabilidades.

SBOM
:   *Software Bill of Materials*. Inventario de los componentes incluidos en cada versión.

SCA
:   *Software Composition Analysis*. Análisis de dependencias de terceros por vulnerabilidades y licencias.

Scrumban
:   Combinación de la cadencia de Scrum con la gestión de flujo y límites de WIP de Kanban.

Shadowing
:   Etapa de un traspaso en que el equipo receptor observa al equipo saliente trabajar sobre casos reales y pregunta.

SLE
:   *Service Level Expectation*. Pronóstico basado en datos del tiempo en que se completará un ítem (ej. 85 % en 10 días).

STRIDE
:   Modelo de amenazas: suplantación, alteración, repudio, exposición de información, denegación de servicio y elevación de privilegios.

Swarming
:   Práctica en que varias personas del equipo se juntan sobre un mismo ítem para destrabarlo o terminarlo antes de empezar otro.

Threat modeling
:   Análisis de cómo puede atacarse una funcionalidad antes de construirla.

Three amigos
:   Conversación entre PO, desarrollo y QA para acordar los criterios de aceptación de una historia antes de construirla.

Throughput
:   Cantidad de ítems terminados por unidad de tiempo.

Time to first deploy
:   Tiempo desde que una persona se incorpora hasta que su primer cambio llega a producción.

Timebox
:   Duración máxima fija de una reunión o actividad; al cumplirse, termina.

Traslape
:   Periodo en que el equipo saliente y el entrante trabajan juntos para transferir conocimiento sin cortar el servicio.

Trunk-based development
:   Práctica de integrar cambios a la rama principal al menos una vez al día.

Value Stream Map
:   Diagrama del flujo de valor de la idea al usuario, con tiempos de proceso y de espera por etapa.

Ventana de solapamiento
:   Franja horaria en que todas las personas de una célula distribuida están disponibles.

Walking skeleton
:   Implementación mínima de punta a punta que atraviesa toda la arquitectura y llega a producción.

WIP
:   *Work in Progress*. Trabajo iniciado y no terminado.

WSJF
:   *Weighted Shortest Job First*. Prioriza dividiendo el Cost of Delay entre el tamaño del trabajo, con escalas relativas.
