# Extreme Programming (XP)

**En una frase:** Valores, principios y prácticas técnicas y de equipo para cambiar el software a menudo sin que cada cambio cueste más que el anterior.

**Área:** Ingeniería · **Lectura:** ~3 min

## Qué es

Kent Beck presentó XP en *Extreme Programming Explained* (1999). La segunda edición (2004, con Cynthia Andres) lo reescribió: sumó el **respeto** a los cuatro valores originales, agregó principios que conectan valores con prácticas y reemplazó las 12 prácticas de la primera edición por 13 primarias y 11 corolarias.

| Capa | Segunda edición (2004) |
|---|---|
| Valores | Comunicación, simplicidad, retroalimentación, coraje y respeto |
| Principios (algunos) | Humanidad, economía, beneficio mutuo, mejora, reflexión, flujo y pasos pequeños |
| Prácticas primarias | Sentarse juntos, equipo completo, espacio informativo, trabajo con energía, programación en pares, historias, ciclo semanal, ciclo trimestral, holgura, build de diez minutos, integración continua, test-first y diseño incremental |

Las primarias aportan por sí solas y se pueden adoptar de a una. Las corolarias, como el despliegue diario o una sola base de código, suponen que las primarias ya funcionan.

Scrum no prescribe prácticas de ingeniería; muchos equipos Scrum que entregan seguido las toman de XP.

## Para qué sirve (y cuándo no)

Sirve cuando el costo de cambiar el sistema crece: cada Sprint rinde menos, hay miedo de tocar ciertos módulos y los bugs vuelven. XP ataca la causa con **retroalimentación en varias escalas**: segundos o minutos (tests y build), horas (pares e integración), días (ciclo semanal) y meses (ciclo trimestral).

No es un paquete de todo o nada. Imponer todas las prácticas por decreto genera rechazo y ritual. Tampoco resuelve qué construir: eso es trabajo de producto. Y en equipos que casi no escriben código, como operaciones, aportan más los valores y los ciclos que las prácticas técnicas.

## Cómo se aplica

1. **Parte por el dolor.** Pregunta dónde se pierde más tiempo: integrar, probar, esperar revisión o corregir lo que volvió.
2. **Elige una práctica primaria** que lo ataque y acuérdala en la retro como experimento, con una señal para revisarla (por ejemplo, minutos de build).
3. **Build rápido e integración continua primero:** sostienen al resto. El pipeline está en la [Fase 2 §2.4](../../fases/02-fundaciones-tecnicas.md#24-pipeline-de-integracion-y-entrega-continua).
4. **Test-first** en código nuevo y en cada bug corregido: primero un test que lo reproduce.
5. **Pares o mob** para trabajo complejo, onboarding y módulos que solo una persona conoce.
6. **Holgura explícita** en cada ciclo para deuda y mejora, como pide la [Fase 3 §3.6](../../fases/03-sistema-de-trabajo.md#36-capacidad-para-lo-no-planificado).

Como Scrum Master no necesitas enseñar TDD. Tu aporte es crear condiciones: tiempo, permiso para ir más lento al principio y una conversación de calidad que no quede solo entre developers.

## Errores típicos

- Llamar XP a "a veces programamos en pares".
- Pares impuestos ocho horas al día, sin acuerdo ni pausas.
- Tests escritos al final, solo para cumplir una meta de cobertura.
- Prácticas sin valores: integrar a diario sin el coraje de decir que algo está mal diseñado.
- "No hay tiempo para refactorizar", Sprint tras Sprint.
- Un Scrum Master que se declara "no técnico" y se excluye de la conversación de calidad.

## Qué observar al llegar a un equipo

- ¿Cuánto tarda el build con los tests? ¿Alguien lo sabe sin mirar?
- ¿Cada cuánto llega el trabajo de cada persona a la rama principal?
- ¿Hay módulos que solo una persona toca?
- ¿Los bugs corregidos traen un test que los reproduce?
- ¿Se programa en pares? ¿Por decisión o solo en emergencias?
- ¿Baja lo que se termina por Sprint mientras sube el tiempo en bugs?

## Relacionado

- [BDD](bdd.md) · [Trunk-based development](trunk-based.md) · [DORA](dora.md)
- [Scrum en una página](../scrum/scrum-en-una-pagina.md) · [Principios de flujo](../lean/principios-de-flujo.md)
- [Fase 2 · Fundaciones técnicas](../../fases/02-fundaciones-tecnicas.md) · [DoR y DoD](../../caja-de-herramientas/dor-dod.md)

## Para profundizar

- Kent Beck, *Extreme Programming Explained: Embrace Change*, Addison-Wesley, 1999.
- Kent Beck con Cynthia Andres, *Extreme Programming Explained: Embrace Change*, segunda edición, Addison-Wesley, 2004.
