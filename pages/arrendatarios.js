import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CSS = `
* { box-sizing: border-box; }
@media (max-width: 768px) {
  .g2  { grid-template-columns: 1fr !important; }
  .g3  { grid-template-columns: 1fr 1fr !important; }
  .g4  { grid-template-columns: 1fr 1fr !important; }
  .hero-pad { padding: 48px 20px 60px !important; }
  .sec-pad  { padding: 52px 20px !important; }
  .h1 { font-size: 32px !important; }
  .h2 { font-size: 24px !important; }
  .btn-group { flex-direction: column !important; }
}
@media (max-width: 480px) {
  .g3 { grid-template-columns: 1fr !important; }
  .g4 { grid-template-columns: 1fr !important; }
  .h1 { font-size: 26px !important; }
}
`;

const REQUISITOS = [
  { icon: "🔑", title: "1 mes de renta", desc: "Pago del primer mes de renta al momento de la firma del contrato." },
  { icon: "🔒", title: "1 mes de depósito", desc: "Depósito en garantía equivalente a un mes de renta." },
  { icon: "📄", title: "Contrato por 1 año", desc: "Se firma un contrato de arrendamiento con vigencia de 12 meses." },
  { icon: "📋", title: "Documentos requeridos", desc: "INE vigente y 3 últimos meses de comprobantes de ingresos." },
  { icon: "📝", title: "Llenar la solicitud", desc: "Completar nuestra solicitud de arrendamiento en línea." },
  { icon: "⚖️", title: "Póliza Jurídica", desc: "Trámite de póliza jurídica que garantiza el contrato para ambas partes." },
];

export default function Arrendatarios() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <Navbar />

      {/* Hero */}
      <div style={{ background: "linear-gradient(120deg, #fff 0%, #fff5f5 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,16,46,0.06) 0%, transparent 70%)" }} />
        <div className="hero-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 32px 88px", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff0f2", border: "1px solid #fecdd3", padding: "6px 16px", borderRadius: 99, marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C8102E", display: "inline-block" }} />
              <span style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Para arrendatarios</span>
            </div>
            <h1 className="h1" style={{ fontSize: 52, fontWeight: 900, color: "#1a1a2e", lineHeight: 1.1, margin: "0 0 20px" }}>
              Rentar nunca había<br />sido tan <span style={{ color: "#C8102E" }}>fácil</span>
            </h1>
            <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.7, margin: "0 0 36px" }}>
              Tu nuevo hogar te espera. Te acompañamos desde la primera visita hasta la entrega de llaves.
            </p>
            <div className="btn-group" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="https://app.emporioinmobiliario.com.mx/propiedades?operacion=rental" style={{ display: "inline-block", background: "#C8102E", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
                Ver propiedades en renta →
              </a>
              <a href="https://app.emporioinmobiliario.com.mx/solicitud" style={{ display: "inline-block", background: "#fff", color: "#1a1a2e", padding: "14px 28px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none", border: "2px solid #e5e7eb" }}>
                Solicitud de arrendamiento
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Requisitos */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#fafafa" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>Lo que necesitas</p>
            <h2 className="h2" style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: "0 0 14px" }}>Requisitos para rentar</h2>
            <p style={{ fontSize: 15, color: "#6b7280", maxWidth: 480, margin: "0 auto" }}>Un proceso claro y transparente para que puedas mudarte sin sorpresas.</p>
          </div>
          <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {REQUISITOS.map((r, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "28px 24px", border: "1px solid #f3f4f6", display: "flex", gap: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize: 32, flexShrink: 0, lineHeight: 1 }}>{r.icon}</div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1a1a2e", margin: "0 0 6px" }}>{r.title}</h3>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proceso */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 className="h2" style={{ fontSize: 34, fontWeight: 900, color: "#1a1a2e", margin: 0 }}>¿Cómo es el proceso?</h2>
          </div>
          <div className="g4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { num: "1", title: "Elige tu propiedad", desc: "Explora nuestro catálogo y agenda una visita." },
              { num: "2", title: "Llena la solicitud", desc: "Completa tu solicitud en línea." },
              { num: "3", title: "Revisión de perfil", desc: "Evaluamos tu documentación en 24-48 hrs." },
              { num: "4", title: "¡A mudarte!", desc: "Firmas el contrato y recibes tus llaves." },
            ].map((p, i) => (
              <div key={i} style={{ textAlign: "center", padding: 24, background: "#fafafa", borderRadius: 16, border: "1px solid #f3f4f6" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#C8102E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 900, margin: "0 auto 14px" }}>{p.num}</div>
                <h4 style={{ fontSize: 14, fontWeight: 800, color: "#1a1a2e", margin: "0 0 8px" }}>{p.title}</h4>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#C8102E", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 className="h2" style={{ fontSize: 38, fontWeight: 900, color: "#fff", margin: "0 0 14px" }}>¡Tu nuevo hogar te espera!</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", margin: "0 0 36px" }}>Contáctanos hoy y asegura la casa de tus sueños.</p>
          <div className="btn-group" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://app.emporioinmobiliario.com.mx/propiedades?operacion=rental" style={{ background: "#fff", color: "#C8102E", padding: "14px 28px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>Ver propiedades</a>
            <a href="https://app.emporioinmobiliario.com.mx/solicitud" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>Llenar solicitud</a>
          </div>
        </div>
      </div>

      <Footer />
      <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" style={{ position: "fixed", bottom: 24, right: 24, background: "#25d366", color: "#fff", width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, boxShadow: "0 4px 16px rgba(0,0,0,0.2)", textDecoration: "none", zIndex: 100 }}>💬</a>
    </div>
  );
}
