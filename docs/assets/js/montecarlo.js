(function () {
  "use strict";

  var SIMULATIONS = 10000;
  var MIN_WEEKS = 6;
  var MAX_SIM_WEEKS = 520; // tope de seguridad: 10 años
  var PERCENTILES = [50, 85, 95];

  // ---------------------------------------------------------------------------
  // Lógica pura (sin DOM). Se exporta para pruebas en Node.
  // ---------------------------------------------------------------------------

  // Devuelve { values: [..] } o { error: "..." }.
  function parseThroughput(text) {
    var tokens = String(text || "").split(/[\s,;]+/).filter(Boolean);
    var values = [];
    for (var i = 0; i < tokens.length; i++) {
      if (!/^\d+$/.test(tokens[i])) {
        return { error: "\"" + tokens[i] + "\" no es válido. Usa números enteros mayores o iguales a 0 (ítems terminados por semana)." };
      }
      values.push(Number(tokens[i]));
    }
    if (values.length < MIN_WEEKS) {
      return { error: "Necesitas al menos " + MIN_WEEKS + " semanas de historial; hay " + values.length + "." };
    }
    if (values.every(function (v) { return v === 0; })) {
      return { error: "Todas las semanas tienen 0 ítems: no hay datos para pronosticar." };
    }
    return { values: values };
  }

  function sample(values, rnd) {
    return values[Math.floor(rnd() * values.length)];
  }

  // ¿Cuándo? Semanas necesarias para terminar `items`. Ordenado ascendente.
  function simulateWhen(values, items, n, rnd) {
    rnd = rnd || Math.random;
    var out = new Array(n);
    for (var s = 0; s < n; s++) {
      var done = 0, weeks = 0;
      while (done < items && weeks < MAX_SIM_WEEKS) {
        done += sample(values, rnd);
        weeks++;
      }
      out[s] = weeks;
    }
    return out.sort(function (a, b) { return a - b; });
  }

  // ¿Cuánto? Ítems terminados en `weeks` semanas. Ordenado ascendente.
  function simulateHowMany(values, weeks, n, rnd) {
    rnd = rnd || Math.random;
    var out = new Array(n);
    for (var s = 0; s < n; s++) {
      var total = 0;
      for (var w = 0; w < weeks; w++) total += sample(values, rnd);
      out[s] = total;
    }
    return out.sort(function (a, b) { return a - b; });
  }

  // ¿Cuándo?: menor número de semanas en que termina al menos p % de las simulaciones.
  function percentileWhen(sorted, p) {
    var idx = Math.ceil(sorted.length * p / 100) - 1;
    return sorted[Math.min(Math.max(idx, 0), sorted.length - 1)];
  }

  // ¿Cuánto?: mayor cantidad que se alcanza o supera en al menos p % de las simulaciones.
  function percentileHowMany(sorted, p) {
    var idx = Math.floor(sorted.length * (100 - p) / 100);
    return sorted[Math.min(Math.max(idx, 0), sorted.length - 1)];
  }

  function histogram(sorted, maxBins) {
    maxBins = maxBins || 40;
    var min = sorted[0], max = sorted[sorted.length - 1];
    var width = Math.max(1, Math.ceil((max - min + 1) / maxBins));
    var bins = [];
    for (var start = min; start <= max; start += width) bins.push({ from: start, to: start + width - 1, count: 0 });
    sorted.forEach(function (v) { bins[Math.floor((v - min) / width)].count++; });
    return bins;
  }

  function parseDate(str) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(str || "");
    if (!m) return null;
    var d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
    return isNaN(d.getTime()) ? null : d;
  }

  function addWeeks(date, weeks) {
    var d = new Date(date.getTime());
    d.setDate(d.getDate() + weeks * 7);
    return d;
  }

  function stats(values) {
    var sum = values.reduce(function (a, b) { return a + b; }, 0);
    return { weeks: values.length, mean: sum / values.length, min: Math.min.apply(null, values), max: Math.max.apply(null, values) };
  }

  var core = {
    SIMULATIONS: SIMULATIONS, MAX_SIM_WEEKS: MAX_SIM_WEEKS,
    parseThroughput: parseThroughput, simulateWhen: simulateWhen, simulateHowMany: simulateHowMany,
    percentileWhen: percentileWhen, percentileHowMany: percentileHowMany, histogram: histogram,
    parseDate: parseDate, addWeeks: addWeeks, stats: stats
  };

  if (typeof module === "object" && module.exports) {
    module.exports = core;
    return;
  }

  // ---------------------------------------------------------------------------
  // Interfaz
  // ---------------------------------------------------------------------------

  var root = null;
  var chart = null;
  var last = null; // último resultado, para redibujar al cambiar de tema

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") node.textContent = attrs[k];
      else if (k === "class") node.className = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return node;
  }

  function num(n, decimals) {
    var parts = n.toFixed(decimals || 0).split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0");
    return parts.join(",");
  }

  function fmtDate(d) {
    try {
      return d.toLocaleDateString("es", { day: "numeric", month: "short", year: "numeric" });
    } catch (e) {
      return d.toISOString().slice(0, 10);
    }
  }

  function field(labelText, input, hint) {
    var wrap = el("div", { class: "mc-field" }, [el("label", { for: input.id, text: labelText }), input]);
    if (hint) {
      var h = el("p", { class: "mc-hint", id: input.id + "-hint", text: hint });
      input.setAttribute("aria-describedby", h.id);
      wrap.appendChild(h);
    }
    return wrap;
  }

  function render() {
    root.innerHTML = "";
    var form = el("form", { id: "mc-form", novalidate: "novalidate" });

    var data = el("textarea", { id: "mc-data", rows: "4", spellcheck: "false", inputmode: "numeric",
      placeholder: "5, 3, 7, 4, 6, 2, 5, 8, 4, 6" });
    form.appendChild(field("Throughput semanal histórico", data,
      "Ítems terminados por semana, de la más antigua a la más reciente. Separa con coma, espacio o salto de línea. Mínimo " + MIN_WEEKS + " semanas."));

    var whenRadio = el("input", { type: "radio", name: "mc-mode", value: "when", id: "mc-mode-when" });
    var howRadio = el("input", { type: "radio", name: "mc-mode", value: "how", id: "mc-mode-how" });
    whenRadio.checked = true;
    form.appendChild(el("fieldset", {}, [
      el("legend", { text: "¿Qué quieres saber?" }),
      el("label", { for: "mc-mode-when" }, [whenRadio, "¿Cuándo? Semanas para terminar N ítems"]),
      el("label", { for: "mc-mode-how" }, [howRadio, "¿Cuánto? Ítems que se terminan en N semanas"])
    ]));

    var nInput = el("input", { type: "number", id: "mc-n", min: "1", max: "5000", step: "1", inputmode: "numeric", value: "30" });
    var startInput = el("input", { type: "date", id: "mc-start" });
    var nField = field("Ítems por terminar", nInput);
    form.appendChild(el("div", { class: "mc-row" }, [
      nField,
      field("Fecha de inicio (opcional)", startInput, "Si la indicas, las semanas se traducen a fechas.")
    ]));

    function syncMode() {
      nField.querySelector("label").textContent = whenRadio.checked ? "Ítems por terminar" : "Semanas disponibles";
    }
    whenRadio.addEventListener("change", syncMode);
    howRadio.addEventListener("change", syncMode);

    form.appendChild(el("button", { type: "submit", text: "Pronosticar" }));
    form.addEventListener("submit", function (ev) { ev.preventDefault(); run(); });
    root.appendChild(form);

    root.appendChild(el("div", { class: "mc-results", id: "mc-results", "aria-live": "polite" }));
    root.appendChild(el("div", { class: "mc-chart", id: "mc-chart-wrap", hidden: "hidden" }, [
      el("canvas", { id: "mc-chart", role: "img", "aria-label": "Histograma de resultados de la simulación" })
    ]));
  }

  function showError(msg, input) {
    var out = document.getElementById("mc-results");
    out.innerHTML = "";
    out.appendChild(el("p", { class: "mc-error", text: msg }));
    ["mc-data", "mc-n"].forEach(function (id) { document.getElementById(id).removeAttribute("aria-invalid"); });
    if (input) { input.setAttribute("aria-invalid", "true"); input.focus(); }
    document.getElementById("mc-chart-wrap").hidden = true;
    last = null;
  }

  function run() {
    var dataInput = document.getElementById("mc-data");
    var nInput = document.getElementById("mc-n");
    var parsed = parseThroughput(dataInput.value);
    if (parsed.error) return showError(parsed.error, dataInput);
    var n = Number(nInput.value);
    if (!/^\d+$/.test(String(nInput.value).trim()) || n < 1 || n > 5000) {
      return showError("Indica un número entero entre 1 y 5000.", nInput);
    }
    dataInput.removeAttribute("aria-invalid");
    nInput.removeAttribute("aria-invalid");

    var mode = document.getElementById("mc-mode-when").checked ? "when" : "how";
    var start = parseDate(document.getElementById("mc-start").value);
    var values = parsed.values;
    var sorted = mode === "when" ? simulateWhen(values, n, SIMULATIONS) : simulateHowMany(values, n, SIMULATIONS);

    var rows = PERCENTILES.map(function (p) {
      var v = mode === "when" ? percentileWhen(sorted, p) : percentileHowMany(sorted, p);
      return { p: p, v: v };
    });
    last = { mode: mode, sorted: sorted, rows: rows, n: n, start: start };

    var st = stats(values);
    var out = document.getElementById("mc-results");
    out.innerHTML = "";
    out.appendChild(el("h3", { text: mode === "when" ? "¿Cuándo terminamos " + n + " ítems?" : "¿Cuánto entregamos en " + n + " semanas?" }));
    out.appendChild(el("p", { class: "mc-summary", text: num(SIMULATIONS) + " simulaciones con " + st.weeks + " semanas de historial (promedio " + num(st.mean, 1) + " ítems por semana, mínimo " + st.min + ", máximo " + st.max + ")." }));

    var tbody = el("tbody");
    rows.forEach(function (r) {
      var cells;
      if (mode === "when") {
        var capped = r.v >= MAX_SIM_WEEKS;
        var weeksText = capped ? "Más de " + MAX_SIM_WEEKS + " semanas" : r.v + (r.v === 1 ? " semana" : " semanas") + " o menos";
        cells = [r.p + " %", weeksText];
        if (start) cells.push(capped ? "—" : "A más tardar el " + fmtDate(addWeeks(start, r.v)));
      } else {
        cells = [r.p + " %", r.v + (r.v === 1 ? " ítem" : " ítems") + " o más"];
      }
      tbody.appendChild(el("tr", {}, cells.map(function (c) { return el("td", { text: c }); })));
    });
    var head = ["Probabilidad", mode === "when" ? "Semanas" : "Ítems"];
    if (mode === "when" && start) head.push("Fecha");
    var table = el("table", {}, [
      el("thead", {}, [el("tr", {}, head.map(function (h) { return el("th", { text: h, scope: "col" }); }))]),
      tbody
    ]);
    out.appendChild(el("div", { class: "md-typeset__scrollwrap" }, [el("div", { class: "md-typeset__table" }, [table])]));

    var p85 = rows[1].v;
    out.appendChild(el("p", { text: mode === "when"
      ? "Lectura: en el 85 % de las simulaciones, los " + n + " ítems quedan terminados en " + p85 + " semanas o menos" + (start && p85 < MAX_SIM_WEEKS ? " (" + fmtDate(addWeeks(start, p85)) + ")" : "") + "."
      : "Lectura: en el 85 % de las simulaciones se terminan " + p85 + " ítems o más en " + n + " semanas. Comprométete con ese número, no con el promedio." }));

    drawChart();
  }

  function themeColor(varName, fallback) {
    var v = getComputedStyle(document.body).getPropertyValue(varName).trim();
    return v || fallback;
  }

  function drawChart() {
    var wrap = document.getElementById("mc-chart-wrap");
    if (!last) return;
    if (typeof window.Chart === "undefined") {
      wrap.hidden = false;
      wrap.innerHTML = "";
      wrap.appendChild(el("p", { text: "No se pudo cargar el gráfico. La tabla de resultados sigue disponible." }));
      return;
    }
    wrap.hidden = false;
    if (chart) chart.destroy();

    var fg = themeColor("--md-default-fg-color", "#333");
    var light = themeColor("--md-default-fg-color--lighter", "rgba(0,0,0,.3)");
    var grid = themeColor("--md-default-fg-color--lightest", "rgba(0,0,0,.1)");
    var primary = themeColor("--md-primary-fg-color", "#3f51b5");
    var p85 = last.rows[1].v;
    var bins = histogram(last.sorted);
    var unit = last.mode === "when" ? "semanas" : "ítems";

    // Resalta la zona que cubre el 85 %: hasta P85 en "cuándo", desde P85 en "cuánto".
    var colors = bins.map(function (b) {
      var inZone = last.mode === "when" ? b.from <= p85 : b.to >= p85;
      return inZone ? primary : light;
    });

    chart = new window.Chart(document.getElementById("mc-chart"), {
      type: "bar",
      data: {
        labels: bins.map(function (b) { return b.from === b.to ? String(b.from) : b.from + "–" + b.to; }),
        datasets: [{ label: "Simulaciones", data: bins.map(function (b) { return b.count; }), backgroundColor: colors, borderWidth: 0, barPercentage: 1, categoryPercentage: .95 }]
      },
      options: {
        responsive: true,
        locale: "es",
        maintainAspectRatio: false,
        animation: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? false : { duration: 300 },
        scales: {
          x: { title: { display: true, text: last.mode === "when" ? "Semanas hasta terminar" : "Ítems terminados", color: fg }, ticks: { color: fg }, grid: { display: false } },
          y: { title: { display: true, text: "Simulaciones", color: fg }, ticks: { color: fg }, grid: { color: grid }, beginAtZero: true }
        },
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { title: function (items) { return items[0].label + " " + unit; } } }
        }
      }
    });
    document.getElementById("mc-chart").setAttribute("aria-label",
      "Histograma de " + num(SIMULATIONS) + " simulaciones. Percentil 85: " + p85 + " " + unit + ". Los valores están en la tabla de resultados.");
  }

  function init() {
    root = document.getElementById("montecarlo-app");
    if (!root || root.getAttribute("data-mc-ready")) return;
    root.setAttribute("data-mc-ready", "1");
    render();
    new MutationObserver(function () { if (last) drawChart(); })
      .observe(document.body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
