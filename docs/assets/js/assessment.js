(function () {
  "use strict";

  // Fuente de verdad del contenido: docs/caja-de-herramientas/assessment-madurez.md
  // Si cambias una pregunta allí, actualiza su texto corto aquí.
  var DIMENSIONS = [
    { id: "PR", name: "Producto", phases: "Fase 1 · Descubrimiento", questions: [
      ["PR1", "¿El backlog está conectado con objetivos de negocio?"],
      ["PR2", "¿Se mide el impacto de lo que se entrega?"],
      ["PR3", "¿Se validan hipótesis antes de construir?"],
      ["PR4", "¿Cómo es el roadmap?"],
      ["PR5", "¿El equipo tiene contacto con usuarios reales?"]]},
    { id: "FL", name: "Flujo", phases: "Fase 3 · Sistema de trabajo y Fase 5 · Medición", questions: [
      ["FL1", "¿El tablero refleja el flujo real del trabajo?"],
      ["FL2", "¿Se limita el trabajo en curso?"],
      ["FL3", "¿Qué tan predecible es la entrega?"],
      ["FL4", "¿Cómo se gestiona el trabajo no planificado?"],
      ["FL5", "¿Cómo se gestionan bloqueos y dependencias?"]]},
    { id: "IN", name: "Ingeniería", phases: "Fase 2 · Fundaciones técnicas", questions: [
      ["IN1", "¿Existe integración continua?"],
      ["IN2", "¿Cómo se despliega a producción?"],
      ["IN3", "¿Cómo son los ambientes?"],
      ["IN4", "¿La arquitectura está documentada?"],
      ["IN5", "¿Cómo se detectan los problemas en producción?"]]},
    { id: "CA", name: "Calidad", phases: "Fase 2 · Fundaciones técnicas y Fase 4 · Entrega continua", questions: [
      ["CA1", "¿Cuánto se automatizan las pruebas?"],
      ["CA2", "¿Cuál es el rol de QA?"],
      ["CA3", "¿Cómo evolucionan los defectos escapados a producción?"],
      ["CA4", "¿Existe y se cumple una Definition of Done?"],
      ["CA5", "¿Cómo se gestionan los incidentes?"]]},
    { id: "EQ", name: "Equipo", phases: "Fase 0 · Onboarding y Fase 6 · Mejora", questions: [
      ["EQ1", "¿El equipo es estable y dedicado?"],
      ["EQ2", "¿Cuánto se autoorganiza el equipo?"],
      ["EQ3", "¿Hay seguridad psicológica?"],
      ["EQ4", "¿Funciona la mejora continua?"],
      ["EQ5", "¿Cómo se distribuye el conocimiento?"]]},
    { id: "NE", name: "Relación con negocio", phases: "Fase 1 · Descubrimiento y Gobierno con proveedores", questions: [
      ["NE1", "¿El Product Owner tiene autoridad real?"],
      ["NE2", "¿El patrocinador está involucrado?"],
      ["NE3", "¿Cómo son las revisiones con negocio?"],
      ["NE4", "¿Cómo planifica el negocio con el equipo?"],
      ["NE5", "¿El modelo de gobierno favorece el valor?"]]}
  ];

  var SOURCES = [
    { key: "team", label: "Equipo" },
    { key: "obs", label: "Observado" }
  ];

  var scores = {}; // scores["PR1"] = { team: 3, obs: 2 }
  var chart = null;

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") node.textContent = attrs[k];
      else if (k === "class") node.className = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function fmt(n) {
    return n === null ? "—" : n.toFixed(1).replace(".", ",");
  }

  function level(n) {
    if (n === null) return "Sin datos";
    if (n < 2) return "Inicial";
    if (n < 3) return "Repetible";
    if (n < 4) return "Definido";
    if (n < 4.5) return "Gestionado";
    return "Optimizado";
  }

  function avg(dim, source) {
    var vals = dim.questions
      .map(function (q) { return scores[q[0]] && scores[q[0]][source]; })
      .filter(function (v) { return typeof v === "number"; });
    if (!vals.length) return null;
    var sum = vals.reduce(function (a, b) { return a + b; }, 0);
    return Math.round((sum / vals.length) * 10) / 10;
  }

  // Puntaje de referencia: lo observado; si no hay, la autoevaluación.
  function reference(dim) {
    var o = avg(dim, "obs");
    return o !== null ? o : avg(dim, "team");
  }

  function buildSelect(qid, source) {
    var sel = el("select", { "aria-label": qid + " · " + source.label });
    sel.appendChild(el("option", { value: "", text: "—" }));
    sel.appendChild(el("option", { value: "na", text: "N/A" }));
    for (var i = 1; i <= 5; i++) sel.appendChild(el("option", { value: String(i), text: String(i) }));
    sel.addEventListener("change", function () {
      scores[qid] = scores[qid] || {};
      scores[qid][source.key] = sel.value === "" || sel.value === "na" ? sel.value || undefined : Number(sel.value);
      update();
    });
    return sel;
  }

  function render(root) {
    root.innerHTML = "";

    var cellInput = el("input", { type: "text", placeholder: "Ej.: Célula Pagos", id: "aa-cell" });
    var dateInput = el("input", { type: "date", id: "aa-date" });
    dateInput.value = new Date().toISOString().slice(0, 10);
    root.appendChild(el("div", { class: "aa-meta" }, [
      el("label", { for: "aa-cell" }, [document.createTextNode("Célula"), cellInput]),
      el("label", { for: "aa-date" }, [document.createTextNode("Fecha"), dateInput])
    ]));

    DIMENSIONS.forEach(function (dim, idx) {
      var scoreSpan = el("span", { class: "aa-dim-score", id: "aa-score-" + dim.id, text: "Sin datos" });
      var summary = el("summary", {}, [el("span", { text: dim.name }), scoreSpan]);
      var details = el("details", { class: "aa-dim" }, [summary]);
      if (idx === 0) details.open = true;

      details.appendChild(el("div", { class: "aa-colhead" }, [
        el("span", { text: "Pregunta" }),
        el("span", { text: "Equipo" }),
        el("span", { text: "Observado" })
      ]));

      dim.questions.forEach(function (q) {
        var row = el("div", { class: "aa-q" }, [
          el("div", { class: "aa-text" }, [
            el("span", { class: "aa-id", text: q[0] }),
            document.createTextNode(q[1])
          ])
        ]);
        SOURCES.forEach(function (s) {
          row.appendChild(el("div", { class: "aa-sel-wrap", "data-label": s.label }, [buildSelect(q[0], s)]));
        });
        row.appendChild(el("div", { class: "aa-gap-flag", id: "aa-flag-" + q[0] }));
        details.appendChild(row);
      });
      root.appendChild(details);
    });

    var results = el("div", { class: "aa-results" }, [
      el("h2", { text: "Resultados", id: "resultados" }),
      el("div", { class: "aa-chart" }, [el("canvas", { id: "aa-radar", role: "img", "aria-label": "Radar de madurez por dimensión" })]),
      el("div", { id: "aa-table" }),
      el("h3", { text: "Orden sugerido de fases" }),
      el("div", { id: "aa-priorities" })
    ]);
    root.appendChild(results);

    var status = el("span", { class: "aa-status", role: "status" });
    var copyBtn = el("button", { type: "button", text: "Copiar resultados" });
    var resetBtn = el("button", { type: "button", class: "aa-secondary", text: "Borrar puntajes" });
    copyBtn.addEventListener("click", function () { copyResults(status); });
    resetBtn.addEventListener("click", function () {
      if (!window.confirm("¿Borrar todos los puntajes?")) return;
      scores = {};
      render(root);
      update();
    });
    root.appendChild(el("div", { class: "aa-actions" }, [copyBtn, resetBtn, status]));

    buildChart();
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
    var grid = themeColor("--md-default-fg-color--lightest", "rgba(0,0,0,.1)");
    var primary = themeColor("--md-primary-fg-color", "#3f51b5");
    var accent = themeColor("--md-accent-fg-color", "#00bfa5");
    chart = new window.Chart(canvas, {
      type: "radar",
      data: {
        labels: DIMENSIONS.map(function (d) { return d.name; }),
        datasets: [
          { label: "Equipo", data: [], borderColor: accent, backgroundColor: "transparent", borderDash: [6, 4], pointBackgroundColor: accent, spanGaps: true },
          { label: "Observado", data: [], borderColor: primary, backgroundColor: /^#[0-9a-f]{6}$/i.test(primary) ? primary + "33" : "transparent", pointBackgroundColor: primary, spanGaps: true }
        ]
      },
      options: {
        responsive: true,
        animation: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? false : { duration: 300 },
        scales: { r: {
          min: 0, max: 5,
          ticks: { stepSize: 1, color: fg, backdropColor: "transparent" },
          grid: { color: grid }, angleLines: { color: grid },
          pointLabels: { color: fg, font: { size: 12 } }
        }},
        plugins: { legend: { labels: { color: fg } } }
      }
    });
  }

  function priorities() {
    var dims = DIMENSIONS.map(function (d) { return { dim: d, ref: reference(d) }; })
      .filter(function (x) { return x.ref !== null; });
    if (!dims.length) return [];

    var byId = {};
    dims.forEach(function (x) { byId[x.dim.id] = x; });
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
    dims.slice().sort(function (a, b) { return a.ref - b.ref; }).forEach(function (x) {
      if (x.ref < 4) push(x.dim.id, "Regla 3: puntaje " + fmt(x.ref) + " (" + level(x.ref) + ").");
    });

    return ordered.map(function (x) { return { dim: x.dim, ref: x.ref, reason: reasons[x.dim.id] }; });
  }

  function update() {
    var labelsTeam = [], labelsObs = [];

    DIMENSIONS.forEach(function (dim) {
      var t = avg(dim, "team"), o = avg(dim, "obs");
      labelsTeam.push(t);
      labelsObs.push(o);
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

    if (chart) {
      chart.data.datasets[0].data = labelsTeam;
      chart.data.datasets[1].data = labelsObs;
      chart.update();
    }

    var table = document.getElementById("aa-table");
    if (table) {
      var rows = DIMENSIONS.map(function (dim, i) {
        var t = labelsTeam[i], o = labelsObs[i];
        var gap = (t !== null && o !== null) ? Math.abs(t - o) : null;
        return "<tr><td>" + dim.name + "</td><td>" + fmt(t) + "</td><td>" + fmt(o) + "</td><td>" +
          (gap === null ? "—" : fmt(gap) + (gap > 1 ? " ⚠️" : "")) + "</td><td>" + level(reference(dim)) + "</td></tr>";
      }).join("");
      table.innerHTML = '<div class="md-typeset__scrollwrap"><div class="md-typeset__table"><table><thead><tr><th>Dimensión</th><th>Equipo</th><th>Observado</th><th>Brecha</th><th>Nivel</th></tr></thead><tbody>' + rows + "</tbody></table></div></div>";
    }

    var pr = document.getElementById("aa-priorities");
    if (pr) {
      var list = priorities();
      if (!list.length) {
        pr.innerHTML = "<p>Completa al menos una dimensión para ver el orden sugerido.</p>";
      } else {
        var items = list.map(function (p, i) {
          var tag = i < 2 ? " <strong>(foco ahora)</strong>" : "";
          return "<li><strong>" + p.dim.name + "</strong> → " + p.dim.phases + tag + "<br><small>" + p.reason + "</small></li>";
        }).join("");
        pr.innerHTML = '<ol class="aa-priorities">' + items + "</ol><p><small>Regla 4: máximo dos frentes a la vez. Las dimensiones con 4 o más se mantienen sin intervención.</small></p>";
      }
    }
  }

  function exportMarkdown() {
    var cell = (document.getElementById("aa-cell") || {}).value || "[Célula]";
    var date = (document.getElementById("aa-date") || {}).value || "[AAAA-MM-DD]";
    var lines = ["# Assessment · " + cell + " · " + date, "",
      "| Dimensión | Autoevaluación | Observado | Brecha | Nivel |", "|---|---|---|---|---|"];
    DIMENSIONS.forEach(function (dim) {
      var t = avg(dim, "team"), o = avg(dim, "obs");
      var gap = (t !== null && o !== null) ? fmt(Math.abs(t - o)) : "—";
      lines.push("| " + dim.name + " | " + fmt(t) + " | " + fmt(o) + " | " + gap + " | " + level(reference(dim)) + " |");
    });
    lines.push("", "## Detalle por pregunta", "", "| ID | Equipo | Observado |", "|---|---|---|");
    DIMENSIONS.forEach(function (dim) {
      dim.questions.forEach(function (q) {
        var s = scores[q[0]] || {};
        var show = function (v) { return typeof v === "number" ? String(v) : (v === "na" ? "N/A" : "—"); };
        lines.push("| " + q[0] + " | " + show(s.team) + " | " + show(s.obs) + " |");
      });
    });
    lines.push("", "## Orden sugerido de fases", "");
    priorities().forEach(function (p, i) { lines.push((i + 1) + ". " + p.dim.name + " → " + p.dim.phases); });
    lines.push("", "**Prioridades acordadas:** ", "**Próxima aplicación:** ");
    return lines.join("\n");
  }

  function copyResults(status) {
    var text = exportMarkdown();
    function done(msg) { status.textContent = msg; setTimeout(function () { status.textContent = ""; }, 4000); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () { done("Resultados copiados en formato Markdown."); },
        function () { fallback(text); done("Selecciona el texto y cópialo manualmente."); });
    } else {
      fallback(text);
      done("Selecciona el texto y cópialo manualmente.");
    }
  }

  function fallback(text) {
    var existing = document.getElementById("aa-export");
    if (existing) existing.remove();
    var ta = el("textarea", { id: "aa-export", rows: "14", style: "width:100%;margin-top:1rem;font-family:var(--md-code-font-family);font-size:.75rem" });
    ta.value = text;
    document.getElementById("assessment-app").appendChild(ta);
    ta.select();
  }

  function init() {
    var root = document.getElementById("assessment-app");
    if (!root) return;
    render(root);
    update();
    // Redibujar el radar al cambiar entre modo claro y oscuro
    new MutationObserver(function () { buildChart(); update(); })
      .observe(document.body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
