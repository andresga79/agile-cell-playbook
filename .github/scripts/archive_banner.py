"""Agrega un aviso de versión archivada al inicio de cada página HTML."""
import pathlib
import re
import sys

site, tag = pathlib.Path(sys.argv[1]), sys.argv[2]
latest = "https://andresga79.github.io/agile-cell-playbook/"
banner = (
    '<div style="background:#fff3cd;color:#664d03;padding:.6rem 1rem;'
    'text-align:center;font:600 .8rem/1.4 sans-serif;position:relative;z-index:10">'
    f"Estás viendo la versión archivada {tag} del Agile Cell Playbook. "
    f'<a href="{latest}" style="color:inherit;text-decoration:underline">'
    "Ir a la versión actual</a></div>"
)

for page in site.rglob("*.html"):
    html = page.read_text(encoding="utf-8")
    html, n = re.subn(r"(<body[^>]*>)", r"\1" + banner, html, count=1)
    if n:
        page.write_text(html, encoding="utf-8")
