const test = require("node:test");
const assert = require("node:assert/strict");
const {
  PREGUNTAS_SALUD,
  calcularComplejidad,
  calcularHonorarios,
  calcularSalud,
  calcularPrioridadLead,
} = require("../lib/condominiosMarketing.cjs");
const { crearReporteCondominal } = require("../lib/condominiosPdf.cjs");
const { PDFDocument } = require("pdf-lib");

const perfilBase = {
  unidades: 60,
  tipo: "vertical",
  etapa: "operando",
  amenidades: ["caseta", "elevadores"],
  proveedores: 5,
  personal: "supervision",
  administracionActual: "empresa",
  problema: "transparencia",
  morosidad: "media",
  documentacion: "parcial",
  rol: "presidente",
  comite: "si",
  plazo: "0-30",
};

test("calcula un rango mensual coherente para el segmento inicial", () => {
  const complejidad = calcularComplejidad(perfilBase);
  const honorarios = calcularHonorarios(perfilBase, complejidad);

  assert.ok(complejidad.puntaje > 0 && complejidad.puntaje <= 100);
  assert.ok(honorarios.minimo >= 16000);
  assert.ok(honorarios.maximo > honorarios.minimo);
  assert.match(honorarios.nota, /No constituye una cotización/);
});

test("clasifica la salud usando las quince respuestas", () => {
  const positivas = Object.fromEntries(PREGUNTAS_SALUD.map(({ id }) => [id, 2]));
  const negativas = Object.fromEntries(PREGUNTAS_SALUD.map(({ id }) => [id, 0]));

  assert.equal(calcularSalud(positivas).nivel.id, "solido");
  assert.equal(calcularSalud(negativas).nivel.id, "riesgo");
  assert.equal(calcularSalud(negativas).riesgoCritico, true);
});

test("la prioridad comercial no altera el resultado público", () => {
  const complejidad = calcularComplejidad(perfilBase);
  const salud = calcularSalud(
    Object.fromEntries(PREGUNTAS_SALUD.map(({ id }, index) => [id, index % 2]))
  );
  const prioridad = calcularPrioridadLead(perfilBase, complejidad, salud, {
    municipio: "San Andrés Cholula",
    consentimiento: true,
  });

  assert.match(prioridad.clasificacion, /^[A-D]$/);
  assert.ok(prioridad.puntaje >= 0 && prioridad.puntaje <= 100);
  assert.ok(prioridad.explicacion.length > 20);
});

test("genera un Reporte Ejecutivo de cinco páginas", async () => {
  const respuestas = Object.fromEntries(PREGUNTAS_SALUD.map(({ id }, index) => [id, index % 3]));
  const { bytes } = await crearReporteCondominal({
    perfil: perfilBase,
    respuestas,
    contacto: {
      nombre: "Comité de prueba",
      nombreCondominio: "Condominio de prueba",
    },
  });
  const pdf = await PDFDocument.load(bytes);

  assert.equal(pdf.getPageCount(), 5);
  assert.ok(bytes.length > 100000);
});
