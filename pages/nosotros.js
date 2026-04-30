import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Nosotros() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <Navbar />

      {/* Hero */}
      <div style={{ background: "linear-gradient(120deg, #fff 0%, #fff5f5 100%)", padding: "80px 32px 100px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,16,46,0.06) 0%, transparent 70%)" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff0f2", border: "1px solid #fecdd3", padding: "6px 16px", borderRadius: 99, marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C8102E", display: "inline-block" }} />
            <span style={{ fontSize: 12, color: "#C8102E", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Nuestra historia</span>
          </div>
          <h1 style={{ fontSize: 54, fontWeight: 900, color: "#1a1a2e", lineHeight: 1.1, margin: "0 0 24px" }}>¿Quiénes somos?</h1>
          <p style={{ fontSize: 18, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>
            Una empresa familiar con corazón profesional, más de 20 años en el mercado inmobiliario poblano y una misión muy clara.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div style={{ padding: "80px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 12, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 16px" }}>Historia y propósito</p>
            <h2 style={{ fontSize: 38, fontWeight: 900, color: "#1a1a2e", margin: "0 0 24px", lineHeight: 1.2 }}>Hacer del proceso inmobiliario algo humano</h2>
            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.8, margin: "0 0 20px" }}>
              Emporio Inmobiliario nace con una misión clara: hacer que vender, rentar o encontrar una propiedad en Puebla sea una experiencia sencilla, segura y humana.
            </p>
            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.8, margin: 0 }}>
              Con más de 20 años de trayectoria en el mercado, somos una empresa familiar con corazón profesional. Nuestro enfoque es acompañarte con transparencia y compromiso real en cada paso del proceso.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[["5,000+", "Propiedades promovidas", "🏠"], ["3,000+", "Operaciones cerradas", "🤝"], ["20+", "Años de experiencia", "⭐"], ["90K+", "Seguidores en TikTok", "📱"]].map(([val, label, icon]) => (
              <div key={label} style={{ background: "#fafafa", borderRadius: 20, padding: 28, textAlign: "center", border: "1px solid #f3f4f6" }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
                <div style={{ fontSize: 32, fontWeight: 900, color: "#C8102E", lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: 13, color: "#6b7280", marginTop: 8 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Equipo */}
      <div style={{ padding: "80px 32px", background: "#fafafa" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 12, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 12px" }}>Las personas detrás</p>
            <h2 style={{ fontSize: 38, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>Nuestro equipo</h2>
            <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 560, margin: "0 auto" }}>Asesores, asistentes y personal administrativo que comparten los valores de cercanía, responsabilidad y resultados.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
            {[
              { nombre: "Carlos Nachón", rol: "Fundador y Director", inicial: "CN", bio1: "Carlos Nachón fundó Emporio Inmobiliario hace más de 20 años con una visión muy clara: profesionalizar el servicio inmobiliario en Puebla y crear una empresa donde la ética, la constancia y el servicio de calidad fueran el estándar.", bio2: "Hoy lidera el equipo de ventas, coordina las operaciones estratégicas y sigue involucrado personalmente en los cierres más importantes." },
              { nombre: "Ivonne Torres", rol: "Imagen y corazón de Emporio", inicial: "IT", bio1: "Ivonne es la cara visible de Emporio Inmobiliario en TikTok, donde más de 90,000 personas siguen sus recomendaciones, tips y videos de propiedades.", bio2: "Es socia, embajadora de marca y quien representa la calidez y atención cercana que caracteriza nuestro servicio. Su experiencia en relaciones públicas y atención a propietarios es una pieza clave en cada operación." },
            ].map((p) => (
              <div key={p.nombre} style={{ background: "#fff", borderRadius: 24, padding: "40px 36px", border: "1px solid #f3f4f6", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: "#C8102E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 900, flexShrink: 0 }}>{p.inicial}</div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "#1a1a2e" }}>{p.nombre}</h3>
                    <p style={{ margin: "4px 0 0", fontSize: 14, color: "#C8102E", fontWeight: 600 }}>{p.rol}</p>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.8, margin: "0 0 14px" }}>{p.bio1}</p>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.8, margin: 0 }}>{p.bio2}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Valores */}
      <div style={{ padding: "80px 32px", background: "#1a1a2e" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: "#fff", margin: 0 }}>Nuestros valores</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {[
              { icon: "🤝", val: "Cercanía", desc: "Atención personalizada en cada etapa." },
              { icon: "🎯", val: "Resultados", desc: "Enfocados en cerrar cada operación con éxito." },
              { icon: "🔒", val: "Confianza", desc: "Transparencia y honestidad en todo momento." },
              { icon: "⚡", val: "Eficiencia", desc: "Tecnología y procesos para darte el mejor servicio." },
            ].map((v) => (
              <div key={v.val} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "28px 24px", textAlign: "center" }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{v.icon}</div>
                <h4 style={{ fontSize: 16, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>{v.val}</h4>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", margin: 0, lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "80px 32px", background: "#C8102E", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: 38, fontWeight: 900, color: "#fff", margin: "0 0 16px", lineHeight: 1.2 }}>Si estás buscando a alguien que cuide tu patrimonio como si fuera propio, estás en el lugar correcto.</h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", margin: "0 0 40px" }}>¡Conversemos! Estamos listos para ayudarte sin estrés ni sorpresas.</p>
          <a href="/contacto" style={{ background: "#fff", color: "#C8102E", padding: "16px 40px", borderRadius: 12, fontWeight: 800, fontSize: 16, textDecoration: "none" }}>Quiero contactarlos →</a>
        </div>
      </div>

      <Footer />
      <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" style={{ position: "fixed", bottom: 24, right: 24, background: "#25d366", color: "#fff", width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, boxShadow: "0 4px 16px rgba(0,0,0,0.2)", textDecoration: "none", zIndex: 100 }}>💬</a>
    </div>
  );
}
