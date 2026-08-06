export const config = {
  api: {
    bodyParser: false,
  },
};

const DESTINATARIOS = [
  "guillermo@emporioinmobiliario.com.mx",
  "carlos.nachon@emporioinmobiliario.mx",
];
const RESEND_FROM = process.env.RESEND_FROM_EMAIL || "Emporio Web <cobros@emporioinmobiliario.com.mx>";

const MAX_CV_BYTES = 5 * 1024 * 1024;
const MAX_BODY_BYTES = MAX_CV_BYTES + 512 * 1024;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateLimitStore = globalThis.__emporioPostulacionRateLimit || new Map();
globalThis.__emporioPostulacionRateLimit = rateLimitStore;

const OPCIONES_VENTAS = new Set(["Ninguna", "Menos de 1 año", "1 a 3 años", "Más de 3 años"]);
const OPCIONES_SI_NO = new Set(["Sí", "No"]);
const VACANTES_PERMITIDAS = new Set([
  "Asesor Inmobiliario de Ventas",
  "Coordinadora Administrativa Inmobiliaria",
]);

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function cleanText(value = "", maxLength = 500) {
  return String(value)
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function cleanMultiline(value = "", maxLength = 1500) {
  return String(value)
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, " ")
    .trim()
    .slice(0, maxLength);
}

function cleanFilename(value = "cv.pdf") {
  const safe = cleanText(value, 120).replace(/[^a-zA-Z0-9._ -]/g, "").trim();
  return safe.toLowerCase().endsWith(".pdf") ? safe : "cv.pdf";
}

function candidateCvFilename(nombre) {
  const safeName = cleanText(nombre, 80)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

  return `CV-${safeName || "Candidato"}.pdf`;
}

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  return (Array.isArray(forwarded) ? forwarded[0] : forwarded || req.socket?.remoteAddress || "unknown")
    .split(",")[0]
    .trim();
}

