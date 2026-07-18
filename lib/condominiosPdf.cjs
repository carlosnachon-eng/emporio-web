const fs = require("node:fs/promises");
const path = require("node:path");
const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");
const QRCode = require("qrcode");
const {
  calcularComplejidad,
  calcularHonorarios,
  calcularSalud,
} = require("./condominiosMarketing.cjs");

const A4 = [595.28, 841.89];
const DIAGNOSTICO_URL = "https://wa.me/522222573237?text=Hola%2C%20quiero%20agendar%20un%20Diagn%C3%B3stico%20de%20Control%20Condominal.";
const COLOR = {
  navy: rgb(23 / 255, 24 / 255, 39 / 255),
  red: rgb(200 / 255, 16 / 255, 46 / 255),
  ink: rgb(40 / 255, 42 / 255, 52 / 255),
  gray: rgb(100 / 255, 103 / 255, 113 / 255),
  line: rgb(226 / 255, 226 / 255, 231 / 255),
  pale: rgb(248 / 255, 247 / 255, 244 / 255),
  white: rgb(1, 1, 1),
};

function textoSeguro(valor) {
  return String(valor || "")
    .replace(/[–—]/g, "-")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/→/g, ">")
    .replace(/[^\u0009\u000a\u000d\u0020-\u007e\u00a0-\u00ff]/g, "");
}

function lineas(texto, font, size, maxWidth) {
  const palabras = textoSeguro(texto).split(/\s+/).filter(Boolean);
  const resultado = [];
  let actual = "";
  for (const palabra of palabras) {
    const candidata = actual ? `${actual} ${palabra}` : palabra;
    if (font.widthOfTextAtSize(candidata, size) <= maxWidth) {
      actual = candidata;
    } else {
      if (actual) resultado.push(actual);
      actual = palabra;
    }
  }
  if (actual) resultado.push(actual);
  return resultado;
}

function dibujarTexto(page, texto, x, y, opciones) {
  const { font, size, color = COLOR.ink, maxWidth = 500, lineHeight = size * 1.35 } = opciones;
  const fragmentos = lineas(texto, font, size, maxWidth);
  fragmentos.forEach((fragmento, index) => {
    page.drawText(fragmento, { x, y: y - index * lineHeight, size, font, color });
  });
  return y - fragmentos.length * lineHeight;
}

function encabezado(page, fonts, numero) {
  page.drawText("EMPORIO INMOBILIARIO", { x: 44, y: 804, size: 9, font: fonts.bold, color: COLOR.navy });
  page.drawText("REPORTE EJECUTIVO CONDOMINAL", { x: 365, y: 804, size: 7, font: fonts.bold, color: COLOR.red });
  page.drawLine({ start: { x: 44, y: 790 }, end: { x: 551, y: 790 }, thickness: 1, color: COLOR.line });
  page.drawText(String(numero).padStart(2, "0"), { x: 526, y: 28, size: 8, font: fonts.bold, color: COLOR.gray });
  page.drawText("Estimación orientativa - no constituye auditoría ni cotización definitiva", { x: 44, y: 28, size: 7, font: fonts.regular, color: COLOR.gray });
}

function etiqueta(page, texto, x, y, fonts) {
  page.drawText(textoSeguro(texto).toUpperCase(), { x, y, size: 8, font: fonts.bold, color: COLOR.red });
}

function tarjeta(page, x, y, width, height, titulo, valor, fonts) {
  page.drawRectangle({ x, y, width, height, color: COLOR.pale, borderColor: COLOR.line, borderWidth: 1 });
  page.drawText(textoSeguro(titulo), { x: x + 18, y: y + height - 26, size: 9, font: fonts.bold, color: COLOR.gray });
  dibujarTexto(page, valor, x + 18, y + height - 56, { font: fonts.bold, size: 19, color: COLOR.navy, maxWidth: width - 36, lineHeight: 23 });
}

