(function () {
  "use strict";

  // Las preguntas NO viven aquí. El hook hooks/assessment_data.py las lee de
  // docs/caja-de-herramientas/assessment-madurez.md y genera
  // assets/data/assessment.json en cada build.

  var SCRIPT_SRC = (typeof document !== "undefined" && document.currentScript) ? document.currentScript.src : "";
  var STORAGE_KEY = "acp-assessment-v1";
  var ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  var SOURCES = [
    { key: "team", label: "Equipo" },
    { key: "obs", label: "Observado" }
  ];

  // ---------------------------------------------------------------------------
  // Lógica pura (sin DOM). Se exporta para pruebas en Node.
  // ---------------------------------------------------------------------------

  function fmt(n) {
    return n === null || n === undefined ? "—" : n.toFixed(1).replace(".", ",");
  }

  function fmtDiff(n) {
    if (n === null) return "—";
    return (n > 0 ? "+" : n < 0 ? "−" : "") + Math.abs(n).toFixed(1).replace(".", ",");
  }

  function level(n) {
    if (n === null) return "Sin datos";
    if (n < 2) return "Inicial";
    if (n < 3) return "Repetible";
    if (n < 4) return "Definido";
    if (n < 4.5) return "Gestionado";
    return "Optimizado";
  }

  function round1(n) { return Math.round(n * 10) / 10; }

  function avg(dim, scores, source) {
    var vals = dim.questions
      .map(function (q) { return scores[q[0]] && scores[q[0]][source]; })
      .filter(function (v) { return typeof v === "number"; });
    if (!vals.length) return null;
    var sum = vals.reduce(function (a, b) { return a + b; }, 0);
    return round1(sum / vals.length);
  }

  // Puntaje de referencia: lo observado; si no hay, la autoevaluación.
  function pickRef(team, obs) { return obs !== null ? obs : team; }

  function reference(dim, scores) {
    return pickRef(avg(dim, scores, "team"), avg(dim, scores, "obs"));
  }

  function priorities(dims, scores) {
    var list = dims.map(function (d) { return { dim: d, ref: reference(d, scores) }; })
      .filter(function (x) { return x.ref !== null; });
    if (!list.length) return [];

    var byId = {};
    list.forEach(function (x) { byId[x.dim.id] = x; });
    var ordered = [];
    var reasons = {};

    function push(id, reason) {
      if (!byId[id] || reasons[id]) return;
      reasons[id] = reason;
      ordered.push(byId[id]);
    }

    if (byId.FL && byId.FL.ref < 2.5) push("FL", "Regla 1: flujo bajo 2,5. Sin flujo visible y limitado, no se puede medir ninguna otra mejora.");
    ["IN", "CA"].forEach(function (id) {
      if (byId[id] && byId[id].ref < 2) push(id, "Regla 2: riesgo en producción. Reforzar antes de aumentar el ritmo o el equipo.");
    });
    list.slice().sort(function (a, b) { return a.ref - b.ref; }).forEach(function (x) {
      if (x.ref < 4) push(x.dim.id, "Regla 3: puntaje " + fmt(x.ref) + " (" + level(x.ref) + ").");
    });

    return ordered.map(function (x) { return { dim: x.dim, ref: x.ref, reason: reasons[x.dim.id] }; });
  }

  // Cada pregunta ocupa un carácter: equipo * 7 + observado,
  // con 0 = sin respuesta, 1 = N/A, 2..6 = puntajes 1..5.
  function valueCode(v) {
    if (typeof v === "number" && v >= 1 && v <= 5) return v + 1;
    return v === "na" ? 1 : 0;
  }

  function codeValue(c) {
    if (c === 1) return "na";
    return c >= 2 ? c - 1 : undefined;
  }

  function allQuestionIds(dims) {
    var ids = [];
    dims.forEach(function (d) { d.questions.forEach(function (q) { ids.push(q[0]); }); });
    return ids;
  }

  function encodeScores(dims, scores) {
    return allQuestionIds(dims).map(function (id) {
      var s = scores[id] || {};
      return ALPHABET.charAt(valueCode(s.team) * 7 + valueCode(s.obs));
    }).join("");
  }

  function decodeScores(dims, str) {
    var ids = allQuestionIds(dims);
    if (typeof str !== "string" || str.length !== ids.length) return null;
    var scores = {};
    for (var i = 0; i < ids.length; i++) {
      var n = ALPHABET.indexOf(str.charAt(i));
      if (n < 0 || n > 48) return null;
      var team = codeValue(Math.floor(n / 7)), obs = codeValue(n % 7);
      if (team !== undefined || obs !== undefined) {
        scores[ids[i]] = {};
        if (team !== undefined) scores[ids[i]].team = team;
        if (obs !== undefined) scores[ids[i]].obs = obs;
      }
    }
    return scores;
  }

  function buildHash(dims, scores, cell, date) {
    var parts = ["a=" + encodeScores(dims, scores)];
    if (cell) parts.push("c=" + encodeURIComponent(cell));
    if (date) parts.push("d=" + encodeURIComponent(date));
    return parts.join("&");
  }

  // Devuelve null si el texto no trae "a=". Lanza Error si lo trae pero no es válido.
  function parseHash(dims, text) {
    var m = /(?:^|[#&?\s])a=([0-9A-Za-z]+)/.exec(text || "");
    if (!m) return null;
    var scores = decodeScores(dims, m[1]);
    if (!scores) throw new Error("El enlace no corresponde a esta versión del cuestionario.");
    var get = function (key) {
      var r = new RegExp("[#&]" + key + "=([^&\\s]*)").exec(text);
      if (!r) return "";
      try { return decodeURIComponent(r[1]); } catch (e) { return ""; }
    };
    return { scores: scores, cell: get("c"), date: get("d") };
  }

  function parseNum(s) {
    var t = String(s || "").trim().replace(",", ".");
    if (!/^\d+(\.\d+)?$/.test(t)) return null;
    return Number(t);
  }

  // Lee una aplicación anterior: enlace compartido o Markdown exportado.
  // Devuelve { label, values: { PR: { team, obs }, ... } } o null.
  function parsePrevious(dims, text) {
    text = String(text || "");
    var fromLink = parseHash(dims, text);
    if (fromLink) {
      var values = {};
      dims.forEach(function (d) {
        values[d.id] = { team: avg(d, fromLink.scores, "team"), obs: avg(d, fromLink.scores, "obs") };
      });
      return { label: [fromLink.cell, fromLink.date].filter(Boolean).join(" · ") || "Enlace anterior", values: values };
    }

    var byName = {};
    dims.forEach(function (d) { byName[d.name.toLowerCase()] = d; });
    var found = {}, count = 0;
    text.split(/\r?\n/).forEach(function (line) {
      if (!/^\s*\|/.test(line)) return;
      var cells = line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(function (c) { return c.trim(); });
      var dim = byName[(cells[0] || "").toLowerCase()];
      if (!dim || found[dim.id] || cells.length < 3) return;
      found[dim.id] = { team: parseNum(cells[1]), obs: parseNum(cells[2]) };
      count++;
    });
    if (!count) return null;
    var title = /^#\s*Assessment\s*·\s*(.+)$/m.exec(text);
    var label = title ? title[1].replace(/\s*·\s*/g, " · ").trim() : "Aplicación anterior";
    dims.forEach(function (d) { if (!found[d.id]) found[d.id] = { team: null, obs: null }; });
    return { label: label, values: found };
  }

  function evolution(dims, scores, prev) {
    return dims.map(function (d) {
      var before = prev && prev.values[d.id] ? pickRef(prev.values[d.id].team, prev.values[d.id].obs) : null;
      var now = reference(d, scores);
      return { dim: d, before: before, now: now, diff: (before !== null && now !== null) ? round1(now - before) : null };
    });
  }

  function exportMarkdown(dims, scores, cell, date, prev) {
    var lines = ["# Assessment · " + (cell || "[Célula]") + " · " + (date || "[AAAA-MM-DD]"), "",
      "| Dimensión | Autoevaluación | Observado | Brecha | Nivel |", "|---|---|---|---|---|"];
    dims.forEach(function (dim) {
      var t = avg(dim, scores, "team"), o = avg(dim, scores, "obs");
      var gap = (t !== null && o !== null) ? fmt(Math.abs(t - o)) : "—";
      lines.push("| " + dim.name + " | " + fmt(t) + " | " + fmt(o) + " | " + gap + " | " + level(reference(dim, scores)) + " |");
    });
    lines.push("", "## Detalle por pregunta", "", "| ID | Equipo | Observado |", "|---|---|---|");
    var show = function (v) { return typeof v === "number" ? String(v) : (v === "na" ? "N/A" : "—"); };
    dims.forEach(function (dim) {
      dim.questions.forEach(function (q) {
        var s = scores[q[0]] || {};
        lines.push("| " + q[0] + " | " + show(s.team) + " | " + show(s.obs) + " |");
      });
    });
    if (prev) {
      lines.push("", "## Evolución respecto de " + prev.label, "", "| Dimensión | Anterior | Actual | Diferencia |", "|---|---|---|---|");
      evolution(dims, scores, prev).forEach(function (e) {
        lines.push("| " + e.dim.name + " | " + fmt(e.before) + " | " + fmt(e.now) + " | " + fmtDiff(e.diff) + " |");
      });
    }
    lines.push("", "## Orden sugerido de fases", "");
    priorities(dims, scores).forEach(function (p, i) { lines.push((i + 1) + ". " + p.dim.name + " → " + p.dim.phases); });
    lines.push("", "**Prioridades acordadas:** ", "**Próxima aplicación:** ");
    return lines.join("\n");
  }

  function toDims(data) {
    if (!data || !Array.isArray(data.dimensions)) throw new Error("Formato de datos inesperado.");
    return data.dimensions.map(function (d) {
      return {
        id: d.id, name: d.name, phases: d.phases, phaseLinks: d.phaseLinks || [],
        questions: d.questions.map(function (q) { return [q.id, q.text]; })
      };
    });
  }

  var core = {
    fmt: fmt, fmtDiff: fmtDiff, level: level, avg: avg, reference: reference, priorities: priorities,
    encodeScores: encodeScores, decodeScores: decodeScores, buildHash: buildHash, parseHash: parseHash,
    parsePrevious: parsePrevious, evolution: evolution, exportMarkdown: exportMarkdown, toDims: toDims
  };

  if (typeof module === "object" && module.exports) {
    module.exports = core;
    return;
  }

  // ---------------------------------------------------------------------------
  // Interfaz
  // ---------------------------------------------------------------------------

  var DIMENSIONS = [];
  var siteRoot = "";
  var scores = {}; // scores["PR1"] = { team: 3, obs: 2 }
  var prev = null; // aplicación anterior para comparar
  var chart = null;
  var root = null;

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

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function fieldValue(id) { return (document.getElementById(id) || {}).value || ""; }

  // --- Almacenamiento local (opcional: la página funciona si falla) ---------

  function loadStored() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function save() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        scores: scores, cell: fieldValue("aa-cell"), date: fieldValue("aa-date"), prev: prev
      }));
    } catch (e) { /* sin almacenamiento disponible: se sigue trabajando en memoria */ }
  }

  function clearStored() {
    try { window.localStorage.removeItem(STORAGE_KEY); } catch (e) { /* nada */ }
  }

  function sanitizeScores(obj) {
    var clean = {};
    allQuestionIds(DIMENSIONS).forEach(function (id) {
      var s = obj && obj[id];
      if (!s) return;
      var out = {};
      SOURCES.forEach(function (src) {
        var v = s[src.key];
        if ((typeof v === "number" && v >= 1 && v <= 5 && v % 1 === 0) || v === "na") out[src.key] = v;
      });
      if (Object.keys(out).length) clean[id] = out;
    });
    return clean;
  }

  // --- Render ----------------------------------------------------------------

  function buildSelect(qid, source) {
    var sel = el("select", { "aria-label": qid + " · " + source.label });
    sel.appendChild(el("option", { value: "", text: "—" }));
    sel.appendChild(el("option", { value: "na", text: "N/A" }));
    for (var i = 1; i <= 5; i++) sel.appendChild(el("option", { value: String(i), text: String(i) }));
    var current = scores[qid] && scores[qid][source.key];
    if (current !== undefined) sel.value = String(current);
    sel.addEventListener("change", function () {
      scores[qid] = scores[qid] || {};
      if (sel.value === "") delete scores[qid][source.key];
      else scores[qid][source.key] = sel.value === "na" ? "na" : Number(sel.value);
      save();
      update();
    });
    return sel;
  }

  function render(state) {
    root.innerHTML = "";

    var cellInput = el("input", { type: "text", placeholder: "Ej.: Célula Pagos", id: "aa-cell", autocomplete: "off" });
    var dateInput = el("input", { type: "date", id: "aa-date" });
    cellInput.value = state.cell || "";
    dateInput.value = state.date || new Date().toISOString().slice(0, 10);
    cellInput.addEventListener("input", save);
    dateInput.addEventListener("change", save);
    root.appendChild(el("div", { class: "aa-meta" }, [
      el("label", { for: "aa-cell" }, ["Célula", cellInput]),
      el("label", { for: "aa-date" }, ["Fecha", dateInput])
    ]));

    DIMENSIONS.forEach(function (dim, idx) {
      var scoreSpan = el("span", { class: "aa-dim-score", id: "aa-score-" + dim.id, text: "Sin datos" });
      var summary = el("summary", {}, [el("span", { text: dim.name }), scoreSpan]);
      var details = el("details", { class: "aa-dim" }, [summary]);
      if (idx === 0) details.open = true;

      details.appendChild(el("div", { class: "aa-colhead", "aria-hidden": "true" }, [
        el("span", { text: "Pregunta" }),
        el("span", { text: "Equipo" }),
        el("span", { text: "Observado" })
      ]));

      dim.questions.forEach(function (q) {
        var row = el("div", { class: "aa-q" }, [
          el("div", { class: "aa-text" }, [el("span", { class: "aa-id", text: q[0] }), q[1]])
        ]);
        SOURCES.forEach(function (s) {
          row.appendChild(el("div", { class: "aa-sel-wrap", "data-label": s.label }, [buildSelect(q[0], s)]));
        });
        row.appendChild(el("div", { class: "aa-gap-flag", id: "aa-flag-" + q[0] }));
        details.appendChild(row);
      });
      root.appendChild(details);
    });

    root.appendChild(el("div", { class: "aa-results" }, [
      el("h2", { text: "Resultados", id: "resultados" }),
      el("div", { class: "aa-chart" }, [el("canvas", { id: "aa-radar", role: "img", "aria-label": "Radar de madurez por dimensión. Los mismos valores están en la tabla siguiente." })]),
      el("div", { id: "aa-table" }),
      el("h3", { text: "Orden sugerido de fases" }),
      el("div", { id: "aa-priorities" })
    ]));

    root.appendChild(renderCompare());

    var status = el("p", { class: "aa-status", id: "aa-status", role: "status", "aria-live": "polite" });
    var copyBtn = el("button", { type: "button", text: "Copiar resultados" });
    var shareBtn = el("button", { type: "button", class: "aa-secondary", text: "Compartir enlace" });
    var clearBtn = el("button", { type: "button", class: "aa-secondary", text: "Limpiar" });
    copyBtn.addEventListener("click", function () { copyResults(); });
    shareBtn.addEventListener("click", function () { shareLink(); });
    clearBtn.addEventListener("click", function () {
      if (!window.confirm("¿Borrar los puntajes, la célula y la comparación guardados en este navegador?")) return;
      scores = {};
      prev = null;
      clearStored();
      render({});
      update();
      setStatus("Calculadora limpia.");
    });
    root.appendChild(el("div", { class: "aa-actions" }, [copyBtn, shareBtn, clearBtn]));
    root.appendChild(el("div", { id: "aa-share-out" }));
    root.appendChild(status);

    buildChart();
  }

  function renderCompare() {
    var ta = el("textarea", { id: "aa-prev-input", rows: "6", spellcheck: "false",
      placeholder: "# Assessment · Célula Pagos · 2026-04-15\n\n| Dimensión | Autoevaluación | Observado | ...\n\no un enlace que contenga #a=..." });
    var msg = el("p", { class: "aa-status", id: "aa-compare-msg", role: "status", "aria-live": "polite" });
    var cmpBtn = el("button", { type: "button", text: "Comparar" });
    var rmBtn = el("button", { type: "button", class: "aa-secondary", text: "Quitar comparación" });

    cmpBtn.addEventListener("click", function () {
      var parsed;
      try { parsed = parsePrevious(DIMENSIONS, ta.value); }
      catch (e) { msg.textContent = e.message; return; }
      if (!parsed) {
        msg.textContent = "No se reconoció el texto. Pega la tabla exportada por la calculadora o un enlace compartido.";
        return;
      }
      prev = parsed;
      ta.value = "";
      save();
      update();
      msg.textContent = "Comparando con: " + prev.label + ".";
    });
    rmBtn.addEventListener("click", function () {
      prev = null;
      save();
      update();
      msg.textContent = "Comparación quitada.";
    });

    var details = el("details", { class: "aa-compare", id: "aa-compare" }, [
      el("summary", { text: "Comparar con una aplicación anterior" }),
      el("p", { text: "Pega el Markdown que exportaste en una aplicación anterior o el enlace que compartiste. Se compara el puntaje de referencia de cada dimensión: lo observado o, si falta, la autoevaluación." }),
      el("label", { for: "aa-prev-input", class: "aa-block-label", text: "Aplicación anterior" }),
      ta,
      el("div", { class: "aa-actions" }, [cmpBtn, rmBtn]),
      msg,
      el("div", { id: "aa-evolution" })
    ]);
    if (prev) details.open = true;
    return details;
  }

  function themeColor(varName, fallback) {
    var v = getComputedStyle(document.body).getPropertyValue(varName).trim();
    return v || fallback;
  }

  function buildChart() {
    var canvas = document.getElementById("aa-radar");
    if (!canvas || typeof window.Chart === "undefined") {
      if (canvas) canvas.replaceWith(el("p", { text: "No se pudo cargar el gráfico. La tabla de resultados sigue disponible." }));
      return;
    }
    if (chart) chart.destroy();
    var fg = themeColor("--md-default-fg-color", "#333");
    var fgLight = themeColor("--md-default-fg-color--light", "#777");
    var grid = themeColor("--md-default-fg-color--lightest", "rgba(0,0,0,.1)");
    var primary = themeColor("--md-primary-fg-color", "#3f51b5");
    var accent = themeColor("--md-accent-fg-color", "#00bfa5");
    chart = new window.Chart(canvas, {
      type: "radar",
      data: {
        labels: DIMENSIONS.map(function (d) { return d.name; }),
        datasets: [
          { label: "Equipo", data: [], borderColor: accent, backgroundColor: "transparent", borderDash: [6, 4], pointBackgroundColor: accent, spanGaps: true },
          { label: "Observado", data: [], borderColor: primary, backgroundColor: /^#[0-9a-f]{6}$/i.test(primary) ? primary + "33" : "transparent", pointBackgroundColor: primary, spanGaps: true },
          { label: "Anterior", data: [], borderColor: fgLight, backgroundColor: "transparent", borderDash: [2, 3], borderWidth: 1.5, pointStyle: "rectRot", pointBackgroundColor: fgLight, spanGaps: true }
        ]
      },
      options: {
        responsive: true,
        locale: "es",
        animation: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? false : { duration: 300 },
        scales: { r: {
          min: 0, max: 5,
          ticks: { stepSize: 1, color: fg, backdropColor: "transparent" },
          grid: { color: grid }, angleLines: { color: grid },
          pointLabels: { color: fg, font: { size: 12 } }
        }},
        plugins: { legend: { labels: { color: fg, filter: function (item) { return item.datasetIndex < 2 || !!prev; } } } }
      }
    });
  }

  function phaseHtml(dim) {
    if (!dim.phaseLinks.length) return esc(dim.phases);
    // Reemplaza cada texto enlazado dentro de la frase original por su enlace.
    var html = esc(dim.phases);
    dim.phaseLinks.forEach(function (l) {
      html = html.replace(esc(l.text), '<a href="' + esc(siteRoot + l.url) + '">' + esc(l.text) + "</a>");
    });
    return html;
  }

  function update() {
    var team = [], obs = [];

    DIMENSIONS.forEach(function (dim) {
      var t = avg(dim, scores, "team"), o = avg(dim, scores, "obs");
      team.push(t);
      obs.push(o);
      var span = document.getElementById("aa-score-" + dim.id);
      if (span) span.textContent = (t === null && o === null) ? "Sin datos" : "Equipo " + fmt(t) + " · Observado " + fmt(o);

      dim.questions.forEach(function (q) {
        var s = scores[q[0]] || {};
        var flag = document.getElementById("aa-flag-" + q[0]);
        if (!flag) return;
        flag.textContent = (typeof s.team === "number" && typeof s.obs === "number" && Math.abs(s.team - s.obs) > 1)
          ? "Brecha de " + Math.abs(s.team - s.obs) + " puntos: conversarla en el taller de brechas."
          : "";
      });
    });

    var evo = evolution(DIMENSIONS, scores, prev);

    if (chart) {
      chart.data.datasets[0].data = team;
      chart.data.datasets[1].data = obs;
      chart.data.datasets[2].data = prev ? evo.map(function (e) { return e.before; }) : [];
      chart.data.datasets[2].label = prev ? "Anterior (" + prev.label + ")" : "Anterior";
      chart.update();
    }

    var table = document.getElementById("aa-table");
    if (table) {
      var rows = DIMENSIONS.map(function (dim, i) {
        var t = team[i], o = obs[i];
        var gap = (t !== null && o !== null) ? Math.abs(t - o) : null;
        return "<tr><td>" + esc(dim.name) + "</td><td>" + fmt(t) + "</td><td>" + fmt(o) + "</td><td>" +
          (gap === null ? "—" : fmt(gap) + (gap > 1 ? " ⚠️" : "")) + "</td><td>" + level(reference(dim, scores)) + "</td></tr>";
      }).join("");
      table.innerHTML = '<div class="md-typeset__scrollwrap"><div class="md-typeset__table"><table><thead><tr><th>Dimensión</th><th>Equipo</th><th>Observado</th><th>Brecha</th><th>Nivel</th></tr></thead><tbody>' + rows + "</tbody></table></div></div>";
    }

    var pr = document.getElementById("aa-priorities");
    if (pr) {
      var list = priorities(DIMENSIONS, scores);
      if (!list.length) {
        pr.innerHTML = "<p>Completa al menos una dimensión para ver el orden sugerido.</p>";
      } else {
        var items = list.map(function (p, i) {
          var tag = i < 2 ? " <strong>(foco ahora)</strong>" : "";
          return "<li><strong>" + esc(p.dim.name) + "</strong> → " + phaseHtml(p.dim) + tag + "<br><small>" + esc(p.reason) + "</small></li>";
        }).join("");
        pr.innerHTML = '<ol class="aa-priorities">' + items + "</ol><p><small>Regla 4: máximo dos frentes a la vez. Las dimensiones con 4 o más se mantienen sin intervención.</small></p>";
      }
    }

    var evoBox = document.getElementById("aa-evolution");
    if (evoBox) {
      if (!prev) {
        evoBox.innerHTML = "";
      } else {
        var evoRows = evo.map(function (e) {
          var cls = e.diff === null ? "" : e.diff > 0 ? "aa-up" : e.diff < 0 ? "aa-down" : "";
          return "<tr><td>" + esc(e.dim.name) + "</td><td>" + fmt(e.before) + "</td><td>" + fmt(e.now) + '</td><td class="' + cls + '">' + fmtDiff(e.diff) + "</td></tr>";
        }).join("");
        evoBox.innerHTML = "<h3>Evolución por dimensión</h3><p><small>Anterior: " + esc(prev.label) + "</small></p>" +
          '<div class="md-typeset__scrollwrap"><div class="md-typeset__table"><table><thead><tr><th>Dimensión</th><th>Anterior</th><th>Actual</th><th>Diferencia</th></tr></thead><tbody>' + evoRows + "</tbody></table></div></div>";
      }
    }
  }

  // --- Acciones --------------------------------------------------------------

  var statusTimer = null;
  function setStatus(msg) {
    var status = document.getElementById("aa-status");
    if (!status) return;
    status.textContent = msg;
    clearTimeout(statusTimer);
    statusTimer = setTimeout(function () { status.textContent = ""; }, 6000);
  }

  function copyText(text, okMsg, onFail) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { setStatus(okMsg); }, onFail);
    } else {
      onFail();
    }
  }

  function copyResults() {
    var text = exportMarkdown(DIMENSIONS, scores, fieldValue("aa-cell"), fieldValue("aa-date"), prev);
    copyText(text, "Resultados copiados en formato Markdown.", function () {
      var out = document.getElementById("aa-share-out");
      out.innerHTML = "";
      var ta = el("textarea", { id: "aa-export", rows: "14", "aria-label": "Resultados en Markdown", class: "aa-export" });
      ta.value = text;
      out.appendChild(ta);
      ta.select();
      setStatus("Selecciona el texto y cópialo manualmente.");
    });
  }

  function shareLink() {
    var url = location.href.split("#")[0] + "#" + buildHash(DIMENSIONS, scores, fieldValue("aa-cell"), fieldValue("aa-date"));
    var out = document.getElementById("aa-share-out");
    out.innerHTML = "";
    var input = el("input", { type: "text", readonly: "readonly", id: "aa-share-url", class: "aa-share-url" });
    input.value = url;
    out.appendChild(el("label", { for: "aa-share-url", class: "aa-block-label", text: "Enlace con los puntajes" }));
    out.appendChild(input);
    copyText(url, "Enlace copiado. Contiene los puntajes: compártelo solo con quien corresponda.", function () {
      input.select();
      setStatus("Selecciona el enlace y cópialo manualmente.");
    });
  }

  // --- Arranque --------------------------------------------------------------

  function dataUrl() {
    var custom = root.getAttribute("data-src");
    var base = SCRIPT_SRC || location.href;
    return custom ? new URL(custom, location.href).href : new URL("../data/assessment.json", base).href;
  }

  function start(data, jsonUrl) {
    DIMENSIONS = toDims(data);
    siteRoot = new URL("../../", jsonUrl).href;

    var stored = loadStored() || {};
    var state = { cell: stored.cell, date: stored.date };
    scores = sanitizeScores(stored.scores);
    prev = stored.prev && stored.prev.values ? stored.prev : null;

    var fromHash = null, hashError = null;
    try { fromHash = parseHash(DIMENSIONS, location.hash); }
    catch (e) { hashError = e.message; }
    if (fromHash) {
      scores = fromHash.scores;
      state = { cell: fromHash.cell, date: fromHash.date };
    }

    render(state);
    update();

    if (fromHash) {
      save();
      try { history.replaceState(null, "", location.pathname + location.search); } catch (e) { /* nada */ }
      setStatus("Se cargaron los puntajes del enlace compartido.");
    } else if (hashError) {
      setStatus(hashError);
    }

    // Redibujar el radar al cambiar entre modo claro y oscuro
    new MutationObserver(function () { buildChart(); update(); })
      .observe(document.body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });
  }

  function init() {
    root = document.getElementById("assessment-app");
    if (!root || root.getAttribute("data-aa-ready")) return; // evita doble carga
    root.setAttribute("data-aa-ready", "1");
    var url = dataUrl();
    fetch(url)
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then(function (data) { start(data, url); })
      .catch(function (e) {
        root.innerHTML = "";
        root.appendChild(el("p", { role: "alert", text: "No se pudo cargar el cuestionario (" + e.message + "). Usa la tabla de la página del assessment." }));
      });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
