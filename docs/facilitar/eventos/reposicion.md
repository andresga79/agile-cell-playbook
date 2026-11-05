# Reunión de reposición

**En corto:** El PO y el equipo eligen qué ítems cruzan el punto de compromiso para ocupar los espacios libres del sistema. Sales con pocos ítems comprometidos, en orden, y con un aviso claro para quien pidió lo que no entró.

**Duración:** 30 min semanales como referencia; 15 min si se repone por umbral · **Participan:** PO, equipo; SM facilita

!!! note "Si acabas de llegar"
    En tus primeras semanas, facilítala como el equipo la hace hoy. Lo que veas va al diario; los cambios se proponen después de la devolución de la semana 3, como experimento.

## Antes

- **Cuenta los espacios libres.** Mira el límite de WIP de la columna de entrada (por ejemplo, "Listo para empezar") y cuántos ítems tiene hoy. Sin límites, anota cuántos ítems hay en curso.
- **Revisa los candidatos con el PO** el día anterior: los primeros del backlog, ya refinados. Un filtro JQL simple ayuda: `project = CLAVE AND status = "Por hacer" ORDER BY Rank` (adapta el nombre del estado).
- **Busca lo que tiene fecha.** Un ítem de fecha fija se empieza con margen según el lead time P85, no el día antes.
- Ten a mano las políticas: clases de servicio, Definition of Ready y quién puede declarar un urgente.

## Agenda

| Min | Bloque | Qué se hace | Frase o pregunta para facilitar |
|---|---|---|---|
| 0–3 | Abrir | Recordar el propósito y cuántos espacios hay | "Hoy hay tres lugares libres. Elegimos para esos tres, no más." |
| 3–8 | Mirar el sistema | Throughput reciente, ítems bloqueados, expeditos o fechas en camino | "¿Algo de lo que está en curso cambia lo que conviene empezar?" |
| 8–20 | Candidatos | El PO presenta los candidatos en orden; el equipo revisa tamaño, preguntas abiertas y clase de servicio | "¿Este ítem está listo para empezar mañana? ¿Qué falta para estarlo?" |
| 20–26 | Decidir | El PO confirma el orden y entran solo los que caben | "Si entra este, ¿cuál queda fuera?" |
| 26–30 | Cerrar | Leer lo comprometido, qué va al refinamiento y quién avisa a quién | "¿Quién le cuenta a cada solicitante qué entró y qué no?" |

Si se repone por umbral, salta "Mirar el sistema" y quédate en 15 minutos. Con muchos solicitantes, sube a 45 y alarga "Candidatos", no la decisión.

## Si algo se tuerce

- **Si quien pide más fuerte quiere saltarse la fila:** vuelve a la política de urgentes: "¿Qué pasa si esto espera una semana?". Si no hay política, anótalo para la retro. Ver [Los stakeholders piden trabajo directo](../../situaciones/stakeholders-saltan-al-po.md).
- **Si no hay espacios, pero presionan para meter más:** pregunta qué se termina o se saca primero. Más trabajo en curso alarga lo que ya está. Ver [Todos tienen cuatro o cinco cosas abiertas](../../situaciones/demasiado-wip.md).
- **Si un candidato tiene preguntas sin resolver:** no entra. Va al refinamiento y sube el siguiente de la lista.
- **Si el PO no está y nadie puede decidir el orden:** no lo decidas tú. Repón solo con lo que el PO ya dejó ordenado y busca su respaldo. Ver [El PO no aparece](../../situaciones/po-ausente.md).

## Después

- **En Jira:** que el equipo o el PO muevan lo comprometido a la columna de compromiso ese mismo día, no tú. Ahí empieza a contar el lead time.
- **Al solicitante:** avisa qué entró y, si hay SLE, qué esperar ("85 % de los ítems en 12 días o menos"). A quien no entró, dile cuándo se vuelve a mirar.
- Anota en el espacio del equipo cualquier excepción a la política, para la Retro.

## Relacionado

- [Las cadencias de Kanban](../../biblioteca/kanban/cadencias-kanban.md): la reposición entre las siete cadencias.
- [WIP y sistema pull](../../biblioteca/kanban/wip-y-pull.md): por qué se llenan solo los espacios libres.
- [Clases de servicio](../../biblioteca/kanban/clases-de-servicio.md) y sus [políticas](../../caja-de-herramientas/politicas-tablero.md#clases-de-servicio): cómo tratar lo urgente y lo que tiene fecha.
- [Combinar cadencia y flujo](../../biblioteca/scrumban/cadencia-y-flujo.md): la reposición por umbral.
