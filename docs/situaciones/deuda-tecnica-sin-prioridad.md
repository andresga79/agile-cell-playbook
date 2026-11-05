# El PO no prioriza la deuda técnica

**En corto:** Ayuda a los Developers a traducir la deuda a lo que el PO puede comparar: qué cuesta hoy y qué pasa si sigue esperando. Después, propón acordar una capacidad fija para deuda y mejora.

**Tema:** Flujo · **Lectura:** ~2 min

## Qué está pasando

Las señales típicas:

- Los Developers se quejan de la deuda en la Retro, pero nunca aparece en la Planning.
- Los ítems técnicos llevan meses al fondo del Product Backlog.
- Ciertos cambios tardan cada vez más y los mismos bugs vuelven.

Las causas, de más a menos frecuente:

- **Se presenta en lenguaje técnico.** "Refactorizar el módulo de pagos" no se compara con una funcionalidad. El PO no tiene cómo ordenarla.
- **Su costo es diferido:** casi nulo hoy, crece después.
- **No hay capacidad acordada** para lo que no es funcionalidad, así que cada ítem técnico compite solo.

## Qué hacer

1. **Pide que cada deuda esté en el backlog** con su efecto concreto: qué hace más lento, qué rompe o qué riesgo trae.
2. **Junten evidencia durante dos o tres Sprints:** ítems que tardaron más por tocar esa zona, incidentes, bugs repetidos.
3. **Lleva la conversación al costo de demora.** La pregunta para el PO es qué pasa si espera otro trimestre.
4. **Que los Developers propongan qué pagar primero:** lo que más frena lo que viene, no lo que más molesta.
5. **Propón una capacidad reservada como experimento:** el PO y los Developers acuerdan una parte fija de cada Sprint para deuda y mejora, y la revisan con datos. Si recién llegas, anótalo y propónlo después de la devolución de la semana 3.
6. **Revisen la Definition of Done.** Si no exige pruebas ni revisión, cada Sprint crea deuda nueva.

## Qué decir

- Al PO: "No te pido elegir entre deuda y funcionalidades. Te muestro cuánto nos cuesta esta zona del sistema cada Sprint, y tú decides si conviene pagarla ahora".
- A los Developers: "Si no podemos decir qué cambia para el usuario o el negocio, el PO no tiene cómo ordenarlo. ¿Qué se vuelve más rápido o más seguro?".
- En la Planning: "Este Sprint tocamos la zona con más deuda. ¿Conviene pagar una parte ahora que estamos ahí?".

## Qué no hacer

- Ordenar tú el backlog. El orden lo decide el PO.
- Pagar la deuda inflando estimaciones. El PO pierde transparencia.
- Plantearlo como "técnicos contra negocio".
- Pedir "un Sprint técnico" para limpiar todo. La deuda vuelve.

## Relacionado

- [Cost of Delay y WSJF](../caja-de-herramientas/cost-of-delay-wsjf.md): el perfil diferido
- [Capacidad para lo no planificado](../fases/03-sistema-de-trabajo.md#36-capacidad-para-lo-no-planificado): reservar capacidad para deuda
- [Clases de servicio](../biblioteca/kanban/clases-de-servicio.md): la clase intangible, cuando el equipo llegue al peldaño 7
- [Hay trabajo que no está en el tablero](trabajo-invisible.md): cuando la deuda se paga a escondidas
