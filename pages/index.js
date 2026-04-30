import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fmt = (n) => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", minimumFractionDigits: 0 }).format(n || 0);

const BENEFICIOS = [
  { icon: "🏆", title: "+20 años de experiencia", desc: "Líderes en el mercado inmobiliario poblano desde hace más de dos décadas." },
  { icon: "💸", title: "Sin costo hasta cerrar", desc: "No pagas nada hasta que se firma el contrato. Cero riesgo para ti." },
  { icon: "📱", title: "+20 portales especializados", desc: "Tu propiedad en TikTok, Instagram, Facebook y más de 20 portales." },
  { icon: "🔍", title: "Filtramos a los clientes", desc: "Verificamos a los interesados y acompañamos cada visita contigo." },
  { icon: "⚖️", title: "Asesoría legal incluida", desc: "Contrato, cláusulas y revisión legal sin costo adicional." },
  { icon: "📊", title: "Reportes semanales", desc: "Te informamos del avance de tu propiedad cada semana." },
];

const PASOS = [
  { num: "01", title: "Nos compartes tu propiedad", desc: "Cuéntanos los detalles y agendamos una visita." },
  { num: "02", title: "Fotos y publicación", desc: "Tomamos fotos profesionales y publicamos en todos los portales." },
  { num: "03", title: "Filtramos interesados", desc: "Atendemos a los clientes y filtramos a los más serios." },
  { num: "04", title: "Firma de contrato", desc: "Firmamos el contrato contigo y con el cliente con asesoría legal." },
  { num: "05", title: "Tú cobras, nosotros también", desc: "Recibes tu renta o venta y nosotros cobramos nuestra comisión." },
];

function StatCounter({ value, label }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const target = parseInt(value.replace(/\D/g, ""));
    const step = Math.ceil(target / 60);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: 52, fontWeight: 900, color: "#C8102E", lineHeight: 1, fontFamily: "'Montserrat', sans-serif" }}>
        +{count.toLocaleString()}
      </div>
      <div style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", marginTop: 8, fontWeight: 500 }}>{label}</div>
    </div>
  );
}