function checkRateLimit(ip) {
  const now = Date.now();
  const current = rateLimitStore.get(ip) || { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };
  if (current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (current.count >= RATE_LIMIT_MAX) return false;
  current.count += 1;
  rateLimitStore.set(ip, current);
  return true;
}

function getBoundary(contentType = "") {
  const match = contentType.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  return match?.[1] || match?.[2];
}

async function readBody(req) {
  const chunks = [];
  let total = 0;

  for await (const chunk of req) {
    total += chunk.length;
    if (total > MAX_BODY_BYTES) {
      throw new Error("El CV no debe exceder 5 MB");
    }
    chunks.push(chunk);
  }

  return Buffer.concat(chunks);
}

function parseMultipart(buffer, boundary) {
  const fields = {};
  const files = {};
  const body = buffer.toString("binary");
  const parts = body.split(`--${boundary}`);

  for (const part of parts) {
    if (!part || part === "--\r\n" || part === "--") continue;

    const headerEnd = part.indexOf("\r\n\r\n");
    if (headerEnd === -1) continue;

    const rawHeaders = part.slice(0, headerEnd);
    let value = part.slice(headerEnd + 4);
    if (value.endsWith("\r\n")) value = value.slice(0, -2);
    if (value.endsWith("--")) value = value.slice(0, -2);

    const disposition = rawHeaders.match(/content-disposition:[^\r\n]+/i)?.[0] || "";
    const name = disposition.match(/name="([^"]+)"/)?.[1];
    const filename = disposition.match(/filename="([^"]*)"/)?.[1];
    const contentType = rawHeaders.match(/content-type:\s*([^\r\n]+)/i)?.[1]?.trim();

    if (!name) continue;

    if (filename) {
      files[name] = {
        filename: cleanFilename(filename),
        contentType: contentType || "application/octet-stream",
        buffer: Buffer.from(value, "binary"),
      };
    } else {
      fields[name] = Buffer.from(value, "binary").toString("utf8").trim();
    }
  }

  return { fields, files };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const ip = getClientIp(req);
    if (!checkRateLimit(ip)) {
      return res.status(429).json({ error: "Demasiados intentos. Intenta nuevamente más tarde." });
    }

    const boundary = getBoundary(req.headers["content-type"]);
    if (!boundary) return res.status(400).json({ error: "Solicitud inválida" });

    const { fields, files } = parseMultipart(await readBody(req), boundary);
    if (fields.empresa) return res.status(200).json({ success: true });

    const vacante = cleanText(fields.vacante, 120);
    const nombre = cleanText(fields.nombre, 120);
    const email = cleanText(fields.email, 160).toLowerCase();
    const telefono = cleanText(fields.telefono, 30);
    const ciudad = cleanText(fields.ciudad, 90);
    const edad = cleanText(fields.edad, 3);
    const experienciaVentas = cleanText(fields.experienciaVentas, 30);
    const experienciaInmobiliaria = cleanText(fields.experienciaInmobiliaria, 5);
    const automovil = cleanText(fields.automovil, 5);
    const mensaje = cleanMultiline(fields.mensaje, 1500);
    const originUrl = cleanText(fields.originUrl, 240);
    const timestamp = cleanText(fields.timestamp, 40);

    if (!vacante || !nombre || !email || !telefono || !ciudad || !edad || !experienciaVentas || !experienciaInmobiliaria || !automovil) {
      return res.status(400).json({ error: "Faltan campos requeridos" });
    }
    if (!VACANTES_PERMITIDAS.has(vacante)) {
      return res.status(400).json({ error: "Vacante inválida" });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Correo electrónico inválido" });
    }
    if (!/^\d{2,3}$/.test(edad) || Number(edad) < 18 || Number(edad) > 85) {
      return res.status(400).json({ error: "Edad inválida" });
    }
    if (!OPCIONES_VENTAS.has(experienciaVentas) || !OPCIONES_SI_NO.has(experienciaInmobiliaria) || !OPCIONES_SI_NO.has(automovil)) {
      return res.status(400).json({ error: "Selección inválida" });
    }

    const cv = files.cv;
    if (!cv || !cv.buffer?.length) {
      return res.status(400).json({ error: "El CV en PDF es obligatorio" });
    }
    if (cv.buffer.length > MAX_CV_BYTES) {
      return res.status(400).json({ error: "El CV no debe exceder 5 MB" });
    }
    if (cv.contentType !== "application/pdf" || !cv.filename.toLowerCase().endsWith(".pdf") || cv.buffer.slice(0, 5).toString("utf8") !== "%PDF-") {
      return res.status(400).json({ error: "El CV debe ser un archivo PDF" });
    }

    const submittedAt = timestamp || new Date().toISOString();
    const subject = `Nueva postulación — ${vacante} — ${nombre}`;
    const cvFilename = candidateCvFilename(nombre);
    const html = `
      <div style="font-family: sans-serif; max-width: 680px; margin: 0 auto; padding: 32px; background: #f9fafb; border-radius: 12px;">
        <div style="text-align:center; margin-bottom: 24px;">
          <img src="https://www.emporioinmobiliario.com.mx/logo.png" alt="Emporio Inmobiliario" style="height:56px;" />
        </div>
        <h2 style="color:#C8102E; margin:0 0 22px; text-align:center;">Nueva solicitud de Bolsa de Trabajo</h2>
        <div style="background:#fff; border:1px solid #eceef2; border-radius:10px; padding:24px;">
          <p><strong>Vacante:</strong> ${escapeHtml(vacante)}</p>
          <p><strong>Nombre completo:</strong> ${escapeHtml(nombre)}</p>
          <p><strong>Correo electrónico:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p><strong>Teléfono:</strong> <a href="https://wa.me/52${escapeHtml(telefono).replace(/\D/g, "")}">${escapeHtml(telefono)}</a></p>
          <p><strong>Ciudad:</strong> ${escapeHtml(ciudad)}</p>
          <p><strong>Edad:</strong> ${escapeHtml(edad)}</p>
          <p><strong>Experiencia en ventas:</strong> ${escapeHtml(experienciaVentas)}</p>
          <p><strong>Experiencia inmobiliaria:</strong> ${escapeHtml(experienciaInmobiliaria)}</p>
          <p><strong>Cuenta con automóvil:</strong> ${escapeHtml(automovil)}</p>
          ${mensaje ? `<p><strong>Mensaje:</strong><br>${escapeHtml(mensaje).replace(/\n/g, "<br>")}</p>` : ""}
          <p><strong>Fecha y hora:</strong> ${escapeHtml(submittedAt)}</p>
          <p><strong>URL de origen:</strong> ${escapeHtml(originUrl || "/bolsa-de-trabajo")}</p>
          <p><strong>CV adjunto:</strong> ${escapeHtml(cvFilename)}</p>
        </div>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: DESTINATARIOS,
        reply_to: email,
        subject,
        html,
        attachments: [{
          filename: cvFilename,
          content: cv.buffer.toString("base64"),
          content_type: cv.contentType,
        }],
      }),
    });

    if (!response.ok) return res.status(400).json({ error: "Error al enviar la solicitud" });

    return res.status(200).json({ success: true });
  } catch (error) {
    const message = error.message === "El CV no debe exceder 5 MB" ? error.message : "Error al procesar la solicitud";
    return res.status(500).json({ error: message });
  }
}
