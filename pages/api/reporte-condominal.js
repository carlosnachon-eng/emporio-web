const { crearReporteCondominal } = require("../../lib/condominiosPdf.cjs");
const { PREGUNTAS_SALUD } = require("../../lib/condominiosMarketing.cjs");

const CAMPOS_PERFIL = [
  "unidades", "tipo", "etapa", "amenidades", "proveedores", "personal",
  "administracionActual", "problema", "morosidad", "documentacion", "rol", "comite", "plazo",
];

function limpiarTexto(valor, limite = 120) {
  return String(valor || "").replace(/[\u0000-\u001f]/g, " ").trim().slice(0, limite);
}

function limpiarPayload(body = {}) {
  const perfil = {};
  for (const campo of CAMPOS_PERFIL) {
    perfil[campo] = campo === "amenidades"
      ? (Array.isArray(body.perfil?.[campo]) ? body.perfil[campo].slice(0, 12).map((item) => limpiarTexto(item, 40)) : [])
      : limpiarTexto(body.perfil?.[campo], 80);
  }
  const respuestas = {};
  for (const pregunta of PREGUNTAS_SALUD) {
    const valor = Number(body.respuestas?.[pregunta.id]);
    respuestas[pregunta.id] = Number.isFinite(valor) ? Math.max(0, Math.min(2, valor)) : 0;
  }
  return {
    perfil,
    respuestas,
    contacto: {
      nombre: limpiarTexto(body.contacto?.nombre, 100),
      nombreCondominio: limpiarTexto(body.contacto?.nombreCondominio, 120),
    },
  };
}

export const config = { api: { bodyParser: { sizeLimit: "64kb" } } };

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Robots-Tag", "noindex, nofollow");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método no permitido." });
  }
  try {
    const payload = limpiarPayload(req.body);
    const { bytes } = await crearReporteCondominal(payload);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="reporte-ejecutivo-condominal-emporio.pdf"');
    return res.status(200).send(Buffer.from(bytes));
  } catch (error) {
    console.error("[reporte-condominal]", error.message);
    return res.status(500).json({ error: "No fue posible generar el reporte." });
  }
}
