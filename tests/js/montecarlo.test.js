// Pruebas de la lógica pura de docs/assets/js/montecarlo.js (node --test).
"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const core = require("../../docs/assets/js/montecarlo.js");

// Generador determinista para que las simulaciones sean reproducibles.
function secuencia(valores) {
  let i = 0;
  return () => valores[i++ % valores.length];
}

test("parseThroughput acepta comas, espacios y saltos de línea", () => {
  assert.deepEqual(core.parseThroughput("5, 3 7\n4;6,2").values, [5, 3, 7, 4, 6, 2]);
});

test("parseThroughput rechaza valores no enteros, pocas semanas o solo ceros", () => {
  assert.match(core.parseThroughput("5, 3, x, 4, 6, 2").error, /"x" no es válido/);
  assert.match(core.parseThroughput("5, 3, 7").error, /al menos 6 semanas/);
  assert.match(core.parseThroughput("0 0 0 0 0 0").error, /Todas las semanas/);
});

test("simulateWhen con throughput constante da un resultado exacto", () => {
  const sorted = core.simulateWhen([5, 5, 5, 5, 5, 5], 20, 100, Math.random);
  assert.ok(sorted.every((w) => w === 4));
});

test("simulateWhen respeta el tope de semanas", () => {
  const sorted = core.simulateWhen([0, 0, 0, 0, 0, 1], 1e9, 3, () => 0);
  assert.ok(sorted.every((w) => w === core.MAX_SIM_WEEKS));
});

test("simulateHowMany suma las semanas muestreadas", () => {
  // rnd = 0 siempre elige la primera semana (3 ítems).
  assert.deepEqual(core.simulateHowMany([3, 9, 9, 9, 9, 9], 4, 2, () => 0), [12, 12]);
});

test("percentiles: P85 de cuándo y de cuánto", () => {
  const sorted = Array.from({ length: 100 }, (_, i) => i + 1); // 1..100
  assert.equal(core.percentileWhen(sorted, 85), 85);
  assert.equal(core.percentileHowMany(sorted, 85), 16);
});

test("histogram reparte todas las simulaciones", () => {
  const sorted = core.simulateHowMany([1, 2, 3, 4, 5, 6], 10, 500, secuencia([0.1, 0.5, 0.9, 0.3]));
  const bins = core.histogram(sorted);
  assert.equal(bins.reduce((a, b) => a + b.count, 0), 500);
  assert.ok(bins.length <= 40);
});

test("recentWeeks toma las últimas k semanas (el orden importa)", () => {
  const hist = [1, 2, 3, 4, 5, 6, 7, 8];
  assert.deepEqual(core.recentWeeks(hist, 6), [3, 4, 5, 6, 7, 8]);
  assert.deepEqual(core.recentWeeks(hist, 0), hist);
  assert.deepEqual(core.recentWeeks(hist, 20), hist);
});

test("parseRecent: vacío usa todo; menos de 6 o no entero es error", () => {
  assert.deepEqual(core.parseRecent(""), { k: 0 });
  assert.deepEqual(core.parseRecent(" 12 "), { k: 12 });
  assert.ok(core.parseRecent("5").error);
  assert.ok(core.parseRecent("8.5").error);
});

test("el enlace compartido conserva historial, pregunta, fecha y ventana", () => {
  const hash = core.buildHash({ values: [5, 3, 7, 4, 6, 2], mode: "how", n: "12", start: "2026-11-16", recent: "6" });
  assert.equal(hash, "t=5.3.7.4.6.2&m=how&n=12&s=2026-11-16&r=6");
  assert.deepEqual(core.parseHash("#" + hash), {
    data: "5, 3, 7, 4, 6, 2", mode: "how", n: "12", start: "2026-11-16", recent: "6"
  });
});

test("parseHash: sin t= devuelve null; historial inválido devuelve error; campos raros se descartan", () => {
  assert.equal(core.parseHash("#a=xyz"), null);
  assert.ok(core.parseHash("#t=5.x.3").error);
  const r = core.parseHash("#t=1.2.3.4.5.6&m=otro&n=-1&s=2026-13-45&r=abc");
  assert.deepEqual(r, { data: "1, 2, 3, 4, 5, 6", mode: "when", n: "", start: "", recent: "" });
});

test("parseDate rechaza fechas imposibles", () => {
  assert.equal(core.parseDate("2026-13-45"), null);
  assert.equal(core.parseDate("2026-02-30"), null);
  assert.equal(core.parseDate("16/11/2026"), null);
  assert.equal(core.localISODate(core.parseDate("2028-02-29")), "2028-02-29");
});

test("localISODate y addWeeks trabajan en fecha local", () => {
  const d = core.addWeeks(core.parseDate("2026-11-16"), 2);
  assert.equal(core.localISODate(d), "2026-11-30");
});