export default function Home({ propiedadesDestacadas = [] }) {
  const [busqueda, setBusqueda] = useState("rental");

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div style={{ position: "relative", minHeight: "100vh", background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #2d1a1a 100%)", overflow: "hidden" }}>
        {/* Patrón decorativo */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div style={{ position: "absolute", top: -100, right: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,16,46,0.15) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -50, left: -50, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,16,46,0.08) 0%, transparent 70%)" }} />

        <Navbar transparent={true} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 32px 100px", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 700 }}>
            {/* Eyebrow */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.15)", border: "1px solid rgba(200,16,46,0.3)", padding: "6px 16px", borderRadius: 99, marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C8102E", display: "inline-block" }} />
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Puebla, México · +20 años de experiencia</span>
            </div>

            <h1 style={{ fontSize: 62, fontWeight: 900, color: "#fff", lineHeight: 1.1, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
              Tu propiedad,<br />
              <span style={{ color: "#C8102E" }}>nuestra</span> prioridad.
            </h1>
            <p style={{ fontSize: 20, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: "0 0 48px", maxWidth: 560 }}>
              Vende, renta o encuentra tu próxima propiedad en Puebla. Sin estrés, sin sorpresas, con más de 20 años de experiencia a tu lado.
            </p>

            {/* Buscador */}
            <div style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 16, padding: 24, maxWidth: 560 }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                {[{ v: "rental", l: "🏠 Renta" }, { v: "sale", l: "🏡 Venta" }].map(op => (
                  <button key={op.v} onClick={() => setBusqueda(op.v)} style={{
                    flex: 1, padding: "10px 0", borderRadius: 8, border: "none", cursor: "pointer",
                    fontWeight: 700, fontSize: 14, fontFamily: "'Montserrat', sans-serif",
                    background: busqueda === op.v ? "#C8102E" : "rgba(255,255,255,0.08)",
                    color: "#fff", transition: "all 0.2s",
                  }}>{op.l}</button>
                ))}
              </div>
              <a href={`/propiedades?operacion=${busqueda}`} style={{
                display: "block", width: "100%", background: "#fff", color: "#1a1a2e",
                padding: "14px 0", borderRadius: 10, fontWeight: 800, fontSize: 16,
                textAlign: "center", textDecoration: "none", letterSpacing: "0.02em",
                boxSizing: "border-box",
              }}>
                🔍 Ver propiedades disponibles
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Descubre más</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
        </div>
      </div>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <div style={{ background: "#1a1a2e", padding: "64px 32px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48 }}>
          <StatCounter value="5000" label="Propiedades promovidas" />
          <StatCounter value="3000" label="Operaciones cerradas" />
          <StatCounter value="20" label="Años de experiencia" />
        </div>
      </div>

      {/* ── DOS CAMINOS ───────────────────────────────────────── */}
      <div style={{ padding: "100px 32px", background: "#f8f8fa" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: 12, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 12px" }}>¿Qué necesitas hoy?</p>
            <h2 style={{ fontSize: 42, fontWeight: 900, color: "#1a1a2e", margin: 0, letterSpacing: "-0.02em" }}>Estamos para los dos lados</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {/* Propietario */}
            <a href="/propietarios" style={{ textDecoration: "none", display: "block" }}>
              <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "52px 48px", position: "relative", overflow: "hidden", cursor: "pointer", transition: "transform 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(200,16,46,0.12)" }} />
                <div style={{ fontSize: 48, marginBottom: 20 }}>🏠</div>
                <h3 style={{ fontSize: 28, fontWeight: 900, color: "#fff", margin: "0 0 16px" }}>Tengo una propiedad</h3>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: "0 0 32px" }}>
                  Renta o vende sin complicaciones. Nosotros nos encargamos de todo y tú no pagas nada hasta cerrar.
                </p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#C8102E", color: "#fff", padding: "12px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14 }}>
                  Quiero promover mi propiedad →
                </span>
              </div>
            </a>

            {/* Buscador */}
            <a href="/propiedades" style={{ textDecoration: "none", display: "block" }}>
              <div style={{ background: "#C8102E", borderRadius: 20, padding: "52px 48px", position: "relative", overflow: "hidden", cursor: "pointer", transition: "transform 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
                <div style={{ fontSize: 48, marginBottom: 20 }}>🔑</div>
                <h3 style={{ fontSize: 28, fontWeight: 900, color: "#fff", margin: "0 0 16px" }}>Busco una propiedad</h3>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: "0 0 32px" }}>
                  Tenemos más de 50 opciones activas en Puebla. Encuentra tu casa o departamento ideal hoy.
                </p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#C8102E", padding: "12px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14 }}>
                  Ver propiedades disponibles →
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ── PROPIEDADES DESTACADAS ────────────────────────────── */}
      {propiedadesDestacadas.length > 0 && (
        <div style={{ padding: "100px 32px", background: "#fff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
              <div>
                <p style={{ fontSize: 12, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 12px" }}>Catálogo activo</p>
                <h2 style={{ fontSize: 42, fontWeight: 900, color: "#1a1a2e", margin: 0, letterSpacing: "-0.02em" }}>Propiedades destacadas</h2>
              </div>
              <a href="/propiedades" style={{ color: "#C8102E", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Ver todas →</a>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {propiedadesDestacadas.slice(0, 3).map(p => {
                const op = p.operations?.[0];
                const precio = op?.amount || 0;
                const img = p.title_image_thumb || p.title_image_full;
                const esVenta = op?.type === "sale";
                return (
                  <a key={p.public_id} href={`/propiedad/${p.public_id}`} style={{ textDecoration: "none" }}>
                    <div style={{ borderRadius: 16, overflow: "hidden", background: "#f8f8fa", transition: "transform 0.2s, box-shadow 0.2s" }}
                      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)"; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                    >
                      <div style={{ height: 220, background: "#e5e7eb", position: "relative", overflow: "hidden" }}>
                        {img && <img src={img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                        <div style={{ position: "absolute", top: 12, left: 12 }}>
                          <span style={{ background: esVenta ? "#c8a96e" : "#1a1a2e", color: esVenta ? "#1a1a2e" : "#c8a96e", padding: "4px 10px", borderRadius: 99, fontSize: 11, fontWeight: 800 }}>
                            {esVenta ? "EN VENTA" : "EN RENTA"}
                          </span>
                        </div>
                      </div>
                      <div style={{ padding: "20px 20px 24px" }}>
                        <h4 style={{ margin: "0 0 8px", fontSize: 15, fontWeight: 700, color: "#1a1a2e", lineHeight: 1.3 }}>{p.title}</h4>
                        <p style={{ margin: "0 0 12px", fontSize: 12, color: "#9ca3af" }}>📍 {typeof p.location === "string" ? p.location : ""}</p>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontSize: 18, fontWeight: 900, color: "#C8102E" }}>{fmt(precio)}</span>
                          <div style={{ display: "flex", gap: 10 }}>
                            {p.bedrooms > 0 && <span style={{ fontSize: 12, color: "#6b7280" }}>🛏 {p.bedrooms}</span>}
                            {p.bathrooms > 0 && <span style={{ fontSize: 12, color: "#6b7280" }}>🚿 {p.bathrooms}</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ── BENEFICIOS ────────────────────────────────────────── */}
      <div style={{ padding: "100px 32px", background: "#f8f8fa" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: 12, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 12px" }}>Por qué elegirnos</p>
            <h2 style={{ fontSize: 42, fontWeight: 900, color: "#1a1a2e", margin: 0, letterSpacing: "-0.02em" }}>Beneficios Emporio</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {BENEFICIOS.map((b, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "32px 28px", border: "1px solid rgba(0,0,0,0.05)", transition: "box-shadow 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
              >
                <div style={{ fontSize: 36, marginBottom: 16 }}>{b.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1a1a2e", margin: "0 0 10px" }}>{b.title}</h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CÓMO FUNCIONA ─────────────────────────────────────── */}
      <div style={{ padding: "100px 32px", background: "#1a1a2e" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: 12, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 12px" }}>El proceso</p>
            <h2 style={{ fontSize: 42, fontWeight: 900, color: "#fff", margin: 0, letterSpacing: "-0.02em" }}>¿Cómo funciona?</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
            {PASOS.map((paso, i) => (
              <div key={i} style={{ position: "relative" }}>
                {i < PASOS.length - 1 && (
                  <div style={{ position: "absolute", top: 28, left: "60%", width: "80%", height: 1, background: "rgba(200,16,46,0.3)" }} />
                )}
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "28px 20px", textAlign: "center" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#C8102E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 900, margin: "0 auto 16px" }}>{paso.num}</div>
                  <h4 style={{ fontSize: 13, fontWeight: 700, color: "#fff", margin: "0 0 8px", lineHeight: 1.4 }}>{paso.title}</h4>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: 0 }}>{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── EQUIPO ────────────────────────────────────────────── */}
      <div style={{ padding: "100px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: 12, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 12px" }}>Las personas detrás</p>
            <h2 style={{ fontSize: 42, fontWeight: 900, color: "#1a1a2e", margin: 0, letterSpacing: "-0.02em" }}>Nuestro equipo</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, maxWidth: 900, margin: "0 auto" }}>
            {[
              { nombre: "Carlos Nachón", rol: "Fundador y Director", inicial: "CN", desc: "Carlos fundó Emporio Inmobiliario hace más de 20 años con una visión clara: profesionalizar el servicio inmobiliario en Puebla. Hoy lidera el equipo de ventas y se involucra personalmente en los cierres más importantes." },
              { nombre: "Ivonne Torres", rol: "Imagen y corazón de Emporio", inicial: "IT", desc: "Ivonne es la cara visible de Emporio en TikTok, donde más de 60,000 personas siguen sus recomendaciones. Es socia, embajadora de marca y pieza clave en cada operación que cerramos." },
            ].map((p, i) => (
              <div key={i} style={{ background: "#f8f8fa", borderRadius: 20, padding: "40px 36px", display: "flex", gap: 24 }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: "#1a1a2e", color: "#C8102E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 900, flexShrink: 0 }}>{p.inicial}</div>
                <div>
                  <h3 style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 800, color: "#1a1a2e" }}>{p.nombre}</h3>
                  <p style={{ margin: "0 0 16px", fontSize: 13, color: "#C8102E", fontWeight: 600 }}>{p.rol}</p>
                  <p style={{ margin: 0, fontSize: 14, color: "#6b7280", lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RESEÑAS ───────────────────────────────────────────── */}
      <div style={{ padding: "100px 32px", background: "#f8f8fa" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: 12, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 12px" }}>Lo que dicen</p>
            <h2 style={{ fontSize: 42, fontWeight: 900, color: "#1a1a2e", margin: 0, letterSpacing: "-0.02em" }}>Clientes satisfechos</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { nombre: "Adriana Miron", texto: "La inmobiliaria siempre está atenta, Carlos es muy amable igual que María José. Escucharon mis necesidades y me apoyaron con lo que les pedía.", estrellas: 5 },
              { nombre: "Eduardo Alarcon", texto: "El día de hoy estoy estrenando mi propiedad y Emporio Inmobiliario me guió, asesoró, acompañó y me aguantó mis mil preguntas en todo el proceso.", estrellas: 5 },
              { nombre: "Jeann Zel", texto: "Muy confiables, visitaron mi propiedad y la compartieron enseguida. En menos de 1 mes logramos tener un trato. Estuvieron al pendiente en todo momento.", estrellas: 5 },
            ].map((r, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "32px 28px", border: "1px solid rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                  {[...Array(r.estrellas)].map((_, j) => <span key={j} style={{ color: "#f59e0b", fontSize: 16 }}>★</span>)}
                </div>
                <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.7, margin: "0 0 20px", fontStyle: "italic" }}>"{r.texto}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#1a1a2e", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700 }}>
                    {r.nombre[0]}
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "#1a1a2e" }}>{r.nombre}</p>
                    <p style={{ margin: 0, fontSize: 11, color: "#9ca3af" }}>Reseña verificada Google</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA FINAL ─────────────────────────────────────────── */}
      <div style={{ padding: "100px 32px", background: "#C8102E", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: 48, fontWeight: 900, color: "#fff", margin: "0 0 20px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            ¿Listo para dar el siguiente paso?
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", margin: "0 0 48px", lineHeight: 1.7 }}>
            Ya sea que quieras vender, rentar o encontrar tu próxima casa, estamos aquí para ayudarte sin complicaciones.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" style={{ background: "#fff", color: "#C8102E", padding: "16px 36px", borderRadius: 12, fontWeight: 800, fontSize: 16, textDecoration: "none" }}>
              💬 Escríbenos por WhatsApp
            </a>
            <a href="/propiedades" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "16px 36px", borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>
              Ver propiedades →
            </a>
          </div>
        </div>
      </div>

      <Footer />

      {/* WhatsApp flotante */}
      <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" style={{ position: "fixed", bottom: 24, right: 24, background: "#25d366", color: "#fff", width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, boxShadow: "0 4px 16px rgba(0,0,0,0.25)", textDecoration: "none", zIndex: 100 }}>
        💬
      </a>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://api.easybroker.com/v1/properties?page=1&limit=6&search[statuses][]=published", {
      headers: { "X-Authorization": process.env.EASYBROKER_API_KEY, "accept": "application/json" },
    });
    const data = await res.json();
    return { props: { propiedadesDestacadas: data.content || [] } };
  } catch (e) {
    return { props: { propiedadesDestacadas: [] } };
  }
}
