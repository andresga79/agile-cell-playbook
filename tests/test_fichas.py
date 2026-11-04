"""Pruebas del hook hooks/fichas.py (unittest, sin dependencias nuevas)."""

import os
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "hooks"))

from fichas import (  # noqa: E402
    FICHA_SECCIONES,
    TRANSVERSAL_SECCIONES,
    contar_palabras,
    es_ficha,
    validar_ficha,
    validar_transversal,
)


def ficha(palabras=500, secciones=FICHA_SECCIONES, frase=True, area=True, anio=True):
    """Arma una ficha de prueba con aproximadamente `palabras` palabras."""
    partes = ["# Título de prueba", ""]
    if frase:
        partes += ["**En una frase:** algo breve y claro.", ""]
    if area:
        partes += ["**Área:** Scrum · **Lectura:** ~3 min", ""]
    for nombre in secciones:
        partes += [f"## {nombre}", ""]
        if nombre == "Para profundizar":
            partes += ["- Schwaber y Sutherland, The Scrum Guide" + (" (2020)" if anio else ""), ""]
        else:
            partes += ["texto", ""]
    base = "\n".join(partes)
    relleno = max(0, palabras - contar_palabras(base))
    return base + "\n" + " ".join(["palabra"] * relleno) + "\n"


def transversal(secciones=TRANSVERSAL_SECCIONES):
    partes = ["# Transversal de prueba", ""]
    for nombre in secciones:
        partes += [f"## {nombre}", "", "texto", ""]
    return "\n".join(partes)


def alguno(errores, texto):
    return any(texto in e for e in errores)


class FichaTest(unittest.TestCase):
    def test_ficha_valida_sin_errores(self):
        self.assertEqual(validar_ficha(ficha()), [])

    def test_ficha_corta(self):
        self.assertTrue(alguno(validar_ficha(ficha(palabras=300)), "400"))

    def test_ficha_larga(self):
        self.assertTrue(alguno(validar_ficha(ficha(palabras=800)), "700"))

    def test_ficha_sin_frase(self):
        self.assertTrue(alguno(validar_ficha(ficha(frase=False)), "En una frase"))

    def test_ficha_sin_area_lectura(self):
        self.assertTrue(alguno(validar_ficha(ficha(area=False)), "Área"))

    def test_ficha_seccion_faltante(self):
        secciones = tuple(s for s in FICHA_SECCIONES if s != "Errores típicos")
        self.assertTrue(alguno(validar_ficha(ficha(secciones=secciones)), "Errores típicos"))

    def test_ficha_orden_incorrecto(self):
        s = list(FICHA_SECCIONES)
        s[0], s[1] = s[1], s[0]
        self.assertTrue(alguno(validar_ficha(ficha(secciones=tuple(s))), "orden"))

    def test_ficha_seccion_extra(self):
        secciones = FICHA_SECCIONES[:3] + ("Extra",) + FICHA_SECCIONES[3:]
        self.assertTrue(alguno(validar_ficha(ficha(secciones=secciones)), "Extra"))

    def test_ficha_sin_anio_en_fuentes(self):
        self.assertTrue(alguno(validar_ficha(ficha(anio=False)), "año"))

    def test_contar_palabras_ignora_codigo(self):
        self.assertEqual(contar_palabras("uno dos\n```mermaid\na b c d\n```\ntres"), 3)

    def test_es_ficha(self):
        self.assertTrue(es_ficha("biblioteca/scrum/daily-scrum.md"))
        for ruta in (
            "biblioteca/scrum/index.md",
            "biblioteca/index.md",
            "biblioteca/ruta-de-estudio.md",
            "fases/03-sistema-de-trabajo.md",
        ):
            self.assertFalse(es_ficha(ruta), ruta)


class TransversalTest(unittest.TestCase):
    def test_transversal_valida_con_h2_extra(self):
        s = list(TRANSVERSAL_SECCIONES)
        s.insert(s.index("Artefactos"), "Puertas de entrada")
        self.assertEqual(validar_transversal(transversal(tuple(s))), [])

    def test_transversal_falta_seccion(self):
        s = tuple(x for x in TRANSVERSAL_SECCIONES if x != "Roles")
        self.assertTrue(alguno(validar_transversal(transversal(s)), "Roles"))


if __name__ == "__main__":
    unittest.main()
