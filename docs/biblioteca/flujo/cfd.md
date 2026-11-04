# Cómo leer un CFD

**En una frase:** El diagrama de flujo acumulado muestra, día a día, cuántos ítems llegaron a cada estado; su forma dice si el sistema está estable, dónde se acumula el trabajo y si entra más de lo que sale.

**Área:** Flujo · **Lectura:** ~3 min

## Qué es

Un CFD (*Cumulative Flow Diagram*) tiene el tiempo en el eje horizontal y la cantidad **acumulada** de ítems en el vertical. Cada estado del tablero es una banda. La línea superior cuenta todo lo que llegó al sistema y la inferior todo lo que salió. Como es acumulado, ninguna línea baja nunca.

Tres lecturas básicas:

- **Distancia vertical** entre dos líneas en un día: el WIP en ese tramo ese día.
- **Distancia horizontal** entre la línea de llegada y la de salida: una aproximación del tiempo promedio en el sistema. Vacanti insiste en que es aproximada, no el tiempo real de cada ítem.
- **Pendiente** de la línea de salida: el throughput promedio.

## Para qué sirve (y cuándo no)

Sirve para ver la estabilidad del sistema completo en un solo gráfico, y para comprobar de un vistazo los supuestos de la [Ley de Little](ley-de-little.md): si las líneas de llegada y de salida son paralelas, entra lo mismo que sale.

No sirve para gestionar un ítem concreto: un CFD no muestra qué tarjeta está atascada. Para eso está la [edad de los ítems](work-item-age.md). Tampoco sirve para pronosticar, y engaña si las columnas del tablero cambiaron durante el periodo que muestra.

## Cómo se aplica

Mira primero la forma general y después lee los patrones:

| Patrón | Qué suele significar | Qué preguntar |
|---|---|---|
| Bandas paralelas y de ancho parejo | Sistema estable | ¿Qué política lo mantiene así? |
| Una banda que se ensancha | Trabajo que se acumula en ese estado | ¿Ahí está el cuello de botella o la espera? |
| La línea de llegada sube más rápido que la de salida | Se empieza más de lo que se termina | ¿Quién decide qué entra? |
| Tramos planos en la línea de salida | No se entrega nada durante días | ¿Hay entrega por lotes o un bloqueo? |
| Escalones grandes | Entregas en lote o actualización tardía del tablero | ¿Cuándo se mueven las tarjetas? |
| Una banda que desaparece | Estado que nadie usa o que se salta | ¿La columna refleja el proceso real? |

Luego conviértelo en una conversación: muestra el CFD en la retro o en la revisión del servicio y pregunta qué ve el equipo antes de interpretarlo por él. La [retro basada en datos](../../caja-de-herramientas/retro-datos.md) da un formato.

## Errores típicos

- Leer la distancia horizontal como el tiempo exacto de un ítem.
- Construir el CFD desde el backlog completo: la banda de opciones crece sin límite y aplasta el resto del gráfico.
- Comparar periodos en que cambiaron las columnas o el punto de compromiso.
- Usarlo solo como gráfico decorativo de un informe.
- Concluir "vamos mejor" porque la línea de salida sube, cuando siempre sube.

## Qué observar al llegar a un equipo

- Pide el CFD de las últimas 8 a 12 semanas. ¿Las líneas de llegada y de salida son paralelas o se separan?
- ¿Qué banda es la más ancha? ¿Coincide con lo que el equipo dice que es su cuello de botella?
- ¿La línea de salida avanza a escalones? Pregunta cuándo se despliega.
- ¿Hay días con todas las líneas planas? Cruza con vacaciones, congelamientos o incidentes.
- ¿Alguien del equipo sabe leerlo, o solo lo mira quien lo genera?

## Relacionado

- [Ley de Little](ley-de-little.md) · [Work item age](work-item-age.md) · [Métricas y vocabularios](metricas-y-vocabularios.md)
- [Visualizar](../kanban/visualizar.md) · [WIP y sistema pull](../kanban/wip-y-pull.md)
- [Fase 5 · Visualizar](../../fases/05-medicion.md#53-visualizar) · [Retro basada en datos](../../caja-de-herramientas/retro-datos.md)

## Para profundizar

- Daniel S. Vacanti, *Actionable Agile Metrics for Predictability*, edición del décimo aniversario, 2025, capítulos sobre CFD.
- David J. Anderson, *Kanban: Successful Evolutionary Change for Your Technology Business*, 2010.
