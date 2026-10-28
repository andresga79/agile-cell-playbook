# Assessment de madurez

**Fase:** 0 (y cada 6 meses para medir evolución) · **Duración:** 2 a 3 semanas · **Facilita:** Scrum Master o Agile Coach

Cuestionario para diagnosticar una célula existente en seis dimensiones. El resultado indica **qué fases de la guía reforzar primero**.

!!! tip "Calculadora"
    Registra los puntajes en la [calculadora de madurez](calculadora-madurez.md): genera el radar, detecta brechas entre la autoevaluación y lo observado, y propone el orden de fases.

## Cómo se aplica

### Principios

- **Evidencia antes que opinión.** Cada puntaje debe apoyarse en datos o en algo observado. Si no hay evidencia, se puntúa bajo y se anota qué falta.
- **Dos miradas.** El equipo se autoevalúa y el facilitador puntúa lo observado. Las diferencias de más de 1 punto son lo más valioso del ejercicio.
- **No es una evaluación de personas.** Se evalúa el sistema de trabajo. Los resultados nunca se usan para comparar equipos ni para evaluar desempeño individual.
- **Si no aplica, se marca N/A** y no cuenta en el promedio.

### Plan de 3 semanas

| Semana | Actividad | Resultado |
|---|---|---|
| 1 · Datos | Extraer 3 meses de historial de Jira (o equivalente), pipelines, incidentes y releases. Calcular lead time, throughput, WIP, frecuencia de despliegue y defectos escapados | Línea base cuantitativa |
| 2 · Observación | 1:1 de 30 minutos con cada persona, PO y patrocinador. Observar daily, refinamiento, review y retro sin intervenir | Notas de evidencia por pregunta |
| 3 · Puntuación | Autoevaluación del equipo (60 min, individual y luego consenso). Puntuación del facilitador. Taller de brechas (60 min) | Radar, brechas y prioridades |
| Cierre | Presentación al patrocinador y al equipo con el plan de fases | Plan acordado |

### Escala

Cada pregunta describe los niveles **1, 3 y 5**. El 2 y el 4 se usan cuando la realidad está entre dos descripciones.

| Nivel | Nombre | Lectura general |
|---|---|---|
| 1 | Inicial | La práctica no existe o depende de esfuerzos individuales |
| 2 | Repetible | Existe en parte, de forma inconsistente |
| 3 | Definido | Existe, es conocida y se aplica la mayor parte del tiempo |
| 4 | Gestionado | Se mide y se ajusta con datos |
| 5 | Optimizado | Es parte de la cultura y mejora de forma continua |

## Cuestionario

### 1 · Producto

| ID | Pregunta | Nivel 1 | Nivel 3 | Nivel 5 | Evidencia |
|---|---|---|---|---|---|
| PR1 | ¿El backlog está conectado con objetivos de negocio? | Lista de pedidos de stakeholders sin objetivo explícito | Las épicas se vinculan a objetivos, las historias no siempre | Todo ítem es trazable a un outcome u OKR; se rechazan pedidos sin vínculo | Backlog, roadmap, OKR |
| PR2 | ¿Se mide el impacto de lo que se entrega? | No se mide nada después de liberar | Se miden algunas funcionalidades, de forma ocasional | Cada release define su métrica de outcome antes de construir y se revisa después | Dashboards de producto, actas de review |
| PR3 | ¿Se validan hipótesis antes de construir? | Todo se construye completo asumiendo que es correcto | Ocasionalmente se usan prototipos o pruebas con usuarios | Hipótesis explícitas, experimentos baratos y decisiones de perseverar o pivotar documentadas | Backlog de hipótesis, resultados de experimentos |
| PR4 | ¿Cómo es el roadmap? | No existe o es una lista de funcionalidades con fechas comprometidas | Roadmap por temas con fechas estimadas | Roadmap por outcomes (Ahora / Siguiente / Después) revisado con datos cada trimestre | Roadmap vigente |
| PR5 | ¿El equipo tiene contacto con usuarios reales? | El equipo nunca habla con usuarios | El PO tiene contacto esporádico y lo transmite | Descubrimiento continuo; el equipo participa con regularidad en entrevistas o pruebas | Calendario, registros de entrevistas |

### 2 · Flujo

