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

  const lead = {
    nombre: texto(req.body?.nombre, 100),
    telefono: texto(req.body?.telefono, 25),
    email: texto(req.body?.email, 150).toLowerCase(),
    nombreCondominio: texto(req.body?.nombreCondominio, 120),
    consentimiento: req.body?.consentimiento === true,
    complejidad: texto(req.body?.resultado?.complejidad, 60),
    salud: texto(req.body?.resultado?.salud, 60),
    rango: texto(req.body?.resultado?.rango, 100),
    prioridad: texto(req.body?.resultado?.prioridad?.clasificacion, 1),
    prioridadDetalle: texto(req.body?.resultado?.prioridad?.explicacion, 240),
  };

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
    return res.status(200).json({ success: true, preview: true });
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
          <h2>Nueva solicitud de Diagnóstico de Control Condominal</h2>
          <p><strong>Nombre:</strong> ${escapar(lead.nombre)}</p>
          <p><strong>Teléfono:</strong> ${escapar(lead.telefono)}</p>
          <p><strong>Correo:</strong> ${escapar(lead.email)}</p>
          <p><strong>Condominio:</strong> ${escapar(lead.nombreCondominio)}</p>
          <hr>
          <p><strong>Complejidad:</strong> ${escapar(lead.complejidad)}</p>
          <p><strong>Salud:</strong> ${escapar(lead.salud)}</p>
          <p><strong>Rango estimado:</strong> ${escapar(lead.rango)}</p>
          <p><strong>Prioridad interna:</strong> ${escapar(lead.prioridad)} — ${escapar(lead.prioridadDetalle)}</p>
        `,
      }),
    });
    if (!respuesta.ok) throw new Error(`Resend respondió ${respuesta.status}`);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("[contacto-condominios]", error.message);
    return res.status(502).json({ error: "No fue posible enviar la solicitud. Puedes escribirnos por WhatsApp." });
  }
}
