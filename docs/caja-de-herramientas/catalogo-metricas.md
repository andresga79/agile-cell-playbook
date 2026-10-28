# Catálogo de métricas

**Fase:** 5 · Elegir pocas, con dueño, fuente y uso definido.

## Outcome (impacto en negocio y usuarios)

| Métrica | Definición | Uso |
|---|---|---|
| Métrica del MVO | Definida en Fase 1 | Validar la apuesta principal |
| Adopción | % de usuarios objetivo que usan la funcionalidad | ¿Llegó el valor? |
| Conversión / tasa de éxito de tarea | % que completa el flujo objetivo | Efectividad del producto |
| Satisfacción (CSAT / NPS) | Encuesta a usuarios | Percepción de valor |
| KPI de negocio | Ingreso, ahorro, reducción de llamadas, etc. | Conexión con estrategia |

## Flujo (Kanban)

| Métrica | Definición | Uso |
|---|---|---|
| Lead time | Desde que se compromete un ítem hasta que está en producción | Previsibilidad para negocio |
| Cycle time | Desde que se empieza a trabajar hasta terminar | Eficiencia interna |
| Throughput | Ítems terminados por semana | Pronósticos ([Monte Carlo](pronostico-monte-carlo.md)) |
| WIP | Ítems en curso | Control del flujo |
| WIP aging | Edad de los ítems en curso | Detectar ítems atascados |
| Eficiencia de flujo | Tiempo activo ÷ lead time | Desperdicio por esperas |
| % trabajo no planificado | Ítems no planificados ÷ total | Ajustar capacidad y marco |

Reportar tiempos con **percentiles (50, 85, 95)**, no promedios.

## Entrega y calidad (DORA)

| Métrica | Élite (referencia) | Uso |
|---|---|---|
| Frecuencia de despliegue | A demanda, varias veces al día | Tamaño de lote |
| Lead time de cambios | Menos de un día | Velocidad de commit a prod |
| Change failure rate | Bajo (referencia: 0–15 %) | Calidad del proceso |
| Tiempo de recuperación | Menos de una hora | Resiliencia |
| Defectos escapados | Bugs encontrados en prod por periodo | Efectividad de QA |

!!! note "Referencias DORA"
    Los umbrales de referencia cambian entre ediciones del informe State of DevOps; usarlos como orientación, y comparar a la célula consigo misma en el tiempo.

## Salud del equipo (Management 3.0)

| Métrica | Herramienta | Frecuencia |
|---|---|---|
| Ánimo del equipo | Happiness Door, encuesta de pulso | Cada retro o quincenal |
| Motivación | Moving Motivators | Trimestral o semestral |
| Reconocimiento | Kudo Cards | Continuo |
| Rotación | Datos de RR. HH. o proveedor | Trimestral |
| Seguridad psicológica | Encuesta breve (escala de Edmondson) | Semestral |

## Ficha de cada métrica

```
Nombre:
Familia:          Outcome | Flujo | Entrega | Equipo
Definición exacta:
Fuente de datos:  (Jira, pipeline, analítica, encuesta)
Dueño:
Frecuencia:
Línea base:
Meta o rango deseado:
Dónde se revisa:  (daily, retro, revisión de servicio, comité)
Decisión que habilita:
```
