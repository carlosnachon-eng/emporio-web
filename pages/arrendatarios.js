import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const REQUISITOS = [
  { icon: "🔑", title: "1 mes de renta", desc: "Pago del primer mes de renta al momento de la firma del contrato." },
  { icon: "🔒", title: "1 mes de depósito", desc: "Depósito en garantía equivalente a un mes de renta." },
  { icon: "📄", title: "Contrato por 1 año", desc: "Se firma un contrato de arrendamiento con vigencia de 12 meses." },
  { icon: "📋", title: "Documentos requeridos", desc: "INE vigente y 3 últimos meses de comprobantes de ingresos." },
  { icon: "📝", title: "Llenar la solicitud", desc: "Completar nuestra solicitud de arrendamiento en línea para evaluar tu perfil." },
  { icon: "⚖️", title: "Cubrir la Póliza Jurídica", desc: "Trámite de póliza jurídica que garantiza el contrato para ambas partes." },
];

export default function Arrendatarios() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <Navbar transparent={true} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 32px 100px", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.15)", border: "1px solid rgba(200,16,46,0.3)", padding: "6px 16px", borderRadius: 99, marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C8102E", display: "inline-block" }} />
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Para arrendatarios</span>
            </div>
            <h1 style={{ fontSize: 56, fontWeight: 900, color: "#fff", lineHeight: 1.1, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
              Rentar nunca<br />había sido tan <span style={{ color: "#C8102E" }}>fácil</span>
            </h1>
            <p style={{ fontSize: 20, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: "0 0 40px" }}>
              Tu nuevo hogar te espera. Mudarte es sencillo con nosotros — te acompañamos desde la primera visita hasta la entrega de llaves.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="/propiedades?operacion=rental" style={{ background: "#C8102E", color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
                Ver propiedades en renta →
              </a>
              <a href="https://app.emporioinmobiliario.com.mx/solicitud" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
                Solicitud de arrendamiento
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Requisitos */}
      <div style={{ padding: "100px 32px", background: "#f8f8fa" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: 12, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 12px" }}>Lo que necesitas</p>
            <h2 style={{ fontSize: 40, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>Requisitos para rentar</h2>
            <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 500, margin: "0 auto" }}>Un proceso claro y transparente para que puedas mudarte sin sorpresas.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {REQUISITOS.map((r, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "32px 28px", border: "1px solid rgba(0,0,0,0.05)", display: "flex", gap: 20 }}>
                <div style={{ fontSize: 36, flexShrink: 0, lineHeight: 1 }}>{r.icon}</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1a1a2e", margin: "0 0 8px" }}>{r.title}</h3>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proceso simplificado */}
      <div style={{ padding: "80px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>¿Cómo es el proceso?</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {[
              { num: "1", title: "Elige tu propiedad", desc: "Explora nuestro catálogo y agenda una visita." },
              { num: "2", title: "Llena la solicitud", desc: "Completa tu solicitud de arrendamiento en línea." },
              { num: "3", title: "Revisión de perfil", desc: "Evaluamos tu documentación en 24-48 horas." },
              { num: "4", title: "¡A mudarte!", desc: "Firmas el contrato y recibes tus llaves." },
            ].map((p, i) => (
              <div key={i} style={{ textAlign: "center", padding: 24, background: "#f8f8fa", borderRadius: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#C8102E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 900, margin: "0 auto 16px" }}>{p.num}</div>
                <h4 style={{ fontSize: 14, fontWeight: 800, color: "#1a1a2e", margin: "0 0 8px" }}>{p.title}</h4>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "80px 32px", background: "#C8102E", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: "#fff", margin: "0 0 16px" }}>¡Tu nuevo hogar te espera!</h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", margin: "0 0 40px" }}>Contáctanos hoy y asegura la casa de tus sueños.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/propiedades?operacion=rental" style={{ background: "#fff", color: "#C8102E", padding: "14px 32px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
              Ver propiedades
            </a>
            <a href="https://app.emporioinmobiliario.com.mx/solicitud" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>
              Llenar solicitud
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" style={{ position: "fixed", bottom: 24, right: 24, background: "#25d366", color: "#fff", width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, boxShadow: "0 4px 16px rgba(0,0,0,0.25)", textDecoration: "none", zIndex: 100 }}>💬</a>
    </div>
  );
}
