# Negocio pide una fecha de entrega

**En corto:** No des una fecha a ojo. Con el PO, responde con un rango y su probabilidad a partir de los ítems que el equipo terminó, y repite el pronóstico cada semana. Si los datos todavía no son fiables, dilo.

**Tema:** Métricas y compromisos · **Lectura:** ~2 min

## Qué está pasando

Las señales típicas:

- La fecha sale de una estimación en una reunión, o de lo que negocio quería oír.
- Las fechas se corren y cada atraso termina en buscar culpables.

Causas probables:

- **Negocio necesita planificar** y nadie le ofreció otra forma de responder. La pregunta es legítima.
- **Se confunde estimación con compromiso.** El número más optimista se vuelve promesa.
- **No hay datos a mano**, o se mide en puntos y no en ítems terminados.
- **El sistema es inestable.** Si entra mucho más de lo que sale, ningún método da una fecha confiable.

## Qué hacer

1. **Aclara la pregunta.** ¿Cuándo estará un ítem, cuándo termina un conjunto o cuánto entra antes de una fecha fija?
2. **Para un solo ítem, usa el percentil del tiempo histórico** o el SLE, si existe.
3. **Para un conjunto, simula en la [calculadora Monte Carlo](../caja-de-herramientas/pronostico-monte-carlo.md)** con el throughput semanal en ítems de las últimas 8 a 12 semanas.
4. **Comunica el rango, no un número suelto.** Muestra el 50 % y el 85 %. Si negocio necesita un número para planificar, que use el del 85 %, sabiendo que no es una promesa.
5. **Vuelve a pronosticar cada semana.** Al refinar, los ítems se dividen y aparecen otros: el pronóstico se mueve.
6. **Si el resultado no sirve, cambia el sistema, no el número**: alcance, WIP, tamaño de los ítems o dependencias.

Es el peldaño 8, *Pronóstico probabilístico*: la meta es que el PO lo haga sin ti. Si el tablero no muestra todo el trabajo o el flujo es inestable, avisa que el rango es poco fiable y trabaja antes los peldaños 1 a 5.

## Qué decir

- A negocio: "Prefiero no darte una fecha a ojo. Con lo que el equipo terminó estas semanas, hay un 85 % de probabilidad de terminar en esta fecha o antes. ¿Ese riesgo te sirve?".
- A negocio, si no alcanza: "Con este alcance no llegamos con confianza. ¿Qué podemos sacar, o qué fecha más tarde funciona?".
- Al PO: "Actualicemos el pronóstico cada semana y compártelo tú".

## Qué no hacer

- Prometer el percentil 50 como si fuera seguro.
- Pedirle al equipo que estime más fino para que la fecha sea más "exacta".
- Pronosticar con puntos o con el throughput de otro equipo.

## Relacionado

- [Pronóstico Monte Carlo](../caja-de-herramientas/pronostico-monte-carlo.md): la calculadora y sus supuestos
- [Pronóstico probabilístico](../biblioteca/flujo/pronostico-probabilistico.md): cuándo no aplica
- [Scatterplot, percentiles y SLE](../biblioteca/flujo/scatterplot-sle.md): para un solo ítem
- [Peldaño 8](../fases/transversal-scrumban-paso-a-paso.md#peldano-8-pronostico-probabilistico): su señal de "listo, sigue"
