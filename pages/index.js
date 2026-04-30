import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fmt = (n) => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", minimumFractionDigits: 0 }).format(n || 0);

const BENEFICIOS = [
  { icon: "🏆", title: "+20 años de experiencia", desc: "Líderes en el mercado inmobiliario poblano desde hace más de dos décadas." },
  { icon: "💸", title: "Sin costo hasta cerrar", desc: "No pagas nada hasta que se firma el contrato. Cero riesgo para ti." },
  { icon: "📱", title: "+20 portales especializados", desc: "Tu propiedad en TikTok, Instagram, Facebook y más de 20 portales." },
  { icon: "🔍", title: "Filtramos a los clientes", desc: "Verificamos a los interesados y acompañamos cada visita." },
  { icon: "⚖️", title: "Asesoría legal incluida", desc: "Contrato y revisión legal sin costo adicional." },
  { icon: "📊", title: "Reportes semanales", desc: "Te informamos del avance de tu propiedad cada semana." },
];

const PASOS = [
  { num: "01", title: "Nos compartes tu propiedad", desc: "Cuéntanos los detalles y agendamos una visita." },
  { num: "02", title: "Fotos y publicación", desc: "Tomamos fotos y publicamos en todos los portales." },
  { num: "03", title: "Filtramos interesados", desc: "Atendemos a los clientes y filtramos a los más serios." },
  { num: "04", title: "Firma de contrato", desc: "Firmamos contrato con asesoría legal incluida." },
  { num: "05", title: "Tú cobras", desc: "Recibes tu renta o venta y nosotros cobramos nuestra comisión." },
];

const CSS = `
  * { box-sizing: border-box; }
  @media (max-width: 768px) {
    .hero-grid { grid-template-columns: 1fr !important; }
    .dos-caminos { grid-template-columns: 1fr !important; }
    .props-grid { grid-template-columns: 1fr !important; }
    .beneficios-grid { grid-template-columns: 1fr 1fr !important; }
    .pasos-grid { grid-template-columns: 1fr 1fr !important; }
    .resenas-grid { grid-template-columns: 1fr !important; }
    .hero-title { font-size: 34px !important; }
    .hero-pad { padding: 44px 20px 56px !important; }
    .sec-pad { padding: 52px 20px !important; }
    .sec-title { font-size: 26px !important; }
    .cta-title { font-size: 28px !important; }
  }
  @media (max-width: 480px) {
    .beneficios-grid { grid-template-columns: 1fr !important; }
    .pasos-grid { grid-template-columns: 1fr !important; }
    .hero-title { font-size: 28px !important; }
  }
`;

