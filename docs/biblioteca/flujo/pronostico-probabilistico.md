# Pronóstico probabilístico

**En una frase:** Pronosticar con probabilidades es responder "¿cuándo?" o "¿cuánto?" con un rango y la confianza de ese rango, calculados con datos históricos del equipo en vez de estimaciones.

**Área:** Flujo · **Lectura:** ~3 min

## Qué es

Un pronóstico probabilístico no da una fecha: da un rango y una probabilidad. En un ejemplo ilustrativo, "hay un 85 % de probabilidad de terminar estos 30 ítems el 12 de marzo o antes" dice más que "terminamos el 1 de marzo", porque hace explícito el riesgo.

Se apoya en dos ideas:

- **El futuro tiene incertidumbre.** Cualquier respuesta honesta es un rango.
- **El historial del equipo ya contiene esa incertidumbre**: bloqueos, ausencias, trabajo no planificado y ítems que se complican. No hace falta adivinarla.

Hay dos preguntas y dos técnicas:

| Pregunta | Dato que usa | Técnica |
|---|---|---|
| ¿Cuándo estará listo **un** ítem? | Tiempos históricos de ítems terminados | Percentiles y SLE |
| ¿Cuándo terminan **N** ítems, o cuántos caben en **N** semanas? | Throughput histórico | Simulación de Monte Carlo |

El playbook ya trae la calculadora de Monte Carlo con sus supuestos. Esta ficha explica el concepto; para el cálculo, usa el [pronóstico Monte Carlo](../../caja-de-herramientas/pronostico-monte-carlo.md).

## Para qué sirve (y cuándo no)

Cambia la conversación con negocio: de negociar una fecha a decidir cuánto riesgo se acepta. También ahorra el tiempo de estimar en horas o puntos, y se puede repetir cada semana con datos nuevos para ver si el pronóstico mejora o empeora.

No sirve si el sistema es inestable: si entra mucho más de lo que sale, si el equipo acaba de cambiar o si el trabajo pendiente no se parece al histórico. En esos casos, el primer trabajo es estabilizar el flujo. Tampoco sirve para fijar una fecha con un promedio: la [Ley de Little](ley-de-little.md) describe el pasado y no está hecha para pronosticar.

## Cómo se aplica

1. Separa la pregunta: ¿un ítem o un conjunto de ítems?
2. Para un ítem, usa el percentil acordado del tiempo histórico (ver [Scatterplot, percentiles y SLE](scatterplot-sle.md)). Si ya está en curso, mira su [edad](work-item-age.md): si superó ese percentil, el pronóstico inicial dejó de valer.
3. Para un conjunto, simula con el throughput histórico en la [calculadora](../../caja-de-herramientas/pronostico-monte-carlo.md).
4. Comunica el rango y la probabilidad, no un número suelto. Muestra también el percentil 50 para que se vea el riesgo.
5. Vuelve a pronosticar cada semana. Un pronóstico es una foto, no una promesa.

## Errores típicos

- Presentar el percentil 50 como compromiso.
- Pronosticar con throughput en puntos o con semanas de otro equipo.
- Olvidar que los ítems se dividen y aparecen otros nuevos al refinar.
- Pronosticar una vez al inicio y no volver a mirar.
- Cambiar el número porque no gusta, en vez de cambiar el sistema (WIP, tamaño de los ítems, dependencias).

## Qué observar al llegar a un equipo

- ¿Cómo responde el equipo a "¿cuándo está?": con una fecha, con un rango o con "depende"?
- ¿De dónde salen las fechas comprometidas? ¿Quién las puso y con qué datos?
- ¿Cuánto se desvió el último compromiso? ¿Se aprendió algo o solo se buscaron culpables?
- ¿Hay historial de throughput de al menos 8 semanas? ¿Se cuenta en ítems?
- ¿Las personas de negocio entienden un rango con probabilidad, o piden "la fecha"?

## Relacionado

- [Scatterplot, percentiles y SLE](scatterplot-sle.md) · [Ley de Little](ley-de-little.md) · [Métricas y vocabularios](metricas-y-vocabularios.md)
- [Pronóstico Monte Carlo](../../caja-de-herramientas/pronostico-monte-carlo.md) · [Fase 5 · Pronosticar con datos](../../fases/05-medicion.md#54-pronosticar-con-datos)
- [El Sprint y Sprint Planning](../scrum/sprint-y-planning.md) · [Combinar cadencia y flujo](../scrumban/cadencia-y-flujo.md)

## Para profundizar

- Daniel S. Vacanti, *When Will It Be Done? Lean-Agile Forecasting to Answer Your Customers' Most Important Question*, Leanpub, 2018.
- Daniel S. Vacanti, *Actionable Agile Metrics for Predictability*, edición del décimo aniversario, 2025.
