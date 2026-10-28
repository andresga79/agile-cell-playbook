# Roadmap por outcomes (Ahora / Siguiente / Después)

**Fase:** 1, revisión continua en 4 y 5 · **Duración:** 2 horas la primera versión · **Participantes:** PO, patrocinador, Tech Lead, UX

Un roadmap por outcomes comunica **qué problemas vamos a atacar y qué cambio esperamos ver**, no qué funcionalidades entregaremos en qué fecha ([Fase 1, sección 1.5](../fases/01-descubrimiento.md#15-roadmap-por-outcomes)).

## Estructura

| Horizonte | Plazo orientativo | Certeza | Qué contiene |
|---|---|---|---|
| **Ahora** | Próximas 4–6 semanas | Alta: problema validado, solución en construcción | Outcome con métrica, iniciativas concretas, ítems en el backlog |
| **Siguiente** | Próximo trimestre | Media: problema validado, solución abierta | Outcome y opciones de solución, hipótesis por validar |
| **Después** | Más allá del trimestre | Baja: problema por confirmar | Problemas u oportunidades, sin solución ni fecha |

La certeza baja de izquierda a derecha, y el detalle también. Si "Después" tiene funcionalidades especificadas, es un plan disfrazado.

## Ficha de cada tarjeta

```
Problema:         (qué le pasa al usuario o al negocio)
Outcome:          (cambio medible: métrica, umbral, plazo)
Meta de negocio:  (a qué meta del Impact Map contribuye)
Opciones:         (iniciativas o experimentos posibles)
Certeza:          Alta | Media | Baja
Evidencia:        (entrevistas, datos, experimento que la respalda)
```

## Ejemplo

| Ahora | Siguiente | Después |
|---|---|---|
| **Clientes abandonan la solicitud de crédito en la carga de documentos.** Outcome (MVO): 20 % completa la solicitud sin llamar al call center. Iniciativas: formulario guiado, validación automática de documentos. | **Ejecutivos dedican 40 % de su tiempo a trámites.** Outcome: bajar a 20 %. Opciones: panel de solicitudes, notificaciones de estado; por validar con 5 ejecutivos. | **Clientes con crédito vigente no vuelven a pedir.** Oportunidad a explorar: ofertas preaprobadas. Sin solución definida. |

## Revisión

| Instancia | Qué se hace con el roadmap |
|---|---|
| [Revisión con negocio](../fases/04-entrega-continua.md#46-revision-con-negocio) (cada sprint o entrega) | Mostrar datos del outcome en "Ahora". ¿Se logró?, ¿se persevera, se pivota o se para? Mover tarjetas de "Siguiente" a "Ahora" cuando hay capacidad y evidencia. |
| Comité directivo trimestral | Revisar outcomes contra metas de negocio, repriorizar "Siguiente" y "Después", decidir apuestas. Registrar la decisión. |

!!! tip "Una tarjeta sale del roadmap cuando se logra el outcome"
    No cuando se entrega la funcionalidad. Si se entregó y la métrica no se movió, la tarjeta sigue o se decide pivotar.

## Responder "¿para cuándo?"

Responde con **pronósticos probabilísticos** ([Fase 5, sección 5.4](../fases/05-medicion.md#54-pronosticar-con-datos)), no con estimaciones en horas:

- **Ahora**: Monte Carlo sobre los ítems restantes y el throughput histórico. *"Con 85 % de probabilidad, el formulario guiado está en producción antes del 14 de noviembre."*
- **Siguiente**: rango por trimestre según capacidad disponible. *"Si mantenemos el throughput, empezamos en enero; el alcance depende de lo que validemos."*
- **Después**: sin fecha. *"Es una apuesta; se decide en el comité trimestral con la evidencia que tengamos."*

!!! warning "Fechas fijas reales"
    Si hay una fecha externa (regulatoria, contractual), la tarjeta se marca como **Fecha fija** y se inicia con margen según el lead time P85, igual que en las [clases de servicio](politicas-tablero.md#clases-de-servicio).
