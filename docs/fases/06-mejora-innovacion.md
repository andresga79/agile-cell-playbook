# Fase 6 · Mejora, innovación y escalamiento

## Objetivo de negocio

Que la célula mejore de forma sostenida su capacidad de entregar valor, genere nuevas oportunidades de negocio y pueda crecer o replicarse sin perder lo logrado.

## Entradas

- Métricas con línea base y tendencias (Fase 5).
- Acciones de retrospectivas y postmortems.
- Portafolio de hipótesis (Fase 1).
- Assessment de madurez anterior, para comparar la evolución.

## Actividades

### 6.1 Mejora continua (Kaizen)

- **Backlog de mejora** visible junto al backlog de producto, con capacidad reservada.
- Cada mejora se formula como experimento: *si cambiamos X, esperamos que la métrica Y pase de A a B en N semanas*.
- Herramientas de análisis: 5 porqués, diagrama de Ishikawa, análisis de bloqueos (*blocker clustering*), mapa de flujo de valor futuro.
- Máximo **1 a 2 mejoras en curso** a la vez (WIP también para la mejora).

### 6.2 Value Stream Mapping

Cada 3–6 meses, mapear el flujo de valor completo (de la idea al usuario) con la [plantilla de Value Stream Mapping](../caja-de-herramientas/value-stream-map.md) y calcular:

- **Eficiencia de flujo** = tiempo de trabajo activo ÷ lead time total. En la mayoría de las organizaciones es menor al 15 %; el desperdicio está en las esperas, no en el trabajo.
- Dónde están las mayores esperas (aprobaciones, dependencias, ambientes, QA).

### 6.3 Innovación

| Práctica | Descripción | Frecuencia |
|---|---|---|
| Hackathon / Innovation day | Tiempo libre para explorar ideas del equipo | Trimestral |
| Portafolio de experimentos | Ideas con hipótesis, priorizadas por valor y riesgo | Continuo |
| Descubrimiento continuo | Entrevistas semanales con usuarios por el trío PO + Diseño + Tech Lead | Semanal |
| Revisión de apuestas | Perseverar, pivotar o parar cada iniciativa según datos | Trimestral |

### 6.4 Management 3.0 para la evolución del equipo

- Revisar el **Delegation Board**: a medida que crece la madurez, más decisiones pasan al equipo.
- **Celebration Grid**: celebrar aprendizajes (experimentos fallidos incluidos), no solo éxitos.
- **Personal Maps** para fortalecer relaciones, especialmente en equipos distribuidos o mixtos cliente–proveedor.
- Planes de crecimiento individual y de habilidades en forma T.

### 6.5 Escalamiento

Antes de agregar personas, verificar:

1. ¿El cuello de botella está dentro de la célula? (Si está fuera, más personas no ayudan.)
2. ¿Las fundaciones técnicas soportan más equipos trabajando en paralelo?
3. ¿El producto se puede dividir en dominios con poca dependencia?

Si se crea una segunda célula:

- Dividir por **dominio o flujo de valor**, no por capa técnica.
- Sembrar la nueva célula con 1–2 personas de la célula madura.
- Coordinar con cadencias livianas (sincronización de PO, revisión de operaciones conjunta, [tablero de dependencias](../caja-de-herramientas/tablero-dependencias.md)).
- Reutilizar esta guía desde la Fase 0.

## Artefactos

| Artefacto | Plantilla |
|---|---|
| Backlog de mejora | — |
| Value Stream Map actual y futuro | [Plantilla](../caja-de-herramientas/value-stream-map.md) |
| Tablero de dependencias (si hay varias células) | [Plantilla](../caja-de-herramientas/tablero-dependencias.md) |
| Portafolio de experimentos | [Plantilla](../caja-de-herramientas/lean-canvas-hipotesis.md) |
| Delegation Board actualizado | [Plantilla](../caja-de-herramientas/delegation-board.md) |

## Métricas

- Eficiencia de flujo (tendencia).
- Número de mejoras completadas y su efecto medido.
- Porcentaje de capacidad dedicada a mejora e innovación.
- Ideas del equipo que llegan a experimento y a producción.

## Roles

| Actividad | Patrocinador | PO | SM / Coach | Equipo | Tech Lead |
|---|---|---|---|---|---|
| Backlog de mejora | I | C | A | R | C |
| Value Stream Mapping | C | R | A | R | R |
| Portafolio de experimentos e innovación | C | A | F | R | R |
| Revisión del Delegation Board | C | R | A | R | C |
| Decisión de escalar | A | R | C | C | R |

*F = facilita.*

## Criterios de salida (régimen estable)

Esta fase es continua. Se considera en **régimen estable** cuando:

- [ ] Backlog de mejora visible, con capacidad reservada y máximo 2 mejoras en curso.
- [ ] Al menos una mejora completada con su efecto medido contra la línea base.
- [ ] Value Stream Map actual y futuro hecho en los últimos 6 meses.
- [ ] Revisión trimestral de apuestas con decisión registrada (perseverar, pivotar o parar).
- [ ] Assessment reaplicado y comparado con el anterior.
- [ ] Delegation Board revisado en el último trimestre.

## Antipatrones

- **Retros sin acciones** o con acciones que nunca se hacen.
- **Escalar agregando personas** a un sistema con cuello de botella externo.
- **Innovación como evento aislado** sin camino hacia producción.
- **Equipos por capa técnica** (frontend, backend, QA) al escalar.
