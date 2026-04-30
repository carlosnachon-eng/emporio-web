import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CSS = `
* { box-sizing: border-box; }
@media (max-width: 768px) {
  .g2  { grid-template-columns: 1fr !important; }
  .g2s { grid-template-columns: 1fr 1fr !important; }
  .g4  { grid-template-columns: 1fr 1fr !important; }
  .hero-pad { padding: 48px 20px 60px !important; }
  .sec-pad  { padding: 52px 20px !important; }
  .h1 { font-size: 32px !important; }
  .h2 { font-size: 24px !important; }
  .historia-gap { gap: 40px !important; }
}
@media (max-width: 480px) {
  .g2s { grid-template-columns: 1fr 1fr !important; }
  .g4  { grid-template-columns: 1fr 1fr !important; }
  .h1 { font-size: 26px !important; }
}
`;

export default function Nosotros() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <Navbar />

      {/* Hero */}
      <div style={{ background: "linear-gradient(120deg, #fff 0%, #fff5f5 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,16,46,0.06) 0%, transparent 70%)" }} />
        <div className="hero-pad" style={{ maxWidth: 700, margin: "0 auto", padding: "72px 32px 88px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff0f2", border: "1px solid #fecdd3", padding: "6px 16px", borderRadius: 99, marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C8102E", display: "inline-block" }} />
            <span style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Nuestra historia</span>
          </div>
          <h1 className="h1" style={{ fontSize: 52, fontWeight: 900, color: "#1a1a2e", lineHeight: 1.1, margin: "0 0 20px" }}>¿Quiénes somos?</h1>
          <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>
            Una empresa familiar con corazón profesional, más de 20 años en el mercado inmobiliario poblano y una misión muy clara.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="g2 historia-gap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 14px" }}>Historia y propósito</p>
              <h2 className="h2" style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px", lineHeight: 1.2 }}>Hacer del proceso inmobiliario algo humano</h2>
              <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.8, margin: "0 0 16px" }}>
                Emporio Inmobiliario nace con una misión clara: hacer que vender, rentar o encontrar una propiedad en Puebla sea una experiencia sencilla, segura y humana.
              </p>
              <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.8, margin: 0 }}>
                Con más de 20 años de trayectoria en el mercado, somos una empresa familiar con corazón profesional. Nuestro enfoque es acompañarte con transparencia en cada paso.
              </p>
            </div>
            <div className="g2s" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[["5,000+","Propiedades promovidas","🏠"],["3,000+","Operaciones cerradas","🤝"],["20+","Años de experiencia","⭐"],["90K+","Seguidores en TikTok","📱"]].map(([val,label,icon]) => (
                <div key={label} style={{ background: "#fafafa", borderRadius: 16, padding: "24px 20px", textAlign: "center", border: "1px solid #f3f4f6" }}>
                  <div style={{ fontSize: 26, marginBottom: 6 }}>{icon}</div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: "#C8102E", lineHeight: 1 }}>{val}</div>
                  <div style={{ fontSize: 12, color: "#6b7280", marginTop: 6 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Equipo */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#fafafa" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>Las personas detrás</p>
            <h2 className="h2" style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: "0 0 14px" }}>Nuestro equipo</h2>
            <p style={{ fontSize: 15, color: "#6b7280", maxWidth: 520, margin: "0 auto" }}>Asesores, asistentes y personal que comparten los valores de cercanía, responsabilidad y resultados.</p>
          </div>
          <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[
              { nombre: "Carlos Nachón", rol: "Fundador y Director", inicial: "CN", bio1: "Carlos Nachón fundó Emporio Inmobiliario hace más de 20 años con una visión muy clara: profesionalizar el servicio inmobiliario en Puebla.", bio2: "Hoy lidera el equipo de ventas y se involucra personalmente en los cierres más importantes." },
              { nombre: "Ivonne Torres", rol: "Imagen y corazón de Emporio", inicial: "IT", bio1: "Ivonne es la cara visible de Emporio en TikTok, donde más de 90,000 personas siguen sus recomendaciones, tips y videos de propiedades.", bio2: "Es socia, embajadora de marca y pieza clave en cada operación. Su experiencia en relaciones públicas es fundamental." },
            ].map((p) => (
              <div key={p.nombre} style={{ background: "#fff", borderRadius: 20, padding: "36px 32px", border: "1px solid #f3f4f6", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#C8102E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 900, flexShrink: 0 }}>{p.inicial}</div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#1a1a2e" }}>{p.nombre}</h3>
                    <p style={{ margin: "4px 0 0", fontSize: 13, color: "#C8102E", fontWeight: 600 }}>{p.rol}</p>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.8, margin: "0 0 12px" }}>{p.bio1}</p>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.8, margin: 0 }}>{p.bio2}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#1a1a2e" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 className="h2" style={{ fontSize: 34, fontWeight: 900, color: "#fff", margin: 0 }}>Nuestros valores</h2>
          </div>
          <div className="g4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { icon: "🤝", val: "Cercanía", desc: "Atención personalizada en cada etapa." },
              { icon: "🎯", val: "Resultados", desc: "Enfocados en cerrar cada operación." },
              { icon: "🔒", val: "Confianza", desc: "Transparencia y honestidad siempre." },
              { icon: "⚡", val: "Eficiencia", desc: "Tecnología para el mejor servicio." },
            ].map((v) => (
              <div key={v.val} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "28px 20px", textAlign: "center" }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{v.icon}</div>
                <h4 style={{ fontSize: 15, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>{v.val}</h4>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", margin: 0, lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#C8102E", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 className="h2" style={{ fontSize: 36, fontWeight: 900, color: "#fff", margin: "0 0 14px", lineHeight: 1.2 }}>Si estás buscando a alguien que cuide tu patrimonio como si fuera propio, estás en el lugar correcto.</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", margin: "0 0 36px" }}>¡Conversemos! Estamos listos para ayudarte sin estrés ni sorpresas.</p>
          <a href="/contacto" style={{ background: "#fff", color: "#C8102E", padding: "16px 40px", borderRadius: 12, fontWeight: 800, fontSize: 16, textDecoration: "none" }}>Quiero contactarlos →</a>
        </div>
      </div>

      <Footer />
      <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" style={{ position: "fixed", bottom: 24, right: 24, background: "#25d366", color: "#fff", width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, boxShadow: "0 4px 16px rgba(0,0,0,0.2)", textDecoration: "none", zIndex: 100 }}>💬</a>
    </div>
  );
}
