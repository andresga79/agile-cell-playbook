# Ley de Little y sus supuestos

**En una frase:** En un sistema estable, el tiempo promedio que un ítem pasa en el sistema es igual al WIP promedio dividido por el throughput promedio; su valor práctico está en los supuestos, no en la fórmula.

**Área:** Flujo · **Lectura:** ~3 min

## Qué es

John Little demostró en 1961 una relación de la teoría de colas: el número promedio de elementos en un sistema es igual a la tasa de llegada por el tiempo promedio que cada uno pasa en él. Daniel Vacanti la expresa en métricas de flujo:

**`CT promedio = WIP promedio / TH promedio`**

*CT* es el tiempo en el sistema, *WIP* el trabajo en curso y *TH* el throughput. Las tres se miden entre los **mismos** puntos de inicio y de término. Si esos puntos son el compromiso y la entrega, en el vocabulario del playbook ese CT es el lead time (ver [Métricas y vocabularios](metricas-y-vocabularios.md)).

Ejemplo ilustrativo: con 12 ítems en curso en promedio y 4 terminados por semana, cada ítem tarda en promedio 3 semanas. Si el WIP sube a 20 y el throughput no cambia, el promedio sube a 5 semanas.

**Los supuestos**, tal como los resume Vacanti, para el intervalo que mides:

1. En promedio, entra al sistema lo mismo que sale.
2. Todo lo que se empieza termina y sale del sistema.
3. El WIP al inicio y al final del intervalo es parecido.
4. La edad promedio del WIP no crece ni baja.
5. CT, WIP y TH se miden en unidades consistentes (ítems y días, por ejemplo).

## Para qué sirve (y cuándo no)

Explica por qué limitar el WIP acorta los tiempos: con el mismo ritmo de salida, menos trabajo en curso significa menos espera para cada ítem. Sobre todo, Vacanti propone usar los supuestos como **políticas del proceso**. Cada vez que el equipo empieza más de lo que termina, deja ítems envejeciendo o abandona trabajo ya empezado, rompe un supuesto y pierde previsibilidad.

No sirve para pronosticar: describe el pasado con promedios, y Vacanti insiste en no usarla para comprometer fechas. Para eso existe el [pronóstico probabilístico](pronostico-probabilistico.md). Tampoco exige que los ítems sean del mismo tamaño: trabaja con promedios.

## Cómo se aplica

1. Elige un intervalo cerrado, por ejemplo las últimas 8 semanas, y los mismos puntos de inicio y término para las tres métricas.
2. Calcula el WIP promedio, el throughput promedio y el tiempo promedio. Si la fórmula no se cumple aproximadamente, algún supuesto se rompió.
3. Busca cuál: ¿llegan más ítems de los que salen? ¿Hay ítems olvidados? ¿Se cerraron tarjetas sin terminarlas?
4. Convierte cada violación en una política explícita, como "no se empieza algo nuevo si hay un bloqueado sin dueño".
5. Usa el cálculo rápido solo como chequeo de cordura, nunca como compromiso.

## Errores típicos

- Usar la fórmula para prometer fechas.
- Medir el WIP en un tramo y el tiempo en otro.
- Aplicarla a un sistema que acumula trabajo semana tras semana.
- Creer que basta con bajar el WIP, sin mirar el throughput ni los bloqueos.

## Qué observar al llegar a un equipo

- ¿Se empezaron más ítems de los que se terminaron en el último mes?
- ¿Hay tarjetas en curso que nadie reconoce como propias?
- ¿Qué pasa con el trabajo que se deja a medias? ¿Se cierra, se mueve al backlog o sigue ahí?
- ¿El equipo responde a la demora empezando más trabajo "para adelantar"?
- Calcula la fórmula con los datos de la herramienta. Si no cuadra, pregunta qué supuesto se rompe.

## Relacionado

- [Métricas y vocabularios](metricas-y-vocabularios.md) · [Work item age](work-item-age.md) · [Cómo leer un CFD](cfd.md)
- [WIP y sistema pull](../kanban/wip-y-pull.md) · [Políticas explícitas](../kanban/politicas-explicitas.md)
- [Catálogo de métricas](../../caja-de-herramientas/catalogo-metricas.md)

## Para profundizar

- John D. C. Little, "A Proof for the Queuing Formula: L = λW", *Operations Research*, 9(3), 1961.
- Daniel S. Vacanti, *Actionable Agile Metrics for Predictability*, edición del décimo aniversario, 2025, apéndice sobre la Ley de Little.
- Daniel S. Vacanti, "Little's Law for Professional Scrum with Kanban", Scrum.org, 2018.
