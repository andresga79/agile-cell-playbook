# DORA: métricas de entrega de software

**En una frase:** Cinco métricas de investigación que muestran cuán rápido y cuán estable llega un cambio a producción, leídas juntas y por aplicación.

**Área:** Ingeniería · **Lectura:** ~3 min

## Qué es

DORA (*DevOps Research and Assessment*) es un programa de investigación sobre entrega de software. *Accelerate* (2018) popularizó sus "cuatro claves". En el informe de 2023, el tiempo de restauración pasó a ser **failed deployment recovery time** (solo fallas causadas por un cambio, no caídas externas) y en el de 2024 se sumó el **deployment rework rate**. La guía vigente de dora.dev:

| Métrica | Grupo | Qué mide |
|---|---|---|
| Change lead time | Throughput | Del commit al despliegue en producción |
| Deployment frequency | Throughput | Despliegues por periodo |
| Failed deployment recovery time | Throughput | Tiempo para recuperarse de un despliegue fallido |
| Change fail rate | Inestabilidad | % de despliegues que exigen intervención inmediata (rollback o hotfix) |
| Deployment rework rate | Inestabilidad | % de despliegues no planificados, hechos por un incidente en producción |

El playbook usa las cuatro clásicas en la [Fase 4](../../fases/04-entrega-continua.md) y el [catálogo de métricas](../../caja-de-herramientas/catalogo-metricas.md); su "tiempo de recuperación" es la tercera fila.

!!! warning "No es el mismo lead time"
    El *change lead time* de DORA va **del commit a producción**. El lead time del playbook va **del compromiso a la entrega** e incluye las esperas anteriores al código. Un equipo puede tener un change lead time de una hora y un lead time de 30 días. Ver [Métricas y vocabularios](../flujo/metricas-y-vocabularios.md).

## Para qué sirve (y cuándo no)

Sirve para conversar sobre capacidad de entrega con respaldo de investigación: equilibra velocidad y estabilidad, y desde 2015 DORA observa que los equipos de mejor desempeño logran ambas. También ayuda frente a un comité de cambios ([Fase 4 §4.4](../../fases/04-entrega-continua.md#44-paso-a-produccion)).

No miden productividad individual ni valor para el usuario: puedes desplegar a diario algo que nadie usa. Están pensadas para **una aplicación o servicio a la vez**, y comparar contextos distintos engaña.

## Cómo se aplica

1. **Elige una aplicación o servicio**, no "toda el área".
2. **Define cada métrica por escrito** con la ficha del [catálogo](../../caja-de-herramientas/catalogo-metricas.md): qué es un despliegue, qué cuenta como falla y de dónde sale el dato.
3. **Toma la línea base** como indica la [Fase 5 §5.2](../../fases/05-medicion.md#52-tomar-la-linea-base). Sin datos del pipeline, el *DORA Quick Check* de dora.dev da una primera foto.
4. **Lee en pares:** frecuencia junto con change fail rate; change lead time junto con rework.
5. **Lleva los datos a la retro** para elegir qué capacidad mejorar (pruebas, [trunk-based](trunk-based.md), despliegue automático) y compara al equipo consigo mismo.

## Errores típicos

Varios vienen de la lista de dora.dev:

- Convertir una métrica en meta: el equipo parte despliegues para "subir la frecuencia".
- Mirar una sola métrica, sin la tensión entre velocidad y estabilidad.
- Rankings entre equipos o aplicaciones muy distintas.
- Propiedad dividida: desarrollo responde por el lead time y operaciones por la recuperación.
- Meses construyendo el tablero de datos antes de mejorar algo.

## Qué observar al llegar a un equipo

- ¿Alguien sabe, sin buscar, cada cuánto se despliega a producción?
- ¿Hay una definición escrita de "despliegue fallido"? ¿Los hotfix quedan registrados?
- ¿Las métricas DORA aparecen en un ranking de equipos?
- ¿Cuánto distan el change lead time y el lead time del tablero? La diferencia muestra cuánto espera el trabajo antes del primer commit.

## Relacionado

- [Fase 5 · Medición y aprendizaje](../../fases/05-medicion.md)
- [SPACE](space.md) · [Trunk-based development](trunk-based.md) · [Extreme Programming](xp.md)
- [Métricas y vocabularios](../flujo/metricas-y-vocabularios.md) · [Evidence-Based Management](../scrum/ebm.md)

## Para profundizar

- Nicole Forsgren, Jez Humble y Gene Kim, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
- DORA, *Accelerate State of DevOps Report*, 2023 y 2024: cambio de nombre de la métrica de recuperación y quinta métrica.
- DORA, [guía de métricas](https://dora.dev/guides/dora-metrics/) (actualizada en enero de 2026) e [historia de las métricas](https://dora.dev/insights/dora-metrics-history/), dora.dev.
