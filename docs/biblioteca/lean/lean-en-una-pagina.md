# Lean en una página

**En una frase:** Lean es una forma de mirar el trabajo desde el valor que recibe el cliente y de mejorar el flujo completo, no una caja de herramientas para recortar costos.

**Área:** Lean y flujo · **Lectura:** ~3 min

## Qué es

Lean nace del **Sistema de Producción Toyota** (TPS), que Taiichi Ohno describió en un libro de 1978. Sus dos pilares son el **just-in-time** (producir solo lo que se necesita, cuando se necesita) y el **jidoka** (detener el proceso apenas aparece un problema, para no fabricar más defectos). La palabra *lean* la propuso John Krafcik en 1988.

En 1996, Womack y Jones resumieron el pensamiento lean en cinco principios. Así se leen en un equipo de software:

| Principio | La pregunta que te hace |
|---|---|
| Valor | ¿Qué resultado le importa al cliente, no al área que pide? |
| Flujo de valor | ¿Qué pasos sigue un pedido desde la idea hasta producción? |
| Flujo | ¿Dónde se detiene el trabajo y por qué? |
| Pull | ¿Se empieza algo porque hay capacidad o porque alguien empuja? |
| Perfección | ¿Qué mejora pequeña probamos esta semana? |

En 2003, Mary y Tom Poppendieck llevaron estas ideas al software, y en 2009 Donald Reinertsen propuso una «segunda generación» del lean para el desarrollo de productos.

## Para qué sirve (y cuándo no)

Sirve para cambiar la pregunta de "¿la gente está ocupada?" a "¿el trabajo avanza?". Está en la base de Kanban y comparte ideas con Scrum: el WIP, el *pull*, los lotes pequeños y la mejora continua.

No sirve copiado literal de la fábrica. En una línea de producción la variabilidad es el enemigo; en el desarrollo de productos parte de ella es lo que genera valor, porque cada ítem es distinto y se aprende haciéndolo. Tampoco es lean un programa de "eficiencia" que reduce personas: sin respeto por quienes hacen el trabajo, nadie va a mostrar los problemas que el sistema necesita ver.

## Cómo se aplica

1. **Define el valor** con quien usa el resultado. Si nadie sabe para qué es un ítem, no puedes juzgar si su espera importa.
2. **Mira el flujo de punta a punta**, incluidas las etapas fuera del equipo. El taller está en [Value Stream Mapping](../../caja-de-herramientas/value-stream-map.md).
3. **Haz que fluya:** ítems chicos, límites de WIP y menos traspasos.
4. **Pasa a pull:** se empieza algo nuevo cuando hay capacidad libre. Ver [WIP y sistema pull](../kanban/wip-y-pull.md).
5. **Mejora en pasos chicos** y con datos, como propone la [Fase 6 §6.1](../../fases/06-mejora-innovacion.md#61-mejora-continua-kaizen).
6. **Para la línea:** acuerda que un defecto o un bloqueo detiene lo nuevo hasta resolverlo. Es el jidoka llevado a software.

## Errores típicos

- Reducir lean a "eliminar desperdicio" y usarlo para pedir más con menos.
- Optimizar una etapa (el desarrollo) mientras el trabajo espera semanas en otras.
- Copiar herramientas (tableros, 5S, *andon*) sin cambiar cómo se decide.
- Medir utilización de personas en vez del tiempo que tarda el trabajo en llegar al cliente.

## Qué observar al llegar a un equipo

- ¿Alguien puede describir el recorrido completo de un pedido, incluidas las aprobaciones de afuera?
- ¿Se habla de "estar ocupados" o de "terminar"? Escucha qué se celebra en las reuniones.
- ¿El tablero termina en "listo para QA" o en producción?
- Cuando aparece un defecto, ¿se para lo nuevo o se anota para después?
- ¿Las mejoras de las retros son experimentos chicos o grandes iniciativas que no empiezan?
- ¿Quién decide qué entra: el que tiene capacidad o el que tiene más poder?

## Relacionado

- [Los desperdicios en software](desperdicios.md) · [Principios de flujo](principios-de-flujo.md) · [Pensamiento sistémico](pensamiento-sistemico.md)
- [Principios y prácticas del Kanban Method](../kanban/kanban-method.md) · [WIP y sistema pull](../kanban/wip-y-pull.md)
- [Value Stream Mapping](../../caja-de-herramientas/value-stream-map.md)

## Para profundizar

- Taiichi Ohno, *Toyota Production System: Beyond Large-Scale Production*, Productivity Press, 1988 (original en japonés, 1978).
- John F. Krafcik, "Triumph of the Lean Production System", *Sloan Management Review*, 1988.
- James P. Womack y Daniel T. Jones, *Lean Thinking*, 1996.
- Mary y Tom Poppendieck, *Lean Software Development: An Agile Toolkit*, Addison-Wesley, 2003.
