import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WA = "https://wa.me/522221209245?text=Hola,%20me%20interesa%20información%20sobre%20Rincón%20de%20los%20Sueños";

const DISPONIBLES = [
  { id: "3", modelo: "Rincón Esencial", precio: 2089000, status: "disponible", patio: true },
  { id: "4", modelo: "Rincón Esencial", precio: 2089000, status: "disponible", patio: true },
  { id: "6", modelo: "Rincón Plenitud", precio: 2139000, status: "disponible", patio: false },
];

const ALL_UNITS = [
  { id: "1", modelo: "Rincón Esencial", status: "vendida" },
  { id: "2", modelo: "Rincón Esencial", precio: 1989000, status: "apartada" },
  { id: "3", modelo: "Rincón Esencial", precio: 2089000, status: "disponible" },
  { id: "4", modelo: "Rincón Esencial", precio: 2089000, status: "disponible" },
  { id: "5", modelo: "Rincón Plenitud", status: "vendida" },
  { id: "6", modelo: "Rincón Plenitud", precio: 2139000, status: "disponible" },
  { id: "7", modelo: "Rincón Plenitud", status: "vendida" },
];

const fmt = (n) => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", minimumFractionDigits: 0 }).format(n);

const STATUS_STYLE = {
  disponible: { bg: "#f0fdf4", color: "#065f46", border: "#86efac", label: "Disponible" },
  apartada:   { bg: "#fffbeb", color: "#92400e", border: "#fcd34d", label: "Apartada" },
  vendida:    { bg: "#fee2e2", color: "#991b1b", border: "#fca5a5", label: "Vendida" },
};

