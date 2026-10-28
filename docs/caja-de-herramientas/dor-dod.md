# Definition of Ready y Definition of Done

**Fase:** 2 y 4 · Acordadas por el equipo, revisadas en retrospectiva cada 1–2 meses.

## Definition of Ready (DoR)

Un ítem puede entrar en desarrollo cuando:

- [ ] Está conectado a un objetivo u outcome del roadmap.
- [ ] Tiene descripción en formato *Como [usuario] quiero [acción] para [beneficio]*.
- [ ] Tiene criterios de aceptación en formato **Given / When / Then**, revisados por PO, Dev y QA (*three amigos*).
- [ ] Es lo suficientemente pequeño para completarse en 1 a 3 días.
- [ ] Dependencias identificadas y resueltas (o con fecha).
- [ ] Diseño o UX disponible si aplica.
- [ ] Se sabe cómo medir su uso o efecto (si aplica).

!!! warning "La DoR no es un contrato"
    Úsala como guía de conversación, no como barrera burocrática.

## Definition of Done (DoD)

Un ítem está terminado cuando:

- [ ] Código revisado por al menos una persona (pull request aprobado).
- [ ] Pruebas unitarias y de integración automatizadas y en verde.
- [ ] Análisis estático y de seguridad sin hallazgos críticos (ver [seguridad en el flujo](seguridad-en-el-flujo.md)).
- [ ] Código generado con IA revisado y probado con el mismo estándar que el resto (ver [IA en la célula](../fases/transversal-ia-en-la-celula.md)).
- [ ] Criterios de aceptación verificados (automatizados cuando sea posible).
- [ ] Prueba exploratoria realizada.
- [ ] Documentación técnica actualizada (README, ADR, API).
- [ ] **Desplegado en producción** (detrás de feature flag si aplica).
- [ ] Monitoreo y alertas configurados para lo nuevo.
- [ ] PO validó el comportamiento.

## Ejemplo de criterio de aceptación

```gherkin
Escenario: Cliente sube documento válido
  Dado que el cliente está en el paso "Documentos" de la solicitud
  Cuando sube un PDF de menos de 5 MB
  Entonces el sistema muestra el documento como "Validado"
  Y habilita el botón "Continuar"
```
