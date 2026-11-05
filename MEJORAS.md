# Puntos de mejora · Agile Cell Playbook

Revisión del 2026-10-28 sobre `main` (`04bcc55`). El build `mkdocs build --strict` pasa sin advertencias y las fases 0 a 6 siguen la plantilla de 8 partes. Ningún punto es urgente.

Prioridad: **Alta** = mejor relación impacto/esfuerzo · **Media** · **Baja**.

## Estado (2026-11-04)

Resueltos 16 de los 17 puntos. S1 y P6 ya se habían resuelto en versiones anteriores; el detalle de los demás está en la sección `[Sin publicar]` del changelog.

- **Resueltos:** C1, C2 (la dependencia de `use_directory_urls` quedó documentada en `mkdocs.yml`, porque print-site no permite enlazar su página como `.md`), P1 a P6, S1 a S3 y J1 a J5.
- **Pendiente de decisión:** C3. Conviene decidir el enfoque de i18n cuando se vaya a traducir. La opción recomendada es `mkdocs-static-i18n` con sufijo de idioma (`pagina.en.md`), que no obliga a mover los archivos actuales.

## Contenido

| # | Prioridad | Punto | Dónde | Propuesta |
|---|---|---|---|---|
| C1 | Alta | Gobierno con proveedores no sigue la plantilla de 8 partes que exige `contribuir.md` (no tiene Objetivo, Entradas, Actividades, Artefactos, Métricas ni Roles). | `docs/fases/transversal-gobierno-proveedores.md` | Reorganizar sus secciones actuales dentro de la plantilla, como ya hacen las otras dos transversales. |
| C2 | Baja | El enlace a la versión imprimible está escrito a mano y depende de `use_directory_urls`. Es el único aviso del build. | `docs/como-usar.md` | Enlazar a la página que genera `print-site` sin ruta relativa manual, o documentar la dependencia. |
| C3 | Baja | La versión en inglés está en el roadmap, pero no hay estructura de i18n. | `docs/changelog.md` | Decidir el enfoque (por ejemplo `mkdocs-static-i18n`) antes de traducir contenido. |

> La revisión detallada del contenido (consistencia entre páginas, números de los casos, conceptos, huecos y redacción) está en curso y se agregará en esta sección.

## CI y publicación

| # | Prioridad | Punto | Dónde | Propuesta |
|---|---|---|---|---|
| P1 | Alta | Cada push a `main` reconstruye **todos** los tags; el deploy se alarga con cada versión. | `.github/scripts/build_archive.sh` | Construir solo los tags que aún no están en `gh-pages` y conservar lo ya archivado. |
| P2 | Media | Las versiones archivadas se construyen con las dependencias **actuales**; un upgrade de Material o de un plugin puede romperlas o cambiarlas sin aviso. | `.github/scripts/build_archive.sh` | Instalar el `requirements.txt` del tag en un entorno propio de cada worktree. |
| P3 | Alta | `contents: write` aplica a todo el workflow, incluidos PRs y revisión de enlaces. | `.github/workflows/deploy.yml` | Dejar `contents: read` por defecto y dar `write` solo al job que publica. |
| P4 | Media | La revisión de enlaces externos corre en cada push y PR, no solo los lunes como dice el comentario, y con `continue-on-error` sus fallas pasan inadvertidas. | `.github/workflows/deploy.yml` | Limitarla a `schedule` y `workflow_dispatch`, y abrir un issue automático cuando falle. |
| P5 | Media | No hay actualización automática de dependencias fijadas (pip y actions). | `.github/` | Agregar `dependabot.yml` para `pip` y `github-actions`. |
| P6 | Baja | Lo que se publica desde `main` después del último tag aparece como 0.4.0 ("Versión actual"). | `docs/changelog.md`, `docs/versiones.md` | Mantener una sección `[Sin publicar]` en el changelog. |

## Sitio

| # | Prioridad | Punto | Dónde | Propuesta |
|---|---|---|---|---|
| S1 | Alta | Las siglas usan `abbr`, pero sin `content.tooltips` se muestran con el `title` nativo, que no funciona en móvil. | `mkdocs.yml` | Agregar `content.tooltips` a `theme.features`. |
| S2 | Media | Chart.js se carga desde jsDelivr sin `integrity` ni `crossorigin`. | `calculadora-madurez.md`, `pronostico-monte-carlo.md` | Agregar SRI o servir una copia local en `docs/assets/js/`. |
| S3 | Baja | Los scripts se cargan con rutas relativas (`../../assets/js/...`) dentro del Markdown. Se rompen si cambia `use_directory_urls`, y dejarían de ejecutarse si se activa `navigation.instant`. | Mismas páginas | Cargarlos con `extra_javascript` y que cada script se active solo si encuentra su contenedor (ya lo hacen). |

## Herramientas interactivas (JavaScript y hook)

| # | Prioridad | Punto | Dónde | Propuesta |
|---|---|---|---|---|
| J1 | Media | La lógica pura de ambos scripts se exporta "para pruebas en Node", pero el repo no tiene ninguna prueba. El hook de Python tampoco. | `docs/assets/js/*.js`, `hooks/assessment_data.py` | Agregar pruebas mínimas (`node --test` y `pytest`) y correrlas en el CI antes del build. |
| J2 | Media | Las reglas de priorización tienen los IDs de dimensión `FL`, `IN` y `CA` escritos en el código. Si se cambia un prefijo en el Markdown, las reglas 1 y 2 dejan de aplicarse sin error, aunque el hook diga que el Markdown es la fuente única. | `assessment.js` (`priorities`), `hooks/assessment_data.py` | Que el hook valide que existen esos prefijos, o declarar las reglas en el Markdown y exportarlas en el JSON. |
| J3 | Baja | La fecha por defecto usa `toISOString()` (UTC): en Chile, después de las 21:00 (UTC−3) muestra el día siguiente. | `assessment.js` (`render`) | Construir la fecha con `getFullYear()`, `getMonth()` y `getDate()` locales. |
| J4 | Baja | El Monte Carlo pide el historial "de la más antigua a la más reciente", pero el orden no se usa: muestrea todo el historial por igual. | `montecarlo.js` | Ofrecer "usar solo las últimas N semanas" (lo que hace útil el orden) o quitar esa indicación. |
| J5 | Baja | El Monte Carlo no guarda los datos ni permite compartir el resultado, a diferencia de la calculadora de madurez. | `montecarlo.js` | Reutilizar el mismo patrón de `localStorage` y enlace con hash. |

## Orden sugerido

1. Cambios rápidos: S1, P3, P4 y J3.
2. Coherencia: C1 y J2.
3. Sostenibilidad del CI: P1, P2, P5 y J1.
4. Resto según capacidad.
