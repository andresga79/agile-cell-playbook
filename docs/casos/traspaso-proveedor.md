# Caso · Traspaso de proveedor a equipo interno

!!! note "Caso ficticio"
    Organización, personas y cifras inventadas con fines ilustrativos. Ver [Casos de ejemplo](index.md).

## Contexto

Una aseguradora tiene su app de denuncia de siniestros en manos de un proveedor desde hace tres años: 6 personas en una célula dedicada, con PO del cliente. La aseguradora decide internalizarlo por ser central en su estrategia digital. El contrato incluye un plan de salida con traslape de hasta 6 meses y horas de respaldo. Se sigue el capítulo de [Traspaso a equipo interno](../fases/transversal-traspaso-proveedor.md) con el [plan de traspaso](../caja-de-herramientas/plan-traspaso.md).

## Punto de partida

- Equipo interno: Tech Lead contratado en la Semana 1; cuatro personas más (3 desarrolladores y 1 QA) se incorporan en la Semana 3.
- Assessment reciente: Ingeniería 3,2 y EQ5 (conocimiento) en 2, lo que anticipa un traslape largo.
- Línea base de las 12 semanas previas (ver [Fase 5](../fases/05-medicion.md)):

| Métrica | Línea base |
|---|---|
| Lead time P85 | 11 días |
| Throughput | 6 ítems por semana |
| Despliegues | 2 por semana (24 en 12 semanas) |
| Change failure rate | 8 % (2 de 24) |

## Recorrido

### Semanas 1–3 · Etapa 1: Preparar

El inventario de activos tuvo un **hallazgo problemático**:

| Activo | Titular actual | Titular final | Estado en Semana 3 |
|---|---|---|---|
| Repositorios | Org de GitHub del proveedor | Cliente | Transferidos |
| Pipeline de despliegue | Proveedor | Cliente | Transferido con los repositorios |
| **Cuenta cloud de producción** | **Proveedor** (facturada y re-facturada al cliente) | Cliente | **En migración** |
| Dominio y certificados | Cliente | Cliente | Sin cambio |
| Gestor de secretos | Dentro de la cuenta cloud del proveedor | Cliente | En migración |
| Monitoreo y alertas | Cuenta SaaS del proveedor | Cliente | Nueva cuenta creada |

La cuenta cloud incumplía lo acordado en [Gobierno con proveedores](../fases/transversal-gobierno-proveedores.md): "activos a nombre del cliente desde el primer día". Siguiendo la regla de **transferir la propiedad antes que el conocimiento**, se movió la cuenta a la organización cloud del cliente y se rotaron todas las credenciales. Terminó en la Semana 6, ya en shadowing, sin corte de servicio.

El PO pospuso la migración de base de datos prevista para el trimestre: **congelar el riesgo, no el producto**.

### Semanas 4–7 · Etapa 2: Shadowing

Un solo tablero y las mismas ceremonias. Cada persona interna con una contraparte del proveedor. En la Semana 5 todas levantaron el entorno local de cero (tiempo medio: 3 h, que bajó a 40 min al reescribir el README). En la Semana 6 el equipo interno desplegó un cambio trivial a staging. Se cumplieron los criterios para avanzar.

### Semanas 8–15 · Etapa 3: Reverse shadowing (extendida)

El equipo interno llevó historias a producción con revisión del proveedor desde la Semana 8 y ejecutó su primer rollback en la Semana 10. El plan era cerrar esta etapa en la Semana 12. En la revisión semanal de avance no se cumplían dos criterios:

- [ ] **Restore de backup** ejecutado por el equipo interno: falló en la Semana 11 porque el runbook apuntaba a la cuenta cloud antigua.
- [ ] **Todas las áreas con al menos una persona interna en nivel 2**: *Monitoreo y guardia* seguía en nivel 1.

El PO extendió la etapa **3 semanas** con las horas de respaldo del contrato. El restore se repitió con éxito en la Semana 13 y el runbook quedó corregido en el repositorio del cliente.

Mapa de conocimiento (persona interna 1 / persona interna 2; niveles de 0 a 3):

| Área | Semana 3 | Semana 7 | Semana 12 | Semana 15 | Semana 23 |
|---|---|---|---|---|---|
| Dominio de siniestros | 0 / 0 | 1 / 1 | 2 / 1 | 2 / 2 | 3 / 2 |
| API y modelo de datos | 1 / 0 | 1 / 1 | 2 / 2 | 2 / 2 | 3 / 2 |
| Integración con core de pólizas | 0 / 0 | 1 / 0 | 2 / 1 | 2 / 1 | 2 / 2 |
| Pipeline y despliegue | 1 / 0 | 1 / 1 | 2 / 2 | 3 / 2 | 3 / 2 |
| Monitoreo y guardia | 0 / 0 | 1 / 0 | **1 / 1** | 2 / 1 | 2 / 2 |

### Semanas 16–23 · Etapa 4: Operación autónoma

El equipo interno opera solo; el proveedor responde a demanda en menos de 4 horas. Cada consulta quedó en el registro del plan de traspaso:

| Semana | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 |
|---|---|---|---|---|---|---|---|---|
| Consultas al proveedor | 7 | 5 | 3 | 2 | 1 | 0 | 0 | 0 |

De las 18 consultas, 11 revelaron documentación faltante y generaron un runbook o un ADR. En la Semana 19 el equipo interno resolvió su primer incidente severo sin ayuda.

### Semanas 24–25 · Etapa 5: Cierre

Inventario verificado, accesos del proveedor retirados, acta de cierre firmada, retrospectiva de traspaso y [assessment](../caja-de-herramientas/assessment-madurez.md) reaplicado. El equipo hizo un nuevo [Team Canvas](../caja-de-herramientas/team-canvas.md) y retomó desde la [Fase 0](../fases/00-diagnostico-onboarding.md).

## Resultados

| Periodo | Lead time P85 | Throughput | Change failure rate | Despliegues del equipo interno |
|---|---|---|---|---|
| Línea base | 11 días | 6 por semana | 8 % (2 de 24) | 0 % |
| Etapa 2 (4 semanas) | 11 días | 6 por semana | 0 % (0 de 8) | 0 % |
| Etapa 3 (8 semanas) | 13 días | 5 por semana | 13 % (2 de 16) | 63 % (10 de 16) |
| Etapa 4 (8 semanas) | 10 días | 6 por semana | 6 % (1 de 17) | 100 % (17 de 17) |

Las métricas se degradaron en la etapa 3, como era esperable. En las semanas 20–23 estuvieron iguales o mejores que la línea base: se cumplió el criterio de salida de 4 semanas.

El traspaso duró 25 semanas: dentro del rango de referencia de 3 a 6 meses, pero 3 semanas más de lo planificado.

## Lecciones

- **Revisa la titularidad de los activos antes de firmar el plan.** La cuenta cloud a nombre del proveedor costó 3 semanas y fue la causa indirecta del restore fallido.
- **Extender a tiempo es más barato que un incidente.** Las 3 semanas extra se pagaron con horas de respaldo ya contratadas.
- **Las consultas al proveedor son un mapa de huecos.** 11 de 18 terminaron en documentación nueva.
- **Monitoreo y guardia fue el área más lenta.** Se aprende en incidentes reales, que no ocurren a demanda: conviene simularlos desde el shadowing.
