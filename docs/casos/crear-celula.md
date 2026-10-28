# Caso · Crear una célula para crédito en línea

!!! note "Caso ficticio"
    Organización, personas y cifras inventadas con fines ilustrativos. Ver [Casos de ejemplo](index.md).

## Contexto

Una financiera mediana ofrece créditos de consumo. Su web tiene un formulario que solo captura datos: el call center llama al cliente, pide documentos por correo y arma la solicitud. El patrocinador (gerente de canales digitales) quiere bajar el costo por solicitud y el tiempo de respuesta. No hay equipo ni producto.

## Punto de partida

- 100 % de las solicitudes pasan por el call center.
- Sin pipeline, sin ambientes para el nuevo producto y sin datos de uso de la web.
- Equipo asignado en la semana 1: PO, SM / Coach, Tech Lead, 3 desarrolladores, QA y UX (8 personas dedicadas).

Siguiendo [Cómo usar la guía](../como-usar.md), el producto no está validado: Fase 0 → 1 completa con experimentos antes de acelerar.

## Recorrido

### Semanas 1–2 · Fase 0

Con la [Fase 0](../fases/00-diagnostico-onboarding.md) se escribió el objetivo en una frase: *"Que un cliente pueda solicitar un crédito de consumo sin depender del call center"*. El equipo hizo su [Team Canvas](../caja-de-herramientas/team-canvas.md) y un [Delegation Board](../caja-de-herramientas/delegation-board.md) donde el equipo decide el stack y el PO decide el orden del backlog. Todas las personas tenían accesos el día 3.

### Semanas 2–6 · Fase 1

Siete entrevistas de problema y el [Lean Canvas](../caja-de-herramientas/lean-canvas-hipotesis.md) llevaron al **MVO**:

> El 30 % de las solicitudes iniciadas en la web se completa sin contacto con el call center, dentro de las 8 semanas siguientes a liberar el MVP al 100 % del tráfico.

| Hipótesis | Experimento | Resultado | Decisión |
|---|---|---|---|
| H1 · Ver la cuota antes de dar datos aumenta el inicio de solicitudes | *Fake door* con simulador en la web (Semana 4) | 18 % de clics vs. 7 % del formulario actual | Validada |
| H2 · El cliente sube fotos de sus documentos desde el celular | Prototipo con 8 usuarios (Semana 5) | 6 de 8 completaron la tarea | Validada |
| H3 · El cliente acepta una videollamada para verificar identidad | Prototipo con 8 usuarios (Semana 5) | 2 de 8 aceptaron | Invalidada: se reemplaza por selfie + consulta al registro civil |

El [User Story Map](../caja-de-herramientas/user-story-map.md) fijó la primera línea de release: simulador, datos personales, documentos, verificación con selfie y respuesta en pantalla. El panel para ejecutivos quedó en "Siguiente".

### Semanas 5–8 · Fase 2

En paralelo al cierre del descubrimiento, la [Fase 2](../fases/02-fundaciones-tecnicas.md) produjo los diagramas C4 niveles 1 y 2, el [ADR](../caja-de-herramientas/adr.md)-001 (stack y uso de la API del core de créditos) y el `docker compose up` del entorno local. El *walking skeleton* —una página "hola mundo" detrás del dominio real— llegó a producción por el pipeline en la **Semana 7**. La [DoD](../caja-de-herramientas/dor-dod.md) incluye "desplegado en producción detrás de feature flag".

### Semanas 6–9 · Fase 3

Se clasificó la demanda durante cuatro semanas:

| Tipo | Ítems | % |
|---|---|---|
| Evolución de producto y experimentos | 33 | 79 % |
| Deuda / mejora | 3 | 7 % |
| Soporte e incidencias (integración con el core, ambientes) | 6 | 14 % |
| **Total** | **42** | **100 %** |

Con 14 % de demanda no planificada (menos de 20 %), la [Fase 3](../fases/03-sistema-de-trabajo.md) indica **Scrum con capacidad reservada**: sprints de 2 semanas, 15 % reservado para soporte y deuda. La decisión quedó en un ADR de proceso y las reglas en las [políticas del tablero](../caja-de-herramientas/politicas-tablero.md).

### Semanas 9–13 · Fase 4

El MVP se construyó en historias de 1 a 3 días. Siguiendo la [Fase 4](../fases/04-entrega-continua.md) y el [checklist de paso a producción](../caja-de-herramientas/checklist-produccion.md), se liberó con feature flag al 10 % del tráfico en la **Semana 12** y al 100 % al cierre de la **Semana 13**. El plazo del MVO vence, por tanto, en la **Semana 21**.

### Semanas 10–17 · Fase 5

La [Fase 5](../fases/05-medicion.md) definió el set mínimo con el [catálogo de métricas](../caja-de-herramientas/catalogo-metricas.md). Línea base de entrega, semanas 10–15:

| Métrica | Línea base |
|---|---|
| Lead time P85 | 9 días |
| Throughput | 7 ítems por semana |
| Frecuencia de despliegue | 3 por semana (18 en 6 semanas) |
| Change failure rate | 6 % (1 de 18 despliegues) |

**Decisión con datos (Semana 15).** El embudo de las semanas 14–15 mostró:

| Paso | Solicitudes |
|---|---|
| Iniciadas | 1.240 |
| Llegan al paso de documentos | 980 |
| Abandonan en documentos | 470 (48 % de las que llegan) |
| Completadas sin call center | 260 (21 % de las iniciadas) |

Con 21 % frente a un umbral de 30 %, el PO y el patrocinador revisaron el embudo en la revisión con negocio. Decidieron **perseverar** con el MVO, pero mover arriba del backlog el "precargado de ingresos desde la consulta al buró", que elimina la carga de la liquidación de sueldo, y bajar el panel de ejecutivos a "Después". La decisión quedó registrada con su dato de origen.

## Resultados

| Métrica | Semanas 14–15 | Semanas 16–17 |
|---|---|---|
| Solicitudes iniciadas | 1.240 | 1.310 |
| Completadas sin call center | 260 (21 %) | 341 (26 %) |

A la Semana 17 el MVO no está cumplido, pero la tendencia apunta al umbral antes del plazo de la Semana 21. La decisión de perseverar o pivotar se toma con el dato de esa semana.

## Lecciones

- **El MVO con plazo ordena la conversación.** Sin la fecha de la Semana 21, el 21 % de la Semana 15 habría disparado un rediseño apresurado.
- **Invalidar H3 en la Semana 5 ahorró un sprint completo** de integración con una plataforma de video.
- **Walking skeleton antes del MVP.** Cuando llegó la primera historia real, el pipeline ya había desplegado 11 veces.
- **El embudo, no el promedio, encontró el problema.** El paso de documentos explicaba casi todo el abandono.
