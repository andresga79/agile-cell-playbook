# "Hecho" significa algo distinto para cada uno

**En corto:** Facilita que el equipo escriba una Definition of Done corta, con lo que ya cumple, y úsenla para decidir qué está terminado. Si las pruebas se acumulan al final del Sprint, casi siempre el problema es cuánto se empieza a la vez, no QA.

**Tema:** Flujo · **Lectura:** ~2 min

## Qué está pasando

Las señales típicas:

- Alguien dice "está listo" y después QA o el PO descubren que falta algo.
- Columnas como "Hecho, falta QA" acumulan ítems.
- Las pruebas se amontonan los últimos días del Sprint y los ítems pasan al siguiente.

Las causas, de más a menos frecuente:

- **Cada especialidad tiene su propio "listo":** para desarrollo es subir el código; para QA, probarlo.
- **Mini cascada dentro del Sprint:** todos empiezan a la vez, casi nada termina hasta el final y QA recibe todo junto.
- **No hay DoD escrita, o es aspiracional** y nadie la cumple.

## Qué hacer

1. **Pregunta a tres personas qué significa "hecho"** y anota las diferencias, sin juzgar.
2. **Mira el tablero al final de varios Sprints:** cuántos ítems esperan prueba y desde cuándo.
3. **Facilita que el Scrum Team escriba la DoD** con lo que ya cumple de verdad. Si la organización tiene una DoD, es el mínimo. Si recién llegas, esto va después de la devolución de la semana 3.
4. **Haz visible la brecha:** si la DoD no llega a producción, lo que falta es trabajo no hecho que alguien hará después.
5. **Para la cola de QA, propón un experimento en la Retro** (también después de la devolución): limitar el WIP dentro del Sprint y que, al llegar al límite, los Developers ayuden a probar antes de empezar algo nuevo. Es la puerta de "Scrum a medias": peldaños 2 y 3, *Políticas explícitas* y *Limitar el WIP*.
6. **Conversen los criterios de aceptación antes de empezar,** con QA y el PO.

## Qué decir

- Al equipo: "Cuando alguien dice 'hecho', ¿qué podemos dar por seguro todos? Escribámoslo, y que sea lo que ya cumplimos".
- Al equipo, ante la cola de pruebas: "¿Qué tendría que pasar para terminar lo empezado antes de tomar algo nuevo?".
- Al PO, antes de la Review: "Este ítem no cumple la DoD, así que no lo mostramos y vuelve al Product Backlog. Prefiero mostrar menos y que sea real".

## Qué no hacer

- Escribir tú la DoD o copiar la de otro equipo.
- Aceptar dos estados, "Done" y "Done-Done".
- Señalar a QA como el problema. La cola la genera el sistema.

## Relacionado

- [Artefactos y compromisos](../biblioteca/scrum/artefactos-y-compromisos.md): la DoD como compromiso del Increment
- [DoR y DoD](../caja-de-herramientas/dor-dod.md): una plantilla para conversar
- [Peldaño 2](../fases/transversal-scrumban-paso-a-paso.md#peldano-2-politicas-explicitas): la DoD como política de salida del tablero
- [Siempre quedan ítems para el siguiente sprint](sprint-arrastra-items.md): el arrastre resultante
