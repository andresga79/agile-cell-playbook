# Trunk-based development

**En una frase:** Todo el equipo integra su trabajo en una sola rama principal, al menos una vez al día, y evita las ramas que viven semanas.

**Área:** Ingeniería · **Lectura:** ~3 min

## Qué es

Es un modelo de ramas del control de versiones. El sitio de referencia, que mantiene Paul Hammant, lo define como colaborar en una sola rama llamada *trunk* (hoy suele ser `main`) y resistir la presión de crear otras ramas de desarrollo de larga vida. Admite dos formas:

- **Commit directo a la rama principal**, común en equipos chicos.
- **Ramas de vida corta** de una persona o un par, que vuelven a la principal por pull request tras una revisión. Según el sitio, duran un par de días como máximo, y **la espera de revisión cuenta** dentro de ese plazo.

Para que haya integración continua, el sitio pide además que cada persona integre a la principal al menos una vez cada 24 horas.

| Aspecto | Ramas de larga vida | Trunk-based |
|---|---|---|
| Cuándo aparecen los conflictos | Al final, todos juntos | A diario, chicos |
| Código sin terminar | Escondido en la rama | En la principal, apagado con un feature flag |
| Integración | Un evento ("semana de integración") | Continua |

*Accelerate* (2018) incluye el trunk-based development entre las capacidades técnicas asociadas a un mejor desempeño de entrega.

## Para qué sirve (y cuándo no)

Hace posible la **integración continua real**: tener un servidor de CI no basta si el código pasa semanas sin juntarse. Achica los lotes, adelanta los problemas y deja la rama principal siempre lista para desplegar, que es la base de la [Fase 4](../../fases/04-entrega-continua.md).

No se adopta antes de tener un build rápido y pruebas confiables: sin ellas, la principal vive en rojo y el equipo vuelve a las ramas largas con razón. En proyectos open source con contribuyentes externos, el modelo de forks y pull requests sigue siendo el habitual. Y si la organización exige un aprobador humano en cada cambio, ramas cortas con revisión el mismo día siguen siendo trunk-based.

## Cómo se aplica

1. **Mide la vida actual de las ramas:** desde que se crean hasta que se integran, incluida la espera de revisión.
2. **Asegura la red:** build rápido, pruebas en cada PR y una regla simple: si la principal se rompe, arreglarla va antes que todo. Ver [Fase 2 §2.4](../../fases/02-fundaciones-tecnicas.md#24-pipeline-de-integracion-y-entrega-continua).
3. **Achica los cambios y la espera de revisión.** Haz visible "en revisión" en el tablero: es una cola como cualquier otra.
4. **Esconde lo incompleto con feature flags** y acuerda quién retira cada flag cuando ya no se usa.
5. **Usa *branch by abstraction*** para cambios grandes: una capa intermedia permite reemplazar una pieza por partes, sin una rama larga.
6. **Si necesitas ramas de release**, créalas lo más tarde posible y corrige primero en la principal.

## Errores típicos

- Decir "hacemos trunk-based" con pull requests abiertos una semana.
- Una rama por ambiente (`dev`, `qa`, `main`) que se promueven con merges.
- La principal en rojo durante horas, y ya nadie se inquieta.
- Feature flags que se acumulan sin dueño hasta volverse deuda.
- Congelar el código días antes de cada release.

## Qué observar al llegar a un equipo

- ¿Cuántas ramas activas hay y qué edad tiene la más vieja?
- ¿Cuánto tarda un pull request desde que se abre hasta que se integra?
- ¿Cuántas horas estuvo la rama principal en rojo la última semana?
- ¿Existen ramas por ambiente, "semana de integración" o *code freeze*?
- ¿Cuántos feature flags hay activos y quién decide retirarlos?

## Relacionado

- [Extreme Programming](xp.md) · [DORA](dora.md) · [BDD](bdd.md)
- [Principios de flujo](../lean/principios-de-flujo.md) · [WIP y sistema pull](../kanban/wip-y-pull.md)
- [Fase 2 · Fundaciones técnicas](../../fases/02-fundaciones-tecnicas.md) · [Checklist de paso a producción](../../caja-de-herramientas/checklist-produccion.md)

## Para profundizar

- Paul Hammant y colaboradores, [trunkbaseddevelopment.com](https://trunkbaseddevelopment.com/), sitio de referencia (2017–2020), en especial la página sobre ramas de vida corta.
- Jez Humble y David Farley, *Continuous Delivery*, Addison-Wesley, 2010.
- Nicole Forsgren, Jez Humble y Gene Kim, *Accelerate*, IT Revolution, 2018.
