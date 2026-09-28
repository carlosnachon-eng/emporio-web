export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { nombre, email, whatsapp, mensaje, asunto, tipo, operacion, colonia, comentarios, plaza, service, source, campaign, landing_path, owner_scenario, propiedad_en_venta, precio_esperado, utm_source, utm_medium, utm_campaign, utm_term, utm_content } = req.body;

  if (!nombre || !whatsapp) {
    return res.status(400).json({ error: "Faltan campos requeridos" });
  }

  const subject = asunto || "Nuevo contacto desde emporioinmobiliario.com.mx";

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 12px;">
      <div style="text-align: center; margin-bottom: 24px;">
        <img src="https://www.emporioinmobiliario.com.mx/wp-content/uploads/2022/03/emporio-1-768x434.png" alt="Emporio Inmobiliario" style="height: 56px;" />
      </div>
      <h2 style="color: #C8102E; margin: 0 0 24px; text-align: center;">📩 ${subject}</h2>
      <div style="background: #fff; border-radius: 8px; padding: 24px; border: 1px solid #f0f0f0;">
        <p style="margin: 0 0 10px;"><strong>Nombre:</strong> ${nombre}</p>
        <p style="margin: 0 0 10px;"><strong>WhatsApp:</strong> <a href="https://wa.me/52${(whatsapp || "").replace(/\D/g, "")}">${whatsapp}</a></p>
        ${email ? `<p style="margin: 0 0 10px;"><strong>Email:</strong> ${email}</p>` : ""}
        ${colonia ? `<p style="margin: 0 0 10px;"><strong>Colonia/Zona:</strong> ${colonia}</p>` : ""}
        ${tipo ? `<p style="margin: 0 0 10px;"><strong>Tipo de propiedad:</strong> ${tipo}</p>` : ""}
        ${operacion ? `<p style="margin: 0 0 10px;"><strong>Operación:</strong> ${operacion}</p>` : ""}
        ${mensaje ? `<p style="margin: 0 0 10px;"><strong>Mensaje:</strong><br/>${mensaje}</p>` : ""}
        ${comentarios ? `<p style="margin: 0 0 10px;"><strong>Comentarios:</strong><br/>${comentarios}</p>` : ""}
        ${plaza ? `<p style="margin: 0 0 10px;"><strong>Plaza:</strong> ${plaza}</p>` : ""}
        ${service ? `<p style="margin: 0 0 10px;"><strong>Servicio:</strong> ${service}</p>` : ""}
        ${owner_scenario ? `<p style="margin: 0 0 10px;"><strong>Escenario:</strong> ${owner_scenario}</p>` : ""}
        ${propiedad_en_venta ? `<p style="margin: 0 0 10px;"><strong>¿Ya está en venta?:</strong> ${propiedad_en_venta}</p>` : ""}
        ${precio_esperado ? `<p style="margin: 0 0 10px;"><strong>Precio esperado:</strong> ${precio_esperado}</p>` : ""}
        ${landing_path ? `<p style="margin: 0 0 10px;"><strong>Landing:</strong> ${landing_path}</p>` : ""}
        ${source || campaign || utm_source ? `<p style="margin: 0 0 10px;"><strong>Origen:</strong> ${[source, campaign || utm_campaign, utm_source, utm_medium, utm_term, utm_content].filter(Boolean).join(" · ")}</p>` : ""}
      </div>
      <div style="text-align: center; margin-top: 28px;">
        <a href="https://wa.me/52${(whatsapp || "").replace(/\D/g, "")}" style="background: #25d366; color: #fff; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 15px;">
          💬 Responder por WhatsApp
        </a>
      </div>
      <p style="text-align: center; margin-top: 24px; font-size: 12px; color: #9ca3af;">
        Emporio Inmobiliario · emporioinmobiliario.com.mx
      </p>
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Emporio Web <cobros@emporioinmobiliario.com.mx>",
        to: ["ventas@emporioinmobiliario.mx"],
        subject,
        html,
      }),
    });

    const data = await response.json();
    if (!response.ok) return res.status(400).json({ error: data.message || "Error al enviar" });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