export default function Home({ propiedadesDestacadas = [] }) {
  const [busqueda, setBusqueda] = useState("rental");

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <Navbar />

      {/* HERO */}
      <div style={{ background: "linear-gradient(120deg, #fff 0%, #fff5f5 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,16,46,0.06) 0%, transparent 70%)" }} />
        <div className="hero-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 32px 88px", position: "relative", zIndex: 1 }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff0f2", border: "1px solid #fecdd3", padding: "6px 14px", borderRadius: 99, marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C8102E", display: "inline-block" }} />
                <span style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Puebla · +20 años de experiencia</span>
              </div>
              <h1 className="hero-title" style={{ fontSize: 52, fontWeight: 900, color: "#1a1a2e", lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
                Tu propiedad,<br /><span style={{ color: "#C8102E" }}>nuestra</span> prioridad.
              </h1>
              <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, margin: "0 0 32px" }}>
                Vende, renta o encuentra tu próxima propiedad en Puebla. Sin estrés, sin sorpresas.
              </p>
              <div style={{ background: "#fff", border: "2px solid #f3f4f6", borderRadius: 16, padding: 18, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                  {[{ v: "rental", l: "🏠 Renta" }, { v: "sale", l: "🏡 Venta" }].map(op => (
                    <button key={op.v} onClick={() => setBusqueda(op.v)} style={{
                      flex: 1, padding: "10px 0", borderRadius: 8, border: "2px solid",
                      borderColor: busqueda === op.v ? "#C8102E" : "#f3f4f6",
                      cursor: "pointer", fontWeight: 700, fontSize: 14,
                      fontFamily: "'Montserrat', sans-serif",
                      background: busqueda === op.v ? "#fff0f2" : "#fff",
                      color: busqueda === op.v ? "#C8102E" : "#6b7280",
                    }}>{op.l}</button>
                  ))}
                </div>
                <a href={`https://app.emporioinmobiliario.com.mx/propiedades?operacion=${busqueda}`} style={{
                  display: "block", width: "100%", background: "#C8102E", color: "#fff",
                  padding: "13px 0", borderRadius: 10, fontWeight: 800, fontSize: 15,
                  textAlign: "center", textDecoration: "none",
                }}>🔍 Ver propiedades disponibles</a>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { val: "+5,000", label: "Propiedades promovidas", icon: "🏠" },
                { val: "+3,000", label: "Operaciones cerradas", icon: "🤝" },
                { val: "+20", label: "Años de experiencia", icon: "⭐" },
                { val: "90K+", label: "Seguidores en TikTok", icon: "📱" },
              ].map((s, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 20, padding: "24px 16px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", textAlign: "center" }}>
                  <div style={{ fontSize: 28, marginBottom: 6 }}>{s.icon}</div>
                  <div style={{ fontSize: 26, fontWeight: 900, color: "#C8102E", lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: 11, color: "#6b7280", marginTop: 6, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* DOS CAMINOS */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>¿Qué necesitas hoy?</p>
            <h2 className="sec-title" style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: 0 }}>Estamos para los dos lados</h2>
          </div>
          <div className="dos-caminos" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <a href="/propietarios" style={{ textDecoration: "none" }}>
              <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 32px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
                <div style={{ fontSize: 40, marginBottom: 16 }}>🏠</div>
                <h3 style={{ fontSize: 22, fontWeight: 900, color: "#fff", margin: "0 0 12px" }}>Tengo una propiedad</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: "0 0 24px" }}>Renta o vende sin complicaciones. No pagas nada hasta cerrar.</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#C8102E", color: "#fff", padding: "10px 20px", borderRadius: 10, fontWeight: 700, fontSize: 13 }}>
                  Quiero promover mi propiedad →
                </span>
              </div>
            </a>
            <a href="https://app.emporioinmobiliario.com.mx/propiedades" style={{ textDecoration: "none" }}>
              <div style={{ background: "#C8102E", borderRadius: 20, padding: "40px 32px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
                <div style={{ fontSize: 40, marginBottom: 16 }}>🔑</div>
                <h3 style={{ fontSize: 22, fontWeight: 900, color: "#fff", margin: "0 0 12px" }}>Busco una propiedad</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, margin: "0 0 24px" }}>Más de 50 opciones activas en Puebla. Encuentra tu casa ideal hoy.</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#fff", color: "#C8102E", padding: "10px 20px", borderRadius: 10, fontWeight: 700, fontSize: 13 }}>
                  Ver propiedades →
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* PROPIEDADES DESTACADAS */}
      {propiedadesDestacadas.length > 0 && (
        <div className="sec-pad" style={{ padding: "72px 32px", background: "#fafafa" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 36, flexWrap: "wrap", gap: 12 }}>
              <div>
                <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 8px" }}>Catálogo activo</p>
                <h2 className="sec-title" style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: 0 }}>Propiedades destacadas</h2>
              </div>
              <a href="https://app.emporioinmobiliario.com.mx/propiedades" style={{ color: "#C8102E", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Ver todas →</a>
            </div>
            <div className="props-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {propiedadesDestacadas.map(p => {
                const op = p.operations?.[0];
                const precio = op?.amount || 0;
                const img = p.title_image_thumb || p.title_image_full;
                const esVenta = op?.type === "sale";
                return (
                  <a key={p.public_id} href={`https://app.emporioinmobiliario.com.mx/propiedad/${p.public_id}`} style={{ textDecoration: "none" }}>
                    <div style={{ borderRadius: 16, overflow: "hidden", background: "#fff", border: "1px solid #f3f4f6" }}>
                      <div style={{ height: 200, background: "#f3f4f6", position: "relative", overflow: "hidden" }}>
                        {img && <img src={img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                        <div style={{ position: "absolute", top: 10, left: 10 }}>
                          <span style={{ background: esVenta ? "#1a1a2e" : "#C8102E", color: "#fff", padding: "3px 10px", borderRadius: 99, fontSize: 10, fontWeight: 800 }}>
                            {esVenta ? "EN VENTA" : "EN RENTA"}
                          </span>
                        </div>
                      </div>
                      <div style={{ padding: "16px 16px 20px" }}>
                        <h4 style={{ margin: "0 0 6px", fontSize: 14, fontWeight: 700, color: "#1a1a2e", lineHeight: 1.3 }}>{p.title}</h4>
                        <p style={{ margin: "0 0 10px", fontSize: 11, color: "#9ca3af" }}>📍 {typeof p.location === "string" ? p.location : ""}</p>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontSize: 17, fontWeight: 900, color: "#C8102E" }}>{fmt(precio)}</span>
                          <div style={{ display: "flex", gap: 8 }}>
                            {p.bedrooms > 0 && <span style={{ fontSize: 11, color: "#6b7280" }}>🛏 {p.bedrooms}</span>}
                            {p.bathrooms > 0 && <span style={{ fontSize: 11, color: "#6b7280" }}>🚿 {p.bathrooms}</span>}
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

      {/* BENEFICIOS */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>Por qué elegirnos</p>
            <h2 className="sec-title" style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: 0 }}>Beneficios Emporio</h2>
          </div>
          <div className="beneficios-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {BENEFICIOS.map((b, i) => (
              <div key={i} style={{ background: "#fafafa", borderRadius: 16, padding: "28px 24px", border: "1px solid #f3f4f6" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{b.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1a1a2e", margin: "0 0 8px" }}>{b.title}</h3>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CÓMO FUNCIONA */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#1a1a2e" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>El proceso</p>
            <h2 className="sec-title" style={{ fontSize: 36, fontWeight: 900, color: "#fff", margin: 0 }}>¿Cómo funciona?</h2>
          </div>
          <div className="pasos-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
            {PASOS.map((paso, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "24px 16px", textAlign: "center" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#C8102E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 900, margin: "0 auto 14px" }}>{paso.num}</div>
                <h4 style={{ fontSize: 12, fontWeight: 700, color: "#fff", margin: "0 0 6px", lineHeight: 1.4 }}>{paso.title}</h4>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: 0 }}>{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RESEÑAS */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#fafafa" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>Lo que dicen</p>
            <h2 className="sec-title" style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: 0 }}>Clientes satisfechos</h2>
          </div>
          <div className="resenas-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { nombre: "Adriana Miron", texto: "La inmobiliaria siempre está atenta, Carlos es muy amable igual que María José. Escucharon mis necesidades y me apoyaron con lo que les pedía." },
              { nombre: "Eduardo Alarcon", texto: "Estoy estrenando mi propiedad y Emporio Inmobiliario me guió, asesoró y acompañó en todo el proceso. ¡Muy recomendables!" },
              { nombre: "Jeann Zel", texto: "Muy confiables, visitaron mi propiedad y la compartieron enseguida. En menos de 1 mes logramos tener un trato." },
            ].map((r, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "28px 24px", border: "1px solid #f3f4f6" }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
                  {[...Array(5)].map((_, j) => <span key={j} style={{ color: "#f59e0b", fontSize: 14 }}>★</span>)}
                </div>
                <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.8, margin: "0 0 16px", fontStyle: "italic" }}>"{r.texto}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#C8102E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{r.nombre[0]}</div>
                  <div>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "#1a1a2e" }}>{r.nombre}</p>
                    <p style={{ margin: 0, fontSize: 11, color: "#9ca3af" }}>⭐ Reseña verificada Google</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#C8102E", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 className="cta-title" style={{ fontSize: 38, fontWeight: 900, color: "#fff", margin: "0 0 16px", lineHeight: 1.1 }}>¿Listo para dar el siguiente paso?</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", margin: "0 0 36px", lineHeight: 1.7 }}>Ya sea que quieras vender, rentar o encontrar tu próxima casa, estamos aquí para ayudarte.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" style={{ background: "#fff", color: "#C8102E", padding: "14px 28px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
              💬 Escríbenos por WhatsApp
            </a>
            <a href="https://app.emporioinmobiliario.com.mx/propiedades" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>
              Ver propiedades →
            </a>
          </div>
        </div>
      </div>

      <Footer />

      <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" style={{ position: "fixed", bottom: 24, right: 24, background: "#25d366", color: "#fff", width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, boxShadow: "0 4px 16px rgba(0,0,0,0.2)", textDecoration: "none", zIndex: 100 }}>
        💬
      </a>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://api.easybroker.com/v1/properties?page=1&limit=20&search[statuses][]=published", {
      headers: { "X-Authorization": process.env.EASYBROKER_API_KEY, "accept": "application/json" },
    });
    const data = await res.json();
    const todas = data.content || [];
    const aleatorias = todas.sort(() => Math.random() - 0.5).slice(0, 3);
    return { props: { propiedadesDestacadas: aleatorias } };
  } catch (e) {
    return { props: { propiedadesDestacadas: [] } };
  }
}
