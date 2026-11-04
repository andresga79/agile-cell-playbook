# Team Topologies

**En una frase:** Un modelo para diseñar equipos y sus interacciones pensando en el flujo: cuatro tipos de equipo, tres modos de interacción y la carga cognitiva como límite.

**Área:** Personas y equipos · **Lectura:** ~3 min

## Qué es

Matthew Skelton y Manuel Pais lo publicaron en *Team Topologies* (2019; segunda edición en 2025). Parte de la **ley de Conway** (1968): una organización diseña sistemas que copian su estructura de comunicación. Por eso, si quieres otra arquitectura, conviene diseñar primero los equipos que la harían posible: es la **maniobra inversa de Conway**, que el libro usa como herramienta de diseño.

| Tipo de equipo | Para qué existe |
|---|---|
| **Stream-aligned** | Entrega de punta a punta sobre un flujo de valor: un producto, un segmento o un recorrido de usuario. Es el tipo principal |
| **Platform** | Ofrece servicios internos que los demás consumen por autoservicio |
| **Enabling** | Ayuda por un tiempo a otro equipo a adquirir una capacidad, y se retira |
| **Complicated subsystem** | Cuida una pieza que exige especialistas escasos, como un motor de cálculo |

Los equipos se relacionan de tres modos: **colaboración** (trabajar juntos un tiempo para descubrir algo), **X como servicio** (consumir algo con una interfaz clara y poca conversación) y **facilitación** (un equipo ayuda a otro a aprender).

La idea que más le sirve a un SM es la **carga cognitiva**: un equipo solo domina una cantidad limitada de dominios, sistemas y tecnologías. Si la supera, decide peor y entrega más lento.

## Para qué sirve (y cuándo no)

Sirve para explicarle a la gerencia por qué un equipo no fluye aunque "trabaje bien": demasiados sistemas a cargo, dependencias que nacen de cómo se cortaron los equipos o una plataforma que solo responde por tickets. Te da argumentos de flujo, no de preferencias.

No es un organigrama para copiar ni reemplaza a Scrum o Kanban: no dice cómo trabaja un equipo por dentro. Con uno o dos equipos, la topología importa poco; la pregunta útil sigue siendo la carga cognitiva.

## Cómo se aplica

1. **Mapea los equipos:** a qué tipo se parece cada uno y con quién interactúa.
2. **Conversa la carga cognitiva** con cada equipo: cuántos sistemas, dominios y tecnologías tiene a cargo y cuáles siente que no domina. Como referencia, si no puede decir quién es dueño de cada sistema que toca, ya hay sobrecarga.
3. **Haz explícito el modo de interacción** con cada equipo vecino y su duración. Una colaboración sin fecha de término suele ser una dependencia disfrazada.
4. **Busca dependencias que nacen del corte** (por capa o por componente) y pregunta si un corte por flujo de valor las elimina antes de sumar coordinación. Es el "descalar antes de escalar" de [Escalamiento](../scrum/escalamiento.md).
5. **Revisa el mapa** cuando cambien el producto o la arquitectura.

## Errores típicos

- Renombrar equipos ("ahora somos platform") sin cambiar responsabilidades ni interfaces.
- Una plataforma que se consume por tickets y colas, no por autoservicio.
- Equipos enabling que nunca se retiran o terminan haciendo el trabajo de los demás.
- Usar "complicated subsystem" para justificar un silo de especialistas.
- Reorganizar sin mirar la arquitectura: Conway gana igual.

## Qué observar al llegar a un equipo

- ¿Cuántos sistemas o servicios tiene a cargo el equipo y cuántos domina de verdad?
- ¿Cuántos ítems del último mes esperaron a otro equipo? ¿Siempre al mismo?
- ¿El equipo puede llevar un cambio a producción sin pedirle nada a nadie?
- ¿La relación con plataforma o infraestructura es por autoservicio o por tickets?
- ¿Hay una "colaboración" que ya dura más de un trimestre?

## Relacionado

- [Escalamiento: Nexus, LeSS y SAFe](../scrum/escalamiento.md) · [Fase 6 §6.5 Escalamiento](../../fases/06-mejora-innovacion.md#65-escalamiento)
- [Tablero de dependencias](../../caja-de-herramientas/tablero-dependencias.md) · [Pensamiento sistémico](../lean/pensamiento-sistemico.md) · [Flight Levels](../kanban/flight-levels.md)
- [Agile Fluency](agile-fluency.md) · [Desarrollo de equipos](desarrollo-de-equipos.md)

## Para profundizar

- Matthew Skelton y Manuel Pais, *Team Topologies: Organizing Business and Technology Teams for Fast Flow*, IT Revolution, 2019. Segunda edición en septiembre de 2025. Conceptos clave en [teamtopologies.com](https://teamtopologies.com/key-concepts).
- Melvin E. Conway, "How Do Committees Invent?", *Datamation*, abril de 1968. [melconway.com](https://www.melconway.com/Home/Committees_Paper.html).
