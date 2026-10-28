# Plan de traspaso

**Fase:** Transversal · [Traspaso de proveedor a equipo interno](../fases/transversal-traspaso-proveedor.md). Se arma en la etapa 1 y se actualiza en cada revisión de avance.

## Inventario de activos

Todo activo debe terminar **a nombre del cliente** y con credenciales rotadas.

| Activo | Tipo | Dónde vive | Titular actual | Titular final | Credenciales rotadas | Estado |
|---|---|---|---|---|---|---|
| Repositorio `producto-api` | Código | GitHub org del proveedor | Proveedor | Cliente | — | Pendiente |
| Pipeline de despliegue | CI/CD | | | | | |
| Cuenta cloud producción | Infraestructura | | | | | |
| Dominio y certificados | Red | | | | | |
| Gestor de secretos | Seguridad | | | | | |
| Base de datos y backups | Datos | | | | | |
| Monitoreo y alertas | Observabilidad | | | | | |
| Licencias y SaaS | Herramientas | | | | | |

Tipos sugeridos: código, CI/CD, infraestructura, red, seguridad, datos, observabilidad, herramientas, documentación.

## Mapa de conocimiento

Nivel de dominio: **0** no conoce · **1** entiende con ayuda · **2** ejecuta solo · **3** puede enseñar.

| Área de conocimiento | Tipo | Contraparte proveedor | Persona interna 1 | Nivel | Persona interna 2 | Nivel | Evidencia |
|---|---|---|---|---|---|---|---|
| Dominio de facturación | Funcional | | | | | | |
| API y modelo de datos | Técnico | | | | | | |
| Pipeline y despliegue | Operativo | | | | | | |
| Monitoreo y guardia | Operativo | | | | | | |
| Integraciones externas | Técnico | | | | | | |

!!! tip "Evidencia, no autodeclaración"
    El nivel 2 se acredita con trabajo real: una historia llevada a producción, un incidente resuelto o un despliegue conducido. Registra el enlace al ticket o al despliegue en la columna Evidencia.

## Criterios de avance por etapa

### De 2 · Shadowing a 3 · Reverse shadowing

- [ ] Cada persona interna levantó el entorno local de cero.
- [ ] El equipo interno desplegó un cambio trivial a staging.
- [ ] Todas las áreas del mapa tienen al menos una persona interna en nivel 1.
- [ ] Inventario de activos completo, con titular final definido.

### De 3 · Reverse shadowing a 4 · Operación autónoma

- [ ] El equipo interno llevó historias a producción con revisión del proveedor durante al menos 2 semanas.
- [ ] Rollback y restore de backup ejecutados por el equipo interno.
- [ ] El equipo interno cubrió turnos de guardia con el proveedor como segundo nivel.
- [ ] Todas las áreas del mapa tienen al menos una persona interna en nivel 2.
- [ ] Activos transferidos y credenciales rotadas.

### De 4 · Operación autónoma a 5 · Cierre

- [ ] Ver los [criterios de salida](../fases/transversal-traspaso-proveedor.md#criterios-de-salida) del capítulo.

## Registro de consultas al proveedor

Durante las etapas 3 y 4, cada consulta revela un hueco de conocimiento o documentación.

| Fecha | Quién consulta | Pregunta | Área del mapa | ¿Faltaba documentación? | Acción |
|---|---|---|---|---|---|
| | | | | | |

## Revisión semanal de avance (30 min)

1. Métricas de flujo y calidad contra la línea base.
2. Avance del mapa de conocimiento y del inventario.
3. Consultas al proveedor de la semana y acciones de documentación.
4. ¿Se cumplen los criterios para avanzar de etapa? Si no, ¿qué falta y cuánto traslape se necesita?
