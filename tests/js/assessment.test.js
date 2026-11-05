// Pruebas de la lógica pura de docs/assets/js/assessment.js (node --test).
"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const core = require("../../docs/assets/js/assessment.js");

// Cuestionario mínimo con los prefijos que usan las reglas de priorización.
const DIMS = [
  { id: "FL", name: "Flujo", phases: "Fase 1", questions: [["FL1", "a"], ["FL2", "b"]] },
  { id: "IN", name: "Ingeniería", phases: "Fase 2", questions: [["IN1", "c"]] },
  { id: "CA", name: "Calidad", phases: "Fase 3", questions: [["CA1", "d"]] },
  { id: "PR", name: "Producto", phases: "Fase 4", questions: [["PR1", "e"]] }
];

test("reference usa lo observado y, si no hay, la autoevaluación", () => {
  const scores = { FL1: { team: 4, obs: 2 }, FL2: { team: 4 } };
  assert.equal(core.reference(DIMS[0], scores), 2);
  assert.equal(core.reference(DIMS[3], scores), null);
  assert.equal(core.reference(DIMS[3], { PR1: { team: 3 } }), 3);
});

test("level respeta los cortes de nivel", () => {
  assert.equal(core.level(1.9), "Inicial");
  assert.equal(core.level(2), "Repetible");
  assert.equal(core.level(4.4), "Gestionado");
  assert.equal(core.level(4.5), "Optimizado");
  assert.equal(core.level(null), "Sin datos");
});

test("priorities: regla 1 (flujo bajo 2,5) va primero", () => {
  const scores = { FL1: { obs: 2 }, FL2: { obs: 2 }, IN1: { obs: 1 }, CA1: { obs: 3 }, PR1: { obs: 1 } };
  const list = core.priorities(DIMS, scores);
  assert.deepEqual(list.map((p) => p.dim.id), ["FL", "IN", "PR", "CA"]);
  assert.match(list[0].reason, /^Regla 1/);
  assert.match(list[1].reason, /^Regla 2/);
  assert.match(list[2].reason, /^Regla 3/);
});

test("priorities: dimensiones con 4 o más no se intervienen", () => {
  const scores = { FL1: { obs: 4 }, FL2: { obs: 5 }, IN1: { obs: 4 }, CA1: { obs: 4 }, PR1: { obs: 3 } };
  assert.deepEqual(core.priorities(DIMS, scores).map((p) => p.dim.id), ["PR"]);
});

test("el enlace compartido conserva puntajes, célula y fecha", () => {
  const scores = { FL1: { team: 3, obs: 2 }, IN1: { team: "na" }, PR1: { obs: 5 } };
  const hash = core.buildHash(DIMS, scores, "Célula Pagos", "2026-11-16");
  const back = core.parseHash(DIMS, "#" + hash);
  assert.deepEqual(back.scores, scores);
  assert.equal(back.cell, "Célula Pagos");
  assert.equal(back.date, "2026-11-16");
});

test("parseHash: sin a= devuelve null; con otro largo lanza error", () => {
  assert.equal(core.parseHash(DIMS, "#otra=cosa"), null);
  assert.throws(() => core.parseHash(DIMS, "#a=000"), /versión del cuestionario/);
});

test("localISODate usa la fecha local, no UTC", () => {
  // 23:30 hora local: con toISOString podría pasar al día siguiente.
  assert.equal(core.localISODate(new Date(2026, 10, 16, 23, 30)), "2026-11-16");
  assert.equal(core.localISODate(new Date(2026, 0, 5, 0, 5)), "2026-01-05");
});
