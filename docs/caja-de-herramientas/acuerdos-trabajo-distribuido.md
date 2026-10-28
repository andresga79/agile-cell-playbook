# Acuerdos de trabajo distribuido

**Fase:** 0 (sección 0.4) y 3 · **Duración:** 1,5 horas · **Participantes:** toda la célula, incluido el PO y, si existe, el proveedor

Acuerdos para células remotas, híbridas o repartidas entre países. Se escriben en la sesión de [acuerdos mínimos de arranque](../fases/00-diagnostico-onboarding.md#04-acuerdos-minimos-de-arranque), se publican junto al [Team Canvas](team-canvas.md) y se revisan en la retrospectiva.

## Husos horarios y solapamiento

Acuerda una **ventana de solapamiento de al menos 4 horas** en la que todas las personas están disponibles. Las ceremonias síncronas van dentro de esa ventana.

| Ciudad | Huso | Ventana común | Horario laboral |
|---|---|---|---|
| Ciudad de México | UTC−6 | 9:00–13:00 | 9:00–18:00 |
| Bogotá | UTC−5 | 10:00–14:00 | 8:00–17:00 |
| Buenos Aires | UTC−3 | 12:00–16:00 | 9:00–18:00 |

Indica siempre la hora con su huso en invitaciones y mensajes (*"10:00 Bogotá"*). Revisa los cambios de horario de verano si alguna sede los tiene.

## Qué va por cada canal

| Canal | Úsalo para | No lo uses para |
|---|---|---|
| Videollamada (síncrono) | Ceremonias, decisiones con desacuerdo, temas delicados, desbloqueos de más de 15 min de chat | Informar estados |
| Chat del equipo | Preguntas rápidas, coordinación del día, avisos | Decisiones que deben perdurar |
| Tablero (Jira / Azure DevOps) | Estado de cada ítem, bloqueos con motivo y fecha | Conversaciones largas |
| Wiki o repositorio | Decisiones, ADRs, procedimientos, acuerdos | Borradores sin dueño |
| Correo | Comunicación formal con terceros y contractual | Coordinación interna |

Respuesta esperada en chat: **dentro de la ventana común, en menos de 2 horas**; fuera de ella, al día siguiente. Nadie está obligado a responder fuera de su horario.

## Documentar decisiones

- Si se decidió en una llamada, alguien la escribe en el canal o en la wiki **el mismo día**: qué se decidió, por qué y quién estuvo.
- Decisiones técnicas relevantes → [ADR](adr.md).
- Si no está escrito, no se decidió.

## Ceremonias remotas

- **Cámara encendida** por defecto en ceremonias; no es obligación en el día a día.
- Facilitación con pizarra digital compartida y tiempos de escritura individual en silencio.
- Si una parte del equipo está en sala y otra remota, **cada persona se conecta desde su propio equipo**: todos en igualdad.
- Timebox y reglas del [calendario de cadencias](calendario-cadencias.md).

## Tablero y daily asíncronos

Si la ventana común es menor a 3 horas, la daily puede ser asíncrona algunos días:

```
Hilo diario en el canal del equipo, antes de las 10:00 de cada huso
Ítem del tablero:   (enlace)
Avance desde ayer:
Siguiente paso:
Bloqueo o ayuda que necesito:
```

El tablero se actualiza antes de escribir en el hilo. Mantén **al menos 2 dailys síncronas por semana**: la daily asíncrona coordina el trabajo, pero no crea equipo.

## Cuidar a las personas

- **Personal Maps** en el arranque y al entrar cada persona nueva: es la forma más barata de crear confianza a distancia.
- Un espacio informal de 15–30 min por semana, sin agenda de trabajo.
- Encuentro presencial al inicio y, si es posible, una vez por trimestre.
- Vigila la Happiness Door: el aislamiento aparece antes en el ánimo que en las métricas de flujo.

## Cliente y proveedor en países distintos

- [ ] **Calendario compartido de feriados** de ambos países, considerado en la planificación de capacidad.
- [ ] Idioma de trabajo y glosario de términos de negocio acordados (los modismos confunden).
- [ ] Ceremonias **conjuntas**, nunca separadas para cliente y proveedor ([Gobierno con proveedores](../fases/transversal-gobierno-proveedores.md#antipatrones)).
- [ ] Restricciones legales de acceso a datos personales desde otro país, revisadas con el área legal.
- [ ] Accesos, VPN y herramientas del cliente disponibles para el proveedor desde el día 1.
- [ ] Moneda, tipo de cambio y modalidad de facturación fuera de las conversaciones del equipo: se tratan en el gobierno del contrato.
