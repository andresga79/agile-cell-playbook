# Transversal · Gobierno con proveedores

Aplica cuando la célula es **externalizada o mixta**. El reto es pasar de un modelo "fábrica de software" (horas y especificaciones cerradas) a una **alianza por resultados** sin perder control.

## Modelos de contratación

| Modelo | Ventaja | Riesgo | Cuándo usarlo |
|---|---|---|---|
| Horas / tiempo y materiales | Flexible | Incentiva actividad, no valor | Exploración inicial corta |
| Precio fijo por alcance | Presupuesto cerrado | Rigidez, conflicto ante cambios | Alcance muy estable (raro) |
| Capacidad (célula dedicada) | Estabilidad del equipo | Requiere gobierno por métricas | **Recomendado por defecto** |
| Por outcomes / servicio | Alineado a valor | Difícil de definir al inicio | Célula madura con línea base |

**Recomendación:** contratar **capacidad de célula dedicada** con niveles de servicio basados en flujo y calidad, y evolucionar hacia componentes variables por outcome cuando haya línea base.

## Roles y frontera de responsabilidades

| Rol | Cliente | Proveedor |
|---|---|---|
| Patrocinador de negocio | ✅ | |
| Product Owner | ✅ (idealmente siempre) | |
| Scrum Master / Agile Lead | Cualquiera, con mandato claro | Cualquiera |
| Tech Lead / Arquitectura | Acordar; el cliente conserva las decisiones estratégicas | ✅ ejecución |
| Equipo de desarrollo y QA | | ✅ |
| Gestor de cuenta / delivery | | ✅ |

!!! warning "El PO no se externaliza"
    Externalizar el rol de Product Owner desconecta al equipo del negocio. Si no hay alternativa, el patrocinador debe participar activamente en las revisiones.

## Niveles de servicio basados en flujo

En lugar de "X horas" o "Y puntos por sprint", acordar:

| Indicador | Ejemplo de compromiso |
|---|---|
| Lead time de ítems estándar | 85 % en 10 días hábiles o menos |
| Frecuencia de despliegue | Al menos semanal |
| Change failure rate | Menor a 15 % |
| Tiempo de recuperación de incidentes críticos | Menor a 4 horas |
| Defectos escapados a producción | Tendencia decreciente trimestral |
| Estabilidad del equipo | Rotación menor a 15 % anual; transición con traslape |

## Cadencias de gobierno

| Cadencia | Participantes | Propósito |
|---|---|---|
| Revisión de servicio mensual | PO, SM, gestor de cuenta | Métricas vs. niveles de servicio, riesgos |
| Comité directivo trimestral | Patrocinador, gerencia proveedor | Outcomes, roadmap, contrato, capacidad |
| Retro cliente–proveedor semestral | Representantes de ambos | Salud de la relación |

## Protección del conocimiento

- Código, documentación, ADRs y pipelines en **repositorios del cliente**.
- DoD incluye documentación mínima y pruebas automatizadas.
- Plan de salida (*exit plan*) definido en el contrato: traspaso, periodo de traslape, propiedad intelectual. Su ejecución se describe en [Traspaso a equipo interno](transversal-traspaso-proveedor.md).
- Activos (cuentas cloud, dominios, licencias, secretos) **a nombre del cliente** desde el primer día.
- Rotación planificada con al menos 2 semanas de traslape.

## Criterios de salida

El gobierno está establecido cuando:

- [ ] Modelo de contratación elegido y justificado.
- [ ] Product Owner del lado del cliente con dedicación real.
- [ ] Niveles de servicio basados en flujo acordados, con línea base y fuente de datos.
- [ ] Cadencias de gobierno en el calendario de ambas partes.
- [ ] Código, pipelines, documentación y activos en cuentas del cliente.
- [ ] Plan de salida incluido en el contrato.

## Antipatrones

- **Medir al proveedor por horas imputadas.**
- **Especificaciones cerradas** que impiden aprender durante la construcción.
- **"Nosotros y ellos"**: ceremonias separadas para cliente y proveedor.
- **Dependencia total** del conocimiento del proveedor, sin acceso a código ni documentación.
