# Las métricas de flujo y sus dos vocabularios

**En una frase:** Las métricas de flujo describen cuánto trabajo hay en curso, cuánto sale y cuánto tarda; las dos escuelas de Kanban las nombran distinto, y confundirlas lleva a comparar números que miden cosas diferentes.

**Área:** Flujo · **Lectura:** ~3 min

## Qué es

Cuatro mediciones describen el flujo: cuánto hay en curso, cuánto se termina, cuánto tardó lo terminado y cuánto lleva lo abierto. No necesitan estimaciones: salen de las fechas en que cada ítem cruza los puntos de inicio y de término.

El problema es el nombre: el playbook usa el vocabulario del **Kanban Method** (Anderson). La **Kanban Guide** (Vacanti y Coleman, versión 2025.5) usa otro y no habla de *lead time*. Esta es la equivalencia:

| Concepto | Kanban Method / playbook | Kanban Guide |
|---|---|---|
| Trabajo en curso | **WIP**: ítems comprometidos y no entregados | **WIP**: ítems iniciados y no terminados |
| Ritmo de salida | **Throughput**: ítems terminados por semana | **Throughput**: ítems terminados por unidad de tiempo |
| Del compromiso a la entrega | **Lead time** | **Cycle time**, si el inicio definido es el compromiso y el término, la entrega |
| De empezar a terminar el trabajo | **Cycle time** | **Cycle time**, si el equipo define esos puntos de inicio y término |
| Tiempo que lleva un ítem abierto | **WIP aging** (edad de lo que está en curso) | **Work item age**: tiempo desde el inicio hasta hoy |
| Promesa de plazo | Lead time P85 como referencia de servicio | **SLE**: un plazo y una probabilidad, basados en el cycle time histórico |

La clave: en la Guide, *cycle time* no es un tramo fijo. Es el tiempo entre los puntos de inicio y de término que el equipo escribe en su Definition of Workflow. La Guide exige cuatro métricas (WIP, throughput, work item age y cycle time) y permite renombrarlas si se usan como ella las describe.

## Para qué sirve (y cuándo no)

Evita malentendidos con otro equipo, un proveedor o alguien formado en ProKanban o en Kanban University. Un "cycle time de 5 días" puede ser el lead time de un equipo o solo el tramo de desarrollo de otro.

No sirve como discusión de identidad: ninguna escuela tiene "el nombre correcto". Lo que importa es escribir qué se mide y medirlo siempre igual.

## Cómo se aplica

1. Escribe en las políticas del tablero dónde empieza y dónde termina cada medición, con el nombre que usa el equipo.
2. Si el equipo viene de la Kanban Guide, anota la equivalencia con el vocabulario del playbook.
3. Mide en ítems, no en puntos ni en horas.
4. Revisa las cuatro métricas juntas: el throughput puede subir mientras el WIP y la edad se disparan.
5. Reporta los tiempos con percentiles, no con promedios. Lo detalla la ficha [Scatterplot, percentiles y SLE](scatterplot-sle.md).

## Errores típicos

- Comparar el cycle time de equipos que lo miden entre puntos distintos.
- Cambiar el punto de inicio en la herramienta y leer la "mejora" como real.
- Medir throughput en puntos de historia.
- Mirar solo lo terminado (lead time) y no lo que envejece en curso.
- Usar los nombres de una escuela con las definiciones de la otra.

## Qué observar al llegar a un equipo

- Pregunta "¿desde cuándo y hasta cuándo mides el cycle time?" a dos o tres personas. ¿Responden lo mismo?
- ¿La herramienta calcula las métricas desde la columna que el equipo cree? Revisa la configuración, no el informe.
- ¿Hay un informe con tiempos en promedio? Pide la distribución.
- ¿Alguien sabe cuántos ítems hay en curso hoy sin contarlos?

## Relacionado

- [Ley de Little](ley-de-little.md) · [Work item age](work-item-age.md) · [Cómo leer un CFD](cfd.md)
- [Kanban en una página](../kanban/kanban-en-una-pagina.md) · [Visualizar](../kanban/visualizar.md)
- [Catálogo de métricas](../../caja-de-herramientas/catalogo-metricas.md) · [Fase 5 · Medición y aprendizaje](../../fases/05-medicion.md)

## Para profundizar

- Daniel Vacanti y John Coleman (con otros colaboradores), *The Kanban Guide*, mayo de 2025 (versión 2025.5), sección sobre las métricas de flujo. [kanbanguides.org](https://kanbanguides.org/english/).
- David J. Anderson, *Kanban: Successful Evolutionary Change for Your Technology Business*, 2010.
- Daniel S. Vacanti, *Actionable Agile Metrics for Predictability*, edición del décimo aniversario, 2025.
