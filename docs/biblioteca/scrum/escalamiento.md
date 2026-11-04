# Escalamiento: Nexus, LeSS y SAFe

**En una frase:** Marcos para coordinar varios equipos sobre un mismo producto; antes de adoptar uno, conviene reducir las dependencias que obligan a coordinar.

**Área:** Scrum · **Lectura:** ~3 min

## Qué es

Cuando varios equipos trabajan sobre un mismo producto, aparecen dependencias, integración tardía y backlogs que compiten. Tres marcos conocidos responden de forma distinta:

| Marco | Idea central | Estructura |
|---|---|---|
| **Nexus** (Ken Schwaber, Scrum.org) | Scrum con foco en la integración | 3 a 9 Scrum Teams, un PO, un Product Backlog, un Nexus Integration Team y un incremento integrado cada Sprint |
| **LeSS** (Craig Larman y Bas Vodde) | Scrum para muchos equipos, con menos estructura | Un PO, un Product Backlog y un Sprint común; LeSS hasta unos 8 equipos y LeSS Huge para más |
| **SAFe** (Dean Leffingwell, Scaled Agile) | Marco configurable, del equipo al portafolio | Agile Release Trains, PI Planning, roles y niveles adicionales |

**La crítica: descalar antes de escalar.** LeSS se presenta como un marco para *descalar* la organización: más roles producen equipos menos responsables, y más procesos producen menos apropiación. La pregunta de fondo no es qué marco elegir, sino cuánta coordinación se puede eliminar.

## Para qué sirve (y cuándo no)

Sirve cuando hay de verdad un solo producto que necesita varios equipos y un incremento integrado. Te da eventos y roles para hacer visibles las dependencias.

No sirve cuando:

- Los equipos trabajan en productos distintos. No hay nada que integrar; basta con acuerdos livianos.
- Las dependencias vienen de cómo se cortaron los equipos (por capa o por componente) y se pueden eliminar.
- Se adopta para parecer ágil o para renombrar una oficina de proyectos.

## Cómo se aplica

1. Antes de agregar equipos o un marco, revisa las preguntas de la [Fase 6 §6.5](../../fases/06-mejora-innovacion.md#65-escalamiento).
2. Mide las dependencias con el [tablero de dependencias](../../caja-de-herramientas/tablero-dependencias.md): cuántas hay, cuánto esperan y de dónde vienen.
3. Ataca la causa: equipos por dominio o por *feature* en lugar de por componente, arquitectura más desacoplada, menos traspasos.
4. Si después de eso sigue habiendo un producto con varios equipos, prueba el marco más liviano que resuelva el problema y empieza con un piloto.
5. Inspecciona: ¿mejoró el tiempo hasta un incremento integrado y usable?

## Errores típicos

- Instalar un marco pesado para coordinar dos o tres equipos.
- Escalar la disfunción: si un equipo no entrega un incremento terminado, diez tampoco.
- Equipos por componente que necesitan a todos los demás para terminar algo.
- Un backlog por equipo para el mismo producto, ordenados por personas distintas.
- Integrar al final del trimestre en lugar de cada Sprint.

## Qué observar al llegar a un equipo

- ¿Cuántos equipos tienen que intervenir para que un ítem típico llegue a producción?
- ¿Cuántas dependencias abiertas hay y cuántos días llevan esperando?
- ¿Cada cuánto existe un incremento integrado que funcione de punta a punta?
- ¿Cuántos roles de coordinación hay por cada equipo que construye?
- ¿Quién ordena el trabajo cuando dos equipos compiten por la misma capacidad?

## Relacionado

- [Artefactos y compromisos](artefactos-y-compromisos.md) · [Accountabilities](accountabilities.md) · [Evidence-Based Management](ebm.md)
- [Fase 6 · Mejora, innovación y escalamiento](../../fases/06-mejora-innovacion.md)
- [Tablero de dependencias](../../caja-de-herramientas/tablero-dependencias.md) · [Flight Levels](../kanban/flight-levels.md)

## Para profundizar

- Scrum.org, *The Nexus Guide: The Definitive Guide to Scaling Scrum with Nexus*, enero de 2021. [scrum.org](https://www.scrum.org/resources/online-nexus-guide).
- Craig Larman y Bas Vodde, *Large-Scale Scrum: More with LeSS*, Addison-Wesley, 2016. Principios en [less.works](https://less.works/less/principles/more-with-less).
- Scaled Agile, SAFe 6.0, publicado en 2023. Revisa en [framework.scaledagile.com](https://framework.scaledagile.com/) si hay una versión posterior.