| ID | Pregunta | Nivel 1 | Nivel 3 | Nivel 5 | Evidencia |
|---|---|---|---|---|---|
| FL1 | ¿El tablero refleja el flujo real del trabajo? | Hay trabajo invisible; el tablero no refleja la realidad | Refleja la mayor parte del trabajo, sin distinguir esperas | Refleja el flujo de valor completo, de la idea a la validación, con estados de espera | Tablero, observación de la daily |
| FL2 | ¿Se limita el trabajo en curso? | Sin límites; cada persona tiene varios ítems abiertos | Hay límites definidos, pero se ignoran con frecuencia | Los límites se respetan, se discuten al superarse y se ajustan con datos | Configuración del tablero, WIP histórico |
| FL3 | ¿Qué tan predecible es la entrega? | No se sabe cuánto tarda un ítem; alta dispersión | Se conoce el lead time promedio | Hay SLE por percentiles y pronósticos probabilísticos usados con negocio | Scatterplot de cycle time, pronósticos |
| FL4 | ¿Cómo se gestiona el trabajo no planificado? | Interrupciones constantes que no se registran | Se registran, pero no hay capacidad reservada | Clases de servicio y capacidad reservada ajustada con datos | % de trabajo no planificado, políticas |
| FL5 | ¿Cómo se gestionan bloqueos y dependencias? | Los bloqueos no son visibles y duran semanas | Se marcan, pero no se analizan | Se marcan, se escalan según política y se analizan sus causas periódicamente | Historial de bloqueos, tiempo bloqueado |

### 3 · Ingeniería

| ID | Pregunta | Nivel 1 | Nivel 3 | Nivel 5 | Evidencia |
|---|---|---|---|---|---|
| IN1 | ¿Existe integración continua? | Sin CI; se compila y se integra a mano | CI compila y corre algunas pruebas; ramas que viven semanas | CI en cada PR, ramas de menos de 2 días y `main` siempre en verde | Pipelines, antigüedad de ramas |
| IN2 | ¿Cómo se despliega a producción? | Manual, con documento de pasos y días de esfuerzo | Parcialmente automatizado, en ventanas mensuales | Automatizado por pipeline, a demanda, sin intervención manual | Frecuencia de despliegue, runbooks |
| IN3 | ¿Cómo son los ambientes? | Ambientes distintos entre sí; "en mi máquina funciona" | Algunos servicios en contenedores; diferencias entre ambientes | Entorno local con un comando, la misma imagen se promueve y la infraestructura es código | Dockerfiles, IaC, tiempo de setup |
| IN4 | ¿La arquitectura está documentada? | No hay documentación o está desactualizada | Hay diagramas, pero no se mantienen | Diagramas C4 versionados y ADRs para las decisiones relevantes | Repositorio, carpeta `docs/` |
| IN5 | ¿Cómo se detectan los problemas en producción? | Los usuarios reportan las fallas | Hay logs y algunas alertas | Logs estructurados, métricas, trazas y alertas sobre síntomas del usuario | Herramienta de monitoreo, origen de incidentes |

### 4 · Calidad

| ID | Pregunta | Nivel 1 | Nivel 3 | Nivel 5 | Evidencia |
|---|---|---|---|---|---|
| CA1 | ¿Cuánto se automatizan las pruebas? | Solo pruebas manuales | Pruebas unitarias en parte del código; E2E inexistentes o frágiles | Pirámide de pruebas equilibrada que corre en el pipeline | Reportes de pruebas, cobertura |
| CA2 | ¿Cuál es el rol de QA? | QA prueba al final y es un embudo | QA participa a veces en refinamiento | *Three amigos*, criterios Given / When / Then y QA que automatiza y acompaña al equipo | Historias, observación del refinamiento |
| CA3 | ¿Cómo evolucionan los defectos escapados a producción? | No se registran o son frecuentes | Se registran; tendencia irregular | Se registran, se analizan sus causas y la tendencia es decreciente | Bugs en producción por periodo |
| CA4 | ¿Existe y se cumple una Definition of Done? | No existe | Existe, pero no incluye producción o no se cumple | Incluye "desplegado en producción", se cumple y se revisa | DoD publicada, ítems cerrados |
| CA5 | ¿Cómo se gestionan los incidentes? | Sin proceso; se apagan incendios | Hay proceso de hotfix, sin postmortem | Postmortems sin culpa con acciones cerradas y tiempo de recuperación medido | Postmortems, MTTR |

### 5 · Equipo

| ID | Pregunta | Nivel 1 | Nivel 3 | Nivel 5 | Evidencia |
|---|---|---|---|---|---|
| EQ1 | ¿El equipo es estable y dedicado? | Personas repartidas en varios proyectos; rotación alta | La mayoría está dedicada; rotación moderada | Dedicación completa, rotación baja y traspasos planificados | Asignaciones, rotación de 12 meses |
| EQ2 | ¿Cuánto se autoorganiza el equipo? | Todas las decisiones vienen de fuera del equipo | El equipo decide lo técnico, pero no su forma de trabajar | Delegation Board explícito; el equipo decide la mayor parte de lo operativo | Delegation Board, 1:1 |
| EQ3 | ¿Hay seguridad psicológica? | Los errores se ocultan; silencio en las retros | Se habla de problemas, con cautela | Los errores se discuten abiertamente y se cuestiona a la jerarquía con respeto | Observación de retros, encuesta breve |
| EQ4 | ¿Funciona la mejora continua? | No hay retros o no generan acciones | Retros con acciones que a veces se completan | Experimentos de mejora medidos, con capacidad reservada | Backlog de mejora, acciones cerradas |
| EQ5 | ¿Cómo se distribuye el conocimiento? | Silos y cuellos de botella por especialistas | Pairing o revisión cruzada ocasional | Habilidades en forma T, *swarming* habitual y conocimiento distribuido | Quién puede hacer qué, *bus factor* |

