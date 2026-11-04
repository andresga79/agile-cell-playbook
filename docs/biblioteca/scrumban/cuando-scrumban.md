# Cuándo sí y cuándo no Scrumban

**En una frase:** Scrumban conviene cuando una parte importante de la demanda llega sin aviso pero el equipo todavía necesita un objetivo común y un ritmo; no es el punto medio por defecto.

**Área:** Scrumban · **Lectura:** ~3 min

## Qué es

Es elegir qué combinación de cadencia y flujo le sirve a un equipo según su demanda. El playbook lo decide con el árbol de la [Fase 3 §3.2](../../fases/03-sistema-de-trabajo.md#32-elegir-el-marco-segun-la-demanda), a partir del porcentaje de trabajo no planificable:

| Demanda no planificable | Recomendación | Lo que cuidas |
|---|---|---|
| Menos de 20 % | Scrum con capacidad reservada | Sumar métricas de flujo sin desarmar lo que funciona |
| 20 % a 50 % | Scrumban: cadencia más flujo con WIP | Que el Sprint Goal siga siendo creíble |
| Más de 50 % | Kanban con cadencias de revisión | Que haya reposición, revisión y retro con datos |

Los umbrales son una heurística del playbook, **como referencia**; no vienen de ninguna guía. En los tres casos se usan métricas de flujo, límites de WIP y políticas explícitas. Lo que cambia es dónde está el compromiso: en el Sprint Goal, en el nivel de servicio o en los dos.

## Para qué sirve (y cuándo no)

Sirve para elegir con datos. El porcentaje no alcanza: mira también si el equipo necesita un objetivo compartido para enfocarse y si hay interesados que valoran una revisión con fecha fija.

Scrumban **no conviene** cuando:

- Scrum funciona, el Sprint Goal se cumple y lo no planificado cabe en la capacidad reservada. Ahí basta sumar las prácticas de flujo, como propone la *Kanban Guide for Scrum Teams*.
- Casi todo el trabajo es reactivo (soporte, operación). Un Sprint que se rompe siempre solo agrega ceremonia: Kanban con cadencias encaja mejor.
- Lo "no planificable" es en realidad trabajo sin filtro: pedidos que nadie prioriza ni rechaza. Primero ordena la entrada de trabajo; después decide el marco.
- Se elige para evitar una conversación difícil sobre el Product Owner o la calidad.

## Cómo se aplica

1. Toma 3 o 4 Sprints (o 6 a 8 semanas) de historia y cuenta el trabajo **no** planificado que *llegó*, como clasifica la demanda entrante la [Fase 3 §3.1](../../fases/03-sistema-de-trabajo.md#31-analizar-la-demanda). Contar solo los ítems terminados es una aproximación.
2. Separa lo urgente de verdad (incidentes y hotfix) de lo que solo llegó tarde o por un atajo.
3. Ubica al equipo en la tabla y revisa los factores cualitativos de arriba.
4. Elige un experimento de 3 o 4 semanas, con una señal de éxito escrita: Sprint Goal cumplido, lead time de lo urgente o ítems arrastrados entre Sprints.
5. Repite la medición cada trimestre: la demanda cambia.

## Errores típicos

- Elegir Scrumban "porque es lo mejor de los dos mundos", sin medir la demanda.
- Contar como no planificable lo que solo estaba mal refinado.
- Medir el porcentaje una vez y no volver a mirarlo.
- Cambiar de marco y de herramienta a la vez.
- Usar los umbrales como regla rígida: un equipo con 22 % no está obligado a dejar Scrum.

## Qué observar al llegar a un equipo

- ¿Cuántos ítems entran al Sprint después de la Planning? ¿Por qué canal y quién los trae?
- ¿El Sprint Goal se cumple? ¿Alguien lo menciona en la Daily?
- ¿Hay un carril o una etiqueta para lo urgente? ¿Cuántos ítems lo usan por semana?
- ¿Cuánto tarda en resolverse un incidente, desde que se reporta?
- ¿Quién decide qué urgencia interrumpe al equipo y con qué criterio?

## Relacionado

- [Qué es Scrumban](que-es-scrumban.md) · [Combinar cadencia y flujo](cadencia-y-flujo.md) · [Antipatrones de Scrumban](antipatrones-scrumban.md)
- [El Sprint y Sprint Planning](../scrum/sprint-y-planning.md) · [Clases de servicio](../kanban/clases-de-servicio.md) · [Las cadencias de Kanban](../kanban/cadencias-kanban.md)
- [Fase 3 · Diseño del sistema de trabajo](../../fases/03-sistema-de-trabajo.md)

## Para profundizar

- Scrum.org, Daniel Vacanti y Yuval Yeret, *The Kanban Guide for Scrum Teams*, enero de 2021. [scrum.org](https://www.scrum.org/resources/kanban-guide-scrum-teams).
- Corey Ladas, *Scrumban: Essays on Kanban Systems for Lean Software Development*, Modus Cooperandi Press (copyright 2008; publicado en enero de 2009).
