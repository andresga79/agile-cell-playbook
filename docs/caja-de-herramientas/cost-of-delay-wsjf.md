# Cost of Delay y WSJF

**Fase:** 1 y 3 · **Origen:** Don Reinertsen (Cost of Delay, CD3), SAFe (WSJF) · **Duración:** 60–90 min por sesión de priorización

En la [Fase 1](../fases/01-descubrimiento.md) priorizas hipótesis por **riesgo × valor**. Cuando ya hay varios ítems validados o comprometidos que compiten por la misma capacidad, necesitas otra pregunta: **¿cuánto nos cuesta no tenerlo?** Esa es la priorización económica.

## Qué es Cost of Delay

El **Cost of Delay (CoD)** es el valor que se pierde por cada unidad de tiempo que un ítem no está en producción: ingresos no capturados, ahorros que no llegan, multas, riesgo que sigue abierto. Cambia la conversación de "¿qué es más importante?" a "¿qué es más caro esperar?".

## Perfiles de urgencia

No todos los ítems pierden valor igual en el tiempo. El perfil define la [clase de servicio](politicas-tablero.md#clases-de-servicio):

| Perfil de urgencia | Cómo se comporta el CoD | Clase de servicio |
|---|---|---|
| Crítico e inmediato | Costo alto desde el primer minuto (incidente, caída) | Expedito |
| Fecha límite | Bajo hasta una fecha, luego muy alto o pérdida total (regulación, campaña) | Fecha fija |
| Lineal | Constante por semana de espera (nueva funcionalidad con demanda) | Estándar |
| Diferido | Casi nulo hoy, crece más adelante (deuda técnica, obsolescencia) | Intangible |

!!! tip "Fecha fija no se prioriza solo con WSJF"
    Para un ítem de fecha fija, lo que importa es **cuándo empezarlo**: fecha límite menos el lead time P85 de ese tipo de ítem. WSJF ordena el resto.

## CD3 y WSJF

**CD3** (*Cost of Delay Divided by Duration*) usa valores económicos reales:

```
CD3 = CoD por semana ÷ duración estimada en semanas
Ej.: 20 000 USD/semana ÷ 4 semanas = 5 000
```

Cuando no hay datos económicos confiables, usa **WSJF** (*Weighted Shortest Job First*) con escalas relativas:

```
CoD  = valor de negocio + criticidad temporal + reducción de riesgo / habilitación de oportunidad
WSJF = CoD ÷ tamaño del trabajo
```

Se hace primero lo de **mayor WSJF**: mucho costo de esperar y poco esfuerzo.

## Ejemplo

Escala Fibonacci modificada: 1, 2, 3, 5, 8, 13, 20. En cada columna, el ítem más bajo vale 1 o 2 y el resto se puntúa en relación con él.

| Ítem | Valor de negocio | Criticidad temporal | Riesgo / oportunidad | CoD | Tamaño | WSJF | Orden |
|---|---|---|---|---|---|---|---|
| Alertas de pago por SMS | 8 | 3 | 2 | 13 | 3 | 4,33 | 1 |
| Actualizar librería de pagos (habilitador) | 2 | 5 | 13 | 20 | 5 | 4,00 | 2 |
| Validación de identidad digital | 13 | 8 | 5 | 26 | 8 | 3,25 | 3 |
| Reporte regulatorio trimestral | 5 | 20 | 3 | 28 | 13 | 2,15 | 4 |
| Rediseño del portal | 20 | 2 | 3 | 25 | 20 | 1,25 | 5 |

Lectura: el rediseño tiene el mayor valor de negocio, pero es tan grande que conviene **partirlo** (ver [User Story Map](user-story-map.md)) y volver a puntuar cada parte. El reporte regulatorio es de fecha fija: se agenda según su fecha de inicio, aunque su WSJF sea medio.

## Cómo usarlo

**Con negocio**

- Puntúa en grupo: PO, patrocinador y personas de negocio dan valor y criticidad; el equipo da el tamaño.
- Puntúa **columna por columna**, no ítem por ítem, para mantener la comparación relativa.
- Revisa el orden en cada reposición o planificación; el CoD cambia con el tiempo.

**Con compras y proveedores**

- Usa el CoD para justificar capacidad adicional o un expedito: "esperar 4 semanas cuesta X".
- En contratos por outcomes, acuerda que el orden del backlog lo define el cliente con WSJF visible, no el proveedor según su conveniencia (ver [Gobierno con proveedores](../fases/transversal-gobierno-proveedores.md)).
- Compara ofertas por **costo de esperar + costo de construir**, no solo por tarifa.

## Advertencias

!!! warning "WSJF ordena, no decide"
    - Es una **escala relativa**: un 13 no vale "13 de algo". No sumes ni compares WSJF entre backlogs distintos.
    - Evita la **falsa precisión**: discutir si es 4,33 o 4,00 es perder el tiempo. Lo útil son los grupos (alto, medio, bajo) y la conversación.
    - **No reemplaza la validación de hipótesis**: un ítem con WSJF alto basado en una suposición sin validar sigue siendo una apuesta. Valídala primero en la [Fase 1](../fases/01-descubrimiento.md).
    - Si todo tiene criticidad 20, nadie está diciendo la verdad: exige un ítem de referencia en 1.
