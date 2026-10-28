# Agile Cell Playbook

Metodología completa, por fases, para **crear o tomar una célula ágil** (equipo propio o externalizado) que trabaja sobre un producto, con un objetivo único: **entregar valor de negocio con mirada de flujo**.

Integra Management 3.0, Lean Startup, MVO/MVP, User Story Mapping, arquitectura C4, integración y entrega continua, Docker, QA, pasos a producción y métricas de flujo, combinando Scrum, Kanban y Lean según el tipo de trabajo.

🌐 **Web:** https://andresga79.github.io/agile-cell-playbook/

## Inicio rápido (local)

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Abre http://127.0.0.1:8000. Cada cambio en `docs/` se recarga en vivo.

## Publicación

Cada merge a `main` dispara `.github/workflows/deploy.yml`, que construye el sitio en modo estricto y lo publica en la rama `gh-pages`.

Configuración única en GitHub: **Settings → Pages → Source: Deploy from a branch → `gh-pages` / root**.

## Estructura

```
docs/
├── index.md                  Portada y visión general
├── como-usar.md              Cómo recorrer la guía según tu escenario
├── fases/                    Fases 0 a 6 + gobierno con proveedores
├── caja-de-herramientas/     Plantillas y checklists reutilizables
├── glosario.md
├── changelog.md              Historial de versiones de la metodología
└── contribuir.md
```

## Relacionado

- [Agile Metric Hub](https://github.com/andresga79/agile-metric-hub): implementación de referencia de las métricas definidas en la Fase 5.

## Contribuir

El mantenedor publica directo a `main` validando antes con `mkdocs build --strict`. Otras personas contribuyen por pull request. Detalle en [docs/contribuir.md](docs/contribuir.md). Todo cambio queda registrado en el changelog.
