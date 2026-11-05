# Dependemos de otro equipo que no responde

**En corto:** Haz visible la dependencia con su fecha necesaria, habla con el otro equipo antes de escalar y acuerda cuándo y a quién se escala. Si se repite siempre con el mismo equipo, el problema es de diseño, no de insistencia.

**Tema:** Flujo · **Lectura:** ~2 min

## Qué está pasando

Las señales típicas:

- Ítems bloqueados "esperando a otro equipo" durante días o semanas.
- La dependencia se descubre cuando ya bloquea, no cuando se refina.
- Correos y tickets sin respuesta, y en la Daily se repite "seguimos esperando".

Causas probables:

- **El otro equipo tiene sus propias prioridades** y tu pedido no está en su backlog, o está muy abajo. Es lo más frecuente, y no suele ser mala voluntad.
- **El pedido llegó tarde**, sin fecha necesaria ni conversación entre los PO.
- **No hay un espacio de coordinación** entre equipos ni una ruta para escalar.
- **Los equipos están cortados por capa técnica**, y casi cualquier ítem necesita a otro.

## Qué hacer

1. **Registra cada dependencia al identificarla**, idealmente en el refinamiento: qué se necesita, de quién y para cuándo.
2. **Habla con el otro equipo, no solo con su ticket.** Pregunta cómo les llega el trabajo. Muchas veces el pedido nunca llegó a su PO.
3. **Pide al PO que lo converse con el PO del otro equipo.** Las prioridades se negocian entre quienes ordenan los backlogs.
4. **Acuerda una política de escalamiento con plazos.** Como punto de partida: si a 5 días hábiles de la fecha necesaria no empezó, hablan los PO; si sigue, la coordinación o el patrocinador, con opciones y costo de demora.
5. **Mantén el ítem en el tablero, dentro del WIP y con su edad visible.** Que la espera se vea en las métricas.
6. **Junta el dato.** Si buena parte de los bloqueos viene del mismo equipo, llévalo como problema de estructura.

## Qué decir

- Al otro equipo: "Necesitamos esto para tal fecha. ¿Cómo les llegan estos pedidos y qué necesitan de nosotros para priorizarlo?".
- Al PO: "Esto lleva una semana bloqueado por el otro equipo. ¿Hablas con su PO o lo llevamos a la coordinación?".
- Al patrocinador: "No es el primer ítem que se bloquea por lo mismo. Insistir más no lo arregla: hay que decidir cómo se reparte este trabajo".

## Qué no hacer

- Escalar al jefe del otro equipo antes de hablar con el equipo. Ganas una entrega y pierdes la relación.
- Sacar el ítem del tablero para que la espera no se vea.
- Empezar otro ítem cada vez que uno se bloquea.
- Tratar cada dependencia como un caso aislado cuando siempre es la misma.

## Relacionado

- [Tablero de dependencias entre células](../caja-de-herramientas/tablero-dependencias.md): formato y escalamiento
- [Flight Levels](../biblioteca/kanban/flight-levels.md): el flujo entre equipos
- [Team Topologies](../biblioteca/personas/team-topologies.md): menos dependencias desde el diseño
- [Hay tarjetas bloqueadas durante días](items-bloqueados.md)
