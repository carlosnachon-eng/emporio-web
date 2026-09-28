import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DESARROLLOS = [
  {
    nombre: "Casas Nuevas",
    href: "/casas-nuevas",
    zona: "Puebla",
    detalle: "Casas nuevas agrupadas por zona, con inventario activo y opciones para distintos presupuestos.",
    precio: "Desde $2,800,000",
    imagen: "/images/casas-nuevas/granjas/render-fachada-calle.jpg",
    etiqueta: "NUEVO INVENTARIO",
  },
  {
    nombre: "Torre Zaia",
    href: "/torre-zaia",
    zona: "Lomas de Angelópolis III · San Andrés Cholula",
    detalle: "Departamentos en preventa con ubicación estratégica, amenidades y entrega programada.",
    precio: "Desde $2,056,025",
    imagen: "https://res.cloudinary.com/djq3wl79q/image/upload/v1779506032/HEM4_-_Fachada_1_btjb4r.png",
    etiqueta: "PREVENTA",
  },
  {
    nombre: "Equiah Villa Sustentable",
    href: "/equiah",
    zona: "Nativitas, Tlaxcala · junto a Val'Quirico",
    detalle: "Proyecto residencial sustentable rodeado de naturaleza y con inventario limitado.",
    precio: "Desde $5,350,000",
    imagen: "https://equiah.com/app-assets/images/banner-vive-01.jpg",
    etiqueta: "PREVENTA",
  },
  {
    nombre: "Bau22",
    href: "/bau22",
    zona: "Lomas de Angelópolis, Puebla",
    detalle: "Departamentos de entrega inmediata con distintos prototipos y unidades disponibles.",
    precio: "Desde $2,595,120",
    imagen: "https://res.cloudinary.com/djq3wl79q/image/upload/v1781896677/fachada_noche_znady9.jpg",
    etiqueta: "ENTREGA INMEDIATA",
  },
  {
    nombre: "Rincón de los Sueños",
    href: "/rincon-de-los-suenos",
    zona: "Ex Hacienda Chapulco · Puebla",
    detalle: "Privada residencial de baja densidad con casas disponibles para entrega inmediata.",
    precio: "Desde $2,089,000",
    imagen: "https://res.cloudinary.com/djq3wl79q/image/upload/v1781643422/IMG_0471_tcehkb.webp",
    etiqueta: "ENTREGA INMEDIATA",
  },
];

const canonical = "https://www.emporioinmobiliario.com.mx/desarrollos";

export default function Desarrollos() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Desarrollos inmobiliarios en Puebla y zona metropolitana",
    url: canonical,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: DESARROLLOS.map((d, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: d.nombre,
        url: `https://www.emporioinmobiliario.com.mx${d.href}`,
      })),
    },
  };

  return (
    <>
      <Head>
        <title>Desarrollos inmobiliarios en Puebla | Preventa y entrega inmediata | Emporio</title>
        <meta name="description" content="Conoce desarrollos inmobiliarios en Puebla, Cholula y zona metropolitana: preventas, departamentos y casas nuevas con atención de Emporio Inmobiliario." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Desarrollos inmobiliarios en Puebla | Emporio Inmobiliario" />
        <meta property="og:description" content="Preventas, departamentos y casas nuevas en Puebla, Cholula y zona metropolitana." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.emporioinmobiliario.com.mx/logo.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff", minHeight: "100vh" }}>
        <Navbar />
        <main>
          <section style={{ background: "linear-gradient(120deg,#fff 0%,#fff5f5 100%)", padding: "72px 24px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <p style={{ color: "#C8102E", fontSize: 12, fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase", margin: "0 0 12px" }}>Proyectos seleccionados</p>
              <h1 style={{ color: "#1a1a2e", fontSize: 44, lineHeight: 1.1, margin: "0 0 18px", maxWidth: 800 }}>Desarrollos inmobiliarios en Puebla y zona metropolitana</h1>
              <p style={{ color: "#6b7280", fontSize: 17, lineHeight: 1.7, maxWidth: 800, margin: 0 }}>Explora proyectos en preventa y entrega inmediata, además de casas nuevas, con información clara de ubicación, disponibilidad y precios de referencia.</p>
            </div>
          </section>

          <section style={{ padding: "64px 24px", background: "#fafafa" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 22 }}>
                {DESARROLLOS.map((d) => (
                  <a key={d.href} href={d.href} style={{ textDecoration: "none" }}>
                    <article style={{ height: "100%", overflow: "hidden", borderRadius: 18, background: "#fff", border: "1px solid #e5e7eb", boxShadow: "0 3px 16px rgba(0,0,0,.05)" }}>
                      <div style={{ height: 210, position: "relative", overflow: "hidden", background: "#111827" }}>
                        <img src={d.imagen} alt={d.nombre} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: .82 }} />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(17,24,39,.78),transparent 70%)" }} />
                        <span style={{ position: "absolute", top: 12, left: 12, background: "#C8102E", color: "#fff", borderRadius: 99, padding: "5px 10px", fontSize: 10, fontWeight: 900 }}>{d.etiqueta}</span>
                        <div style={{ position: "absolute", left: 16, right: 16, bottom: 14 }}>
                          <h2 style={{ color: "#fff", fontSize: 21, margin: "0 0 3px" }}>{d.nombre}</h2>
                          <p style={{ color: "rgba(255,255,255,.76)", fontSize: 12, margin: 0 }}>{d.zona}</p>
                        </div>
                      </div>
                      <div style={{ padding: 18 }}>
                        <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.65, margin: "0 0 14px" }}>{d.detalle}</p>
                        <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
                          <strong style={{ color: "#C8102E", fontSize: 16 }}>{d.precio}</strong>
                          <span style={{ color: "#C8102E", fontWeight: 800, fontSize: 13 }}>Ver desarrollo →</span>
                        </div>
                      </div>
                    </article>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding: "56px 24px", background: "#fff" }}>
            <div style={{ maxWidth: 920, margin: "0 auto" }}>
              <h2 style={{ color: "#1a1a2e", fontSize: 28, margin: "0 0 14px" }}>Comprar en preventa o entrega inmediata</h2>
              <p style={{ color: "#4b5563", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>Cada desarrollo tiene condiciones, inventario y calendarios distintos. Emporio te ayuda a comparar ubicación, precio, formas de pago y disponibilidad antes de tomar una decisión.</p>
              <p style={{ color: "#4b5563", fontSize: 15, lineHeight: 1.8, margin: 0 }}>También puedes consultar nuestro catálogo de <a href="/departamentos-en-venta-puebla">departamentos en venta en Puebla</a>, <a href="/casas-en-venta-puebla">casas en venta en Puebla</a> y <a href="/propiedades">propiedades disponibles</a>.</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
