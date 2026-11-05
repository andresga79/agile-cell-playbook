"""Pruebas del hook hooks/assessment_data.py contra el assessment real."""

import os
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "hooks"))

from mkdocs.exceptions import PluginError  # noqa: E402

from assessment_data import (  # noqa: E402
    EXPECTED_DIMENSIONS,
    EXPECTED_QUESTIONS,
    PRIORITY_RULE_PREFIXES,
    SOURCE,
    _parse,
)

DOCS_DIR = os.path.join(os.path.dirname(__file__), "..", "docs")


def fuente():
    with open(os.path.join(DOCS_DIR, SOURCE), encoding="utf-8") as fh:
        return fh.read()


class ParseAssessmentReal(unittest.TestCase):
    def setUp(self):
        self.data = _parse(fuente(), DOCS_DIR, True)

    def test_dimensiones_y_preguntas(self):
        dims = self.data["dimensions"]
        self.assertEqual(len(dims), EXPECTED_DIMENSIONS)
        self.assertEqual(sum(len(d["questions"]) for d in dims), EXPECTED_QUESTIONS)

    def test_prefijos_de_las_reglas_presentes(self):
        ids = {d["id"] for d in self.data["dimensions"]}
        for prefijo in PRIORITY_RULE_PREFIXES:
            self.assertIn(prefijo, ids)

    def test_cada_dimension_tiene_fase_y_enlaces(self):
        for d in self.data["dimensions"]:
            self.assertTrue(d["phases"], d["name"])
            for link in d["phaseLinks"]:
                self.assertTrue(link["url"].endswith("/") or "#" in link["url"], link)

    def test_urls_sin_directory_urls(self):
        data = _parse(fuente(), DOCS_DIR, False)
        urls = [l["url"] for d in data["dimensions"] for l in d["phaseLinks"]]
        self.assertTrue(urls)
        self.assertTrue(all(".html" in u for u in urls), urls)


class ParseAssessmentErrores(unittest.TestCase):
    def test_falla_si_se_renombra_un_prefijo_de_regla(self):
        # FL1..FLn pasan a FX1..FXn: las preguntas siguen siendo 30 y 6
        # dimensiones, pero la regla 1 quedaría desactivada sin aviso.
        texto = fuente().replace("| FL", "| FX")
        with self.assertRaises(PluginError) as ctx:
            _parse(texto, DOCS_DIR, True)
        self.assertIn("FL", str(ctx.exception))

    def test_falla_si_falta_una_pregunta(self):
        lineas = fuente().splitlines()
        sin_una = [l for l in lineas if not l.startswith("| FL1 ")]
        self.assertEqual(len(sin_una), len(lineas) - 1)
        with self.assertRaises(PluginError):
            _parse("\n".join(sin_una), DOCS_DIR, True)


if __name__ == "__main__":
    unittest.main()
