# Transversal · Llegar a un equipo nuevo

Aplica cuando llegas como **Scrum Master o Agile Coach** a un equipo que no conoces. Es tu agenda personal para las primeras tres semanas: escuchar, observar y diagnosticar **sin cambiar nada todavía**, y terminar con una recomendación de por dónde empezar.

No es un calendario aparte: es el [plan de 3 semanas del assessment de madurez](../caja-de-herramientas/assessment-madurez.md#plan-de-3-semanas) visto desde quien llega. Le suma lo que el assessment no cubre: tu postura, las preguntas que conviene hacer, lo que no conviene hacer, un [diario de observación](../caja-de-herramientas/diario-observacion.md) y cómo elegir la puerta de entrada.

!!! abstract "Principio"
    Antes de proponer, entiende por qué el equipo trabaja como trabaja. Lo que ves hoy fue la respuesta razonable a algún problema. Si lo cambias sin entender cuál, el problema vuelve, y tú pierdes la confianza que necesitas para el cambio siguiente.

```mermaid
flowchart LR
    S1[Semana 1<br/>Escuchar y medir] --> S2[Semana 2<br/>Observar]
    S2 --> S3[Semana 3<br/>Diagnosticar y devolver]
    S3 --> P[Puerta de entrada<br/>y primer experimento]
```

## Objetivo de negocio

Que el equipo, el PO y el patrocinador cuenten, en unas tres semanas, con un **diagnóstico compartido y basado en evidencia** y con un primer paso acordado, sin que la entrega se detenga mientras quien llega aprende. También construir la confianza que hace posible cualquier cambio posterior.

## Entradas

- **Un encargo explícito:** quién pidió tu llegada, qué problema espera que ayudes a resolver y en qué plazo. Si nadie puede decirlo, esa es tu primera conversación.
- Acuerdo con el patrocinador: las primeras tres semanas son de diagnóstico, no de cambios.
- Acceso de lectura a Jira o equivalente, al tablero, a los pipelines, al registro de incidentes y al calendario de ceremonias.
- Lista de personas: equipo, PO, patrocinador, stakeholders principales y, si existe, quien tenía tu rol antes.
- Lo que haya del pasado: assessments anteriores, acciones de retros, métricas, acuerdos de trabajo.

## Actividades

### Tu postura: llegar como aprendiz

- **Tu autoridad todavía no existe.** Se gana escuchando, cumpliendo lo pequeño y devolviendo lo que viste con cuidado.
- **Curiosidad antes que juicio.** Pregunta "¿cómo llegaron a trabajar así?" antes que "¿por qué no hacen X?".
- **Haz visible tu plan.** El primer día, cuenta en cinco minutos qué harás estas semanas, qué no harás y cuándo devolverás lo que veas. Eso desarma el "viene a auditarnos".
- **Confidencialidad en los 1:1.** Lo que te cuentan se usa agrupado y sin nombres, salvo acoso o un riesgo para alguien, que no puedes callar. Dilo, con esa excepción, al empezar cada conversación y cúmplelo.
- **Observa y pregunta más de lo que enseñas o aconsejas.** Enseñar y aconsejar vienen después, cuando haya un diagnóstico. Ver [Posturas de coaching](../biblioteca/personas/posturas-de-coaching.md).

### Semana 1 · Escuchar y medir

1. **Reuniones 1:1** de 30 minutos: primero el patrocinador y el PO (para entender el encargo), después cada persona del equipo. El assessment las ubica en la semana 2; si llegas nuevo, empiézalas en la semana 1, porque también son tu forma de presentarte.
2. **Mapa de stakeholders:** una primera versión con el PO. Ver [mapa de stakeholders](../caja-de-herramientas/mapa-stakeholders.md).
3. **Entender el negocio:** qué problema resuelve el producto, quién lo usa, cómo gana o ahorra dinero la organización con él y qué pasa si deja de funcionar. Ver la [Fase 0 §0.1](00-diagnostico-onboarding.md#01-entender-el-negocio).
4. **Preguntas abiertas.** No hace falta hacerlas todas en cada conversación:
    - ¿Qué no te gustaría que cambiara en este equipo?
    - ¿Qué te frena más en tu trabajo de todos los días?
    - ¿Cómo sabes si fue una buena semana?
    - Cuando llega algo urgente, ¿quién decide si entra y qué se deja?
    - ¿Qué se intentó antes y no funcionó? ¿Por qué crees que pasó?
    - ¿Qué te preocupa de que llegue alguien en mi rol?
    - ¿Con quién más debería hablar?
5. **Extracción de datos (la S1 del assessment):** 3 meses de historial de Jira, pipelines, incidentes y releases. Calcula lead time, throughput, WIP, frecuencia de despliegue y defectos escapados, y además el **% de demanda no planificada** y la edad de los ítems en curso. Ver el [catálogo de métricas](../caja-de-herramientas/catalogo-metricas.md).
6. Si el equipo es distribuido, lee sus [acuerdos de trabajo distribuido](../caja-de-herramientas/acuerdos-trabajo-distribuido.md) y agenda los 1:1 dentro del horario de solapamiento.

### Semana 2 · Observar

1. **Ceremonias (la S2 del assessment):** observa cada una al menos una vez sin intervenir: varias Dailies, refinamiento, Planning o reposición, Review y retro. Ubícate donde no seas el centro de la conversación.
2. **Tablero:** míralo todos los días a la misma hora. Qué se mueve, qué no se mueve y qué aparece de la nada. Compara lo que se dice en la Daily con lo que muestra el tablero.
3. **Conversaciones:** el canal del equipo, cómo llegan los pedidos y a quién se le pregunta cuando algo no está claro.
4. **Diario:** anota cada observación en el [diario de observación](../caja-de-herramientas/diario-observacion.md), con los hechos separados de las hipótesis. Usa la tabla de [señales de diagnóstico](#senales-de-diagnostico) como guía, no como lista de control.
5. Cierra los 1:1 pendientes y vuelve a hablar con quien dijo algo que no entendiste.
6. Al final de la semana, contrasta tus hipótesis con datos: si sospechas que hay demasiado WIP, cuéntalo.

### Semana 3 · Diagnosticar y devolver

!!! tip "Guiones para esta semana"
    El [taller de brechas](../facilitar/eventos/taller-de-brechas.md) y la [devolución del diagnóstico](../facilitar/eventos/devolucion-del-diagnostico.md) tienen su agenda minuto a minuto en Facilitar.

1. **Puntaje (la S3 del assessment):** el equipo se autoevalúa (60 minutos) y tú puntúas lo observado en la [calculadora de madurez](../caja-de-herramientas/calculadora-madurez.md). Cada puntaje tuyo se apoya en el diario o en los datos.
2. **Taller de brechas** (60 minutos): primero se conversan las diferencias de más de 1 punto. Lleva tus observaciones como preguntas, no como veredictos: "Vi esto, ¿cómo lo ven ustedes?".
3. **Puerta de entrada:** con el puntaje de Flujo ya conversado, el % de demanda no planificada y las señales, recomienda por dónde empezar (ver [Elegir la puerta de entrada](#elegir-la-puerta-de-entrada)). Proponla junto con un primer experimento y su señal de éxito.
4. **Devolución, primero al equipo y después al patrocinador:** qué viste, qué funciona y conviene proteger, el orden de fases, la puerta de entrada y el primer experimento. Nada de lo que escuche el patrocinador debería sorprender al equipo.
5. Si el diagnóstico muestra roles o acuerdos difusos, el [Team Canvas](../caja-de-herramientas/team-canvas.md) suele ser un buen primer taller después de la devolución.

!!! note "Puerta de entrada y orden de fases"
    Son dos salidas distintas que se complementan. La calculadora ordena **qué fases del playbook reforzar**. La puerta de entrada dice **en qué peldaño de la [escalera de flujo](transversal-scrumban-paso-a-paso.md) empezar** dentro de la [Fase 3](03-sistema-de-trabajo.md). La puerta no reemplaza el orden de fases que propone la calculadora.

## Qué no hacer en las primeras semanas

- **Cambiar ceremonias:** ni su duración ni su formato, aunque la Daily dure 40 minutos. Lo que veas va al diario.
- **Imponer herramientas o plantillas:** otro tablero, otro flujo en Jira o "la retro que usábamos en mi equipo anterior".
- **Opinar sin datos:** decir "esto es un antipatrón" en la primera semana. Un juicio temprano se convierte en etiqueta y cierra conversaciones.
- **Compararte con tu equipo anterior.** El equipo escucha "lo hacen mal".
- **Tomar partido** en un conflicto antes de escuchar a todas las partes.
- **Prometerle cambios al patrocinador** antes del diagnóstico.
- **Hacer el trabajo del equipo** para ganar aceptación: mover tarjetas, escribir historias o reportar por otros. Crea una dependencia que después cuesta deshacer.

!!! tip "Si te piden resultados ya"
    Ofrece la línea base de datos como primer entregable de la semana 1. Si un riesgo grave no puede esperar (seguridad, datos, producción), no lo resuelves cambiando el proceso: lo escalas a quien corresponde y lo registras.

!!! tip "Cuando algo pasa y tienes que responder"
    [Qué hago si…](../situaciones/index.md) reúne 35 situaciones frecuentes, desde una daily que se alarga hasta la presión por cambiar todo de golpe. Su sección [Tu llegada](../situaciones/index.md#tu-llegada) cubre las primeras semanas.

## Señales de diagnóstico

Reúne señales de las secciones "Qué observar al llegar a un equipo" de las fichas de la [biblioteca](../biblioteca/index.md). Una señal sola no diagnostica: busca dos o tres que apunten a lo mismo y confírmalas con datos.

| Señal | Dónde se ve | Ficha |
|---|---|---|
| El tablero termina antes de que el trabajo llegue a producción | Tablero | [Visualizar](../biblioteca/kanban/visualizar.md) |
| Columnas "listo para…" llenas, con más ítems que las activas | Tablero | [WIP y sistema pull](../biblioteca/kanban/wip-y-pull.md) |
| Más de dos ítems en curso por persona (como referencia) | Tablero | [WIP y sistema pull](../biblioteca/kanban/wip-y-pull.md) |
| Sin límites de WIP visibles, o nadie sabe qué pasa al alcanzarlos | Tablero | [Kanban en una página](../biblioteca/kanban/kanban-en-una-pagina.md) |
| Ítems con más del doble de la edad típica, y nadie sabe por qué | Tablero | [Work item age](../biblioteca/flujo/work-item-age.md) |
| Columnas como "Hecho, pendiente de QA" que acumulan ítems | Tablero | [Artefactos y compromisos](../biblioteca/scrum/artefactos-y-compromisos.md) |
| El Sprint Goal no está escrito, o es una lista de ítems | Tablero | [El Sprint y Sprint Planning](../biblioteca/scrum/sprint-y-planning.md) |
| Parte del trabajo de la semana no aparece en el tablero | Tablero y 1:1 | [Visualizar](../biblioteca/kanban/visualizar.md) |
| Un ítem típico cambia de manos varias veces antes de llegar a producción | Tablero y 1:1 | [Los desperdicios en software](../biblioteca/lean/desperdicios.md) |
| Los ítems esperan casi siempre al mismo equipo externo, o el equipo tiene a cargo más sistemas de los que domina | Tablero y 1:1 | [Team Topologies](../biblioteca/personas/team-topologies.md) |
| "Hacemos Scrumban", pero no hay Sprint Goal ni límites de WIP escritos | Tablero y 1:1 | [Antipatrones de Scrumban](../biblioteca/scrumban/antipatrones-scrumban.md) |
| Todas las personas le hablan a una sola | Daily | [Daily Scrum](../biblioteca/scrum/daily-scrum.md) |
| Se recorre a las personas, no el tablero | Daily | [Combinar cadencia y flujo](../biblioteca/scrumban/cadencia-y-flujo.md) |
| Lo que se dice no coincide con lo que muestra el tablero | Daily | [Scrum en una página](../biblioteca/scrum/scrum-en-una-pagina.md) |
| Llegan ítems que no caben en un Sprint o con preguntas que debieron resolverse antes | Planning | [Refinamiento](../biblioteca/scrum/refinamiento.md) |
| Los criterios de aceptación no tienen ejemplos concretos o se escriben después del código | Refinamiento | [BDD](../biblioteca/ingenieria/bdd.md) |
| Solo asisten el equipo y el PO, y se presenta más de lo que se conversa | Review | [Sprint Review](../biblioteca/scrum/sprint-review.md) |
| Nadie del equipo habló con un usuario real en el último mes | 1:1 y Review | [Continuous discovery](../biblioteca/producto/continuous-discovery.md) |
| Las acciones de las últimas tres retros no se completaron y los temas se repiten | Retro | [Sprint Retrospective](../biblioteca/scrum/retrospectiva.md) |
| Lo que se escucha en los 1:1 no aparece en la retro, y nadie dice "me equivoqué" en público | Retro | [Seguridad psicológica](../biblioteca/personas/seguridad-psicologica.md) |
| Hablan siempre las mismas dos o tres personas, y las reuniones son sobre todo presentaciones o reportes | Retro | [Liberating Structures](../biblioteca/facilitacion/liberating-structures.md) |
| Los cambios de proceso se adoptan "porque funcionaron en otro lado", sin señal de éxito ni fecha de revisión | Retro | [Cynefin](../biblioteca/facilitacion/cynefin.md) |
| Se empiezan más ítems de los que se terminan | Datos | [Ley de Little](../biblioteca/flujo/ley-de-little.md) |
| Entra trabajo después de la Planning, Sprint tras Sprint | Datos | [Cuándo sí y cuándo no Scrumban](../biblioteca/scrumban/cuando-scrumban.md) |
| Ítems que pasan sin terminar al Sprint siguiente | Datos | [El Sprint y Sprint Planning](../biblioteca/scrum/sprint-y-planning.md) |
| Una parte grande de los ítems del mes se marcó como urgente | Datos | [Clases de servicio](../biblioteca/kanban/clases-de-servicio.md) |
| Tiempos en promedio y mucha distancia entre los percentiles 50 y 95 | Datos | [Scatterplot, percentiles y SLE](../biblioteca/flujo/scatterplot-sle.md) |
| La salida del CFD avanza a escalones | Datos | [Cómo leer un CFD](../biblioteca/flujo/cfd.md) |
| Cada persona mide el cycle time entre puntos distintos | Datos y 1:1 | [Métricas y vocabularios](../biblioteca/flujo/metricas-y-vocabularios.md) |
| Nadie sabe cada cuánto se despliega ni qué cuenta como despliegue fallido | Datos y 1:1 | [DORA](../biblioteca/ingenieria/dora.md) |
| Ramas o pull requests que viven más de unos días, o una "semana de integración" | Repositorio | [Trunk-based development](../biblioteca/ingenieria/trunk-based.md) |
| Tres personas dan respuestas distintas sobre cuándo un ítem pasa de columna | 1:1 | [Políticas explícitas](../biblioteca/kanban/politicas-explicitas.md) |
| Hay una persona sin la cual "no sale nada" y apaga los incendios | 1:1 | [Pensamiento sistémico](../biblioteca/lean/pensamiento-sistemico.md) |
| Las decisiones del equipo se revierten desde arriba, o nadie sabe qué puede decidir sin pedir permiso | 1:1 | [Management 3.0](../biblioteca/personas/management-30.md) |
| "Ya probamos eso y no funcionó": los cambios anteriores se impusieron de golpe y se recuerdan con fastidio | 1:1 | [Resistencia al cambio](../biblioteca/facilitacion/resistencia-al-cambio.md) |
| Los stakeholders piden trabajo directo a los Developers, sin pasar por el backlog | 1:1 y canal del equipo | [Accountabilities](../biblioteca/scrum/accountabilities.md) |
| El PO no puede decir a qué meta de negocio contribuye un ítem tomado al azar del backlog | 1:1 con el PO | [Impact mapping](../biblioteca/producto/impact-mapping.md) |
| Los OKRs o metas del trimestre son entregables ("lanzar X"), no resultados medibles | Conversaciones con negocio | [OKRs](../biblioteca/producto/okrs.md) |
| "¿Cuándo está?" se responde con una fecha sin datos o con "depende" | Conversaciones con negocio | [Pronóstico probabilístico](../biblioteca/flujo/pronostico-probabilistico.md) |
| Se mide o se celebra la ocupación de las personas, no la entrega | Conversaciones con negocio | [Principios de flujo](../biblioteca/lean/principios-de-flujo.md) |

## Elegir la puerta de entrada

La puerta de entrada es el peldaño por el que empiezas a implementar el flujo. La escalera va del 0 al 9: **0** observar y tomar la línea base (lo que haces en estas tres semanas), **1** visualizar el trabajo real, **2** políticas explícitas, **3** limitar el WIP, **4** sistema pull y empezar por la derecha, **5** métricas de flujo y SLE, **6** cadencias, **7** clases de servicio, **8** pronóstico probabilístico y **9** mejora continua con experimentos. Se sube por criterio cumplido, no por calendario. El detalle de cada peldaño, con su señal de "listo, sigue", está en [Implementar Scrumban paso a paso](transversal-scrumban-paso-a-paso.md).

**Primero, el marco.** El % de demanda no planificada decide con qué cadencias se recorre la escalera, según el árbol de la [Fase 3 §3.2](03-sistema-de-trabajo.md#32-elegir-el-marco-segun-la-demanda):

- **Menos de 20 %** y Scrum funciona: mantén Scrum y suma las prácticas de flujo. Los peldaños 1 a 5 y el 8 sirven igual.
- **De 20 % a 50 %:** Scrumban, con Sprint y flujo a la vez.
- **Más de 50 %:** Kanban con cadencias. Es la misma escalera, sin la capa de Sprints.

Ver [Cuándo sí y cuándo no Scrumban](../biblioteca/scrumban/cuando-scrumban.md).

**Después, la puerta.** La decide el puntaje observado de la dimensión **Flujo** del assessment (FL1 a FL5), ya conversado en el taller de brechas, junto con las señales. Los puntajes son **como referencia**:

| Si encuentras… | Flujo observado | Entras por… | Lo primero que cuidas |
|---|---|---|---|
| Equipo sin marco, todo es urgente | Menos de 2; FL1 en 1 | Peldaño 1: visualizar | No imponer ceremonias, solo hacer visible el trabajo |
| "Scrum a medias": Sprints que no cierran, trabajo que entra a mitad del Sprint | De 2 a 2,9; FL2 y FL4 en 2 o menos | Peldaños 2 y 3: políticas y WIP dentro del Sprint | Conservar lo que funciona (Sprint Goal, retro) y agregar flujo |
| Kanban sin disciplina: tablero sin límites ni métricas | De 2 a 2,9; FL1 en 3 o más, FL2 y FL3 en 2 o menos | Peldaños 3 y 4: WIP y pull | Sumar cadencias |
| Equipo maduro | 3 o más; FL2 en 4 o más y ninguna pregunta de Flujo bajo 3 | Peldaños 5 y 8: métricas y pronóstico | Afinar, no cambiar |

Si el equipo no encaja en ninguna fila, o encaja en dos, decide con las señales observadas y con las reglas de abajo.

- **Si dudas entre dos puertas, entra por la más baja.** Confirmar rápido un peldaño que ya está cumplido cuesta poco; saltarse uno cuesta mucho.
- **Si el puntaje y las señales no coinciden, mandan las señales confirmadas con datos.** Revisa también la brecha con la autoevaluación.
- **La puerta ocupa uno de los dos frentes de mejora** (regla 4 del assessment). Si Ingeniería o Calidad están bajo 2, el otro frente es ese.

## Artefactos

| Artefacto | Dónde |
|---|---|
| Notas de los 1:1, agrupadas y sin nombres | Documento personal |
| Mapa de stakeholders | [Plantilla](../caja-de-herramientas/mapa-stakeholders.md) |
| Línea base de métricas, con el % de demanda no planificada | [Catálogo de métricas](../caja-de-herramientas/catalogo-metricas.md) |
| Diario de observación | [Plantilla](../caja-de-herramientas/diario-observacion.md) |
| Assessment con radar y brechas | [Cuestionario](../caja-de-herramientas/assessment-madurez.md) y [calculadora](../caja-de-herramientas/calculadora-madurez.md) |
| Devolución: diagnóstico, puerta de entrada y primer experimento | Espacio del equipo |

## Métricas

Miden tu llegada, no al equipo:

| Métrica | Qué indica |
|---|---|
| % de personas con 1:1 hecho al cerrar la semana 2 | Cuánto escuchaste |
| Ceremonias observadas al menos una vez | Cuánto observaste |
| Hipótesis del diario confirmadas o descartadas | Si el diagnóstico se apoya en evidencia |
| Preguntas del assessment puntuadas con evidencia, de 30 | Calidad del puntaje observado |
| Lead time P85, throughput, WIP y % no planificado | Línea base para medir cualquier cambio posterior |
| Cambios de proceso introducidos por ti antes de la devolución | Debe ser cero |

## Roles

| Actividad | Responsable | Aprueba | Consultado (C) e informado (I) |
|---|---|---|---|
| Acordar el encargo y las tres semanas de diagnóstico | SM / Coach | Patrocinador | PO (C) · Equipo (I) |
| 1:1 y línea base de datos | SM / Coach | SM / Coach | PO y equipo (C) |
| Mapa de stakeholders | SM / Coach | PO | Patrocinador (C) |
| Observación y diario | SM / Coach | SM / Coach | Equipo (I) |
| Autoevaluación y taller de brechas | SM / Coach (facilita) | Equipo y PO | Patrocinador (I) |
| Puerta de entrada y primer experimento | SM / Coach | Equipo y PO | Patrocinador (C) |
| Devolución al patrocinador | SM / Coach | PO | Equipo (C) · Patrocinador (I) |

## Criterios de salida

- [ ] 1:1 hechos con todas las personas del equipo, el PO y el patrocinador.
- [ ] Mapa de stakeholders en su primera versión, revisado con el PO.
- [ ] Línea base con al menos 3 meses de historia, incluido el % de demanda no planificada.
- [ ] Cada ceremonia observada al menos una vez y el diario con sus hipótesis confirmadas, descartadas o abiertas.
- [ ] Assessment puntuado con evidencia y brechas de más de 1 punto conversadas en el taller.
- [ ] Puerta de entrada y primer experimento acordados con el equipo y el PO, con su señal de éxito.
- [ ] Devolución hecha, primero al equipo y después al patrocinador.
- [ ] Ningún cambio de proceso introducido por quien llega antes de la devolución, salvo riesgos graves escalados.

## Antipatrones

- **El salvador del día 1:** llegar con la solución, y a veces con el marco, ya decididos.
- **El auditor:** los 1:1 parecen interrogatorios y el equipo responde lo que cree que quieres escuchar.
- **Diagnóstico de escritorio:** solo datos de Jira sin observar, o solo observación sin datos.
- **Copiar el equipo anterior:** las mismas ceremonias, el mismo tablero, las mismas plantillas.
- **El informe sorpresa:** el patrocinador escucha el diagnóstico antes que el equipo.
- **Parálisis por análisis:** la observación se alarga sin fecha. La semana 3 es el límite; el diagnóstico se ajusta después.
- **Puerta demasiado alta:** proponer pronósticos en un equipo cuyo tablero no muestra el trabajo real.
- **Scrumban por defecto:** recomendarlo sin haber medido la demanda.
