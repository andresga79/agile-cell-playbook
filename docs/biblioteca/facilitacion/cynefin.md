# Cynefin

**En una frase:** Un marco para darle sentido a una situación antes de decidir: según qué tan clara sea la relación entre causa y efecto, conviene aplicar una regla, analizar, experimentar o actuar de inmediato.

**Área:** Facilitación y cambio · **Lectura:** ~3 min

## Qué es

Lo creó Dave Snowden, que lo publicó con Cynthia Kurtz en 2003 y con Mary Boone en *Harvard Business Review* en 2007. Distingue dominios según la relación entre causa y efecto:

| Dominio | Causa y efecto | Cómo decidir |
|---|---|---|
| **Claro** | Evidente para cualquiera | Percibir, categorizar, responder: aplica la regla o la mejor práctica conocida |
| **Complicado** | Existe, pero requiere análisis o expertos | Percibir, analizar, responder: hay varias buenas prácticas posibles |
| **Complejo** | Solo se entiende en retrospectiva | Sondear, percibir, responder: experimentos seguros de fallar |
| **Caótico** | No se puede determinar | Actuar, percibir, responder: primero estabilizar |

Un quinto espacio, la **confusión**, es no saber en qué dominio estás; ahí cada uno actúa con su enfoque preferido. Los nombres cambiaron: en 2007 el dominio claro se llamaba *simple* (después, *obvious*) y la confusión, *disorder*.

El borde entre claro y caótico es un "precipicio": por exceso de confianza en las reglas, lo que parecía rutinario se desmorona de golpe.

## Para qué sirve (y cuándo no)

Sirve para elegir el enfoque según el contexto y no por costumbre. Un ejemplo del playbook es decidir entre Scrum, Scrumban o Kanban con cadencias según la demanda, en [Cuándo sí y cuándo no Scrumban](../scrumban/cuando-scrumban.md): no hay un marco "mejor", hay uno que encaja con cómo llega el trabajo.

También explica por qué la [escalera de Scrumban](../../fases/transversal-scrumban-paso-a-paso.md) avanza con experimentos: cambiar cómo trabaja un equipo es complejo. Nadie sabe de antemano qué límite de WIP funcionará; se prueba, se mira la señal y se ajusta.

No sirve para etiquetar equipos o proyectos enteros: distintas partes del trabajo viven en dominios distintos. Tampoco es excusa para no planificar ("somos complejos") ni una matriz de 2x2 que se llena con un cuestionario.

## Cómo se aplica

Una versión simple, **como referencia** (el método de Snowden es más elaborado):

1. Junta 10 a 15 situaciones reales recientes: un incidente, un pedido de soporte, una funcionalidad nueva.
2. El equipo las ubica con una pregunta: "¿sabíamos de antemano qué iba a pasar?".
3. Discute las que generan desacuerdo: ahí está el aprendizaje.
4. Acuerda un enfoque por dominio. Lo claro va a una [política explícita](../kanban/politicas-explicitas.md) o a un checklist; lo complicado, a un spike o a expertos; lo complejo, a un experimento con hipótesis y señal (ver la [retrospectiva basada en datos](../../caja-de-herramientas/retro-datos.md)); lo caótico, a un protocolo de incidentes: actuar primero, analizar después.
5. Revisa cada trimestre: lo complejo de hoy puede volverse complicado cuando el equipo aprende.

## Errores típicos

- Tratar todo como complicado: planes detallados y estimaciones finas para trabajo que nadie hizo antes.
- Importar "buenas prácticas" de otro equipo como si el contexto fuera claro.
- Armar un comité en medio de un incidente, cuando hay que actuar.
- Llamar "experimento" a un cambio sin señal de éxito ni fecha de revisión.

## Qué observar al llegar a un equipo

- ¿El soporte repetitivo tiene una política escrita, o se resuelve distinto cada vez?
- ¿Se estima con el mismo detalle una corrección conocida y una funcionalidad nueva?
- ¿Las mejoras del proceso se prueban con una señal, o se adoptan "porque funcionó en otro lado"?
- En el último incidente, ¿alguien actuó primero o se esperó una aprobación?

## Relacionado

- [Cuándo sí y cuándo no Scrumban](../scrumban/cuando-scrumban.md) · [Implementar Scrumban paso a paso](../../fases/transversal-scrumban-paso-a-paso.md)
- [Pensamiento sistémico](../lean/pensamiento-sistemico.md) · [Liberating Structures](liberating-structures.md) · [Resistencia al cambio](resistencia-al-cambio.md)

## Para profundizar

- David J. Snowden y Mary E. Boone, "A Leader's Framework for Decision Making", *Harvard Business Review*, 85(11), noviembre de 2007.
- Cynthia F. Kurtz y David J. Snowden, "The new dynamics of strategy: Sense-making in a complex and complicated world", *IBM Systems Journal*, 42(3), 2003.
- The Cynefin Company, Cynefin Wiki, "Cynefin Domains" (consultado en 2026). [cynefin.io](https://cynefin.io/wiki/Cynefin_Domains).
