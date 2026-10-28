# Plan de onboarding y offboarding

**Fase:** 0 y cada vez que una persona entra o sale de la célula · **Responsable:** SM / Coach, con el Tech Lead y la contraparte asignada

Un plan por persona. La entrada mide qué tan rápido alguien aporta valor; la salida, cuánto conocimiento se queda en la célula.

## Parte A · Onboarding

```
Persona:                 Rol:                  Fecha de ingreso:
Contraparte asignada:    (persona de la célula, no el jefe; dedica ~20 % la primera semana)
Objetivo time to first deploy:   ≤ 5 días hábiles
Fecha real del primer deploy:    Enlace al cambio:
```

### Antes del día 1

- [ ] Cuentas creadas: correo, chat, Jira / Azure DevOps, repositorio, pipeline, monitoreo, VPN.
- [ ] Equipo de trabajo entregado y configurado.
- [ ] Contraparte asignada y con tiempo reservado en su capacidad.
- [ ] Primer ítem elegido: pequeño, real y que llegue a producción.

### Día 1

- [ ] Bienvenida con el equipo y conversación con el PO sobre el producto y el objetivo de negocio.
- [ ] Lectura guiada del [Team Canvas](team-canvas.md), [Delegation Board](delegation-board.md), [políticas del tablero](politicas-tablero.md) y [DoR / DoD](dor-dod.md).
- [ ] Verificar que **todos** los accesos funcionan (métrica de Fase 0: % de accesos disponibles el día 1).
- [ ] Entorno local levantado con la contraparte.

### Semana 1

- [ ] Participa en todas las ceremonias de la cadencia.
- [ ] Trabaja en pareja con la contraparte en el primer ítem.
- [ ] **Primer cambio en producción** por el pipeline normal (meta: time to first deploy).
- [ ] Lee los ADRs vigentes y el diagrama de arquitectura.
- [ ] Se agrega al Personal Map del equipo.

### Mes 1

- [ ] Lleva un ítem de punta a punta con apoyo mínimo.
- [ ] Participa en una guardia o en la atención de un incidente como segundo nivel.
- [ ] Registra su nivel en el mapa de conocimiento (ver Parte B).
- [ ] Conversación de cierre con SM / Coach: qué faltó en el onboarding. Cada hallazgo mejora esta plantilla.

!!! tip "Si el primer deploy tarda semanas"
    El problema no es la persona: son accesos, ambientes o un pipeline frágil. Registra la causa y llévala al backlog de mejora.

## Parte B · Offboarding o rotación individual

En células externalizadas o mixtas, la rotación del proveedor exige **al menos 2 semanas de traslape** ([Gobierno con proveedores](../fases/transversal-gobierno-proveedores.md#proteccion-del-conocimiento)). Aplica el mismo criterio a personas internas.

```
Persona que sale:        Fecha de aviso:        Último día:
Reemplazo:               Inicio del traslape:   (mínimo 2 semanas antes del último día)
```

### Traspaso de responsabilidades

| Responsabilidad | Quién la asume | Fecha | Evidencia de traspaso |
|---|---|---|---|
| Guardia del servicio de pagos | | | Turno cubierto con la persona saliente como respaldo |
| Integración con el core bancario | | | |

### Mapa de conocimiento

Mismo formato y niveles que el [plan de traspaso](plan-traspaso.md#mapa-de-conocimiento): **0** no conoce · **1** entiende con ayuda · **2** ejecuta solo · **3** puede enseñar.

| Área de conocimiento | Persona saliente (nivel) | Receptor 1 | Nivel | Receptor 2 | Nivel | Evidencia |
|---|---|---|---|---|---|---|
| | 3 | | | | | |

Regla: ninguna área queda con una sola persona en nivel 2 o más después de la salida.

### Retiro de accesos

- [ ] Accesos revocados el último día (no después): repositorio, cloud, secretos, VPN, herramientas SaaS.
- [ ] Credenciales compartidas que conocía, rotadas.
- [ ] Propiedad de tickets, alertas y aprobaciones reasignada.

### Entrevista de salida (30 min, SM / Coach)

1. ¿Qué sabe solo esta persona y no está escrito?
2. ¿Qué cambiarías del sistema de trabajo?
3. ¿Qué te hizo más difícil el trabajo?

### Impacto en acuerdos del equipo

- [ ] **Team Canvas**: actualizar personas, roles y fortalezas. Si cambia más de un tercio del equipo, rehacerlo.
- [ ] **Delegation Board**: revisar las decisiones en las que esta persona era quien delegaba o decidía.
- [ ] Personal Map y plan de capacidad actualizados.
