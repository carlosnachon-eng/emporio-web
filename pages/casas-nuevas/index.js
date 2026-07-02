import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { CASAS_NUEVAS, SITE_URL, fmt } from "../../lib/casasNuevas";

const CSS = `
  * { box-sizing: border-box; }
  .cn-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; }
  .cn-card:hover { transform: translateY(-4px); box-shadow: 0 12px 34px rgba(0,0,0,.1); }
  @media (max-width: 760px) {
    .cn-hero { padding: 46px 20px !important; }
    .cn-title { font-size: 34px !important; }
    .cn-grid { grid-template-columns: 1fr !important; }
    .cn-section { padding: 42px 20px !important; }
  }
`;

export default function CasasNuevas() {
  const totalUnidades = CASAS_NUEVAS.reduce((sum, item) => sum + item.unidades, 0);

  return (
    <>
      <Head>
        <title>Casas nuevas en Puebla | Emporio Inmobiliario</title>
        <meta name="description" content="Colecciones de casas nuevas en Puebla agrupadas por zona. Encuentra casas próximas a entrega en Granjas y Bugambilias con Emporio Inmobiliario." />
        <meta name="keywords" content="casas nuevas en Puebla, casas listas para estrenar Puebla, casas nuevas Granjas Puebla, casas nuevas Bugambilias Puebla, casas en venta Puebla" />
        <meta property="og:title" content="Casas nuevas en Puebla | Emporio Inmobiliario" />
        <meta property="og:description" content="Casas nuevas agrupadas por zona para comparar unidades disponibles y ver la ficha individual de cada propiedad." />
        <meta property="og:image" content={`${SITE_URL}${CASAS_NUEVAS[0].imagen}`} />
        <meta property="og:url" content={`${SITE_URL}/casas-nuevas`} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/casas-nuevas`} />
      </Head>

      <div style={{ minHeight: "100vh", background: "#fafafa", fontFamily: "'Montserrat', sans-serif" }}>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <Navbar />

        <section className="cn-hero" style={{ background: "#1a1a2e", padding: "64px 32px 72px" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase", margin: "0 0 12px" }}>
              Colecciones Emporio
            </p>
            <h1 className="cn-title" style={{ fontSize: 50, lineHeight: 1.05, color: "#fff", margin: "0 0 18px", fontWeight: 900 }}>
              Casas nuevas en Puebla
            </h1>
            <p style={{ maxWidth: 720, color: "rgba(255,255,255,.72)", fontSize: 16, lineHeight: 1.8, margin: "0 0 28px" }}>
              Agrupamos casas nuevas con diseños y acabados similares para que puedas comparar opciones por zona sin perderte en el catálogo general.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <span style={{ background: "rgba(255,255,255,.08)", color: "#fff", border: "1px solid rgba(255,255,255,.14)", padding: "10px 14px", borderRadius: 10, fontSize: 13, fontWeight: 700 }}>
                {CASAS_NUEVAS.length} zonas activas
              </span>
              <span style={{ background: "rgba(255,255,255,.08)", color: "#fff", border: "1px solid rgba(255,255,255,.14)", padding: "10px 14px", borderRadius: 10, fontSize: 13, fontWeight: 700 }}>
                {totalUnidades} unidades agrupadas
              </span>
            </div>
          </div>
        </section>

        <main className="cn-section" style={{ maxWidth: 1120, margin: "0 auto", padding: "56px 24px 72px" }}>
          <div style={{ marginBottom: 28 }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 800, letterSpacing: ".16em", textTransform: "uppercase", margin: "0 0 8px" }}>
              Disponibilidad
            </p>
            <h2 style={{ fontSize: 30, color: "#1a1a2e", fontWeight: 900, margin: 0 }}>Elige una zona</h2>
          </div>

          <div className="cn-grid">
            {CASAS_NUEVAS.map((coleccion) => (
              <a key={coleccion.slug} href={`/casas-nuevas/${coleccion.slug}`} style={{ textDecoration: "none" }}>
                <article className="cn-card" style={{ background: "#fff", border: "1px solid #f0f0f0", borderRadius: 16, overflow: "hidden", transition: "all .18s ease" }}>
                  <div style={{ height: 280, position: "relative", background: "#e5e7eb", overflow: "hidden" }}>
                    {coleccion.imagen ? (
                      <img src={coleccion.imagen} alt={coleccion.nombre} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    ) : (
                      <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #1a1a2e 0%, #374151 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ color: "rgba(255,255,255,.72)", fontSize: 14, fontWeight: 800 }}>Imagen por confirmar</span>
                      </div>
                    )}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,26,46,.78), rgba(26,26,46,.1))" }} />
                    <div style={{ position: "absolute", left: 18, right: 18, bottom: 18 }}>
                      <span style={{ display: "inline-block", background: "#C8102E", color: "#fff", padding: "5px 11px", borderRadius: 99, fontSize: 10, fontWeight: 900, marginBottom: 10 }}>
                        {coleccion.entrega.toUpperCase()}
                      </span>
                      <h3 style={{ color: "#fff", fontSize: 23, fontWeight: 900, margin: "0 0 4px" }}>{coleccion.nombre}</h3>
                      <p style={{ color: "rgba(255,255,255,.78)", fontSize: 13, margin: 0 }}>{coleccion.zona}</p>
                    </div>
                  </div>
                  <div style={{ padding: "20px 20px 22px" }}>
                    <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.7, margin: "0 0 16px" }}>{coleccion.resumen}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "flex-end" }}>
                      <div>
                        <p style={{ color: "#9ca3af", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".08em", margin: "0 0 4px" }}>Desde</p>
                        <p style={{ color: "#C8102E", fontSize: 22, fontWeight: 900, margin: 0 }}>{fmt(coleccion.precioDesde)}</p>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <p style={{ color: "#1a1a2e", fontSize: 20, fontWeight: 900, margin: "0 0 4px" }}>{coleccion.unidades}</p>
                        <p style={{ color: "#6b7280", fontSize: 12, margin: 0 }}>{coleccion.unidades === 1 ? "unidad" : "unidades"}</p>
                      </div>
                    </div>
                    <span style={{ display: "inline-block", color: "#C8102E", fontSize: 13, fontWeight: 800, marginTop: 18 }}>
                      Ver casas disponibles →
                    </span>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
