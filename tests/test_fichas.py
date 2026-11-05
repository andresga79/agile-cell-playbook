"""Pruebas del hook hooks/fichas.py (unittest, sin dependencias nuevas)."""

import os
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "hooks"))

from fichas import (  # noqa: E402
    FICHA_SECCIONES,
    SITUACION_SECCIONES,
    TRANSVERSAL_SECCIONES,
    contar_palabras,
    es_ficha,
    es_situacion,
    situaciones_sin_enlace,
    validar_ficha,
    validar_situacion,
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


def situacion(palabras=350, secciones=SITUACION_SECCIONES, corto=True, tema=True, enlace=True):
    """Arma una situación de prueba con aproximadamente `palabras` palabras."""
    partes = ["# La daily se volvió un reporte de estado", ""]
    if corto:
        partes += ["**En corto:** devuélvela a los Developers.", ""]
    if tema:
        partes += ["**Tema:** Eventos · **Lectura:** ~2 min", ""]
    for nombre in secciones:
        partes += [f"## {nombre}", ""]
        if nombre == "Relacionado":
            partes += ["- [Daily Scrum](../biblioteca/scrum/daily-scrum.md)" if enlace else "- Daily Scrum", ""]
        else:
            partes += ["texto", ""]
    base = "\n".join(partes)
    relleno = max(0, palabras - contar_palabras(base))
    return base + "\n" + " ".join(["palabra"] * relleno) + "\n"


class SituacionTest(unittest.TestCase):
    def test_situacion_valida_sin_errores(self):
        self.assertEqual(validar_situacion(situacion()), [])

    def test_limites_de_palabras(self):
        self.assertTrue(alguno(validar_situacion(situacion(palabras=200)), "250"))
        self.assertTrue(alguno(validar_situacion(situacion(palabras=600)), "500"))

    def test_cabecera_obligatoria(self):
        self.assertTrue(alguno(validar_situacion(situacion(corto=False)), "En corto"))
        self.assertTrue(alguno(validar_situacion(situacion(tema=False)), "Tema"))

    def test_secciones_faltantes_y_orden(self):
        sin_decir = tuple(s for s in SITUACION_SECCIONES if s != "Qué decir")
        self.assertTrue(alguno(validar_situacion(situacion(secciones=sin_decir)), "Qué decir"))
        invertidas = tuple(reversed(SITUACION_SECCIONES))
        self.assertTrue(alguno(validar_situacion(situacion(secciones=invertidas)), "orden"))

    def test_relacionado_debe_enlazar(self):
        self.assertTrue(alguno(validar_situacion(situacion(enlace=False)), "Relacionado"))

    def test_indice_debe_enlazar_todas(self):
        rutas = ["situaciones/index.md", "situaciones/a.md", "situaciones/b.md", "biblioteca/scrum/x.md"]
        self.assertEqual(situaciones_sin_enlace("- [A](a.md)\n- [B](b.md#algo)", rutas), [])
        self.assertEqual(situaciones_sin_enlace("- [A](a.md)", rutas), ["b.md"])

    def test_es_situacion(self):
        self.assertTrue(es_situacion("situaciones/daily-status-report.md"))
        self.assertFalse(es_situacion("situaciones/index.md"))
        self.assertFalse(es_situacion("biblioteca/scrum/daily-scrum.md"))


if __name__ == "__main__":
    unittest.main()
