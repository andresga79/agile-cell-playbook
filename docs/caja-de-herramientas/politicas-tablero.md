# Políticas explícitas del tablero

**Fase:** 3 · Publicar junto al tablero (descripción del tablero en Jira o página enlazada).

## Plantilla por columna

| Columna | Entra cuando | Sale cuando | Límite WIP | Quién mueve |
|---|---|---|---|---|
| Opciones | El PO lo agrega | Cumple DoR | — | PO |
| Refinado (listo) | Cumple DoR | Alguien lo toma en reposición | 8 | PO |
| En desarrollo | Hay capacidad dentro del WIP | Código con PR abierto y pipeline en verde | 4 | Desarrollador |
| Code review (listo) | PR abierto | PR aprobado | 3 | Revisor |
| En QA | Desplegado en staging | Criterios verificados | 3 | QA |
| Listo para producción | QA aprobado | Desplegado | — | Pipeline / Dev |
| En producción | Desplegado | Validación del PO o métrica | — | PO |
| Validado | Outcome observado o PO confirma | — | — | PO |

## Clases de servicio

| Clase | Ejemplo | Política | WIP |
|---|---|---|---|
| 🔴 Expedito | Incidente crítico en producción | Se salta la fila; el equipo hace swarming | Máximo 1 |
| 🟠 Fecha fija | Cambio regulatorio | Se inicia con margen según lead time P85 | Máximo 2 |
| 🔵 Estándar | Historia del roadmap | FIFO según prioridad del PO | Según columnas |
| ⚪ Intangible | Deuda técnica, mejora | Capacidad reservada (ej. 10–20 %) | Máximo 1–2 |

Para decidir la clase y el orden dentro de cada clase, ver [Cost of Delay y WSJF](cost-of-delay-wsjf.md).

## Reglas generales

- **Se empieza por la derecha**: antes de tomar algo nuevo, ayudar a terminar lo que está más cerca de producción.
- Un ítem bloqueado se marca de inmediato con motivo y fecha; si supera 2 días, se escala.
- Ítems que superan el lead time P85 se discuten en la daily.
- Las políticas se cambian en la retrospectiva, no de forma individual.
