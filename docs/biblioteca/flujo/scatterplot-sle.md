# Scatterplot, percentiles y SLE

**En una frase:** El scatterplot muestra cuánto tardó cada ítem terminado; sus percentiles responden "¿cuánto tarda un ítem?" con una probabilidad, y el SLE convierte esa respuesta en una expectativa de servicio.

**Área:** Flujo · **Lectura:** ~3 min

## Qué es

En un **scatterplot de tiempos**, cada punto es un ítem terminado: en el eje horizontal va la fecha en que terminó y en el vertical cuántos días tardó. Sobre los puntos se dibujan líneas de **percentiles**:

| Percentil | Se lee como |
|---|---|
| 50 | La mitad de los ítems terminó en ese tiempo o menos. Es una moneda al aire. |
| 85 | 85 de cada 100 ítems terminaron en ese tiempo o menos. Es el más usado para comprometerse. |
| 95 | Casi todos terminaron en ese tiempo o menos. Sirve para lo que no puede fallar. |

Los percentiles no suponen una curva de campana. Por eso sirven para el trabajo del conocimiento, cuyos tiempos tienen una cola larga de ítems lentos que distorsiona el promedio.

El **SLE** (*Service Level Expectation*) de la Kanban Guide tiene dos partes: un plazo y una probabilidad. Por ejemplo: "**85 % de los ítems en 12 días o menos**". La Guide lo basa en el cycle time histórico y pide mostrarlo en la Definition of Workflow. En el vocabulario del playbook, si ese tramo va del compromiso a la entrega, es un lead time P85 (ver [Métricas y vocabularios](metricas-y-vocabularios.md)).

## Para qué sirve (y cuándo no)

Responde con datos "¿cuándo estará listo esto?" para un ítem, sin estimar. También muestra la variabilidad: puntos muy dispersos indican que el sistema es poco predecible, aunque el promedio se vea bien.

No sirve sin un historial razonable del mismo tipo de trabajo. Si el equipo, el proceso o el tipo de ítem cambiaron hace poco, los percentiles describen un sistema que ya no existe. Y un SLE no es un SLA: es una expectativa basada en datos, no un contrato con multas.

## Cómo se aplica

Para construir un SLE:

1. Junta los tiempos de los ítems terminados en las últimas 8 a 12 semanas, separando por tipo si se comportan distinto (historias, incidentes).
2. Ordénalos de menor a mayor y busca el valor bajo el cual queda el 85 %. Ejemplo ilustrativo: con 40 ítems ordenados, si el que queda en el lugar 34 tardó 12 días, el percentil 85 es 12 días (34 de 40 tardaron eso o menos).
3. Escríbelo como SLE: "85 % de los ítems en 12 días o menos".
4. Muéstralo en el tablero y úsalo como umbral para la [edad de los ítems](work-item-age.md) en curso.
5. Revísalo cada pocas semanas: si el sistema mejora, el SLE baja.

## Errores típicos

- Reportar el promedio en vez de los percentiles.
- Comprometer el percentil 50 como si fuera seguro.
- Borrar los puntos "raros" de arriba: son justamente los que más importan.
- No acordar cómo se cuentan los días (calendario o hábiles, y si un ítem que empieza y termina el mismo día cuenta como 1).
- Usar el SLE para presionar a personas en vez de cambiar el sistema.

## Qué observar al llegar a un equipo

- ¿El equipo puede decir cuánto tarda un ítem típico sin consultar a nadie? ¿Con qué probabilidad?
- ¿Los tiempos se reportan como promedio o como rango?
- En el scatterplot, ¿la distancia entre el percentil 50 y el 95 es grande? Esa brecha mide la imprevisibilidad.
- ¿Hay puntos en columnas verticales? Suelen ser entregas por lote o tarjetas cerradas en masa.
- ¿Hay alguna promesa de plazo a clientes? ¿De dónde salió el número?

## Relacionado

- [Work item age](work-item-age.md) · [Pronóstico probabilístico](pronostico-probabilistico.md) · [Métricas y vocabularios](metricas-y-vocabularios.md)
- [Clases de servicio](../kanban/clases-de-servicio.md) · [Kanban en una página](../kanban/kanban-en-una-pagina.md)
- [Fase 5 · Pronosticar con datos](../../fases/05-medicion.md#54-pronosticar-con-datos) · [Catálogo de métricas](../../caja-de-herramientas/catalogo-metricas.md)

## Para profundizar

- Daniel Vacanti y John Coleman (con otros colaboradores), *The Kanban Guide*, mayo de 2025 (versión 2025.5), sección sobre el SLE. [kanbanguides.org](https://kanbanguides.org/english/).
- Daniel S. Vacanti, *Actionable Agile Metrics for Predictability*, edición del décimo aniversario, 2025, capítulos sobre scatterplots y SLE.
