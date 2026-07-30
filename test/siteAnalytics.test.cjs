const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

async function cargarAnalytics() {
  const source = fs.readFileSync(
    path.join(__dirname, "../lib/siteAnalytics.js"),
    "utf8"
  );
  const moduleUrl = `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`;
  return import(moduleUrl);
}

function prepararVentana() {
  const eventos = [];
  global.CustomEvent = class CustomEvent {
    constructor(type, init) {
      this.type = type;
      this.detail = init.detail;
    }
  };
  global.window = {
    dataLayer: [],
    gtag: (...args) => eventos.push(args),
    dispatchEvent: () => {},
  };
  return eventos;
}

test("envía errores de formulario sin PII y limpia la ruta", async () => {
  const { registrarEventoSitio } = await cargarAnalytics();
  const eventos = prepararVentana();

  registrarEventoSitio("site_form_error", {
    contexto: "contacto",
    tipo_formulario: "contacto_general",
    ruta: "/contacto?email=persona@example.com#formulario",
    estado: "respuesta_no_exitosa",
    email: "persona@example.com",
    telefono: "2221234567",
  });

  assert.equal(eventos.length, 1);
  assert.equal(eventos[0][0], "event");
  assert.equal(eventos[0][1], "site_form_error");
  assert.deepEqual(eventos[0][2], {
    contexto: "contacto",
    tipo_formulario: "contacto_general",
    ruta: "/contacto",
    estado: "respuesta_no_exitosa",
  });
});

test("ignora eventos no autorizados", async () => {
  const { registrarEventoSitio } = await cargarAnalytics();
  const eventos = prepararVentana();

  registrarEventoSitio("evento_inventado", {
    contexto: "contacto",
  });

  assert.equal(eventos.length, 0);
});

