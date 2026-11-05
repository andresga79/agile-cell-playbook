# Revisión de entrega

**En corto:** El equipo, el PO y los interesados conversan sobre lo entregado en el ciclo y sobre cómo se está comportando el servicio, con datos de flujo. Sales con feedback para el backlog y con expectativas de plazo basadas en datos, no en promesas.

**Duración:** 45 min cada dos semanas como referencia · **Participan:** PO, equipo, stakeholders; SM facilita

## Antes

- **Lista lo entregado.** Un filtro JQL como `project = CLAVE AND resolved >= -14d ORDER BY resolved DESC` muestra lo terminado en las dos últimas semanas; si el flujo no completa la resolución, cambia la condición de fecha por `status CHANGED TO "Hecho" AFTER -14d` (adapta el nombre del estado). Elige con el PO qué ver funcionando, mejor en producción.
- **Prepara cuatro datos** de las últimas 8 a 12 semanas: throughput por semana, lead time en percentiles 50, 85 y 95, el % de ítems terminados dentro del SLE y la edad de lo que está en curso. Jira no siempre da percentiles: exporta las fechas a una planilla. Si aún no hay SLE, muestra solo los percentiles: el SLE llega con el peldaño 5.
- **Marca los ítems en curso cuya edad se acerca al SLE.** Son los que más interesan a quien espera.
- **Invita con la agenda.** Cuéntales a los stakeholders qué feedback se espera de ellos.

!!! note "No es la revisión de servicio"
    La revisión de servicio mensual compara métricas con niveles de servicio acordados, a nivel de gobierno. Esta mira lo entregado, el feedback y qué esperar del flujo. Si el equipo aún no la tiene, no la introduzcas en tus primeras semanas: proponla después de la devolución de la semana 3, como experimento.

## Agenda

| Min | Bloque | Qué se hace | Frase o pregunta para facilitar |
|---|---|---|---|
| 0–5 | Abrir | Propósito y agenda; es una sesión de trabajo, no una presentación | "Queremos su opinión sobre lo entregado y sobre cómo les está llegando." |
| 5–20 | Lo entregado | El equipo muestra lo terminado; los stakeholders lo prueban y comentan | "¿Qué cambiarían de esto si lo usaran mañana?" |
| 20–32 | El servicio en datos | Throughput, percentiles de lead time frente al SLE e ítems envejecidos | "La mitad de los ítems tardó 6 días o menos y 85 de cada 100, 12 o menos. ¿Se parece a lo que ustedes viven?" |
| 32–40 | Lo que viene | El PO cuenta lo próximo; los "¿cuándo?" se responden con rango | "Con estos datos, es probable que esté entre tal y tal fecha. ¿Les sirve así?" |
| 40–45 | Cerrar | Feedback que va al backlog y decisiones pendientes | "¿Qué nos llevamos para la próxima reposición?" |

Las cifras de la tabla son un ejemplo. Con pocos stakeholders basta con 30 minutos, acortando "Lo entregado". Con varias áreas, sube a 60 y alarga "Lo que viene".

## Si algo se tuerce

- **Si no viene ningún stakeholder:** hazla igual con el PO y pregunta qué los haría venir. Ver [La review es una demo sin stakeholders](../../situaciones/review-sin-stakeholders.md).
- **Si piden una fecha exacta:** responde con un rango y su probabilidad, y ofrece volver a pronosticar cada semana. Ver [Negocio pide una fecha de entrega](../../situaciones/me-piden-una-fecha.md).
- **Si alguien usa los datos para señalar a una persona:** lleva la conversación al sistema: "Miremos dónde esperó ese ítem". Ver [Me piden la productividad por persona](../../situaciones/velocity-por-persona.md).
- **Si un ítem viejo acapara la sesión:** anótalo y acuerda quién lo conversa después. Ver [Hay tarjetas bloqueadas durante días](../../situaciones/items-bloqueados.md).

## Después

- El PO crea o ajusta los ítems del backlog que salieron del feedback, antes de la próxima reposición.
- Guarda los cuatro datos en el espacio del equipo, para ver la tendencia.
- Envía a los stakeholders un resumen corto: lo entregado, el SLE vigente y lo que viene, con su rango.

## Relacionado

- [Scatterplot, percentiles y SLE](../../biblioteca/flujo/scatterplot-sle.md): cómo leer y explicar los percentiles.
- [Work item age](../../biblioteca/flujo/work-item-age.md): por qué mirar lo que envejece en curso.
- [Métricas y vocabularios](../../biblioteca/flujo/metricas-y-vocabularios.md): lead time, cycle time y SLE sin confusiones.
- [Pronóstico probabilístico](../../biblioteca/flujo/pronostico-probabilistico.md): responder "¿cuándo?" con un rango.
