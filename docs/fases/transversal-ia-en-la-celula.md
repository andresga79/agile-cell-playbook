# Transversal · IA en la célula

Aplica cuando la célula usa **asistentes de código** o **agentes de IA** en cualquier fase. En 2026 la pregunta ya no es si usarlos, sino cómo hacerlo sin perder calidad, seguridad ni aprendizaje, y cómo saber si de verdad mejoran el flujo de valor.

!!! abstract "Principio"
    La IA cambia **quién escribe** el primer borrador, no **quién responde** por el resultado. La persona que integra un cambio es responsable de él, lo haya escrito ella o una herramienta.

## Objetivo de negocio

Usar la IA para **acortar el lead time y mejorar la calidad** del producto, con riesgos de seguridad, propiedad intelectual y dependencia controlados, y con evidencia medida contra una línea base, no con percepciones.

## Entradas

- Política de la organización sobre uso de IA: herramientas aprobadas, datos permitidos, licencias.
- Línea base de métricas de flujo, DORA y calidad (ver [Fase 5](05-medicion.md)).
- DoD vigente y reglas de revisión de código (ver [DoR / DoD](../caja-de-herramientas/dor-dod.md)).
- Contrato con el proveedor, si la célula está externalizada.

## Actividades

### IA.1 Elegir casos de uso por fase

Empieza por uno o dos casos de uso, no por todos:

| Fase | Caso de uso | Cuidado |
|---|---|---|
| 1 · Descubrimiento | Síntesis de entrevistas y agrupación de hallazgos | Anonimiza antes; valida la síntesis contra las notas originales |
| 2 · Fundaciones | Generación de pruebas, borradores de diagramas C4 y [ADRs](../caja-de-herramientas/adr.md) | El ADR registra una decisión humana; la IA redacta, no decide |
| 4 · Entrega | Asistentes en el editor, apoyo en la revisión de PRs | Revisión humana obligatoria; ver IA.2 |
| 5 · Medición | Análisis de datos de flujo, consultas sobre el tablero | Verifica cálculos y fuentes antes de decidir |

### IA.2 Ajustar la DoD y la revisión de código

Agrega a la DoD:

- [ ] La persona que abre el PR entiende y puede explicar todo el código, incluido el generado.
- [ ] Todo código generado pasó por **revisión humana**, igual que el escrito a mano.
- [ ] El código generado tiene pruebas; las pruebas generadas se revisaron para confirmar que prueban algo útil.
- [ ] Sin secretos, datos reales ni código de terceros con licencia incompatible.

### IA.3 Seguridad y propiedad intelectual

- Usa solo **herramientas aprobadas** por la organización, con condiciones que impidan entrenar modelos con tus datos.
- Define qué **no se comparte** con herramientas externas: datos personales, datos de clientes, secretos, código clasificado como confidencial.
- Activa el control de **licencias** de dependencias y, si la herramienta lo ofrece, el filtro de coincidencias con código público.
- Los agentes que ejecutan acciones (abrir PRs, correr comandos) operan con **permisos mínimos** y nunca con credenciales de producción.
- El código generado pasa por los mismos controles del pipeline. Ver [Seguridad en el flujo](../caja-de-herramientas/seguridad-en-el-flujo.md).

### IA.4 Medir el efecto como un experimento

Trata la adopción como una hipótesis de la [Fase 6](06-mejora-innovacion.md): *Creemos que usar asistentes en la revisión de PRs reducirá el tiempo de revisión sin aumentar el change failure rate. Lo sabremos en 8 semanas.*

- Toma la **línea base** antes de empezar y compara antes y después.
- Mira resultados del sistema: lead time, change failure rate, defectos escapados, tiempo de revisión, tamaño de PR.
- **No midas** líneas de código generadas, sugerencias aceptadas ni "horas ahorradas" autodeclaradas: son métricas de vanidad.
- Espera varias semanas: el primer mes suele mezclar curva de aprendizaje y entusiasmo.

### IA.5 Controlar el tamaño de lote

Más código no es más valor. Si es fácil generar mucho código, los PRs crecen, la revisión se vuelve superficial y los defectos llegan a producción.

