# Fase 0 · Diagnóstico y onboarding

## Objetivo de negocio

Entender el contexto de negocio, el estado real de la célula (si existe) y establecer los acuerdos mínimos para que el equipo trabaje como una unidad orientada a resultados.

## Entradas

- Patrocinador de negocio identificado y con disponibilidad.
- Objetivo estratégico al que contribuye el producto (OKR, meta del área).
- Modelo de contratación: equipo propio, externalizado o mixto.
- Si la célula viene de un proveedor: [traspaso a equipo interno](transversal-traspaso-proveedor.md) cerrado o, al menos, en operación autónoma.
- Si la célula existe: acceso a Jira/Azure DevOps, repositorios, pipelines, monitoreo y documentación.

## Actividades

### 0.1 Entender el negocio

1. Entrevista con el patrocinador: ¿qué problema existe?, ¿cuánto cuesta no resolverlo?, ¿cómo se ve el éxito en 6 y 12 meses?
2. Mapear stakeholders en una matriz poder / interés (ver [mapa de stakeholders](../caja-de-herramientas/mapa-stakeholders.md)).
3. Identificar las restricciones duras: regulatorias, presupuestarias, de fechas, tecnológicas.

### 0.2 Diagnóstico de madurez (solo célula existente)

Aplicar el [assessment de madurez](../caja-de-herramientas/assessment-madurez.md) en 2–3 semanas combinando **datos** (historial de Jira, pipelines, incidentes) y **conversaciones** (1:1, observación de ceremonias). Son 30 preguntas en seis dimensiones, con criterios observables para cada nivel:

| Dimensión | Qué evalúa |
|---|---|
| Producto | Conexión del backlog con el negocio, medición de impacto, hipótesis, roadmap, contacto con usuarios |
| Flujo | Visibilidad, límites de WIP, previsibilidad, trabajo no planificado, bloqueos |
| Ingeniería | Integración continua, despliegue, ambientes, arquitectura, observabilidad |
| Calidad | Automatización de pruebas, rol de QA, defectos escapados, DoD, incidentes |
| Equipo | Estabilidad, autoorganización, seguridad psicológica, mejora continua, conocimiento |
| Relación con negocio | Autoridad del PO, patrocinio, revisiones, planificación, modelo de gobierno |

El equipo se autoevalúa y el facilitador puntúa lo observado. La [calculadora de madurez](../caja-de-herramientas/calculadora-madurez.md) genera el radar con ambas miradas, marca las brechas de percepción y propone el orden de fases según las reglas de priorización.

!!! tip "Datos del pasado"
    En célula existente, extrae al menos 3 meses de historial de tickets para calcular lead time, throughput y WIP de línea base. El [Agile Metric Hub](https://github.com/andresga79/agile-metric-hub) puede servir para cruzar sprints.

### 0.3 Formar o reconocer el equipo

1. Confirmar roles y dedicación real (no "50 % en tres proyectos").
2. Taller de **Team Canvas** (2 h): propósito, valores, metas, roles, reglas, necesidades.
3. Taller de **Moving Motivators** (Management 3.0) para conocer qué motiva a cada persona.
4. Construir el **Delegation Board**: qué decide el equipo, qué decide el PO, qué decide la gerencia, en los 7 niveles de delegación.
5. Si hay equipo externo: sesión conjunta cliente–proveedor para alinear expectativas (ver [Gobierno con proveedores](transversal-gobierno-proveedores.md)).

### 0.4 Acuerdos mínimos de arranque

- Canales de comunicación y horarios de solapamiento (en equipos distribuidos, ver [acuerdos de trabajo distribuido](../caja-de-herramientas/acuerdos-trabajo-distribuido.md)).
- Cadencia inicial de ceremonias (se refina en Fase 3).
- Accesos y herramientas para todas las personas desde el día 1.

## Artefactos

| Artefacto | Plantilla |
|---|---|
| Mapa de stakeholders | [Plantilla](../caja-de-herramientas/mapa-stakeholders.md) |
| Assessment de madurez (radar) | [Cuestionario](../caja-de-herramientas/assessment-madurez.md) y [calculadora](../caja-de-herramientas/calculadora-madurez.md) |
| Team Canvas | [Plantilla](../caja-de-herramientas/team-canvas.md) |
| Delegation Board | [Plantilla](../caja-de-herramientas/delegation-board.md) |
| Plan de onboarding por persona | [Plantilla](../caja-de-herramientas/plan-onboarding.md) |

## Métricas

- Tiempo hasta que una persona nueva hace su primer commit en producción (*time to first deploy*).
- Porcentaje de accesos y herramientas disponibles el día 1.
- Línea base de lead time, throughput y WIP (célula existente).

## Roles

| Actividad | Patrocinador | PO | Scrum Master / Coach | Equipo | Proveedor |
|---|---|---|---|---|---|
| Entender el negocio | A | R | C | I | I |
| Assessment | I | C | R/A | C | C |
| Team Canvas y Delegation Board | C | R | A | R | R |

*R = responsable, A = aprueba, C = consultado, I = informado.*

## Criterios de salida

- [ ] Objetivo de negocio del producto escrito en una frase y aceptado por el patrocinador.
- [ ] Assessment completado, con brechas conversadas y orden de fases acordado (célula existente).
- [ ] Team Canvas y Delegation Board publicados y visibles.
- [ ] Roles con dedicación real confirmada.
- [ ] Todas las personas con accesos completos.

## Antipatrones

- **Saltarse el diagnóstico** e imponer el marco "de siempre" en una célula existente.
- **Patrocinador ausente**: sin dueño de negocio, el equipo optimiza actividad, no valor.
- **Equipo de nombre**: personas repartidas en varios proyectos sin dedicación real.
- **Proveedor tratado como "fábrica"** al que se le entregan especificaciones cerradas.
