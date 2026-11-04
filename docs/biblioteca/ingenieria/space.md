# SPACE: productividad de developers

**En una frase:** Un marco de cinco dimensiones que recuerda que la productividad de quienes desarrollan no cabe en una sola métrica, y menos en una de actividad.

**Área:** Ingeniería · **Lectura:** ~3 min

## Qué es

Lo publicaron Nicole Forsgren, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck y Jenna Butler en *ACM Queue* (2021). El artículo parte de cinco mitos: que la productividad es solo actividad, que es solo individual, que una métrica lo dice todo, que las mediciones solo sirven a los managers y que depende solo de las herramientas.

| Dimensión | Pregunta que responde | Señales de ejemplo |
|---|---|---|
| **S**atisfacción y bienestar | ¿Cómo están las personas con su trabajo, sus herramientas y su equipo? | Encuestas, desgaste |
| **P**erformance (desempeño) | ¿El resultado logró lo que debía? | Calidad, impacto en usuarios |
| **A**ctividad | ¿Cuánto se hizo? | Commits, pull requests, despliegues |
| **C**omunicación y colaboración | ¿Cómo circulan la información y el trabajo? | Revisiones, onboarding, documentación que se encuentra |
| **E**ficiencia y flujo | ¿Se avanza sin interrupciones ni esperas? | Traspasos, interrupciones, tiempo de espera |

Las dimensiones se miran en tres niveles: individual, equipo y sistema. Los autores recomiendan combinar varias métricas de al menos tres dimensiones e incluir al menos una de percepción, como una encuesta.

## Para qué sirve (y cuándo no)

Sirve cuando alguien pregunta "¿cuán productivos son los developers?" y la respuesta tentadora es contar commits, líneas o puntos. SPACE te da una forma de reencuadrar la pregunta: productividad para qué decisión, en qué nivel y con qué métricas en tensión.

Complementa a [DORA](dora.md): las métricas DORA miran el sistema de entrega y SPACE suma la experiencia de las personas, la colaboración y el impacto.

No es un tablero listo ni trae un set fijo de métricas: cada equipo elige las suyas. Tampoco sirve para evaluar o rankear personas. Los autores piden cuidar la privacidad y reportar agregado desde el nivel de equipo hacia arriba.

## Cómo se aplica

1. **Parte por la decisión:** ¿qué quieres mejorar o decidir con la medición?
2. **Elige al menos tres dimensiones** y una o dos métricas por cada una, que se equilibren entre sí. Por ejemplo, despliegues por semana (actividad), tiempo de espera de revisión (eficiencia) y una pregunta de encuesta sobre carga (satisfacción).
3. **Suma percepción a los datos del sistema.** Una encuesta corta y periódica revela fricciones que ningún log muestra; la [Fase 5 §5.5](../../fases/05-medicion.md#55-medir-la-salud-del-equipo-management-30) ya propone pulsos de salud del equipo.
4. **Agrega a nivel de equipo** y revisa tendencias en la retro, no valores sueltos.
5. **Quita la métrica** que no provoca ninguna conversación.

## Errores típicos

- Medir productividad con líneas de código, commits o puntos por persona.
- Tableros individuales que terminan en evaluaciones de desempeño.
- Solo datos del sistema, sin preguntar a las personas.
- Diez métricas a la vez, sin saber qué decisión apoyan.
- Ignorar el trabajo que no deja rastro: revisiones, mentoría, apagar incendios.
- Poner la etiqueta SPACE a un tablero de velocity.

## Qué observar al llegar a un equipo

- ¿Cómo mide hoy la organización la productividad? ¿Quién lo pidió y para qué?
- ¿Hay rankings de commits, tickets o puntos por persona?
- ¿Existe alguna encuesta sobre la experiencia de desarrollar? ¿Qué se hizo con el último resultado?
- ¿Cuántas interrupciones recibe una persona en un día típico?
- ¿Cuánto tarda alguien nuevo en llevar su primer cambio a producción?
- ¿Quién hace las revisiones y la mentoría? ¿Aparece en algún lado?

## Relacionado

- [DORA](dora.md) · [Extreme Programming](xp.md)
- [Fase 5 · Medición y aprendizaje](../../fases/05-medicion.md) · [Catálogo de métricas](../../caja-de-herramientas/catalogo-metricas.md)
- [Pensamiento sistémico](../lean/pensamiento-sistemico.md) · [Métricas y vocabularios](../flujo/metricas-y-vocabularios.md)

## Para profundizar

- Nicole Forsgren, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck y Jenna Butler, "The SPACE of Developer Productivity: There's more to it than you think", *ACM Queue*, vol. 19, n.º 1, 2021. [queue.acm.org](https://queue.acm.org/detail.cfm?id=3454124).
