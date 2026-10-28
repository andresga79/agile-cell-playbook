# Pronóstico Monte Carlo

**Fase:** 5 · **Origen:** Kanban (pronósticos probabilísticos) · **Duración:** 10 minutos con el historial a mano

Responde con probabilidades las dos preguntas que negocio hace siempre: **¿cuándo terminamos?** y **¿cuánto alcanzamos a entregar?** Usa el throughput histórico de la célula en lugar de estimaciones en horas. Es la herramienta de la actividad [5.4 Pronosticar con datos](../fases/05-medicion.md#54-pronosticar-con-datos).

## Cómo funciona

1. Tomas el throughput semanal histórico: cuántos ítems terminó la célula cada semana.
2. La simulación arma un futuro posible eligiendo semanas al azar de ese historial, con reemplazo (una misma semana puede salir varias veces).
3. Repite el ejercicio 10 000 veces y cuenta los resultados.

| Pregunta | Entrada | Resultado | Cómo leer el 85 % |
|---|---|---|---|
| ¿Cuándo? | N ítems | Semanas (y fechas) para terminarlos | El 85 % de las simulaciones termina en esa cantidad de semanas **o menos** |
| ¿Cuánto? | N semanas | Ítems terminados en ese plazo | En el 85 % de las simulaciones se alcanza esa cantidad de ítems **o más** |

Comprométete con el percentil 85, no con el 50: el 50 % es una moneda al aire.

## Calculadora

!!! info "Tus datos no salen del navegador"
    La simulación corre en tu navegador. No se envía ni se guarda nada.

<div id="montecarlo-app" markdown="0">
  <p>Cargando la calculadora…</p>
  <noscript>El pronóstico necesita JavaScript.</noscript>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.min.js"></script>
<script src="../../assets/js/montecarlo.js"></script>

## Supuestos

El pronóstico vale lo que vale el historial. Revisa estos supuestos antes de compartirlo:

- **Sistema estable.** El futuro se parece al pasado: mismo equipo, mismas políticas de WIP, sin cambios grandes de contexto. Si cambió la composición de la célula, usa solo las semanas posteriores al cambio.
- **Mismo tipo de ítems.** El historial y el backlog por pronosticar tienen ítems de tamaño y naturaleza parecidos. No mezcles historias con épicas ni con incidentes.
- **La división de ítems cambia el pronóstico.** Un release de 40 ítems suele terminar con más de 40: al refinar, los ítems se dividen y aparecen otros nuevos. Ajusta N con tu tasa histórica de crecimiento del backlog o vuelve a pronosticar cada semana.
- **Historial reciente y suficiente.** Usa entre 8 y 12 semanas recientes. Con menos de 6 la calculadora no simula. Las semanas sin entregas (vacaciones, congelamientos) cuentan como 0 si pueden repetirse.

## Uso en la célula

- [ ] Extrae el throughput semanal desde la herramienta de gestión (ítems terminados, no puntos).
- [ ] Pronostica con el percentil 85 y comunica el rango, no una fecha única.
- [ ] Repite el pronóstico cada semana con datos nuevos y muestra cómo se mueve.
- [ ] Registra el acierto: qué porcentaje de entregas cae dentro del rango pronosticado (métrica de la [Fase 5](../fases/05-medicion.md)).

!!! warning "Antipatrón"
    Convertir el percentil 50 en compromiso, o usar el pronóstico para presionar al equipo. El pronóstico describe el sistema; si no gusta el resultado, se cambia el sistema (WIP, tamaño de los ítems, dependencias), no el número.
