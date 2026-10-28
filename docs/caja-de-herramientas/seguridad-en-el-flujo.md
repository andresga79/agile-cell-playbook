# Seguridad y cumplimiento en el flujo

**Fase:** 2 y 4 · **Origen:** DevSecOps, OWASP, STRIDE · **Duración:** configuración inicial en el *sprint 0*; luego continuo

En banca, salud o sector público, la seguridad suele llegar al final como una auditoría que bloquea el paso a producción. Esta herramienta la mueve **dentro del flujo**: se piensa en el refinamiento, se verifica en el pipeline y la evidencia se genera sola. Complementa el pipeline de la [Fase 2](../fases/02-fundaciones-tecnicas.md) y el [checklist de paso a producción](checklist-produccion.md).

!!! abstract "Principio"
    Un control de seguridad que depende de que alguien se acuerde no es un control. Automatiza lo verificable y deja a las personas lo que requiere juicio.

## Threat modeling liviano

En el refinamiento de cada épica, y de las historias que tocan datos sensibles, autenticación o integraciones, dedica 10 minutos a estas preguntas (STRIDE):

| Amenaza | Pregunta |
|---|---|
| **S**uplantación | ¿Alguien puede hacerse pasar por otro usuario o sistema? |
| **T**ampering (alteración) | ¿Se pueden modificar datos en tránsito o en reposo sin que lo detectemos? |
| **R**epudio | ¿Podemos probar quién hizo qué y cuándo? |
| **I**nformación expuesta | ¿Qué datos se podrían filtrar, en logs, errores o respuestas? |
| **D**enegación de servicio | ¿Qué pasa si llaman esto mil veces por segundo? |
| **E**levación de privilegios | ¿Puede un usuario hacer algo que su rol no permite? |

Cada riesgo relevante se convierte en un **criterio de aceptación** o en un ítem del backlog. Para decisiones de arquitectura, regístralo en un [ADR](adr.md).

## Controles en el pipeline

| Control | Qué detecta | Cuándo corre | Bloquea si |
|---|---|---|---|
| Escaneo de secretos | Claves y tokens en el código | Pre-commit y cada PR | Encuentra cualquier secreto |
| SAST | Vulnerabilidades en el código propio | Cada PR | Hallazgo crítico o alto nuevo |
| SCA / dependencias | Librerías con vulnerabilidades o licencias no permitidas | Cada PR y diario | Crítico con corrección disponible |
| Escaneo de imagen | Vulnerabilidades en la imagen Docker y su base | Al construir la imagen | Crítico con corrección disponible |
| SBOM | Inventario de componentes de cada versión | En cada build de release | No se generó |
| DAST (opcional) | Fallas en la aplicación en ejecución | En staging, nocturno | Según política |

!!! tip "Bloquea lo nuevo, gestiona lo heredado"
    En una célula existente, activar todos los bloqueos de golpe detiene el flujo. Bloquea solo los hallazgos **nuevos** y trata los heredados como deuda priorizada con SLA.

## Gestión de vulnerabilidades

SLA de remediación de ejemplo (ajústalo a la política de tu organización y a lo que exija el regulador):

| Severidad | SLA | Clase de servicio |
|---|---|---|
| Crítica | 7 días | Expedito si está expuesta a internet |
| Alta | 30 días | Fecha fija |
| Media | 90 días | Estándar |
| Baja | Según capacidad | Intangible |

Las vulnerabilidades son ítems del tablero, no una lista aparte. Las excepciones se aprueban por escrito, con fecha de vencimiento.

## Privacidad y datos personales

- **Minimización**: cada historia que recoge datos personales justifica qué campo necesita y para qué.
- **Ambientes no productivos sin datos reales**: usa datos sintéticos o enmascarados. Nunca copies producción a DEV o QA sin anonimizar.
- **Retención**: define cuánto tiempo se guarda cada dato y automatiza su borrado.
- **Logs limpios**: nada de documentos de identidad, datos de salud, tarjetas ni contraseñas en logs.

## Evidencia automática para auditoría y CAB

Configura el pipeline para que cada release guarde, asociado a su versión:

- Resultado de pruebas, SAST, SCA y escaneo de imagen.
- SBOM y *digest* de la imagen desplegada.
- PR con revisores y aprobaciones, enlazado al ítem del tablero.
- Quién desplegó, cuándo y a qué ambiente.

Con esta evidencia, el CAB revisa solo los cambios de alto riesgo y la auditoría se responde con una consulta, no con semanas de recopilación.

## Checklist para DoR y DoD

Agrégalo a tu [DoR / DoD](dor-dod.md):

**DoR**

- [ ] Se aplicaron las preguntas STRIDE si la historia toca datos sensibles, autenticación o integraciones.
- [ ] Se identificaron los datos personales involucrados y su justificación.

**DoD**

- [ ] Pipeline sin hallazgos nuevos críticos o altos (SAST, SCA, imagen, secretos).
- [ ] Criterios de aceptación de seguridad verificados.
- [ ] Sin datos personales en logs ni en ambientes no productivos.
- [ ] SBOM y evidencia de la versión generadas.

## Métricas

| Métrica | Uso |
|---|---|
| Vulnerabilidades críticas y altas abiertas | Exposición actual; tendencia a la baja |
| Tiempo de remediación por severidad (P85) | Cumplimiento del SLA |
| % de dependencias en versión soportada o actualizada | Higiene y deuda de seguridad |
| % de releases con evidencia completa | Preparación para auditoría |

Agrégalas al [catálogo de métricas](catalogo-metricas.md) con su ficha y revísalas en la revisión de servicio.
