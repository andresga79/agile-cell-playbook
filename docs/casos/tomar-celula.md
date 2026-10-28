# Caso · Tomar una célula de portal de clientes

!!! note "Caso ficticio"
    Organización, personas y cifras inventadas con fines ilustrativos. Ver [Casos de ejemplo](index.md).

## Contexto

Una distribuidora eléctrica contrata a un proveedor para mantener su portal de clientes (boletas, pagos, reclamos). La célula lleva dos años: 8 personas del proveedor (líder técnico, 5 desarrolladores, 2 QA) y una PO del cliente con 50 % de dedicación. Llega un nuevo SM / Coach con el encargo de "hacerla predecible". El contrato es por horas.

## Punto de partida

Historial de los últimos 3 meses (Jira, pipelines e incidentes):

| Indicador | Valor |
|---|---|
| Ítems terminados | 312 |
| Soporte e incidentes | 140 |
| Hotfix | 12 |
| Trabajo no planificado | 49 % (152 de 312) |
| Despliegues | 6 (1 release trimestral + 5 hotfix) |
| Change failure rate | 33 % (2 de 6) |
| Lead time P85 de ítems estándar | 64 días |

## Recorrido

### Semanas 1–3 · Fase 0: assessment

Se aplicó el [assessment de madurez](../caja-de-herramientas/assessment-madurez.md) con su plan de 3 semanas y se registró en la [calculadora](../caja-de-herramientas/calculadora-madurez.md). Puntaje por dimensión (promedio de 5 preguntas):

| Dimensión | Autoevaluación | Observado | Brecha | Nivel |
|---|---|---|---|---|
| Producto | 2,8 | 2,2 | 0,6 | Repetible |
| Flujo | 3,6 | 2,2 | **1,4** | Repetible |
| Ingeniería | 3,0 | 2,6 | 0,4 | Repetible |
| Calidad | 2,4 | 1,8 | 0,6 | Inicial |
| Equipo | 3,6 | 3,2 | 0,4 | Definido |
| Relación con negocio | 2,2 | 1,6 | 0,6 | Inicial |

Detalle de Flujo: el equipo puntuó FL1–FL5 con 4, 4, 3, 4, 3 (18 ÷ 5 = 3,6); lo observado fue 3, 2, 2, 2, 2 (11 ÷ 5 = 2,2).

**Aplicación de las reglas de priorización:**

1. **Regla 5 · Brechas de percepción.** Flujo tiene 1,4 puntos de diferencia. Antes de decidir nada se hizo el taller de brechas (Semana 3). El equipo creía gestionar bien el soporte porque "siempre se resuelve"; los datos mostraron que el 49 % de su trabajo llega por correo y chat, y que parte de él ni siquiera estaba en el tablero. El equipo ajustó FL4 de 4 a 2 y su autoevaluación de Flujo quedó en 3,2 (16 ÷ 5).
2. **Regla 1 · Primero el flujo.** Flujo observado es 2,2 (menor a 2,5): la [Fase 3](../fases/03-sistema-de-trabajo.md) va primero, aunque Relación con negocio tiene el puntaje más bajo (1,6).
3. **Regla 2 · Riesgo de producción.** Calidad es 1,8 (menor a 2): se refuerza con la [Fase 2](../fases/02-fundaciones-tecnicas.md) y la [Fase 4](../fases/04-entrega-continua.md) antes de aumentar el ritmo de entrega.
4. **Regla 4 · Máximo dos frentes.** Flujo y Calidad ocupan los dos frentes. Relación con negocio (1,6) y Producto (2,2), siguientes por la regla 3, esperan.

El orden se presentó a la PO y al patrocinador, que lo aceptaron con una condición: revisar el avance en el mes 3.

### Mes 1 · Fase 3: hacer visible y limitar el flujo

- Todo pedido de soporte entra al tablero; el correo y el chat dejan de ser canales de entrada.
- Con 49 % de demanda no planificada (entre 20 % y 50 %), se eligió **Scrumban**: cadencia de 2 semanas para lo planificado y flujo con WIP para el resto. Por estar cerca del 50 %, el ADR de proceso fija revisarlo en el mes 3.
- Capacidad reservada: 50 % producto, 40 % soporte, 10 % deuda. Clases de servicio y WIP en las [políticas del tablero](../caja-de-herramientas/politicas-tablero.md).

### Meses 2–4 · Fases 2 y 4: calidad y lotes pequeños

- Pruebas automatizadas de los tres flujos críticos (pago, boleta, reclamo) en el pipeline.
- Despliegue automatizado hasta staging; la [DoD](../caja-de-herramientas/dor-dod.md) pasa a incluir "desplegado en producción".
- Release quincenal en el mes 2 y semanal desde el mes 3, con el [checklist de paso a producción](../caja-de-herramientas/checklist-produccion.md).
- Postmortem sin culpa de cada incidente severo. Los cinco defectos recurrentes que más soporte generaban entraron como deuda con capacidad reservada.

### Desde la Semana 3 · Fase 5: línea base y revisión de servicio

La línea base salió del historial (ver [Fase 5](../fases/05-medicion.md)). Cada mes, la revisión de servicio con el gestor de cuenta del proveedor compara las métricas contra la línea base, como propone [Gobierno con proveedores](../fases/transversal-gobierno-proveedores.md).

## Resultados

| Periodo | Lead time P85 | Despliegues | Change failure rate | No planificado |
|---|---|---|---|---|
| Línea base (3 meses) | 64 días | 2 por mes (6) | 33 % (2 de 6) | 49 % |
| Mes 1 | 52 días | 2 | 50 % (1 de 2) | 47 % |
| Mes 2 | 41 días | 3 | 33 % (1 de 3) | 44 % |
| Mes 3 | 30 días | 5 | 20 % (1 de 5) | 38 % |
| Mes 4 | 24 días | 6 | 17 % (1 de 6) | 35 % |
| Mes 5 | 19 días | 8 | 13 % (1 de 8) | 33 % |
| Mes 6 | 16 días | 10 | 10 % (1 de 10) | 31 % |

En el mes 3 el trabajo no planificado bajó a 38 %; Scrumban se mantuvo y la reserva para soporte se ajustó a 30 % (60 % producto, 10 % deuda).

**Assessment reaplicado en el mes 6** (observado): Flujo 3,4 · Ingeniería 3,0 · Calidad 3,0 · Equipo 3,4 · Producto 2,4 · Relación con negocio 1,8. Ya no aplican las reglas 1 y 2, así que por la regla 3 los dos nuevos frentes son **Relación con negocio** (pasar el contrato de horas a niveles de servicio por flujo) y **Producto** ([Fase 1](../fases/01-descubrimiento.md)).

## Lecciones

- **La brecha valió más que el puntaje.** Sin el taller de la Semana 3, el equipo habría rechazado la Fase 3 porque "el flujo ya funciona".
- **El puntaje más bajo no siempre va primero.** Mejorar la relación con negocio sin flujo visible no habría tenido con qué medirse.
- **El change failure rate empeoró en el mes 1** (1 de 2) antes de mejorar: con tan pocos despliegues, un solo fallo pesa mucho. Se leyó la tendencia, no el mes aislado.
- **Bajar el soporte fue consecuencia de la calidad**, no de una meta de soporte.