async function crearReporteCondominal({ perfil = {}, respuestas = {}, contacto = {} } = {}) {
  const complejidad = calcularComplejidad(perfil);
  const honorarios = calcularHonorarios(perfil, complejidad);
  const salud = calcularSalud(respuestas);
  const pdf = await PDFDocument.create();
  pdf.setTitle("Reporte Ejecutivo Condominal | Emporio Inmobiliario");
  pdf.setAuthor("Emporio Inmobiliario");
  pdf.setSubject("Evaluación preliminar de complejidad y salud condominal");
  pdf.setCreator("Emporio Inmobiliario");

  const fonts = {
    regular: await pdf.embedFont(StandardFonts.Helvetica),
    bold: await pdf.embedFont(StandardFonts.HelveticaBold),
  };

  let logo;
  let qrDiagnostico;
  try {
    const logoBytes = await fs.readFile(path.join(process.cwd(), "public", "logo.png"));
    logo = await pdf.embedPng(logoBytes);
  } catch {
    logo = null;
  }
  try {
    const qrBytes = await QRCode.toBuffer(DIAGNOSTICO_URL, {
      type: "png",
      width: 420,
      margin: 1,
      color: { dark: "#171827", light: "#FFFFFF" },
      errorCorrectionLevel: "M",
    });
    qrDiagnostico = await pdf.embedPng(qrBytes);
  } catch {
    qrDiagnostico = null;
  }

  const page1 = pdf.addPage(A4);
  page1.drawRectangle({ x: 0, y: 0, width: A4[0], height: A4[1], color: COLOR.navy });
  page1.drawRectangle({ x: 0, y: 0, width: 13, height: A4[1], color: COLOR.red });
  if (logo) {
    const scaled = logo.scale(0.075);
    page1.drawImage(logo, { x: 44, y: 744, width: scaled.width, height: scaled.height });
  }
  page1.drawText("REPORTE EJECUTIVO", { x: 44, y: 667, size: 10, font: fonts.bold, color: rgb(1, .55, .63) });
  let y = dibujarTexto(page1, "Control y salud de tu condominio", 44, 628, {
    font: fonts.bold, size: 37, color: COLOR.white, maxWidth: 480, lineHeight: 42,
  });
  y = dibujarTexto(page1, "Una lectura preliminar para conversar con el comité sobre recursos, decisiones y prioridades.", 44, y - 18, {
    font: fonts.regular, size: 15, color: rgb(.78, .79, .84), maxWidth: 455, lineHeight: 22,
  });
  dibujarTexto(page1, "Reporte elaborado a partir de la información proporcionada durante la evaluación.", 44, y - 56, {
    font: fonts.bold, size: 9, color: rgb(1, .62, .68), maxWidth: 455, lineHeight: 14,
  });
  const nombre = textoSeguro(contacto.nombreCondominio) || "Condominio evaluado";
  const destinatario = textoSeguro(contacto.nombre);
  page1.drawLine({ start: { x: 44, y: 292 }, end: { x: 551, y: 292 }, thickness: 1, color: rgb(.25, .26, .35) });
  page1.drawText(nombre, { x: 44, y: 257, size: 15, font: fonts.bold, color: COLOR.white });
  if (destinatario) {
    page1.drawText(`Preparado para ${destinatario}`, { x: 44, y: 234, size: 10, font: fonts.regular, color: rgb(.7, .71, .77) });
  }
  page1.drawText(new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(new Date()), { x: 44, y: 84, size: 9, font: fonts.regular, color: rgb(.65, .66, .72) });
  page1.drawText("Emporio Inmobiliario", { x: 418, y: 84, size: 9, font: fonts.bold, color: COLOR.white });

  const page2 = pdf.addPage(A4);
  encabezado(page2, fonts, 2);
  etiqueta(page2, "Resumen de resultados", 44, 750, fonts);
  dibujarTexto(page2, "Dos lecturas para entender el punto de partida", 44, 718, { font: fonts.bold, size: 25, color: COLOR.navy, maxWidth: 490, lineHeight: 30 });
  tarjeta(page2, 44, 565, 244, 110, "Nivel de complejidad", complejidad.nivel.etiqueta, fonts);
  tarjeta(page2, 307, 565, 244, 110, "Índice de Control Condominal", `${salud.porcentaje} / 100`, fonts);
  etiqueta(page2, "Factores relevantes", 44, 525, fonts);
  let listY = 496;
  const factores = complejidad.factores.length ? complejidad.factores : ["Pocos factores extraordinarios identificados"];
  factores.slice(0, 5).forEach((item) => {
    page2.drawCircle({ x: 49, y: listY + 3, size: 2.5, color: COLOR.red });
    listY = dibujarTexto(page2, item, 61, listY + 7, { font: fonts.regular, size: 10, maxWidth: 480, lineHeight: 15 }) - 5;
  });
  etiqueta(page2, "Control por área", 44, 370, fonts);
  let barY = 337;
  Object.entries(salud.dominios).forEach(([dominio, valor]) => {
    page2.drawText(textoSeguro(dominio), { x: 44, y: barY, size: 9, font: fonts.bold, color: COLOR.ink });
    page2.drawRectangle({ x: 150, y: barY - 1, width: 320, height: 8, color: COLOR.line });
    page2.drawRectangle({ x: 150, y: barY - 1, width: 320 * (valor / 100), height: 8, color: COLOR.red });
    page2.drawText(`${valor}%`, { x: 488, y: barY, size: 8, font: fonts.bold, color: COLOR.gray });
    barY -= 36;
  });
  page2.drawRectangle({ x: 44, y: 76, width: 507, height: 76, color: COLOR.pale, borderColor: COLOR.line, borderWidth: 1 });
  dibujarTexto(page2, `Nivel general: ${salud.nivel.etiqueta}. ${salud.nivel.descripcion}`, 62, 126, { font: fonts.regular, size: 10, color: COLOR.ink, maxWidth: 470, lineHeight: 15 });

  const page3 = pdf.addPage(A4);
  encabezado(page3, fonts, 3);
  etiqueta(page3, "Hallazgos principales", 44, 750, fonts);
  dibujarTexto(page3, "Fortalezas y riesgos para conversar", 44, 718, { font: fonts.bold, size: 25, color: COLOR.navy, maxWidth: 500, lineHeight: 30 });
  page3.drawRectangle({ x: 44, y: 455, width: 244, height: 205, color: COLOR.pale, borderColor: COLOR.line, borderWidth: 1 });
  page3.drawRectangle({ x: 307, y: 455, width: 244, height: 205, color: COLOR.pale, borderColor: COLOR.line, borderWidth: 1 });
  page3.drawText("FORTALEZAS", { x: 62, y: 625, size: 9, font: fonts.bold, color: COLOR.red });
  page3.drawText("RIESGOS A REVISAR", { x: 325, y: 625, size: 9, font: fonts.bold, color: COLOR.red });
  let strengthY = 590;
  salud.fortalezas.slice(0, 3).forEach((item) => {
    page3.drawText("+", { x: 62, y: strengthY, size: 11, font: fonts.bold, color: COLOR.red });
    strengthY = dibujarTexto(page3, item, 78, strengthY + 2, { font: fonts.regular, size: 9, maxWidth: 185, lineHeight: 13 }) - 15;
  });
  let riskY = 590;
  salud.riesgos.slice(0, 3).forEach((item) => {
    page3.drawText("!", { x: 325, y: riskY, size: 11, font: fonts.bold, color: COLOR.red });
    riskY = dibujarTexto(page3, item, 341, riskY + 2, { font: fonts.regular, size: 9, maxWidth: 185, lineHeight: 13 }) - 15;
  });
  etiqueta(page3, "Ruta sugerida", 44, 410, fonts);
  let routeY = 365;
  salud.recomendaciones.forEach((item, index) => {
    page3.drawCircle({ x: 64, y: routeY + 4, size: 18, color: index === 0 ? COLOR.red : COLOR.navy });
    page3.drawText(String(index + 1), { x: 61, y: routeY, size: 9, font: fonts.bold, color: COLOR.white });
    page3.drawText(item.plazo, { x: 96, y: routeY + 9, size: 10, font: fonts.bold, color: COLOR.navy });
    routeY = dibujarTexto(page3, item.texto, 96, routeY - 10, { font: fonts.regular, size: 9, maxWidth: 430, lineHeight: 13 }) - 24;
  });

  const page4 = pdf.addPage(A4);
  encabezado(page4, fonts, 4);
  etiqueta(page4, "Continuidad y control", 44, 750, fonts);
  dibujarTexto(page4, "¿Qué puede suceder si no se corrigen estos riesgos?", 44, 718, { font: fonts.bold, size: 25, color: COLOR.navy, maxWidth: 500, lineHeight: 30 });
  dibujarTexto(page4, "No significa que estos efectos ocurrirán. Son consecuencias operativas que conviene prevenir cuando los controles permanecen incompletos.", 44, 640, {
    font: fonts.regular, size: 11, color: COLOR.gray, maxWidth: 500, lineHeight: 17,
  });
  const consecuencias = [
    ["Cartera vencida", "Puede crecer sin una lectura clara de montos, antigüedad y acciones de seguimiento."],
    ["Dependencia", "La información y las decisiones pueden quedar concentradas en una sola persona."],
    ["Decisiones", "El comité puede tener dificultades para explicar acuerdos o gastos sin evidencia suficiente."],
    ["Documentos", "Contratos, comprobantes y saldos pueden perder contexto durante una transición."],
    ["Mantenimiento", "La atención reactiva suele limitar la planeación y la comparación de alternativas."],
    ["Convivencia", "La falta de información compartida puede aumentar diferencias entre comité y residentes."],
  ];
  consecuencias.forEach(([titulo, texto], index) => {
    const columna = index % 2;
    const fila = Math.floor(index / 2);
    const x = columna === 0 ? 44 : 307;
    const yCard = 480 - fila * 122;
    page4.drawRectangle({ x, y: yCard, width: 244, height: 100, color: COLOR.pale, borderColor: COLOR.line, borderWidth: 1 });
    page4.drawText(textoSeguro(titulo), { x: x + 16, y: yCard + 70, size: 10, font: fonts.bold, color: COLOR.navy });
    dibujarTexto(page4, texto, x + 16, yCard + 49, { font: fonts.regular, size: 8, color: COLOR.gray, maxWidth: 210, lineHeight: 12 });
  });
  page4.drawRectangle({ x: 44, y: 82, width: 507, height: 78, color: COLOR.navy });
  page4.drawText("POR ESO RECOMENDAMOS EMPEZAR CON UN DIAGNÓSTICO", { x: 62, y: 132, size: 9, font: fonts.bold, color: rgb(1, .59, .66) });
  dibujarTexto(page4, "Antes de proponer una administración, conviene verificar información, responsables, prioridades y condiciones de transición.", 62, 111, {
    font: fonts.regular, size: 9, color: COLOR.white, maxWidth: 470, lineHeight: 13,
  });

  const page5 = pdf.addPage(A4);
  encabezado(page5, fonts, 5);
  etiqueta(page5, "Siguiente paso recomendado", 44, 750, fonts);
  dibujarTexto(page5, "Agenda un Diagnóstico de Control Condominal", 44, 718, { font: fonts.bold, size: 27, color: COLOR.navy, maxWidth: 500, lineHeight: 32 });
  dibujarTexto(page5, "Una conversación breve puede ayudarte a confirmar qué conviene atender primero y si el diagnóstico es el siguiente paso adecuado.", 44, 640, {
    font: fonts.regular, size: 12, color: COLOR.gray, maxWidth: 500, lineHeight: 18,
  });
  etiqueta(page5, "El diagnóstico incluye", 44, 585, fonts);
  const incluye = [
    "Revisión de información, saldos y documentos disponibles.",
    "Identificación de riesgos, responsables y prioridades.",
    "Definición del alcance de transición y próximos pasos para el comité.",
  ];
  let incluyeY = 548;
  incluye.forEach((item, index) => {
    page5.drawCircle({ x: 57, y: incluyeY + 3, size: 10, color: COLOR.navy });
    page5.drawText(String(index + 1), { x: 54, y: incluyeY, size: 7, font: fonts.bold, color: COLOR.white });
    incluyeY = dibujarTexto(page5, item, 78, incluyeY + 5, { font: fonts.regular, size: 10, color: COLOR.ink, maxWidth: 420, lineHeight: 15 }) - 18;
  });
  page5.drawRectangle({ x: 44, y: 254, width: 507, height: 170, color: COLOR.pale, borderColor: COLOR.line, borderWidth: 1 });
  page5.drawText("CONVIERTE EL REPORTE EN UNA CONVERSACIÓN ÚTIL", { x: 66, y: 389, size: 8, font: fonts.bold, color: COLOR.red });
  dibujarTexto(page5, "Compártelo con tu comité. Si quieren revisar los hallazgos, podemos conversar sin compromiso.", 66, 363, {
    font: fonts.bold, size: 13, color: COLOR.navy, maxWidth: 300, lineHeight: 18,
  });
  page5.drawRectangle({ x: 66, y: 292, width: 255, height: 40, color: COLOR.red });
  page5.drawText("AGENDAR DIAGNÓSTICO", { x: 112, y: 306, size: 10, font: fonts.bold, color: COLOR.white });
  page5.drawText("wa.me/522222573237", { x: 92, y: 270, size: 9, font: fonts.bold, color: COLOR.navy });
  if (qrDiagnostico) {
    page5.drawImage(qrDiagnostico, { x: 413, y: 286, width: 106, height: 106 });
  }
  dibujarTexto(page5, "Compártelo con tu comité o agenda una conversación con nosotros.", 397, 274, {
    font: fonts.regular, size: 6.8, color: COLOR.gray, maxWidth: 135, lineHeight: 9,
  });
  page5.drawRectangle({ x: 44, y: 110, width: 507, height: 68, color: COLOR.white, borderColor: COLOR.line, borderWidth: 1 });
  page5.drawText("REFERENCIA PARA DIMENSIONAR EL SERVICIO", { x: 62, y: 156, size: 7, font: fonts.bold, color: COLOR.gray });
  dibujarTexto(page5, honorarios.texto, 62, 134, { font: fonts.bold, size: 11, color: COLOR.gray, maxWidth: 470, lineHeight: 14 });
  dibujarTexto(page5, "Rango orientativo sujeto a diagnóstico. No incluye nómina, proveedores, obras, servicios ni gastos propios del condominio.", 62, 119, {
    font: fonts.regular, size: 6.5, color: COLOR.gray, maxWidth: 470, lineHeight: 9,
  });
  dibujarTexto(page5, "Este reporte se genera con las respuestas proporcionadas. Es informativo y no sustituye una auditoría contable, legal o técnica.", 44, 72, {
    font: fonts.regular, size: 8, color: COLOR.gray, maxWidth: 500, lineHeight: 12,
  });

  return {
    bytes: await pdf.save(),
    resumen: { complejidad, honorarios, salud },
  };
}

module.exports = { crearReporteCondominal };
