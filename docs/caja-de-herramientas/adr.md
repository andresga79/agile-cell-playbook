# Architecture Decision Record (ADR)

**Fase:** 2 (técnicas) y 3 (de proceso) · **Origen:** Michael Nygard

Guardar en `docs/adr/NNNN-titulo-corto.md` en el repo del producto. Los ADR no se editan una vez aceptados: si cambia la decisión, se crea uno nuevo que reemplaza al anterior.

## Plantilla

```markdown
# ADR-0001: [Título de la decisión]

- **Estado:** Propuesto | Aceptado | Reemplazado por ADR-XXXX | Obsoleto
- **Fecha:** AAAA-MM-DD
- **Decisores:** [nombres o roles]

## Contexto

¿Qué situación o problema obliga a decidir? ¿Qué restricciones existen?

## Decisión

Lo que decidimos, en una o dos frases claras.

## Alternativas consideradas

| Alternativa | A favor | En contra |
|---|---|---|
| Opción A | | |
| Opción B | | |

## Consecuencias

- Positivas:
- Negativas / costos:
- Riesgos y cómo mitigarlos:
```

## Ejemplos de decisiones que merecen ADR

- Elección de base de datos, framework o proveedor de nube.
- Monolito modular vs. microservicios.
- Estrategia de autenticación.
- **De proceso:** usar Kanban en vez de Scrum; cambiar el límite de WIP; modelo de ramas.
