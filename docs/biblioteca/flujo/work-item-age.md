# Work item age y aging WIP

**En una frase:** La edad de un ítem es el tiempo que lleva en curso desde que empezó; es la única métrica de tiempo que avisa mientras todavía puedes actuar.

**Área:** Flujo · **Lectura:** ~3 min

## Qué es

*Work item age* es el tiempo transcurrido entre el inicio de un ítem y hoy. La Kanban Guide la incluye entre sus cuatro métricas obligatorias. El catálogo del playbook la llama **WIP aging**.

La diferencia con el lead time o el cycle time es de momento:

- El **lead time** y el **cycle time** solo existen cuando el ítem terminó. Son indicadores **que llegan tarde**: cuentan lo que ya pasó.
- La **edad** se mide mientras el ítem sigue en curso. Es un indicador **adelantado**: muestra qué ítem va camino a ser lento antes de que lo sea.

Un ítem con 15 días de edad va a tardar al menos 15 días en total. Solo puedes decidir cuánto más crece.

El **gráfico de envejecimiento** (*aging chart*) lo hace visible: en el eje horizontal van los estados del flujo, en el vertical la edad, y cada punto es un ítem en curso. Encima se dibujan los percentiles del tiempo histórico, por ejemplo el 50 y el 85, para saber qué edad ya es inusual.

## Para qué sirve (y cuándo no)

Sirve para gestionar ítem por ítem en el día a día: decidir en la daily a quién ayudar, qué desbloquear y qué partir. También muestra problemas que un promedio esconde, como el ítem viejo que nadie mira porque "está esperando a otro equipo".

No sirve sin una referencia. Diez días pueden ser mucho o poco según el tipo de trabajo y la historia del equipo. Tampoco reemplaza mirar el sistema: si muchos ítems envejecen a la vez, el problema es el WIP o un cuello de botella, no cada tarjeta.

## Cómo se aplica

1. Registra la fecha de inicio de cada ítem. La mayoría de las herramientas lo hace si las columnas están bien definidas.
2. Muestra la edad en la tarjeta (en días) o usa un gráfico de envejecimiento.
3. Toma como referencia los percentiles del tiempo histórico del mismo tipo de ítem, o el SLE si existe.
4. Acuerda qué hacer en cada umbral. Como referencia: al pasar el percentil 50, se conversa en la daily; al acercarse al 85, el equipo actúa (ayudar, dividir el ítem, escalar el bloqueo).
5. En la daily, recorre el tablero de derecha a izquierda y empieza por los ítems más viejos.

La Fase 5 pide discutir en la daily los ítems que superan el percentil 85; esto adelanta la conversación.

## Errores típicos

- Reiniciar la edad al mover la tarjeta de columna o al reabrirla.
- Mirar la edad solo en la retro, cuando ya no se puede actuar.
- Sacar del tablero los ítems viejos o bloqueados "para que no ensucien".
- Usar la edad para presionar a una persona en vez de preguntar qué necesita el ítem.
- Tratar igual una épica de semanas que una historia de dos días.

## Qué observar al llegar a un equipo

- ¿Cuál es el ítem más viejo en curso? ¿Alguien sabe por qué está así?
- ¿La edad aparece en las tarjetas o hay que calcularla?
- ¿La daily empieza por lo más cercano a terminar o por las personas?
- ¿Hay ítems en curso con más del doble de la edad típica del equipo?
- ¿Los ítems viejos se concentran en una columna? Ahí suele estar el cuello de botella.
- ¿Hay tarjetas que vuelven atrás y pierden su fecha de inicio?

## Relacionado

- [Scatterplot, percentiles y SLE](scatterplot-sle.md) · [Ley de Little](ley-de-little.md) · [Métricas y vocabularios](metricas-y-vocabularios.md)
- [WIP y sistema pull](../kanban/wip-y-pull.md) · [Daily Scrum](../scrum/daily-scrum.md)
- [Fase 5 · Visualizar](../../fases/05-medicion.md#53-visualizar) · [Políticas del tablero](../../caja-de-herramientas/politicas-tablero.md)

## Para profundizar

- Daniel Vacanti y John Coleman (con otros colaboradores), *The Kanban Guide*, mayo de 2025 (versión 2025.5). [kanbanguides.org](https://kanbanguides.org/english/).
- Daniel S. Vacanti, *Actionable Agile Metrics for Predictability*, edición del décimo aniversario, 2025, capítulos sobre el gráfico de envejecimiento.