### 6 · Relación con negocio

| ID | Pregunta | Nivel 1 | Nivel 3 | Nivel 5 | Evidencia |
|---|---|---|---|---|---|
| NE1 | ¿El Product Owner tiene autoridad real? | Es un intermediario sin poder de decisión | Decide el orden, pero los stakeholders imponen prioridades | Tiene autoridad real y mandato explícito del patrocinador | Observación, entrevistas a stakeholders |
| NE2 | ¿El patrocinador está involucrado? | Ausente | Participa solo en hitos | Participa con regularidad en revisiones y decide con datos | Asistencia a reviews, decisiones |
| NE3 | ¿Cómo son las revisiones con negocio? | No existen o son presentaciones sin software | Demos de software en staging | Software en producción con datos de uso y decisiones de roadmap | Actas de review |
| NE4 | ¿Cómo planifica el negocio con el equipo? | Pide reportes de estado, horas o fechas fijas | Hay dashboards, pero se siguen exigiendo fechas fijas | Usa métricas de flujo y pronósticos para planificar | Reportes, conversaciones de planificación |
| NE5 | ¿El modelo de gobierno favorece el valor? | Se mide por horas o alcance fijo; "nosotros contra ellos" | Capacidad dedicada, pero gobernada por horas | Niveles de servicio basados en flujo y outcomes; ceremonias conjuntas | Contrato, informes de gestión |

!!! note "NE5 en equipos internos"
    Si la célula es propia, interpreta NE5 como el acuerdo con las áreas que dependen de ella: ¿se le exige por actividad o por resultados?

## Interpretación

### Puntaje por dimensión

Promedio de las preguntas respondidas (sin N/A), redondeado a un decimal.

| Puntaje | Nivel |
|---|---|
| 1,0 – 1,9 | Inicial |
| 2,0 – 2,9 | Repetible |
| 3,0 – 3,9 | Definido |
| 4,0 – 4,4 | Gestionado |
| 4,5 – 5,0 | Optimizado |

### De dimensión a fase

| Dimensión | Fases a reforzar |
|---|---|
| Producto | [Fase 1 · Descubrimiento](../fases/01-descubrimiento.md) |
| Flujo | [Fase 3 · Sistema de trabajo](../fases/03-sistema-de-trabajo.md) y [Fase 5 · Medición](../fases/05-medicion.md) |
| Ingeniería | [Fase 2 · Fundaciones técnicas](../fases/02-fundaciones-tecnicas.md) |
| Calidad | [Fase 2 · Fundaciones técnicas](../fases/02-fundaciones-tecnicas.md) y [Fase 4 · Entrega continua](../fases/04-entrega-continua.md) |
| Equipo | [Fase 0 · Onboarding](../fases/00-diagnostico-onboarding.md) (Team Canvas, Delegation Board) y [Fase 6 · Mejora](../fases/06-mejora-innovacion.md) |
| Relación con negocio | [Fase 1 · Descubrimiento](../fases/01-descubrimiento.md) y [Gobierno con proveedores](../fases/transversal-gobierno-proveedores.md) |

!!! note "Antes de un traspaso"
    Si la célula pasará de un proveedor a un equipo interno, un puntaje bajo en EQ5 (conocimiento) o en Ingeniería alarga el traslape. Úsalo para dimensionar el [plan de traspaso](../fases/transversal-traspaso-proveedor.md).

### Reglas de priorización

1. **Primero el flujo.** Si Flujo está por debajo de 2,5, la Fase 3 va primero aunque otra dimensión tenga menor puntaje: sin flujo visible y limitado, ninguna otra mejora se puede medir.
2. **Riesgo de producción.** Si Ingeniería o Calidad están por debajo de 2, se reforzarán antes de aumentar el ritmo de entrega o el tamaño del equipo.
3. **Luego, de menor a mayor.** El resto de dimensiones se aborda empezando por el puntaje más bajo.
4. **Máximo dos frentes a la vez.** Aplicar el mismo límite de WIP a la mejora.
5. **Brechas de percepción.** Una diferencia de más de 1 punto entre autoevaluación y observación se trata antes que el puntaje: es una conversación pendiente, no un error de medición.

## Registro de resultados

Guarda cada aplicación para comparar en el tiempo. La calculadora exporta esta tabla lista para pegar:

```markdown
# Assessment · [Célula] · [AAAA-MM-DD]

| Dimensión | Autoevaluación | Observado | Brecha | Nivel |
|---|---|---|---|---|
| Producto | | | | |
| Flujo | | | | |
| Ingeniería | | | | |
| Calidad | | | | |
| Equipo | | | | |
| Relación con negocio | | | | |

**Prioridades acordadas:** 
**Próxima aplicación:** [AAAA-MM-DD]
```