export default function RinconDeLosSupenios() {
  const dispCount = ALL_UNITS.filter(u => u.status === "disponible").length;

  return (
    <>
      <Head>
        <title>Rincón de los Sueños — Casas nuevas en Ex Hacienda Chapulco, Puebla</title>
        <meta name="description" content="Privada de 7 casas nuevas en Ex Hacienda Chapulco, Puebla. 2 recámaras, alcoba, 3 baños, estacionamiento doble y cisterna. Desde $2,089,000 MXN. Entrega inmediata. Comercializado por Emporio Inmobiliario." />
        <meta name="keywords" content="casas nuevas puebla, rincon de los sueños, ex hacienda chapulco, casas chapulco puebla, sirius abr constructora, casas heroes de puebla" />
        <meta property="og:title" content="Rincón de los Sueños — Casas nuevas en Ex Hacienda Chapulco" />
        <meta property="og:description" content="Privada de 7 casas. Solo 3 disponibles. Desde $2,089,000 MXN. Entrega inmediata." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/rincon-de-los-suenos" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/rincon-de-los-suenos" />
      </Head>

      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff", color: "#1a1a2e" }}>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          * { box-sizing: border-box; }
          @media(max-width: 768px) {
            .two-col { grid-template-columns: 1fr !important; }
            .hero-title { font-size: 40px !important; }
            .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
            .units-grid { grid-template-columns: 1fr !important; }
            .modelo-grid { grid-template-columns: 1fr !important; }
          }
        `}} />
        <Navbar />

        {/* ── HERO ── */}
        <div style={{ position: "relative", minHeight: "95vh", display: "flex", alignItems: "flex-end", overflow: "hidden", background: "#0d0d0d" }}>
          {/* Imagen de fondo — render del desarrollo */}
          <img
            src="https://res.cloudinary.com/djq3wl79q/image/upload/rincon/IMG_0471.webp"
            alt="Rincón de los Sueños"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.55 }}
            onError={e => { e.target.style.display = "none"; }}
          />
          {/* Gradiente de abajo a arriba */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,.98) 0%, rgba(10,10,10,.5) 50%, rgba(10,10,10,.1) 100%)" }} />

          <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1100, margin: "0 auto", padding: "0 32px 72px" }}>
            {/* Badge últimas unidades */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,.15)", border: "1px solid rgba(200,16,46,.5)", padding: "6px 16px", borderRadius: 99, marginBottom: 20 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C8102E", display: "inline-block", animation: "pulse 1.5s infinite" }} />
              <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" }}>Últimas {dispCount} unidades disponibles</span>
            </div>

            <h1 className="hero-title" style={{ fontSize: 64, fontWeight: 900, color: "#fff", lineHeight: 1.0, margin: "0 0 8px", letterSpacing: "-.02em" }}>
              Rincón de<br />los Sueños
            </h1>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,.4)", margin: "0 0 20px", letterSpacing: ".3em", textTransform: "uppercase", fontWeight: 600 }}>
              EX HACIENDA CHAPULCO · PUEBLA
            </p>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,.7)", lineHeight: 1.8, margin: "0 0 12px", maxWidth: 520 }}>
              Privada de 7 casas diseñadas para familias jóvenes y multigeneracionales. Entrega inmediata, casas equipadas y sin cuota de mantenimiento.
            </p>
            <p style={{ fontSize: 26, fontWeight: 900, color: "#f59e0b", margin: "0 0 36px" }}>Desde $2,089,000</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={WA} target="_blank" rel="noreferrer"
                style={{ background: "#C8102E", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                💬 Quiero información
              </a>
              <a href="#disponibilidad"
                style={{ background: "rgba(255,255,255,.1)", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none", border: "1px solid rgba(255,255,255,.2)" }}>
                Ver unidades →
              </a>
            </div>
          </div>
        </div>

        {/* ── STATS ── */}
        <div style={{ background: "#1a1a2e" }}>
          <div className="stats-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
            {[
              { val: "7", label: "Casas en privada" },
              { val: "3", label: "Disponibles" },
              { val: "3", label: "Recámaras totales" },
              { val: "0", label: "Cuota mantenimiento" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "28px 20px", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,.08)" : "none" }}>
                <div style={{ fontSize: 30, fontWeight: 900, color: "#C8102E" }}>{s.val}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,.4)", marginTop: 4, textTransform: "uppercase", letterSpacing: ".5px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── QUÉ LA HACE ESPECIAL ── */}
        <div style={{ padding: "72px 32px", background: "#fafafa" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 12px" }}>El proyecto</p>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>Tu nueva vida empieza<br />con una llave.</h2>
            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.8, maxWidth: 680, margin: "0 0 48px" }}>
              Rincón de los Sueños es una privada de solo 7 casas diseñadas con acabados de alta calidad y distribución inteligente. Listas para habitarse, sin remodelación, sin cuotas de mantenimiento ni áreas que no usas.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
              {[
                { icon: "🏠", title: "Casas equipadas", desc: "Cocina integral, pisos interceramic, estufa y campana de acero inoxidable, canceles de cristal templado y barra de granito." },
                { icon: "🔑", title: "Entrega inmediata", desc: "Casas terminadas y listas para habitarse. Sin esperas ni obras pendientes." },
                { icon: "💧", title: "Cisterna 5,000 lts", desc: "Independencia hídrica para tu familia sin preocupaciones de suministro." },
                { icon: "🚗", title: "2 cajones de estacionamiento", desc: "Cochera techada para dos vehículos dentro de la privada cerrada." },
                { icon: "🔒", title: "Privada cerrada", desc: "7 viviendas en un conjunto privado con acceso controlado y seguridad." },
                { icon: "💰", title: "Sin cuota de mantenimiento", desc: "Paga solo lo que usas. Sin áreas comunes que no necesitas." },
              ].map((f, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 14, padding: "20px 18px" }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{f.icon}</div>
                  <p style={{ margin: "0 0 6px", fontSize: 14, fontWeight: 700, color: "#1a1a2e" }}>{f.title}</p>
                  <p style={{ margin: 0, fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── UBICACIÓN ── */}
        <div style={{ padding: "72px 32px", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
              <div>
                <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 12px" }}>Ubicación</p>
                <h2 style={{ fontSize: 32, fontWeight: 900, color: "#1a1a2e", margin: "0 0 8px" }}>Ex Hacienda Chapulco,<br />Puebla</h2>
                <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 24px" }}>Calle 12 C Sur No. 11579, Ex hacienda Chapulco, Puebla</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { icon: "🔵", lugar: "Periférico Ecológico", dist: "Acceso directo" },
                    { icon: "🏫", lugar: "Colegio Benavente / La Salle", dist: "A minutos" },
                    { icon: "🏫", lugar: "Colegio Esparza", dist: "Muy cerca" },
                    { icon: "🌿", lugar: "Parque Centenario Laguna de Chapulco", dist: "Cercano" },
                    { icon: "🛍️", lugar: "Zona comercial Los Héroes de Puebla", dist: "Al lado" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: "#f9fafb", borderRadius: 10 }}>
                      <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                      <span style={{ fontSize: 13, color: "#374151", flex: 1 }}>{item.lugar}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#C8102E" }}>{item.dist}</span>
                    </div>
                  ))}
                </div>
                <a href="https://maps.google.com/?q=Calle+12+C+sur+No.+11579+Ex+hacienda+Chapulco+Puebla" target="_blank" rel="noreferrer"
                  style={{ display: "inline-block", marginTop: 20, background: "#1a1a2e", color: "#fff", padding: "12px 22px", borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
                  📍 Ver en Google Maps
                </a>
              </div>
              <div style={{ borderRadius: 20, overflow: "hidden", height: 400 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.6!2d-98.2244387!3d18.9702371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc78323d57ec5%3A0xf7e93c6!2zUmluY8OzbiBkZSBsb3MgU3Vlw7Fvcw!5e0!3m2!1ses!2smx!4v1"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  title="Ubicación Rincón de los Sueños"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── MODELOS ── */}
        <div style={{ padding: "72px 32px", background: "#fafafa" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 10px" }}>Modelos</p>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: "0 0 8px" }}>Dos versiones,<br />un mismo estándar.</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 48px" }}>Todas las casas incluyen 2 recámaras en planta alta + alcoba en planta baja, 3 baños completos, estacionamiento doble y cisterna de 5,000 lts.</p>

            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {/* Esencial */}
              <div style={{ background: "#fff", border: "2px solid #e5e7eb", borderRadius: 20, overflow: "hidden" }}>
                <div style={{ background: "#1a1a2e", padding: "24px 28px" }}>
                  <p style={{ margin: "0 0 4px", fontSize: 11, color: "rgba(255,255,255,.4)", textTransform: "uppercase", letterSpacing: ".2em" }}>Modelo</p>
                  <h3 style={{ margin: "0 0 4px", fontSize: 28, fontWeight: 900, color: "#fff" }}>Rincón Esencial</h3>
                  <p style={{ margin: 0, fontSize: 13, color: "rgba(255,255,255,.5)" }}>Casas 1 a la 4 · Patio más grande</p>
                </div>
                <div style={{ padding: "24px 28px" }}>
                  <p style={{ fontSize: 30, fontWeight: 900, color: "#C8102E", margin: "0 0 20px" }}>$2,089,000</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                    {[
                      "2 recámaras en planta alta con baño completo",
                      "1 alcoba en planta baja",
                      "1 baño completo en planta baja",
                      "Cocina integral con granito",
                      "Sala — Comedor",
                      "Patio amplio (el más grande del conjunto)",
                      "Estacionamiento para 2 autos",
                      "Cisterna 5,000 lts",
                    ].map((item, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: "#C8102E", fontSize: 12, flexShrink: 0, marginTop: 2 }}>✓</span>
                        <span style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <a href={WA} target="_blank" rel="noreferrer"
                    style={{ display: "block", textAlign: "center", background: "#C8102E", color: "#fff", padding: "13px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                    Solicitar información
                  </a>
                </div>
              </div>

              {/* Plenitud */}
              <div style={{ background: "#fff", border: "2px solid #C8102E", borderRadius: 20, overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", top: 16, right: 16, background: "#C8102E", color: "#fff", fontSize: 10, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", padding: "4px 12px", borderRadius: 99 }}>
                  1 disponible
                </div>
                <div style={{ background: "#C8102E", padding: "24px 28px" }}>
                  <p style={{ margin: "0 0 4px", fontSize: 11, color: "rgba(255,255,255,.6)", textTransform: "uppercase", letterSpacing: ".2em" }}>Modelo</p>
                  <h3 style={{ margin: "0 0 4px", fontSize: 28, fontWeight: 900, color: "#fff" }}>Rincón Plenitud</h3>
                  <p style={{ margin: 0, fontSize: 13, color: "rgba(255,255,255,.7)" }}>Casas 5, 6 y 7 · Sala y comedor amplios</p>
                </div>
                <div style={{ padding: "24px 28px" }}>
                  <p style={{ fontSize: 30, fontWeight: 900, color: "#C8102E", margin: "0 0 20px" }}>$2,139,000</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                    {[
                      "2 recámaras en planta alta con baño completo",
                      "1 alcoba en planta baja",
                      "1 baño completo en planta baja",
                      "Cocina integral con granito",
                      "Sala amplia — Comedor amplio",
                      "Patio privado",
                      "Estacionamiento para 2 autos",
                      "Cisterna 5,000 lts",
                    ].map((item, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: "#C8102E", fontSize: 12, flexShrink: 0, marginTop: 2 }}>✓</span>
                        <span style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <a href={WA} target="_blank" rel="noreferrer"
                    style={{ display: "block", textAlign: "center", background: "#C8102E", color: "#fff", padding: "13px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                    Solicitar información
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ACABADOS ── */}
        <div style={{ padding: "72px 32px", background: "#1a1a2e" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 10px" }}>Acabados incluidos</p>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: "#fff", margin: "0 0 12px" }}>Entra y disfruta.</h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,.5)", margin: "0 0 40px" }}>Sin pendientes, sin remodelación.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
              {[
                { icon: "🍳", name: "Cocina integral" },
                { icon: "🪨", name: "Barra de granito" },
                { icon: "🔲", name: "Pisos Interceramic" },
                { icon: "🍳", name: "Estufa acero inoxidable" },
                { icon: "💨", name: "Campana extractora" },
                { icon: "🚿", name: "Canceles cristal templado" },
                { icon: "💧", name: "Cisterna 5,000 lts" },
                { icon: "🚗", name: "2 cajones estacionamiento" },
              ].map((a, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, padding: "20px 14px", textAlign: "center" }}>
                  <div style={{ fontSize: 26, marginBottom: 8 }}>{a.icon}</div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.7)", margin: 0, lineHeight: 1.4 }}>{a.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── GALERÍA ── */}
        <div style={{ padding: "72px 32px", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 10px" }}>Galería</p>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: "0 0 32px" }}>Conoce cada espacio.</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
              {[
                { src: "https://res.cloudinary.com/djq3wl79q/image/upload/rincon/IMG_0479.webp", label: "Sala — Comedor" },
                { src: "https://res.cloudinary.com/djq3wl79q/image/upload/rincon/IMG_0487.webp", label: "Cocina integral" },
                { src: "https://res.cloudinary.com/djq3wl79q/image/upload/rincon/IMG_0474.webp", label: "Recámara principal con clóset" },
                { src: "https://res.cloudinary.com/djq3wl79q/image/upload/rincon/IMG_0475.webp", label: "Baño con cancel de cristal templado" },
                { src: "https://res.cloudinary.com/djq3wl79q/image/upload/rincon/IMG_0484.webp", label: "Balcón planta alta" },
                { src: "https://res.cloudinary.com/djq3wl79q/image/upload/rincon/IMG_0473.webp", label: "Recámara con balcón" },
                { src: "https://res.cloudinary.com/djq3wl79q/image/upload/rincon/IMG_0486.webp", label: "Sala — Comedor vista 2" },
                { src: "https://res.cloudinary.com/djq3wl79q/image/upload/rincon/IMG_0480.webp", label: "Alcoba planta baja" },
                { src: "https://res.cloudinary.com/djq3wl79q/image/upload/rincon/IMG_0472.webp", label: "Fachada — Acceso" },
              ].map((img, i) => (
                <div key={i} style={{ borderRadius: 12, overflow: "hidden", aspectRatio: "4/3", background: "#f3f4f6", position: "relative" }}>
                  <img src={img.src} alt={img.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,.5))", padding: "20px 12px 10px" }}>
                    <span style={{ fontSize: 12, color: "#fff", fontWeight: 600 }}>{img.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── DISPONIBILIDAD ── */}
        <div id="disponibilidad" style={{ padding: "72px 32px", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 10px" }}>Disponibilidad · Junio 2026</p>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: "0 0 8px" }}>Últimas {dispCount} unidades disponibles.</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 32px" }}>De 7 casas en total, solo {dispCount} siguen disponibles. El resto ya tiene dueño.</p>

            {/* Mapa de unidades */}
            <div style={{ background: "#f9fafb", borderRadius: 16, padding: 24, marginBottom: 32, overflowX: "auto" }}>
              <p style={{ margin: "0 0 16px", fontSize: 12, fontWeight: 700, color: "#6b7280", textTransform: "uppercase", letterSpacing: ".1em" }}>Planta de la privada</p>
              <div style={{ display: "flex", gap: 6, minWidth: 560 }}>
                {ALL_UNITS.map((u) => {
                  const st = STATUS_STYLE[u.status];
                  return (
                    <div key={u.id} style={{ flex: 1, background: st.bg, border: `2px solid ${st.border}`, borderRadius: 10, padding: "14px 8px", textAlign: "center", minWidth: 70 }}>
                      <div style={{ fontSize: 18, fontWeight: 900, color: st.color, marginBottom: 4 }}>#{u.id}</div>
                      <div style={{ fontSize: 9, fontWeight: 700, color: st.color, textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 6 }}>{st.label}</div>
                      <div style={{ fontSize: 9, color: "#9ca3af", lineHeight: 1.3 }}>{u.modelo.replace("Rincón ", "")}</div>
                      {u.precio && <div style={{ fontSize: 11, fontWeight: 700, color: st.color, marginTop: 4 }}>{fmt(u.precio)}</div>}
                    </div>
                  );
                })}
              </div>
              <div style={{ display: "flex", gap: 16, marginTop: 14, flexWrap: "wrap" }}>
                {Object.entries(STATUS_STYLE).map(([key, st]) => (
                  <div key={key} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 10, height: 10, borderRadius: 3, background: st.bg, border: `2px solid ${st.border}` }} />
                    <span style={{ fontSize: 11, color: "#6b7280" }}>{st.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cards unidades disponibles */}
            <div className="units-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {DISPONIBLES.map((u) => (
                <div key={u.id} style={{ border: "2px solid #86efac", borderRadius: 16, padding: 24, background: "#f0fdf4" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <div>
                      <div style={{ fontSize: 11, color: "#065f46", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 4 }}>Unidad #{u.id}</div>
                      <div style={{ fontSize: 16, fontWeight: 800, color: "#1a1a2e" }}>{u.modelo}</div>
                    </div>
                    <span style={{ background: "#065f46", color: "#fff", fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: 99 }}>Disponible</span>
                  </div>
                  <div style={{ fontSize: 26, fontWeight: 900, color: "#C8102E", marginBottom: 16 }}>{fmt(u.precio)}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 20 }}>
                    <div style={{ fontSize: 12, color: "#374151" }}>✓ 2 recámaras + alcoba + 3 baños</div>
                    <div style={{ fontSize: 12, color: "#374151" }}>✓ Estacionamiento doble</div>
                    <div style={{ fontSize: 12, color: "#374151" }}>✓ Cocina equipada + granito</div>
                    {u.patio && <div style={{ fontSize: 12, color: "#374151" }}>✓ Patio amplio</div>}
                    <div style={{ fontSize: 12, color: "#374151" }}>✓ Cisterna 5,000 lts</div>
                    <div style={{ fontSize: 12, color: "#374151" }}>✓ Entrega inmediata</div>
                  </div>
                  <a href={WA} target="_blank" rel="noreferrer"
                    style={{ display: "block", textAlign: "center", background: "#C8102E", color: "#fff", padding: "12px", borderRadius: 10, fontWeight: 800, fontSize: 13, textDecoration: "none" }}>
                    Apartar esta unidad
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA FINAL ── */}
        <div style={{ padding: "80px 32px", background: "#C8102E" }}>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: 40, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.1 }}>
              Solo {dispCount} casas disponibles.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,.8)", margin: "0 0 32px", lineHeight: 1.7 }}>
              Comercializado exclusivamente por Emporio Inmobiliario. Nuestro equipo te acompaña desde la primera visita hasta la entrega de llaves.
            </p>
            <a href={WA} target="_blank" rel="noreferrer"
              style={{ background: "#fff", color: "#C8102E", padding: "16px 36px", borderRadius: 14, fontWeight: 900, fontSize: 16, textDecoration: "none", display: "inline-block" }}>
              💬 Hablar con un asesor
            </a>
            <p style={{ margin: "16px 0 0", fontSize: 12, color: "rgba(255,255,255,.5)" }}>
              Emporio Inmobiliario · San Andrés Cholula, Puebla · 222 257 3237
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
