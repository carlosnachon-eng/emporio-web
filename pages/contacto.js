import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", whatsapp: "", mensaje: "" });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleEnviar = async () => {
    setEnviando(true);
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, asunto: "Contacto desde el sitio web" }),
      });
      setEnviado(true);
    } catch (e) { console.error(e); }
    setEnviando(false);
  };

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <Navbar />

      <div style={{ padding: "80px 32px", background: "linear-gradient(120deg, #fff 0%, #fff5f5 100%)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>

            {/* Info */}
            <div>
              <p style={{ fontSize: 12, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 16px" }}>Hablemos</p>
              <h1 style={{ fontSize: 44, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px", lineHeight: 1.1 }}>Estamos aquí para ayudarte</h1>
              <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.8, margin: "0 0 48px" }}>
                Ya sea para vender, rentar o comprar, estamos listos para ayudarte a lograrlo sin estrés ni sorpresas.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { icon: "📍", label: "Dirección", value: "5to Retorno de Osa Menor 2A, Reserva Territorial Atlixcayotl, San Andrés Cholula, Pue." },
                  { icon: "📞", label: "Teléfono", value: "222 257 3237", href: "tel:2222573237" },
                  { icon: "✉️", label: "Email", value: "ventas@emporioinmobiliario.mx", href: "mailto:ventas@emporioinmobiliario.mx" },
                ].map(c => (
                  <div key={c.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: "#fff0f2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{c.icon}</div>
                    <div>
                      <p style={{ margin: "0 0 4px", fontSize: 12, fontWeight: 700, color: "#9ca3af", letterSpacing: "0.08em", textTransform: "uppercase" }}>{c.label}</p>
                      {c.href
                        ? <a href={c.href} style={{ fontSize: 16, fontWeight: 600, color: "#1a1a2e", textDecoration: "none" }}>{c.value}</a>
                        : <p style={{ margin: 0, fontSize: 15, color: "#374151", lineHeight: 1.6 }}>{c.value}</p>}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 40 }}>
                <p style={{ fontSize: 13, color: "#9ca3af", fontWeight: 600, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>Síguenos en redes</p>
                <div style={{ display: "flex", gap: 10 }}>
                  {[
                    { label: "FB", href: "https://www.facebook.com/share/1CNyXV7qBP/?mibextid=wwXIfr" },
                    { label: "IG", href: "https://www.instagram.com/emporio.inmobiliariopue?igsh=bDRndWNwdjhzcTdq&utm_source=qr" },
                    { label: "TT", href: "https://www.tiktok.com/@emporioinmobiliario?_r=1&_t=ZS-95xVsr3JVuH" },
                    { label: "YT", href: "https://youtube.com/@emporioinmobiliario1690?si=hoeUNniKIW7ZWuiR" },
                    { label: "X", href: "https://x.com/emporioinmo?s=21&t=RHixRnSwbbMJlCWmie693Q" },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{ width: 40, height: 40, borderRadius: 10, background: "#1a1a2e", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, textDecoration: "none" }}
                      onMouseEnter={e => e.currentTarget.style.background = "#C8102E"}
                      onMouseLeave={e => e.currentTarget.style.background = "#1a1a2e"}
                    >{s.label}</a>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div style={{ background: "#fff", borderRadius: 24, padding: "40px 36px", boxShadow: "0 4px 32px rgba(0,0,0,0.08)", border: "1px solid #f3f4f6" }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: "#1a1a2e", margin: "0 0 8px" }}>Envíanos un mensaje</h2>
              <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 32px" }}>Te contactaremos a la brevedad posible.</p>

              {enviado ? (
                <div style={{ background: "#f0fdf4", borderRadius: 16, padding: 40, textAlign: "center" }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{ color: "#065f46", margin: "0 0 8px" }}>¡Mensaje recibido!</h3>
                  <p style={{ color: "#6b7280", margin: 0 }}>Te contactaremos muy pronto.</p>
                </div>
              ) : (
                <>
                  {[
                    { label: "Nombre completo", key: "nombre", type: "text", placeholder: "Tu nombre" },
                    { label: "Correo electrónico", key: "email", type: "email", placeholder: "tu@email.com" },
                    { label: "WhatsApp", key: "whatsapp", type: "tel", placeholder: "2221234567" },
                  ].map(f => (
                    <div key={f.key} style={{ marginBottom: 18 }}>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 6 }}>{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} value={form[f.key]} onChange={e => setForm(v => ({ ...v, [f.key]: e.target.value }))}
                        style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1.5px solid #e5e7eb", fontSize: 14, boxSizing: "border-box", fontFamily: "'Montserrat', sans-serif" }} />
                    </div>
                  ))}
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 6 }}>Mensaje</label>
                    <textarea placeholder="¿En qué podemos ayudarte?" value={form.mensaje} onChange={e => setForm(v => ({ ...v, mensaje: e.target.value }))}
                      style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1.5px solid #e5e7eb", fontSize: 14, minHeight: 120, resize: "vertical", boxSizing: "border-box", fontFamily: "'Montserrat', sans-serif" }} />
                  </div>
                  <button onClick={handleEnviar} disabled={enviando || !form.nombre || !form.whatsapp}
                    style={{ width: "100%", background: "#C8102E", color: "#fff", border: "none", borderRadius: 12, padding: "14px", fontWeight: 800, fontSize: 15, cursor: enviando ? "not-allowed" : "pointer", opacity: enviando ? 0.7 : 1, fontFamily: "'Montserrat', sans-serif", marginBottom: 12 }}>
                    {enviando ? "Enviando..." : "Enviar mensaje →"}
                  </button>
                  <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" style={{ display: "block", width: "100%", background: "#25d366", color: "#fff", borderRadius: 12, padding: "14px", fontWeight: 800, fontSize: 15, textAlign: "center", textDecoration: "none", boxSizing: "border-box" }}>
                    💬 O escríbenos por WhatsApp
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" style={{ position: "fixed", bottom: 24, right: 24, background: "#25d366", color: "#fff", width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, boxShadow: "0 4px 16px rgba(0,0,0,0.2)", textDecoration: "none", zIndex: 100 }}>💬</a>
    </div>
  );
}
