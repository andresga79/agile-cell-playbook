# Combinar cadencia y flujo

**En una frase:** La cadencia da el para qué y el momento de inspeccionar; el flujo controla cuánto trabajo hay en curso y cuándo entra lo siguiente.

**Área:** Scrumban · **Lectura:** ~3 min

## Qué es

Tres prácticas juntan el ritmo de Scrum con la gestión de flujo de Kanban:

- **Sprint Goal con WIP.** El Sprint Goal dice qué importa; el límite de WIP, cuánto se trabaja a la vez. Al llegar al límite, el equipo ayuda a terminar lo que acerca al Sprint Goal.
- **Planificación por umbral** (*on-demand planning*). Ladas lo planteó con un **punto de pedido**: cuando la lista de pendientes baja de ese nivel, se avisa para organizar la siguiente planificación. En su versión más avanzada, la planificación del Sprint sigue siendo periódica, pero solo llena los espacios libres en vez de cargar el Sprint completo.
- **Scrum con métricas de flujo.** La *Kanban Guide for Scrum Teams* (Scrum.org, enero de 2021) suma cuatro métricas: WIP, *cycle time*, *work item age* y throughput. No reemplaza ninguna parte de Scrum ni agrega eventos.

Sobre el vocabulario: en esa guía, el *cycle time* va entre los puntos de inicio y término que define el equipo. Equivale al lead time del playbook solo si esos puntos son el compromiso y la entrega.

## Para qué sirve (y cuándo no)

Mantiene lo que Scrum hace bien (objetivo común, revisión con interesados y retro) y le quita rigidez: el trabajo entra cuando hay capacidad, no todo el primer día, y el "¿cuándo?" se responde con datos.

No sirve si el equipo todavía no tiene Sprint Goal ni Definition of Done: el flujo amplifica lo que hay, también el desorden. Y la planificación por umbral necesita un Product Owner disponible durante el Sprint.

## Cómo se aplica

Cada evento de Scrum se apoya en el flujo:

| Evento | Qué agrega el flujo |
|---|---|
| Sprint Planning | Throughput histórico para dimensionar, con espacio para lo que entra después |
| Daily Scrum | Recorre el tablero: bloqueos, ítems viejos y WIP excedido |
| Sprint Review | Throughput para conversar fechas de entrega probables |
| Retrospectiva | Revisa la Definition of Workflow: estados, límites y políticas |

Pasos para empezar:

1. Escribe con el equipo dónde empieza y dónde termina el trabajo, y pon un límite de WIP total.
2. En la Planning, compromete el Sprint Goal sin cargar toda la capacidad el primer día.
3. Define el umbral de la lista de "listos". Como referencia: los ítems que el equipo termina en el tiempo que tarda el PO en preparar más.
4. Cuando la lista cruza el umbral, haz un refinamiento o planificación corta, sin esperar al siguiente Sprint.

## Errores típicos

- Límite de WIP que se ignora "porque es para el Sprint Goal".
- Umbral sin dueño: la lista se vacía y el equipo inventa trabajo.
- Medir velocity y throughput a la vez, con dos historias que no coinciden.
- Usar el *cycle time* de la guía como si fuera el lead time, sin revisar los puntos de inicio y término.

## Qué observar al llegar a un equipo

- ¿Cuántos ítems hay en curso a mitad del Sprint, comparado con las personas del equipo?
- ¿El Sprint Backlog se carga completo el primer día o se va llenando?
- ¿Quién avisa cuando faltan ítems listos, y cuánto tarda la respuesta?
- ¿La Daily recorre el tablero o es una ronda de personas?
- ¿En la Review se habla de fechas con datos o con promesas?

## Relacionado

- [Qué es Scrumban](que-es-scrumban.md) · [Cuándo Scrumban](cuando-scrumban.md) · [Antipatrones de Scrumban](antipatrones-scrumban.md)
- [El Sprint y Sprint Planning](../scrum/sprint-y-planning.md) · [WIP y sistema pull](../kanban/wip-y-pull.md) · [Las cadencias de Kanban](../kanban/cadencias-kanban.md)
- [Métricas y vocabularios](../flujo/metricas-y-vocabularios.md) · [Work item age](../flujo/work-item-age.md)

## Para profundizar

- Scrum.org, Daniel Vacanti y Yuval Yeret, *The Kanban Guide for Scrum Teams*, enero de 2021. [scrum.org](https://www.scrum.org/resources/kanban-guide-scrum-teams).
- Corey Ladas, "Scrumban", ensayo de 2008 reimpreso por Agile Alliance. [agilealliance.org](https://agilealliance.org/scrumban/).
