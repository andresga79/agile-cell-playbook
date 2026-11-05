# Sprint Review

**En corto:** Una sesión de trabajo con los stakeholders para inspeccionar lo logrado en el Sprint y decidir juntos qué conviene hacer después. Se sale con el Product Backlog ajustado, no con aplausos.

**Duración:** como referencia, hasta 2 h en un Sprint de dos semanas (la mitad de las 4 h que la guía fija como máximo para uno de un mes) · **Participan:** el Scrum Team y los stakeholders clave que invita el PO

!!! note "Si acabas de llegar"
    Facilítala como el equipo la hace hoy y observa quién asiste y quién habla. Los cambios que sugiere esta agenda se proponen después de la devolución de la semana 3, como experimento.

## Antes

- **Dos o tres días antes, con el PO:** "¿Qué decisión de producto tienes que tomar en las próximas semanas?". Con eso eligen a quién invitar usando el [mapa de stakeholders](../../caja-de-herramientas/mapa-stakeholders.md). La invitación la manda el PO, con una pregunta concreta.
- **Los Developers deciden qué mostrar:** solo lo que cumple la Definition of Done, funcionando en producción o en un ambiente parecido. Que lo prueben antes.
- **En Jira,** filtra lo terminado del Sprint (`project = CLAVE AND sprint in openSprints() AND statusCategory = Done`) y, con `statusCategory != Done` al final, lo que no.
- **Trae datos** de uso o resultados, y un rango con datos por si preguntan "¿cuándo?".
- **Deja el backlog listo para editarlo en pantalla,** frente a todos.

## Agenda

| Min | Bloque | Qué se hace | Frase o pregunta para facilitar |
|---|---|---|---|
| 0–10 | Apertura | El PO recuerda el Product Goal, el Sprint Goal y la decisión de hoy | "Hoy necesitamos su opinión para decidir qué sigue." |
| 10–20 | Qué pasó | Los Developers cuentan qué se terminó, qué no y qué aprendieron | "¿Qué sabemos hoy que no sabíamos al planificar?" |
| 20–45 | Incremento en uso | Se muestra funcionando y los stakeholders lo usan | "¿Quién quiere probarlo? Háganlo como en un día normal." |
| 45–55 | Contexto | Cambios de mercado, presupuesto o plazos; datos de uso; pronóstico | "¿Qué cambió afuera que deberíamos saber?" |
| 55–115 | Qué hacemos ahora | Se conversa y el PO reordena el backlog en vivo | "Con lo que vieron, ¿qué debería venir después? ¿Qué dejaríamos de lado?" |
| 115–120 | Cierre | Cambios en el backlog y próximos pasos | "¿Alguien se va con una duda?" |

Con 1 hora, como en el [calendario de cadencias](../../caja-de-herramientas/calendario-cadencias.md), reduce en proporción y mantén al menos la mitad para el "qué hacemos ahora", como pide la ficha.

## Si algo se tuerce

- **Si solo vienen el equipo y el PO:** háganla igual y ayuda al PO a invitar con una pregunta la próxima vez. Ver [La review es una demo sin stakeholders ni feedback](../../situaciones/review-sin-stakeholders.md).
- **Si alguien quiere mostrar algo sin terminar:** "Lo mostramos cuando cumpla la Definition of Done. Hoy podemos contar qué aprendimos".
- **Si se vuelve una aprobación de historias:** "La aceptación ocurre durante el Sprint. Aquí nos sirve más saber si esto resuelve tu problema".
- **Si piden una fecha comprometida:** ofrece un rango con su probabilidad; el PO decide qué se dice. Ver [Negocio pide una fecha de entrega](../../situaciones/me-piden-una-fecha.md).
- **Si mostrar se come la hora:** corta al terminar el bloque: "Pasemos a lo que más importa: qué hacemos ahora".

## Después

- **Backlog:** confirma con el PO que los cambios quedaron en Jira el mismo día.
- **Resumen breve del PO** a los asistentes: qué se vio, qué cambió y los próximos pasos.
- **A la Retro:** lleva lo aprendido de la propia Review, como quién vino y cuánto se conversó.
- **Para ti:** anota quién vino, cuánto se presentó y cuánto se conversó.

## Relacionado

- [Sprint Review](../../biblioteca/scrum/sprint-review.md): propósito, timebox y errores típicos
- [La review es una demo sin stakeholders ni feedback](../../situaciones/review-sin-stakeholders.md): cuando falta conversación
- [Mapa de stakeholders](../../caja-de-herramientas/mapa-stakeholders.md): a quién invitar
- [Roadmap por outcomes](../../caja-de-herramientas/roadmap-outcomes.md): actualizar la dirección frente a todos
