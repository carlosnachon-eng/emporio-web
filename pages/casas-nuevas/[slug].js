import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  CASAS_NUEVAS,
  SITE_URL,
  fmt,
  generarSlugPropiedad,
  getColeccion,
  ordenarPropiedadesColeccion,
  perteneceAColeccion,
} from "../../lib/casasNuevas";

const CSS = `
  * { box-sizing: border-box; }
  .cn-detail-grid { display: grid; grid-template-columns: minmax(0, 1fr) 340px; gap: 28px; align-items: start; }
  .cn-hero-grid { display: grid; grid-template-columns: minmax(0, 1fr) 380px; gap: 28px; align-items: center; }
  .cn-prop-card { display: grid; grid-template-columns: 220px minmax(0, 1fr); }
  @media (max-width: 880px) {
    .cn-detail-grid { grid-template-columns: 1fr !important; }
    .cn-hero-grid { grid-template-columns: 1fr !important; }
    .cn-prop-card { grid-template-columns: 1fr !important; }
    .cn-prop-img { height: 220px !important; }
    .cn-hero { padding: 46px 20px !important; }
    .cn-title { font-size: 34px !important; }
    .cn-content { padding: 36px 20px 56px !important; }
  }
`;

function PropiedadCard({ propiedad }) {
  const img = Array.isArray(propiedad.fotos) && propiedad.fotos[0]?.url;
  const href = `/propiedades/${generarSlugPropiedad(propiedad)}`;

  return (
    <a href={href} style={{ textDecoration: "none" }}>
      <article className="cn-prop-card" style={{ background: "#fff", border: "1px solid #f0f0f0", borderRadius: 16, overflow: "hidden", marginBottom: 16 }}>
        <div className="cn-prop-img" style={{ height: 190, background: "#f3f4f6", position: "relative", overflow: "hidden" }}>
          {img ? (
            <img src={img} alt={propiedad.titulo} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", fontSize: 14 }}>Sin foto</div>
          )}
          <span style={{ position: "absolute", top: 10, left: 10, background: "#1a1a2e", color: "#fff", padding: "4px 10px", borderRadius: 99, fontSize: 10, fontWeight: 900 }}>
            EN VENTA
          </span>
        </div>
        <div style={{ padding: "18px 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 14, alignItems: "flex-start", marginBottom: 8 }}>
            <h3 style={{ color: "#1a1a2e", fontSize: 16, lineHeight: 1.35, fontWeight: 800, margin: 0 }}>{propiedad.titulo}</h3>
            <p style={{ color: "#C8102E", fontSize: 19, fontWeight: 900, margin: 0, whiteSpace: "nowrap" }}>{fmt(propiedad.precio)}</p>
          </div>
          <p style={{ color: "#6b7280", fontSize: 13, margin: "0 0 12px" }}>
            {[propiedad.colonia, propiedad.ciudad].filter(Boolean).join(", ")}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
            {propiedad.recamaras > 0 && <span style={chipStyle}>Rec {propiedad.recamaras}</span>}
            {propiedad.banos > 0 && <span style={chipStyle}>Baños {propiedad.banos}</span>}
            {propiedad.estacionamientos > 0 && <span style={chipStyle}>Autos {propiedad.estacionamientos}</span>}
            {propiedad.m2_construccion > 0 && <span style={chipStyle}>{propiedad.m2_construccion} m2 const.</span>}
            {propiedad.m2_terreno > 0 && <span style={chipStyle}>{propiedad.m2_terreno} m2 terreno</span>}
          </div>
          <span style={{ color: "#C8102E", fontSize: 13, fontWeight: 800 }}>Ver ficha individual →</span>
        </div>
      </article>
    </a>
  );
}

const chipStyle = {
  background: "#f3f4f6",
  color: "#374151",
  borderRadius: 99,
  padding: "5px 10px",
  fontSize: 12,
  fontWeight: 700,
};

export default function CasasNuevasDetalle({ coleccion, propiedades }) {
  if (!coleccion) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Montserrat', sans-serif" }}>
          <div style={{ textAlign: "center" }}>
            <h1>Colección no encontrada</h1>
            <a href="/casas-nuevas" style={{ color: "#C8102E", fontWeight: 800 }}>Ver casas nuevas</a>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const seoUrl = `${SITE_URL}/casas-nuevas/${coleccion.slug}`;
  const unidadesMostradas = propiedades.length || coleccion.unidades;

  return (
    <>
      <Head>
        <title>{coleccion.seoTitle}</title>
        <meta name="description" content={coleccion.seoDescription} />
        <meta property="og:title" content={coleccion.seoTitle} />
        <meta property="og:description" content={coleccion.seoDescription} />
        {coleccion.imagen && <meta property="og:image" content={`${SITE_URL}${coleccion.imagen}`} />}
        <meta property="og:url" content={seoUrl} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={seoUrl} />
      </Head>

      <div style={{ minHeight: "100vh", background: "#fafafa", fontFamily: "'Montserrat', sans-serif" }}>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <Navbar />

        <section className="cn-hero" style={{ background: "#1a1a2e", padding: "56px 32px 64px" }}>
          <div className="cn-hero-grid" style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 900, letterSpacing: ".18em", textTransform: "uppercase", margin: "0 0 12px" }}>
                {coleccion.entrega}
              </p>
              <h1 className="cn-title" style={{ color: "#fff", fontSize: 46, lineHeight: 1.08, fontWeight: 900, margin: "0 0 16px" }}>
                {coleccion.nombre}
              </h1>
              <p style={{ color: "rgba(255,255,255,.72)", fontSize: 16, lineHeight: 1.8, margin: "0 0 26px", maxWidth: 680 }}>
                {coleccion.descripcion}
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <span style={darkPill}>{coleccion.zona}</span>
                <span style={darkPill}>{unidadesMostradas} {unidadesMostradas === 1 ? "unidad" : "unidades"} disponibles</span>
                <span style={darkPill}>Desde {fmt(coleccion.precioDesde)}</span>
              </div>
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,.12)", height: 280, background: "#111827" }}>
              {coleccion.imagen ? (
                <img src={coleccion.imagen} alt={coleccion.nombre} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #111827 0%, #374151 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "rgba(255,255,255,.72)", fontSize: 14, fontWeight: 800 }}>Imagen por confirmar</span>
                </div>
              )}
            </div>
          </div>
        </section>

        <main className="cn-content" style={{ maxWidth: 1120, margin: "0 auto", padding: "52px 24px 76px" }}>
          <div className="cn-detail-grid">
            <div>
              <section style={panelStyle}>
                <p style={eyebrowStyle}>Ubicación</p>
                <h2 style={sectionTitleStyle}>{coleccion.zona}</h2>
                <p style={bodyStyle}>
                  Esta colección concentra unidades nuevas en la misma zona para que puedas comparar opciones con características parecidas, revisar disponibilidad y abrir la ficha individual de la casa que más te interese.
                </p>
                {coleccion.mapsUrl && (
                  <a href={coleccion.mapsUrl} target="_blank" rel="noreferrer" style={{ display: "inline-block", marginTop: 14, color: "#C8102E", fontSize: 13, fontWeight: 800, textDecoration: "none" }}>
                    Ver zona en Google Maps →
                  </a>
                )}
              </section>

              {coleccion.distribucionImagen && (
                <section style={panelStyle}>
                  <p style={eyebrowStyle}>Distribución</p>
                  <h2 style={sectionTitleStyle}>Render superior del modelo</h2>
                  <p style={{ ...bodyStyle, marginBottom: 16 }}>
                    Vista ilustrativa amueblada para leer rápido cómo se reparte la casa por nivel y visualizar acabados. Es material de apoyo comercial; las medidas y detalles finales se confirman en la ficha y visita.
                  </p>
                  <div style={{ border: "1px solid #f0f0f0", borderRadius: 12, overflow: "hidden", background: "#f8f8fa" }}>
                    <img
                      src={coleccion.distribucionImagen}
                      alt={`Distribución del modelo ${coleccion.nombre}`}
                      style={{ width: "100%", display: "block" }}
                    />
                  </div>
                </section>
              )}

              {coleccion.imagenes.length > 0 && (
                <section style={panelStyle}>
                  <p style={eyebrowStyle}>Avances</p>
                  <h2 style={sectionTitleStyle}>Fotos del proyecto</h2>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 10 }}>
                    {coleccion.imagenes.map((imagen, index) => (
                      <div key={imagen} style={{ height: index === 0 ? 250 : 180, gridColumn: index === 0 ? "1 / -1" : "auto", borderRadius: 12, overflow: "hidden", background: "#f3f4f6" }}>
                        <img src={imagen} alt={`${coleccion.nombre} foto ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <section style={panelStyle}>
                <p style={eyebrowStyle}>Características generales</p>
                <h2 style={sectionTitleStyle}>Lo que comparten estas casas</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 10 }}>
                  {coleccion.caracteristicas.map((item) => (
                    <div key={item} style={{ background: "#fafafa", border: "1px solid #f0f0f0", borderRadius: 10, padding: "12px 14px", color: "#374151", fontSize: 13, fontWeight: 700 }}>
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section style={panelStyle}>
                <p style={eyebrowStyle}>Disponibles</p>
                <h2 style={sectionTitleStyle}>Propiedades dentro de esta colección</h2>
                {propiedades.length > 0 ? (
                  propiedades.map((propiedad) => <PropiedadCard key={propiedad.public_id} propiedad={propiedad} />)
                ) : (
                  <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 14, padding: 20 }}>
                    <p style={{ margin: "0 0 8px", color: "#9a3412", fontWeight: 800, fontSize: 14 }}>Aún faltan las fichas individuales.</p>
                    <p style={{ margin: 0, color: "#7c2d12", fontSize: 13, lineHeight: 1.7 }}>
                      Cuando las propiedades estén cargadas en Supabase, márcalas con <strong>grupo_propiedad_tipo = casas_nuevas</strong> y <strong>grupo_propiedad_slug = {coleccion.slug}</strong> para que aparezcan aquí automáticamente.
                    </p>
                  </div>
                )}
              </section>
            </div>

            <aside style={{ position: "sticky", top: 88 }}>
              <div style={panelStyle}>
                <p style={eyebrowStyle}>Beneficios</p>
                <h2 style={{ ...sectionTitleStyle, fontSize: 20 }}>Comprar casa nueva con Emporio</h2>
                <div style={{ display: "grid", gap: 12 }}>
                  {coleccion.beneficios.map((beneficio) => (
                    <div key={beneficio} style={{ borderBottom: "1px solid #f3f4f6", paddingBottom: 12 }}>
                      <p style={{ margin: 0, color: "#374151", fontSize: 13, lineHeight: 1.6, fontWeight: 700 }}>{beneficio}</p>
                    </div>
                  ))}
                </div>
                <a href={`https://wa.me/522222573237?text=${encodeURIComponent(`Hola, me interesan las ${coleccion.nombre}`)}`} target="_blank" rel="noreferrer" style={{ display: "block", background: "#25d366", color: "#fff", padding: "13px 16px", borderRadius: 10, fontWeight: 900, fontSize: 14, textAlign: "center", textDecoration: "none", marginTop: 18 }}>
                  Pedir disponibilidad por WhatsApp
                </a>
                <a href="/casas-nuevas" style={{ display: "block", color: "#C8102E", fontWeight: 800, fontSize: 13, textAlign: "center", textDecoration: "none", marginTop: 14 }}>
                  Ver todas las zonas
                </a>
              </div>
            </aside>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

const darkPill = {
  background: "rgba(255,255,255,.08)",
  color: "#fff",
  border: "1px solid rgba(255,255,255,.14)",
  padding: "9px 12px",
  borderRadius: 10,
  fontSize: 13,
  fontWeight: 800,
};

const panelStyle = {
  background: "#fff",
  border: "1px solid #f0f0f0",
  borderRadius: 16,
  padding: "24px",
  marginBottom: 18,
};

const eyebrowStyle = {
  color: "#C8102E",
  fontSize: 11,
  fontWeight: 900,
  letterSpacing: ".16em",
  textTransform: "uppercase",
  margin: "0 0 8px",
};

const sectionTitleStyle = {
  color: "#1a1a2e",
  fontSize: 25,
  lineHeight: 1.2,
  fontWeight: 900,
  margin: "0 0 12px",
};

const bodyStyle = {
  color: "#6b7280",
  fontSize: 14,
  lineHeight: 1.8,
  margin: 0,
};

export async function getServerSideProps({ params }) {
  const coleccion = getColeccion(params.slug);
  if (!coleccion) return { props: { coleccion: null, propiedades: [] } };

  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return { props: { coleccion, propiedades: [] } };
    }

    const { createClient } = await import("@supabase/supabase-js");
    const supabasePublic = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    const { data, error } = await supabasePublic
      .from("propiedades")
      .select("*")
      .eq("operacion", "sale")
      .in("status", ["published", "reserved"]);

    if (error) throw error;

    const propiedades = ordenarPropiedadesColeccion(
      (data || []).filter((propiedad) => perteneceAColeccion(propiedad, coleccion.slug))
    );

    return { props: { coleccion, propiedades } };
  } catch (e) {
    return { props: { coleccion, propiedades: [] } };
  }
}
