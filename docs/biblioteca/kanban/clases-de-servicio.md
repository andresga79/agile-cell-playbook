# Clases de servicio

**En una frase:** Una clase de servicio es una política que trata distinto a ciertos ítems según cómo cambia su costo de demora en el tiempo.

**Área:** Kanban · **Lectura:** ~3 min

## Qué es

No todo el trabajo pierde valor igual mientras espera. Un incidente cuesta desde el primer minuto, un cambio regulatorio cuesta poco hasta la fecha límite y mucho después, y una mejora interna casi no cuesta hoy pero sí más adelante. Las **clases de servicio** traducen esos perfiles de urgencia en reglas de selección y de flujo.

El Kanban Method propone cuatro perfiles habituales:

| Clase | Cómo se comporta el costo de demora | Pregunta clave |
|---|---|---|
| Expedito | Alto e inmediato | ¿Paramos lo demás? |
| Fecha fija | Bajo hasta una fecha y luego muy alto | ¿Cuándo hay que empezar? |
| Estándar | Crece de forma más o menos lineal | ¿En qué orden? |
| Intangible | Casi nulo hoy, crece más adelante | ¿Cuánta capacidad le reservamos? |

Las clases de servicio son un aporte del Kanban Method. La Kanban Guide no las menciona, aunque nada impide expresar algo equivalente como políticas de flujo en la Definition of Workflow.

Las políticas de cada clase en el playbook están en [Políticas del tablero](../../caja-de-herramientas/politicas-tablero.md#clases-de-servicio), y cómo estimar el perfil y ordenar dentro de una clase, en [Cost of Delay y WSJF](../../caja-de-herramientas/cost-of-delay-wsjf.md).

## Para qué sirve (y cuándo no)

Sirve para dejar de discutir prioridades ítem por ítem, para cumplir fechas sin vivir apurados y para que la deuda técnica tenga un lugar garantizado. También hace honestos los compromisos: cada clase puede tener su propio SLE.

No sirve si todo el trabajo tiene el mismo perfil: una sola clase basta. Tampoco funciona cuando "expedito" se usa como sinónimo de "lo pidió alguien importante". Ahí la clase refleja poder, no costo de demora.

## Cómo se aplica

1. Revisa los últimos dos o tres meses de ítems y agrúpalos por perfil de urgencia.
2. Define solo las clases que aparecen de verdad. Puedes empezar solo con estándar y expedito.
3. Para cada clase escribe una política: quién puede asignarla, cómo entra, su límite de WIP y cómo se selecciona.
4. Para la fecha fija, calcula cuándo empezar con el lead time real de ese tipo de ítem, no con el optimismo del plan.
5. Mide el lead time por clase y revisa si las políticas se cumplen.

## Errores típicos

- Más de un expedito a la vez. Como referencia, si es frecuente, lo expedito se volvió la forma normal de trabajar.
- Fechas fijas que no lo son: "lo quiero para el viernes" sin consecuencia real.
- Lo intangible nunca se toma porque siempre hay algo estándar primero.
- Clases asignadas por quien pide, sin una regla común.

## Qué observar al llegar a un equipo

- ¿Qué porcentaje de los ítems del último mes se marcó como urgente?
- ¿Cuántos expeditos hubo y cuánto se demoró el resto mientras tanto?
- ¿Los ítems con fecha se empiezan con margen o se rescatan a última hora?
- ¿Cuándo se trabajó deuda técnica por última vez?
- ¿Quién decide la clase de un ítem? ¿Hay una regla escrita?

## Relacionado

- [Políticas explícitas](politicas-explicitas.md) · [WIP y sistema pull](wip-y-pull.md) · [STATIK](statik.md)
- [Cost of Delay y WSJF](../../caja-de-herramientas/cost-of-delay-wsjf.md) · [Scatterplot, percentiles y SLE](../flujo/scatterplot-sle.md)
- [Principios de flujo de Reinertsen](../lean/principios-de-flujo.md)
- [Fase 3 §3.3 · Diseñar el tablero](../../fases/03-sistema-de-trabajo.md#33-disenar-el-tablero)

## Para profundizar

- David J. Anderson, *Kanban: Successful Evolutionary Change for Your Technology Business*, 2010. Incluye las clases de servicio.
- Donald G. Reinertsen, *The Principles of Product Development Flow*, 2009. Base del costo de demora.