- Mantén los **límites de WIP** y un tamaño máximo de PR acordado en las [políticas del tablero](../caja-de-herramientas/politicas-tablero.md).
- Si el tiempo de revisión sube o el code review se vuelve la columna cuello de botella, el problema no se resuelve generando más rápido.

### IA.6 Cuidar los roles y el aprendizaje

- **Personas junior**: necesitan escribir, depurar y entender código para crecer. Acuerda espacios sin asistente o con explicación obligatoria, y *pairing* con personas senior.
- **Tech Lead**: pasa más tiempo revisando y cuidando la arquitectura; reparte la revisión para que no se vuelva un cuello de botella.
- **QA**: se enfoca más en criterios de aceptación, pruebas exploratorias y en revisar la calidad de las pruebas generadas.
- **PO**: puede usar IA para preparar hallazgos y borradores de historias, pero la conversación con usuarios no se delega.

### IA.7 Acordar el uso de IA con proveedores

Incluye en el contrato (ver [Gobierno con proveedores](transversal-gobierno-proveedores.md)):

- Qué herramientas puede usar el proveedor y con qué datos del cliente.
- Que el código generado es propiedad del cliente y cumple las licencias permitidas.
- Que el proveedor declara el uso de IA y mantiene la revisión humana.
- Que la tarifa y los niveles de servicio se gobiernan por **outcomes y métricas de flujo**, no por volumen de código o de horas.

## Artefactos

| Artefacto | Dónde |
|---|---|
| Política de uso de IA de la célula (herramientas, datos, casos de uso) | Repo del producto, como ADR de proceso |
| DoD actualizada | [DoR / DoD](../caja-de-herramientas/dor-dod.md) |
| Ficha del experimento con línea base | [Catálogo de métricas](../caja-de-herramientas/catalogo-metricas.md) |
| Cláusulas de IA en el contrato | Contrato con el proveedor |

## Métricas

| Métrica | Qué indica |
|---|---|
| Lead time (P85) y throughput | Si el flujo de valor mejoró |
| Change failure rate y defectos escapados | Si la calidad se mantuvo |
| Tiempo de revisión de PR | Si la revisión absorbe el código adicional |
| Tamaño de PR (líneas o archivos cambiados) | Riesgo de lotes más grandes |
| Vulnerabilidades nuevas por release | Si el código generado introduce riesgos |
| Ánimo del equipo | Efecto en las personas |

## Roles

| Actividad | Patrocinador | PO | SM / Coach | Equipo | Tech Lead | Seguridad |
|---|---|---|---|---|---|---|
| Política de herramientas y datos | A | I | I | C | R | R |
| Elegir casos de uso | I | C | F | R | A | C |
| Ajustar DoD y revisión de código | I | C | F | R | A | C |
| Experimento y medición | I | C | R | C | A | I |
| Plan de aprendizaje para junior | I | I | R | C | A | — |
| Cláusulas con proveedores | A | C | I | I | C | R |

*R = responsable, A = aprueba, C = consultado, I = informado, F = facilita.*

## Criterios de salida

- [ ] Herramientas aprobadas y datos permitidos documentados y conocidos por todo el equipo.
- [ ] DoD actualizada con revisión humana y pruebas del código generado.
- [ ] Controles del pipeline aplicados al código generado sin excepciones.
- [ ] Experimento con línea base terminado y decisión tomada (ampliar, ajustar o abandonar).
- [ ] Tamaño de PR y tiempo de revisión estables o mejores que la línea base.
- [ ] Contrato con el proveedor incluye cláusulas de uso de IA, si aplica.

## Antipatrones

- **Medir lo generado**: celebrar líneas de código o sugerencias aceptadas mientras el lead time no cambia.
- **Revisión de sello**: aprobar PRs grandes sin leerlos porque "lo hizo la IA".
- **IA en la sombra**: personas que usan herramientas no aprobadas con datos del cliente porque la política no existe o es impracticable.
- **Junior sin oficio**: personas que integran código que no saben explicar ni depurar.
- **Lotes inflados**: más código por PR, más WIP y más defectos escapados.
- **Proveedor que factura volumen**: más entregables generados sin más outcomes.
