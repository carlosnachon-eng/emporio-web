const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const pageSource = fs.readFileSync(path.join(root, "pages/bolsa-de-trabajo.js"), "utf8");
const endpointSource = fs.readFileSync(path.join(root, "pages/api/postulacion.js"), "utf8");

const retiredVacancyMarkers = [
  "Coordinadora Administrativa Inmobiliaria",
  "coordinadora-administrativa",
  "coordinación administrativa inmobiliaria",
];

test("la bolsa pública conserva la vacante de asesor inmobiliario", () => {
  assert.match(pageSource, /Asesor Inmobiliario de Ventas/);
  assert.match(pageSource, /#asesor-inmobiliario/);
  assert.match(pageSource, /"@type": "JobPosting"/);
});

test("la vacante retirada no aparece en interfaz ni datos estructurados", () => {
  for (const marker of retiredVacancyMarkers) {
    assert.doesNotMatch(pageSource, new RegExp(marker, "i"));
  }
});

test("el endpoint acepta únicamente postulaciones para la vacante vigente", () => {
  assert.match(endpointSource, /VACANTES_PERMITIDAS[\s\S]*Asesor Inmobiliario de Ventas/);
  assert.doesNotMatch(endpointSource, /Coordinadora Administrativa Inmobiliaria/);
});
