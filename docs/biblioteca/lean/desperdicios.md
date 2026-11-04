# Los desperdicios en software

**En una frase:** Desperdicio es todo lo que consume tiempo o esfuerzo sin acercar valor al cliente; nombrarlo ayuda a verlo, pero cazarlo sin entender el sistema solo mueve el problema.

**Área:** Lean y flujo · **Lectura:** ~3 min

## Qué es

En el Sistema de Producción Toyota, Taiichi Ohno clasificó el desperdicio (*muda*) en siete tipos. En 2006, Mary y Tom Poppendieck propusieron siete equivalentes para el desarrollo de software. Son dos listas distintas: la de Ohno habla de fábricas y la de los Poppendieck es su traducción.

| Ohno (fábrica) | Poppendieck (software) |
|---|---|
| Inventario | Trabajo a medio hacer |
| Sobreproducción | Funcionalidades de más |
| Procesamiento extra | Volver a aprender |
| Transporte | Traspasos |
| Movimiento | Cambio de tarea |
| Espera | Demoras |
| Defectos | Defectos |

Algunas listas posteriores agregan un octavo, el talento no aprovechado. No es de Ohno.

El TPS también nombra la sobrecarga (*muri*) y la irregularidad (*mura*). Importan porque un equipo sobrecargado o con demanda a tirones genera desperdicio aunque nadie lo quiera.

## Para qué sirve (y cuándo no)

Sirve para nombrar lo que no se ve en el tablero: la rama abierta hace semanas, el ítem "hecho" que no está en producción, la persona que explica por tercera vez el mismo requisito. Con nombre, el equipo puede priorizarlo.

No sirve como lista para auditar personas. Tampoco todo lo que no llega a producción es desperdicio: un experimento que descarta una idea genera conocimiento, y eso en el desarrollo de productos es valor. El desperdicio real es aprender tarde algo que se podía aprender barato.

## Cómo se aplica

1. **Elige un ítem terminado hace poco** y reconstruye su historia con quienes lo trabajaron: cuándo se pidió, cuándo se empezó, cuántas veces cambió de manos, cuánto esperó y si volvió atrás.
2. **Marca los desperdicios** que aparecen, con la tabla en la mano. Suelen dominar tres: trabajo a medio hacer, demoras y traspasos.
3. **Busca la causa en el sistema**, no en la persona: ¿por qué esperó?, ¿qué regla obligó al traspaso?
4. **Elige uno** y diseña un experimento chico, por ejemplo bajar el WIP o juntar dos etapas en una.
5. **Repite con 5 a 10 ítems** si necesitas datos. Para ver el flujo completo con tiempos, usa el taller de [Value Stream Mapping](../../caja-de-herramientas/value-stream-map.md).

Como referencia: empieza por el trabajo a medio hacer. Es el más fácil de medir (cuenta lo empezado y no entregado) y bajarlo reduce varios de los otros.

## Errores típicos

- Usar la lista para culpar: "tú generas traspasos".
- Atacar lo visible (reuniones largas) y dejar lo grande (semanas de espera en una aprobación).
- Eliminar pruebas, revisiones o documentación "porque es desperdicio" y pagar después en defectos.
- Bajar el desperdicio en una etapa y crear una cola en la siguiente.
- Ignorar la sobrecarga: pedir más eficiencia a un equipo que ya está al límite.

## Qué observar al llegar a un equipo

- ¿Cuántos ítems están empezados y no entregados? Incluye ramas abiertas y "hecho, pendiente de despliegue".
- ¿Hay datos de uso de lo que se entregó en los últimos meses? Sin ellos, las funcionalidades de más no se ven.
- ¿Cuántas personas o áreas toca un ítem típico antes de llegar a producción?
- ¿Las personas trabajan en más de dos cosas a la vez, o en más de un equipo?
- ¿En la Planning se vuelven a explicar decisiones que ya se habían tomado?
- ¿Cuántos defectos vuelven del ambiente de pruebas o de producción por Sprint o por mes?

## Relacionado

- [Lean en una página](lean-en-una-pagina.md) · [Principios de flujo](principios-de-flujo.md) · [Pensamiento sistémico](pensamiento-sistemico.md)
- [WIP y sistema pull](../kanban/wip-y-pull.md) · [Work item age](../flujo/work-item-age.md)
- [Value Stream Mapping](../../caja-de-herramientas/value-stream-map.md) · [DoR y DoD](../../caja-de-herramientas/dor-dod.md)

## Para profundizar

- Taiichi Ohno, *Toyota Production System: Beyond Large-Scale Production*, Productivity Press, 1988 (original en japonés, 1978).
- Mary y Tom Poppendieck, *Implementing Lean Software Development: From Concept to Cash*, Addison-Wesley, 2006, capítulo 4.
- Mary y Tom Poppendieck, *Lean Software Development: An Agile Toolkit*, Addison-Wesley, 2003. Trae una primera versión de la lista.
