# Fase 5 · Medición y aprendizaje

## Objetivo de negocio

Saber, con datos, si la célula está **entregando valor**, si lo hace de forma **predecible y sostenible**, y usar esa información para decidir.

!!! abstract "Cuatro preguntas, cuatro familias de métricas"
    1. **¿Estamos generando impacto?** → métricas de outcome.
    2. **¿Fluye el trabajo?** → métricas de flujo.
    3. **¿Entregamos con calidad y seguridad?** → métricas DORA y de calidad.
    4. **¿Es sostenible para las personas?** → métricas de salud del equipo.

## Actividades

### 5.1 Definir el set mínimo

No medir todo. Empezar con **una o dos métricas por familia**, ver el [catálogo de métricas](../caja-de-herramientas/catalogo-metricas.md).

| Familia | Métricas iniciales recomendadas |
|---|---|
| Outcome | Métrica del MVO + 1 KPI de negocio del roadmap |
| Flujo | Lead time (percentil 85) y throughput semanal |
| Entrega | Frecuencia de despliegue y change failure rate |
| Equipo | Happiness Door o encuesta de pulso quincenal |

### 5.2 Tomar la línea base

Antes de intervenir, medir 4–6 semanas (o extraer historial). Sin línea base no se puede demostrar mejora.

### 5.3 Visualizar

- **Diagrama de flujo acumulado (CFD)**: muestra WIP, cuellos de botella y estabilidad.
- **Scatterplot de cycle time** con percentiles 50, 85 y 95.
- **Histograma de throughput** para pronósticos.
- **WIP aging**: ítems que superan el percentil 85 se discuten en la daily.

### 5.4 Pronosticar con datos

Reemplazar la estimación en horas por **pronósticos probabilísticos**:

- *¿Cuándo estará listo este ítem?* → "85 % de los ítems terminan en 8 días o menos".
- *¿Cuánto entregaremos en 6 semanas?* → simulación de Monte Carlo con el throughput histórico.
- *¿Cuándo termina este release de 40 ítems?* → Monte Carlo con rango de fechas y probabilidad.

### 5.5 Medir la salud del equipo (Management 3.0)

- **Happiness Door**: al final de la retro, cada persona marca su estado. Tendencias, no números absolutos.
- **Moving Motivators** cada 3–6 meses: ¿cambió lo que motiva al equipo?
- **Kudo Cards**: reconocimiento entre pares visible.
- Rotación voluntaria y ausentismo (vía RR. HH. o proveedor).

### 5.6 Usar las métricas para decidir

Las métricas se revisan en:

- **Daily**: WIP aging y bloqueos.
- **Retrospectiva**: tendencias de flujo y calidad ([retro basada en datos](../caja-de-herramientas/retro-datos.md)).
- **Revisión de servicio mensual**: métricas contra niveles de servicio acordados.
- **Revisión con negocio**: outcomes y decisiones de roadmap (perseverar, pivotar o parar).

## Artefactos

| Artefacto | Dónde vive |
|---|---|
| Catálogo de métricas de la célula | [Plantilla](../caja-de-herramientas/catalogo-metricas.md) |
| Dashboard de flujo y DORA | Jira, herramienta de BI o [Agile Metric Hub](https://github.com/andresga79/agile-metric-hub) |
| Dashboard de outcomes | Herramienta de analítica de producto |
| Registro de salud del equipo | Hoja o herramienta de encuestas |

## Criterios de salida

- [ ] Set mínimo de métricas definido, con dueño y fuente de datos.
- [ ] Línea base registrada.
- [ ] Dashboard accesible para equipo y negocio.
- [ ] Al menos una decisión tomada a partir de métricas (registrada).

## Antipatrones

- **Velocity como meta** o para comparar equipos.
- **Métricas como látigo**: usarlas para evaluar personas destruye la confianza y los datos.
- **Medir solo output** (historias, puntos) y nunca outcome.
- **Dashboard que nadie mira**: si una métrica no provoca una conversación, se elimina.
