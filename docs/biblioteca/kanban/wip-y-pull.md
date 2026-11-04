# WIP y sistema pull

**En una frase:** Limitar el trabajo en curso y empezar algo nuevo solo cuando hay capacidad libre es lo que convierte un tablero en un sistema Kanban.

**Área:** Kanban · **Lectura:** ~3 min

## Qué es

El **WIP** (*work in progress*) es el trabajo que se empezó y todavía no se termina. En un **sistema pull**, quien tiene capacidad toma el siguiente ítem; en uno *push*, alguien asigna trabajo sin mirar cuánto hay en curso.

Las dos escuelas lo ponen en el centro:

- La Kanban Guide (mayo de 2025) exige **controlar explícitamente** el WIP entre los puntos de inicio y de término. El equipo elige cómo representarlo, y se empieza algo nuevo solo cuando hay una señal clara de capacidad.
- El Kanban Method lo nombra como práctica: **limitar el WIP**.

La razón está en la [Ley de Little](../flujo/ley-de-little.md): si el ritmo de entrega se mantiene, más trabajo en curso significa que cada ítem pasa, en promedio, más tiempo en el sistema. El lema es *deja de empezar, empieza a terminar*.

## Para qué sirve (y cuándo no)

Reduce el cambio de contexto, acorta el lead time, expone los cuellos de botella y obliga a colaborar para terminar. Bien usado, suele ser la palanca de flujo más barata.

Tiene límites. Si el cuello de botella está fuera del equipo (otra área, un proveedor o una aprobación), el límite solo hace visible la espera, y el trabajo de verdad es gestionar esa dependencia. Tampoco funciona si se impone sin acuerdo: el equipo lo esquiva con trabajo "por fuera".

## Cómo se aplica

1. Cuenta el WIP actual, incluidos los ítems bloqueados y en espera.
2. Empieza con un **límite total** igual o algo menor que lo que hay hoy. Después pasa a límites por columna. Como punto de partida, la [Fase 3 §3.3](../../fases/03-sistema-de-trabajo.md#33-disenar-el-tablero) sugiere personas en la etapa × 1,5.
3. Acuerda qué se hace al llegar al límite: ayudar a terminar lo que está más a la derecha, revisar, hacer *pairing* o atacar el bloqueo.
4. Escribe la regla de *pull*: quién toma el siguiente ítem y de dónde.
5. Ajusta el límite con datos cada pocas semanas, no cada vez que molesta.

## Errores típicos

- Límites escritos que nadie respeta, o que se suben apenas se alcanzan.
- Contar solo las columnas activas y dejar sin límite las de espera.
- Bloqueados que "no cuentan" y se acumulan sin que nadie los mire.
- Límite por persona en vez de por estado: cada uno está ocupado y el trabajo igual espera.
- *Pull* de fachada: el ítem se "toma" porque un jefe lo asignó.

## Qué observar al llegar a un equipo

- ¿Cuántos ítems en curso hay por persona? Como referencia, más de dos suele indicar cambio de contexto.
- ¿Cuántos ítems se empezaron y cuántos se terminaron en las últimas cuatro semanas?
- ¿Las columnas "listo para…" están llenas? Ahí se acumula la espera.
- ¿Quién decide qué empieza cada persona?
- Cuando se llega a un límite, ¿qué hace el equipo de verdad?
- ¿Hay ítems en curso con muchas semanas de antigüedad?

## Relacionado

- [Visualizar](visualizar.md) · [Políticas explícitas](politicas-explicitas.md) · [Clases de servicio](clases-de-servicio.md)
- [Ley de Little](../flujo/ley-de-little.md) · [Work item age](../flujo/work-item-age.md) · [Cómo leer un CFD](../flujo/cfd.md)
- [Fase 3 · Diseño del sistema de trabajo](../../fases/03-sistema-de-trabajo.md)
- [Políticas del tablero](../../caja-de-herramientas/politicas-tablero.md) · [Catálogo de métricas](../../caja-de-herramientas/catalogo-metricas.md)

## Para profundizar

- Daniel Vacanti y John Coleman (con otros colaboradores), *The Kanban Guide*, mayo de 2025. [kanbanguides.org](https://kanbanguides.org/english/).
- David J. Anderson, *Kanban: Successful Evolutionary Change for Your Technology Business*, 2010.
- John D. C. Little, "A Proof for the Queuing Formula: L = λW", *Operations Research*, 1961.
