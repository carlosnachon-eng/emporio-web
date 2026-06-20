// pages/api/contacto-propiedad.js
//
// Recibe el formulario de "¿Te interesa esta propiedad?" desde la ficha
// individual (/propiedades/[id]) y manda un correo a ventas con los datos
// del interesado y a qué propiedad se refiere.

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { nombre, telefono, email, mensaje, propiedad_id, propiedad_titulo } = req.body;

  if (!nombre || !telefono) {
    return res.status(400).json({ error: "Faltan campos requeridos (nombre y teléfono)" });
  }

  const subject = `🏠 Interesado en: ${propiedad_titulo || propiedad_id || "una propiedad"}`;

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 12px;">
      <div style="text-align: center; margin-bottom: 24px;">
        <img src="https://www.emporioinmobiliario.com.mx/wp-content/uploads/2022/03/emporio-1-768x434.png" alt="Emporio Inmobiliario" style="height: 56px;" />
      </div>
      <h2 style="color: #C8102E; margin: 0 0 24px; text-align: center;">📩 Nuevo interesado en una propiedad</h2>
      <div style="background: #fff; border-radius: 8px; padding: 24px; border: 1px solid #f0f0f0;">
        <p style="margin: 0 0 10px;"><strong>Propiedad:</strong> ${propiedad_titulo || "—"}</p>
        <p style="margin: 0 0 10px;"><strong>ID:</strong> ${propiedad_id || "—"}</p>
        <hr style="border: none; border-top: 1px solid #f0f0f0; margin: 14px 0;" />
        <p style="margin: 0 0 10px;"><strong>Nombre:</strong> ${nombre}</p>
        <p style="margin: 0 0 10px;"><strong>Teléfono:</strong> <a href="https://wa.me/52${(telefono || "").replace(/\D/g, "")}">${telefono}</a></p>
        ${email ? `<p style="margin: 0 0 10px;"><strong>Email:</strong> ${email}</p>` : ""}
        ${mensaje ? `<p style="margin: 0 0 10px;"><strong>Mensaje:</strong><br/>${mensaje}</p>` : ""}
      </div>
      <div style="text-align: center; margin-top: 28px;">
        <a href="https://wa.me/52${(telefono || "").replace(/\D/g, "")}" style="background: #25d366; color: #fff; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 15px;">
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

    if (!response.ok) {
      // Log detallado para revisar en Vercel -> Deployments -> Logs si algo vuelve a fallar
      console.error("Resend respondió con error:", response.status, JSON.stringify(data));
      return res.status(400).json({ error: data.message || `Resend error ${response.status}` });
    }

    console.log("Correo enviado correctamente, id de Resend:", data.id);
    return res.status(200).json({ success: true, resendId: data.id });
  } catch (error) {
    console.error("Excepción al enviar correo:", error.message);
    return res.status(500).json({ error: error.message });
  }
}
