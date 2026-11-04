# Impact mapping

**En una frase:** Un mapa que parte de una meta de negocio medible y baja por quién puede ayudar o impedir, qué cambio de comportamiento se necesita y, recién al final, qué se podría construir.

**Área:** Producto · **Lectura:** ~3 min

## Qué es

Gojko Adzic lo describió en *Impact Mapping* (2012). El mapa tiene cuatro niveles, cada uno con su pregunta:

| Nivel | Pregunta | Contenido |
|---|---|---|
| **Por qué** | ¿Qué meta perseguimos? | Una meta de negocio medible |
| **Quién** | ¿Quién puede ayudar o impedir? | Actores: usuarios, clientes, áreas internas, reguladores |
| **Cómo** | ¿Qué cambio de comportamiento necesitamos? | Impactos en esos actores |
| **Qué** | ¿Qué podríamos hacer para provocarlo? | Entregables posibles |

La clave está en el tercer nivel: un **impacto es un cambio en lo que alguien hace**, no una funcionalidad. "Completa la solicitud sin llamar" es un impacto; "formulario guiado" es un entregable.

El ejemplo ya está dibujado en la [Fase 1 §1.2](../../fases/01-descubrimiento.md#12-conectar-negocio-con-producto-impact-mapping). Esta ficha no lo repite: explica cómo usarlo bien.

## Para qué sirve (y cuándo no)

Sirve para una conversación difícil: conectar lo que pide el negocio con lo que construye el equipo. Hace visible por qué existe cada ítem del backlog y permite cortar lo que no se rastrea hasta la meta. También destapa actores olvidados, como quien opera el producto o quien puede bloquearlo.

Los entregables son **opciones, no compromisos**. Si el primer entregable no mueve el impacto, se prueba otro.

No sirve si la meta no es medible ("mejorar la experiencia") ni cuando el problema es puramente técnico o de operación. Tampoco reemplaza la investigación con usuarios: los impactos son hipótesis hasta que alguien los observa.

## Cómo se aplica

1. **Escribe la meta** con métrica, umbral y plazo. Si hay un [OKR](okrs.md), su objetivo y un key result son buenos candidatos.
2. **Lista actores** con el [mapa de stakeholders](../../caja-de-herramientas/mapa-stakeholders.md) a mano: incluye a quien puede frenar el resultado.
3. **Por actor, escribe impactos** como verbos de comportamiento. Pregunta: "¿qué haría distinto si lo logramos?".
4. **Recién ahora, entregables:** varias opciones por impacto, sin estimarlas todavía.
5. **Elige un camino** (una meta, un actor, un impacto y uno o dos entregables) y conviértelo en hipótesis con la [tarjeta de hipótesis](../../caja-de-herramientas/lean-canvas-hipotesis.md).
6. **Mide el impacto, no la entrega.** En cada Sprint Review, pregunta si el comportamiento cambió y poda las ramas que no aportan.

## Errores típicos

- Impactos escritos como funcionalidades ("tener un panel").
- Meta vaga o sin número, que no permite podar nada.
- Solo un actor ("el usuario") y nadie que pueda oponerse.
- Tratar el último nivel como alcance comprometido y planificarlo completo.
- Hacer el mapa en un taller de arranque y no volver a abrirlo.

## Qué observar al llegar a un equipo

- Elige tres ítems del backlog al azar. ¿El PO puede decir a qué meta de negocio contribuye cada uno?
- ¿Existe un impact map? ¿Cuándo se actualizó y quién participó?
- ¿Las metas del producto tienen número, o son frases como "mejorar la experiencia"?
- ¿En la Sprint Review se habla de cambios de comportamiento de usuarios o solo de lo construido?

## Relacionado

- [Fase 1 · Descubrimiento de producto](../../fases/01-descubrimiento.md) · [Mapa de stakeholders](../../caja-de-herramientas/mapa-stakeholders.md)
- [User Story Map](../../caja-de-herramientas/user-story-map.md) · [Roadmap por outcomes](../../caja-de-herramientas/roadmap-outcomes.md)
- [OKRs](okrs.md) · [Continuous discovery](continuous-discovery.md) · [Artefactos y compromisos](../scrum/artefactos-y-compromisos.md)

## Para profundizar

- Gojko Adzic, *Impact Mapping: Making a Big Impact with Software Products and Projects*, Provoking Thoughts, 2012. Resumen y ejemplos en [impactmapping.org](https://www.impactmapping.org/).
