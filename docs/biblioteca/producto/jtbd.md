# Jobs to be Done

**En una frase:** Las personas no compran productos: los "contratan" para progresar en una situación concreta, y entender ese trabajo explica mejor qué construir que cualquier perfil demográfico.

**Área:** Producto · **Lectura:** ~3 min

## Qué es

*Jobs to be Done* (JTBD) cambia la unidad de análisis: en vez del cliente o del producto, mira el **trabajo** que alguien intenta hacer en una circunstancia. El ejemplo clásico es el del batido, contado en *Competing Against Luck* (2016): muchos batidos se vendían temprano a personas que manejaban solas un largo trayecto. Lo "contrataban" para que el viaje fuera menos aburrido y aguantar el hambre hasta el mediodía. Su competencia no eran otros batidos, sino un plátano, un bagel o el aburrimiento.

Hay **dos escuelas**, con métodos distintos. Conviene saber de cuál habla cada quien:

| Aspecto | Christensen y Moesta | Ulwick (ODI) |
|---|---|---|
| Qué es un job | El progreso que alguien busca en una circunstancia, con dimensión funcional, social y emocional | Una tarea o meta funcional, estable en el tiempo, que se descompone en pasos |
| Cómo se investiga | Entrevistas de cambio (*switch*): reconstruir cómo alguien decidió pasar a otra solución | Encuestas con muchas *desired outcome statements*, calificadas por importancia y satisfacción |
| Qué produce | Historias de compra y las fuerzas que empujan o frenan el cambio | Las oportunidades menos atendidas, priorizadas con números |

Bob Moesta describe cuatro fuerzas: el empuje de la situación actual y la atracción de lo nuevo, contra la ansiedad por lo nuevo y el hábito de lo actual. Anthony Ulwick llama a su método *Outcome-Driven Innovation* (ODI).

## Para qué sirve (y cuándo no)

Sirve para salir de la lista de funcionalidades: ayuda a escribir el problema antes de la solución, a encontrar la competencia real (incluido "no hacer nada") y a dar a las oportunidades del [continuous discovery](continuous-discovery.md) un lenguaje común.

No es una plantilla para reescribir historias de usuario. Tampoco sirve para decisiones chicas de interfaz ni para trabajo técnico interno sin usuario que elija. Y la versión de encuestas de Ulwick exige escala y método: hacerla a medias da números con apariencia de precisión.

## Cómo se aplica

1. **Elige un momento de decisión real:** alguien que empezó a usar el producto o lo dejó hace poco.
2. **Entrevista sobre lo que pasó**, no sobre lo que haría: qué estaba intentando, qué probó antes, qué casi lo frena.
3. **Escribe el job sin solución:** verbo, objeto y circunstancia. "Financiar una compra urgente sin ir a una sucursal" sirve; "usar la app" no.
4. **Busca la competencia real**, incluidas las soluciones caseras y no hacer nada.
5. **Lleva el job al refinamiento** como contexto del ítem, para que el equipo discuta alternativas de solución.

## Errores típicos

- Llamar "job" a una funcionalidad ("exportar a Excel").
- Mezclar las dos escuelas sin saberlo: citar a Christensen y aplicar una encuesta de ODI improvisada.
- Inventar los jobs en una sala, sin hablar con nadie.
- Convertir cada historia de usuario en "Cuando…, quiero…" sin cambiar nada más.
- Buscar un solo job para todo el producto.

## Qué observar al llegar a un equipo

- Pregunta al PO por qué los clientes eligieron el producto en vez de la alternativa. ¿Responde con datos de conversaciones o con supuestos?
- ¿El equipo sabe contra qué compite el producto, incluido "no hacer nada"?
- ¿Los ítems del backlog describen un problema o solo una funcionalidad?
- ¿Alguien estudió por qué se van los usuarios que dejaron el producto?

## Relacionado

- [Continuous discovery](continuous-discovery.md) · [Impact mapping](impact-mapping.md)
- [Fase 1 · Descubrimiento de producto](../../fases/01-descubrimiento.md) · [Lean Canvas e hipótesis](../../caja-de-herramientas/lean-canvas-hipotesis.md)
- [Refinamiento del Product Backlog](../scrum/refinamiento.md)

## Para profundizar

- Clayton M. Christensen, Taddy Hall, Karen Dillon y David S. Duncan, *Competing Against Luck*, HarperBusiness, 2016 (capítulo 1, el ejemplo del batido). Resumen de los mismos autores en "Know Your Customers' Jobs to Be Done", *Harvard Business Review*, septiembre de 2016.
- Bob Moesta y Greg Engle, *Demand-Side Sales 101*, 2020: entrevistas de cambio y fuerzas del progreso.
- Anthony W. Ulwick, *What Customers Want*, 2005, y *Jobs to Be Done: Theory to Practice*, 2016: Outcome-Driven Innovation.
