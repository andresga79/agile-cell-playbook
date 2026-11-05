# Los bugs y el soporte se comen el sprint

**En corto:** Mide cuánto del trabajo es no planificado y planifica para eso: capacidad reservada, una política de qué entra y quién decide, y un carril visible. Si ese trabajo es la mayor parte, revisa con el equipo si el Sprint es el marco adecuado.

**Tema:** Flujo · **Lectura:** ~2 min

## Qué está pasando

Las señales típicas:

- A mitad de Sprint, buena parte del equipo está en incidentes y consultas.
- El Sprint Goal se incumple "por soporte", y nadie sabe cuánto soporte fue.
- Una o dos personas cargan con todo el soporte y su trabajo planificado siempre se atrasa.

Causas probables:

- **Lo no planificado es parte normal del trabajo** y se planifica como si no existiera. Es lo más común.
- **Hay un problema de calidad.** Los bugs vienen de lo que el propio equipo entregó.
- **No hay filtro.** Todo se atiende de inmediato, sin distinguir un incidente de una consulta.
- **Un sistema heredado o frágil** genera mantenimiento constante.

## Qué hacer

1. **Mide el porcentaje de trabajo no planificado**: ítems que entraron después de la Planning sobre el total.
2. **Reserva capacidad en la Planning** según ese dato. El Sprint Goal se dimensiona con el resto.
3. **Escribe con el PO una política de entrada**: qué es un incidente, qué espera al backlog y quién decide (peldaño 2). Más adelante, lo crítico tendrá su clase expedita con límite: el peldaño 7.
4. **Busca el origen de los bugs en la Retro**: qué parte de la DoD o de las pruebas no los detectó. Reducir el defecto vale más que gestionarlo mejor.
5. **Reparte el soporte**, con rotación o entre todo el equipo.
6. **Si lo no planificado domina, revisa el marco con datos.** La transversal de Scrumban usa ese porcentaje para elegir entre Scrum con flujo, Scrumban o Kanban con cadencias.

## Qué decir

- Al PO: "Cada Sprint se nos va una parte grande en soporte y planificamos como si no existiera. Midamos cuánto es y reservémoslo".
- Al equipo: "¿De dónde vienen estos bugs? Si los cortamos en el origen, nos queda más tiempo".
- A quien reporta un problema: "Veamos qué dice la política que acordamos con el PO. Si es un incidente, entra ahora; si no, el PO lo prioriza y te digo cuándo".

## Qué no hacer

- Esconder el soporte fuera del tablero para que el Sprint "se vea bien".
- Dejar a una sola persona como "la de soporte", sin rotar ni reconocerlo.
- Pasar a Kanban por frustración, sin medir antes lo no planificado.
- Tratar todos los bugs como urgentes.

## Relacionado

- [¿Es Scrumban lo que este equipo necesita?](../fases/transversal-scrumban-paso-a-paso.md#es-scrumban-lo-que-este-equipo-necesita): el marco según la demanda
- [Cuándo sí y cuándo no Scrumban](../biblioteca/scrumban/cuando-scrumban.md)
- [Clases de servicio](../biblioteca/kanban/clases-de-servicio.md)
- [Llega un urgente a mitad del sprint](urgente-a-mitad-de-sprint.md)
