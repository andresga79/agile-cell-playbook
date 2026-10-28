# Checklist de paso a producción

**Fase:** 4 · Automatizar todos los ítems posibles en el pipeline; el resto, revisar antes de liberar.

## Antes del despliegue

- [ ] Todos los ítems incluidos cumplen la DoD.
- [ ] Pipeline en verde: build, pruebas, análisis estático y de seguridad, escaneo de imagen.
- [ ] La imagen a desplegar es **la misma** que se probó en staging (mismo *digest*).
- [ ] Migraciones de base de datos son compatibles hacia atrás (*expand / contract*).
- [ ] Feature flags configurados (desactivados si la liberación es posterior).
- [ ] Release notes generadas.
- [ ] Plan de rollback definido y probado en staging.
- [ ] Stakeholders y soporte informados si hay impacto visible.
- [ ] Aprobación registrada (automática para cambios estándar; CAB solo para cambios de alto riesgo).

## Durante el despliegue

- [ ] Despliegue por el pipeline, sin pasos manuales en servidores.
- [ ] Estrategia acordada (directo, canary, blue/green).
- [ ] Smoke tests automáticos en producción.

## Después del despliegue

- [ ] Monitoreo de errores, latencia y métricas de negocio durante la primera hora.
- [ ] Sin alertas críticas; si las hay, ejecutar rollback según criterio acordado.
- [ ] Liberación del feature flag (gradual si aplica).
- [ ] Ítems movidos a "En producción" en el tablero.
- [ ] Métrica de uso u outcome configurada para observar.

## Criterios de rollback (ejemplo)

| Señal | Umbral | Acción |
|---|---|---|
| Tasa de errores 5xx | > 2 % por 5 minutos | Rollback inmediato |
| Latencia P95 | > 2× la línea base por 10 minutos | Evaluar y rollback |
| Métrica de negocio crítica | Cae > 20 % | Desactivar feature flag |
