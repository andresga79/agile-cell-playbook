# Principios de flujo de Reinertsen

**En una frase:** En el desarrollo de productos el inventario no se ve: son colas de trabajo esperando, y gestionarlas con criterio económico vale más que mantener a todos ocupados.

**Área:** Lean y flujo · **Lectura:** ~3 min

## Qué es

Donald Reinertsen publicó en 2009 *The Principles of Product Development Flow*, con 175 principios agrupados en ocho áreas. Su tesis: el lean de fábrica no se traslada tal cual, porque en el desarrollo de productos el trabajo es variable, no se repite y el inventario es información invisible.

| Área | Idea central para el equipo |
|---|---|
| Economía | Decide con un marco económico común; si cuantificas una sola cosa, que sea el costo de esperar |
| Colas | Las colas son invisibles y caras: alargan el tiempo y retrasan la retroalimentación |
| Variabilidad | No se elimina; se gestiona su costo |
| Tamaño de lote | Lotes más chicos dan colas más cortas y aprendizaje más rápido |
| Límites de WIP | Limitar el trabajo en curso controla las colas |
| Cadencia y sincronización | Un ritmo regular reduce la coordinación y acota las esperas |
| Retroalimentación rápida | Cuanto antes ves un error, más barato es corregirlo |
| Control descentralizado | Quien tiene la información decide, dentro de reglas claras |

La consecuencia que más choca con la intuición viene de la teoría de colas: si el trabajo llega con variabilidad, la cola crece de forma no lineal a medida que la ocupación se acerca al 100 %. Un equipo "lleno" suele ser un equipo lento.

## Para qué sirve (y cuándo no)

Sirve para conversar con negocio en su idioma. "Si esto espera un mes, perdemos tanto" convence más que "tenemos demasiado WIP". También explica por qué funcionan prácticas que el equipo ya conoce, como los límites de WIP y las clases de servicio.

No es un método para implementar los 175 principios, sino un marco para razonar. Tampoco necesitas una cifra exacta: como referencia, un orden de magnitud acordado con negocio ya cambia la conversación.

## Cómo se aplica

1. **Haz visibles las colas.** Separa en el tablero "en curso" de "esperando". El [Value Stream Mapping](../../caja-de-herramientas/value-stream-map.md) muestra dónde están las más grandes.
2. **Pon precio a la espera.** Estima el costo de demora de los ítems grandes y ordénalos con la herramienta [Cost of Delay y WSJF](../../caja-de-herramientas/cost-of-delay-wsjf.md).
3. **Achica los lotes:** ítems más chicos, despliegues más frecuentes, revisiones del mismo día.
4. **Deja holgura.** No planifiques al 100 % de la capacidad; reserva una parte explícita para soporte y deuda, como pide la [Fase 3 §3.6](../../fases/03-sistema-de-trabajo.md#36-capacidad-para-lo-no-planificado).
5. **Acorta la retroalimentación:** pruebas automáticas, demos frecuentes y datos de uso.
6. **Descentraliza con reglas:** acuerda qué decide el equipo solo y cuándo escala.

## Errores típicos

- Medir el éxito por la ocupación de las personas.
- Juntar trabajo en grandes entregas "para ser eficientes" y descubrir los problemas al final.
- Priorizar por quién grita más fuerte en vez de por el costo de esperar.
- Tratar toda variabilidad como un defecto y exigir estimaciones exactas.
- Centralizar cada decisión en una persona, que se vuelve la cola más larga.

## Qué observar al llegar a un equipo

- ¿Existe una meta de ocupación o de "horas cargadas" por persona?
- ¿Cuántos ítems esperan frente a una aprobación, QA o un despliegue?
- ¿Cada cuánto llega algo a producción? ¿Se libera en lotes grandes?
- ¿Cuánto tarda el equipo en saber si un cambio rompió algo?
- ¿Alguien puede decir cuánto cuesta que el ítem principal espere un mes?
- ¿Las decisiones chicas esperan a una persona que no está?

## Relacionado

- [Lean en una página](lean-en-una-pagina.md) · [Los desperdicios en software](desperdicios.md) · [Pensamiento sistémico](pensamiento-sistemico.md)
- [Ley de Little](../flujo/ley-de-little.md) · [WIP y sistema pull](../kanban/wip-y-pull.md) · [Clases de servicio](../kanban/clases-de-servicio.md)
- [Trunk-based development](../ingenieria/trunk-based.md)
- [Cost of Delay y WSJF](../../caja-de-herramientas/cost-of-delay-wsjf.md) · [Value Stream Mapping](../../caja-de-herramientas/value-stream-map.md)

## Para profundizar

- Donald G. Reinertsen, *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
