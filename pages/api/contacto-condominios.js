import { randomUUID } from "node:crypto";

const {
  PREGUNTAS_SALUD,
  calcularComplejidad,
  calcularHonorarios,
  calcularSalud,
  calcularPrioridadLead,
} = require("../../lib/condominiosMarketing.cjs");

const LIMITE_VENTANA_MS = 15 * 60 * 1000;
const MAX_INTENTOS = 5;
const intentos = new Map();

function texto(valor, limite) {
  return String(valor || "").replace(/[\u0000-\u001f]/g, " ").trim().slice(0, limite);
}

function escapar(valor) {
  return texto(valor, 1000)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function listaTexto(valores, limite = 3) {
  return (Array.isArray(valores) ? valores : [])
    .slice(0, limite)
    .map((valor) => texto(valor, 220))
    .filter(Boolean);
}

function folioReporte() {
  const fecha = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Mexico_City",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date()).replace(/-/g, "");
  return `ECC-${fecha}-${randomUUID().slice(0, 8).toUpperCase()}`;
}

function fechaHora() {
  return new Intl.DateTimeFormat("es-MX", {
    timeZone: "America/Mexico_City",
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date());
}

function urlOrigen(req) {
  const fallback = "https://www.emporioinmobiliario.com.mx/administracion-de-condominios-puebla";
  try {
    const candidata = new URL(texto(req.headers.referer, 300) || fallback);
    const hostPermitido =
      candidata.hostname === "emporioinmobiliario.com.mx" ||
      candidata.hostname === "www.emporioinmobiliario.com.mx" ||
      candidata.hostname.endsWith(".vercel.app") ||
      candidata.hostname === "127.0.0.1" ||
      candidata.hostname === "localhost";
    return ["http:", "https:"].includes(candidata.protocol) && hostPermitido ? candidata.href : fallback;
  } catch {
    return fallback;
  }
}

function fila(etiqueta, valor) {
  if (!valor) return "";
  return `
    <tr>
      <td style="padding:9px 0;color:#6b7280;font-size:13px;vertical-align:top;width:42%;">${escapar(etiqueta)}</td>
      <td style="padding:9px 0;color:#171827;font-size:14px;font-weight:700;vertical-align:top;">${escapar(valor)}</td>
    </tr>
  `;
}

function listaHtml(valores) {
  return valores.map((valor) => `<li style="margin:0 0 8px;">${escapar(valor)}</li>`).join("");
}

function excedeLimite(ip) {
  const ahora = Date.now();
  const vigentes = (intentos.get(ip) || []).filter((momento) => ahora - momento < LIMITE_VENTANA_MS);
  vigentes.push(ahora);
  intentos.set(ip, vigentes);
  return vigentes.length > MAX_INTENTOS;
}

export const config = { api: { bodyParser: { sizeLimit: "64kb" } } };

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método no permitido." });
  }

  const ip = texto(req.headers["x-forwarded-for"]?.split(",")[0] || req.socket?.remoteAddress, 80);
  if (excedeLimite(ip)) return res.status(429).json({ error: "Intenta nuevamente dentro de unos minutos." });
  if (req.body?.website) return res.status(200).json({ success: true });

  const perfil = {
    unidades: Math.max(0, Math.min(1000, Number(req.body?.perfil?.unidades) || 0)),
    tipo: texto(req.body?.perfil?.tipo, 30),
    etapa: texto(req.body?.perfil?.etapa, 30),
    amenidades: listaTexto(req.body?.perfil?.amenidades, 12),
    proveedores: Math.max(0, Math.min(100, Number(req.body?.perfil?.proveedores) || 0)),
    personal: texto(req.body?.perfil?.personal, 30),
    administracionActual: texto(req.body?.perfil?.administracionActual, 30),
    problema: texto(req.body?.perfil?.problema, 30),
    morosidad: texto(req.body?.perfil?.morosidad, 30),
    documentacion: texto(req.body?.perfil?.documentacion, 30),
    rol: texto(req.body?.perfil?.rol, 30),
    comite: texto(req.body?.perfil?.comite, 30),
    plazo: texto(req.body?.perfil?.plazo, 30),
  };
  const respuestas = Object.fromEntries(
    PREGUNTAS_SALUD.map((pregunta) => [
      pregunta.id,
      Math.max(0, Math.min(2, Number(req.body?.respuestas?.[pregunta.id]) || 0)),
    ])
  );
  const complejidad = calcularComplejidad(perfil);
  const salud = calcularSalud(respuestas);
  const honorarios = calcularHonorarios(perfil, complejidad);

  const lead = {
    nombre: texto(req.body?.nombre, 100),
    telefono: texto(req.body?.telefono, 25),
    email: texto(req.body?.email, 150).toLowerCase(),
    nombreCondominio: texto(req.body?.nombreCondominio, 120),
    municipio: texto(req.body?.municipio, 100),
    consentimiento: req.body?.consentimiento === true,
    unidades: perfil.unidades,
    complejidad: complejidad.nivel.etiqueta,
    salud: salud.nivel.etiqueta,
    indiceControl: salud.porcentaje,
    rango: honorarios.texto,
    fortalezas: listaTexto(salud.fortalezas),
    riesgos: listaTexto(salud.riesgos),
    folio: folioReporte(),
    fechaHora: fechaHora(),
    origen: urlOrigen(req),
  };
  const prioridad = calcularPrioridadLead(perfil, complejidad, salud, {
    municipio: lead.municipio,
    consentimiento: lead.consentimiento,
  });

  if (!lead.nombre || !lead.telefono || !lead.email || !lead.nombreCondominio || !lead.consentimiento) {
    return res.status(400).json({ error: "Completa los datos requeridos y acepta el aviso de privacidad." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return res.status(400).json({ error: "Revisa el correo electrónico." });
  }
  if (!/^[\d\s()+.-]{8,25}$/.test(lead.telefono)) {
    return res.status(400).json({ error: "Revisa el número de teléfono." });
  }

  const entregaHabilitada =
    process.env.CONDOMINIOS_LEADS_ENABLED === "true" &&
    Boolean(process.env.RESEND_API_KEY);

  if (!entregaHabilitada) {
    return res.status(200).json({ success: true, preview: true, folio: lead.folio });
  }

  try {
    const destino = process.env.CONDOMINIOS_LEADS_TO || "ventas@emporioinmobiliario.mx";
    const respuesta = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONDOMINIOS_LEADS_FROM || "Emporio Inmobiliario <notificaciones@emporioinmobiliario.com.mx>",
        to: [destino],
        reply_to: lead.email,
        subject: `Diagnóstico condominal: ${lead.nombreCondominio}`,
        html: `
          <div style="margin:0;background:#f5f5f7;padding:20px 10px;font-family:Arial,sans-serif;color:#171827;">
            <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">
              <div style="background:#171827;padding:24px;">
                <div style="color:#ffffff;font-size:20px;font-weight:800;line-height:1.3;">Nueva solicitud de Diagnóstico de Control Condominal</div>
                <div style="color:#d1d5db;font-size:13px;margin-top:8px;">${escapar(lead.folio)} · ${escapar(lead.fechaHora)}</div>
              </div>
              <div style="padding:22px 24px;">
                <div style="color:#c8102e;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Contacto</div>
                <table role="presentation" style="border-collapse:collapse;width:100%;">
                  ${fila("Nombre", lead.nombre)}
                  ${fila("Correo", lead.email)}
                  ${fila("Teléfono", lead.telefono)}
                  ${fila("Condominio", lead.nombreCondominio)}
                  ${fila("Municipio", lead.municipio)}
                </table>
                <div style="height:1px;background:#e5e7eb;margin:18px 0;"></div>
                <div style="color:#c8102e;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Resultado</div>
                <table role="presentation" style="border-collapse:collapse;width:100%;">
                  ${fila("Número de unidades", String(lead.unidades))}
                  ${fila("Complejidad", lead.complejidad)}
                  ${fila("Nivel general", lead.salud)}
                  ${fila("Índice de Control Condominal", `${lead.indiceControl} / 100`)}
                  ${fila("Rango orientativo", lead.rango)}
                  ${fila("Prioridad interna", `${prioridad.clasificacion} — ${prioridad.explicacion}`)}
                </table>
                <div style="display:block;background:#f9fafb;border-radius:12px;padding:16px;margin-top:18px;">
                  <div style="font-size:13px;font-weight:800;margin-bottom:8px;">Principales fortalezas</div>
                  <ul style="padding-left:20px;margin:0;color:#374151;font-size:13px;line-height:1.5;">${listaHtml(lead.fortalezas)}</ul>
                </div>
                <div style="display:block;background:#fff7f7;border-radius:12px;padding:16px;margin-top:12px;">
                  <div style="font-size:13px;font-weight:800;margin-bottom:8px;">Principales riesgos</div>
                  <ul style="padding-left:20px;margin:0;color:#374151;font-size:13px;line-height:1.5;">${listaHtml(lead.riesgos)}</ul>
                </div>
                <div style="height:1px;background:#e5e7eb;margin:18px 0;"></div>
                <table role="presentation" style="border-collapse:collapse;width:100%;">
                  ${fila("Folio del reporte", lead.folio)}
                  ${fila("Fecha y hora", lead.fechaHora)}
                  ${fila("URL de origen", lead.origen)}
                  ${fila("Consentimiento", lead.consentimiento ? "Sí, confirmado antes del envío" : "No")}
                </table>
              </div>
            </div>
          </div>
        `,
        text: [
          "Nueva solicitud de Diagnóstico de Control Condominal",
          `Folio: ${lead.folio}`,
          `Fecha y hora: ${lead.fechaHora}`,
          "",
          `Nombre: ${lead.nombre}`,
          `Correo: ${lead.email}`,
          `Teléfono: ${lead.telefono}`,
          `Condominio: ${lead.nombreCondominio}`,
          lead.municipio ? `Municipio: ${lead.municipio}` : "",
          `Número de unidades: ${lead.unidades}`,
          `Complejidad: ${lead.complejidad}`,
          `Nivel general: ${lead.salud}`,
          `Índice de Control Condominal: ${lead.indiceControl} / 100`,
          `Rango orientativo: ${lead.rango}`,
          `Fortalezas: ${lead.fortalezas.join("; ")}`,
          `Riesgos: ${lead.riesgos.join("; ")}`,
          `Prioridad interna: ${prioridad.clasificacion} — ${prioridad.explicacion}`,
          `URL de origen: ${lead.origen}`,
          "Consentimiento: Sí, confirmado antes del envío",
        ].filter(Boolean).join("\n"),
      }),
    });
    if (!respuesta.ok) throw new Error(`Resend respondió ${respuesta.status}`);
    return res.status(200).json({ success: true, folio: lead.folio });
  } catch (error) {
    console.error("[contacto-condominios]", error.message);
    return res.status(502).json({ error: "No fue posible enviar la solicitud. Puedes escribirnos por WhatsApp." });
  }
}
