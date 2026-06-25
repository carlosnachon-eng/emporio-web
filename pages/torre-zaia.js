import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LeyendaProfeco from "../components/LeyendaProfeco";

const CDN = "https://res.cloudinary.com/djq3wl79q/image/upload";

const IMGS = {
  fachada1: `${CDN}/v1779506032/HEM4_-_Fachada_1_btjb4r.png`,
  fachada2: `${CDN}/v1779506034/HEM4_-_Fachada_2_w3wray.png`,
  fachada3: `${CDN}/v1779506035/HEM4_-_Fachada_3_a9xvnh.png`,
  fachada4: `${CDN}/v1779506035/HEM4_-_Fachada_4_oshm55.png`,
  fachada_acercamiento: `${CDN}/v1779505172/HEM4_-_Fachada_acercamiento_x8a22o.png`,
  lobby1: `${CDN}/v1779505173/HEM4_-_Lobby_ylecnh.png`,
  lobby2: `${CDN}/v1779505173/HEM4_-_Lobby_2_cescev.png`,
  salon1: `${CDN}/v1779505174/HEM4_-_Salo%CC%81n_de_usos_mu%CC%81ltiples_2_hwxgka.png`,
  salon2: `${CDN}/v1779505178/HEM4_-_Salo%CC%81n_de_usos_mu%CC%81ltiples_dphyj4.png`,
  terraza1: `${CDN}/v1779505173/HEM4_-_Terraza_Comu%CC%81n_tdukch.png`,
  terraza2: `${CDN}/v1779505177/HEM4_-_Terraza_Comu%CC%81n_2_lfzfql.png`,
  jardin1: `${CDN}/v1779505173/HEM4_-_Jardi%CC%81n_Zen_altkfd.png`,
  jardin2: `${CDN}/v1779505170/HEM4_-_Jardi%CC%81n_Zen_2_oz2ndm.png`,
  pasillo1: `${CDN}/v1779505177/HEM4-Pasillo_cadkpw.png`,
  pasillo2: `${CDN}/v1779505172/HEM4-Pasillo_2_hoqh0t.png`,
  pasillo3: `${CDN}/v1779505178/HEM4-Pasillo_3_raeyj5.png`,
  estacionamiento1: `${CDN}/v1779505178/Torre_Zaia_-_Estacionamiento_konhpf.png`,
  estacionamiento2: `${CDN}/v1779505177/Torre_Zaia_-_Estacionamiento_2_egthov.png`,
  alberca1: `${CDN}/v1779505165/648c7fcd769ab4d6145e0bd4_Alberca_u7k1jo.jpg`,
  alberca2: `${CDN}/v1779505167/648763762d1db0a449302fdd_Alberca_Alcumbre_lhb86n.jpg`,
  spa: `${CDN}/v1779505167/64878320912b642792176b88_SPA_mmuszf.jpg`,
  gym: `${CDN}/v1779505165/648c83c64434b314d44bcf16_Gym_mw4ezx.jpg`,
  cine1: `${CDN}/v1779505166/648c80c54434b314d447bb3e_Cine_Alcumbre_2_lnv33u.jpg`,
  cine2: `${CDN}/v1779505166/6487889cb27ebd04ab83145f_Cine_Alcumbre_mcdyei.jpg`,
  ludoteca1: `${CDN}/v1779505165/648c801a4434b314d446ce2f_Ludoteca_Alcumbre_ywdyzz.jpg`,
  ludoteca2: `${CDN}/v1779505166/648786ab6c4024be25e83595_Ludoteca_Alcumbre_ykiudd.jpg`,
  salon_club: `${CDN}/v1779505166/648c844c683dfe6eaed949de_Salon_2_o5donj.jpg`,
  juegos: `${CDN}/v1779505166/64878711a0980b427333344d_Sala_de_Juegos_Alcumbre_z5q1kh.jpg`,
  cancha: `${CDN}/v1779505166/6487635ee145be9410a9ee7a_Cancha_de_Pa%CC%81del_Alcumbre_lspfr3.jpg`,
  isla: `${CDN}/v1779505166/648787d04c70ce3d13072cda_Alcumbre_IslaCreativa_17Ene22-14_web_ohowya.jpg`,
};

const DISPONIBLES = [
  { id:"102", tipo:"Alma", nivel:"N1/N2", m2:104.23, total:107.20, precio:3672720, eng20:734544 },
  { id:"106", tipo:"Armonía", nivel:"N1", m2:88.21, total:93.67, precio:3282290, eng20:656458 },
  { id:"107", tipo:"Vida I", nivel:"N1", m2:77.24, total:80.10, precio:2768910, eng20:553782 },
  { id:"302", tipo:"Alma", nivel:"N3/N4", m2:104.20, total:107.17, precio:3683008, eng20:736602 },
  { id:"304", tipo:"Calma II", nivel:"N2/N3", m2:106.19, total:109.21, precio:3703505, eng20:740701 },
  { id:"307", tipo:"Vida I", nivel:"N3", m2:77.69, total:83.37, precio:2883390, eng20:576678 },
  { id:"403", tipo:"Calma II", nivel:"N3/N4", m2:110.75, total:114.17, precio:3855265, eng20:771053 },
  { id:"407", tipo:"Vida I", nivel:"N4", m2:77.69, total:83.37, precio:2904835, eng20:580967 },
  { id:"501", tipo:"Calma I", nivel:"N4/N5", m2:119.05, total:129.41, precio:4073200, eng20:814640 },
  { id:"503", tipo:"Paz II", nivel:"N5", m2:53.80, total:65.84, precio:2595510, eng20:519102 },
  { id:"507", tipo:"Vida I", nivel:"N5", m2:77.59, total:83.38, precio:2925130, eng20:585026 },
  { id:"602", tipo:"Alma", nivel:"N6/N7", m2:107.02, total:111.97, precio:3920733, eng20:784147 },
  { id:"605", tipo:"Refugio", nivel:"N6", m2:71.86, total:73.97, precio:2800523, eng20:560105 },
  { id:"701", tipo:"Calma I", nivel:"N6/N7", m2:119.05, total:129.41, precio:4074500, eng20:814900 },
  { id:"704", tipo:"Calma II", nivel:"N6/N7", m2:103.96, total:108.66, precio:3763070, eng20:752614 },
];

const fmt = (n) => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", minimumFractionDigits: 0 }).format(n);

const GALERIA_ZAIA = [
  { src: IMGS.fachada_acercamiento, label: "Fachada — detalle" },
  { src: IMGS.fachada2, label: "Fachada lateral" },
  { src: IMGS.fachada3, label: "Fachada posterior" },
  { src: IMGS.lobby1, label: "Lobby" },
  { src: IMGS.lobby2, label: "Lobby" },
  { src: IMGS.salon1, label: "Salón de usos múltiples" },
  { src: IMGS.salon2, label: "Salón de usos múltiples" },
  { src: IMGS.terraza1, label: "Terraza común" },
  { src: IMGS.terraza2, label: "Terraza común" },
  { src: IMGS.jardin1, label: "Jardín Zen" },
  { src: IMGS.jardin2, label: "Jardín Zen" },
  { src: IMGS.pasillo1, label: "Pasillos" },
  { src: IMGS.pasillo2, label: "Pasillos" },
  { src: IMGS.estacionamiento1, label: "Estacionamiento" },
  { src: IMGS.estacionamiento2, label: "Estacionamiento" },
];

const GALERIA_ALCUMBRE = [
  { src: IMGS.alberca1, label: "Alberca" },
  { src: IMGS.alberca2, label: "Alberca" },
  { src: IMGS.spa, label: "Spa" },
  { src: IMGS.gym, label: "Gimnasio" },
  { src: IMGS.cine1, label: "Cine" },
  { src: IMGS.cine2, label: "Cine" },
  { src: IMGS.ludoteca1, label: "Ludoteca" },
  { src: IMGS.ludoteca2, label: "Ludoteca" },
  { src: IMGS.salon_club, label: "Salón club" },
  { src: IMGS.juegos, label: "Sala de juegos" },
  { src: IMGS.cancha, label: "Cancha de pádel" },
  { src: IMGS.isla, label: "Isla creativa" },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": "Torre Zaia — Departamentos en Preventa Lomas de Angelópolis III",
  "description": "Torre Zaia: 40 departamentos en preventa en Lomas de Angelópolis III, Puebla. 6 tipologías desde $2,056,025 MXN. Enganche desde 10%. Entrega diciembre 2027. Amenidades premium en Parque Alcumbre: alberca, spa, gym, cine privado, ludoteca y más.",
  "url": "https://www.emporioinmobiliario.com.mx/torre-zaia",
  "image": `${CDN}/v1779506032/HEM4_-_Fachada_1_btjb4r.png`,
  "datePosted": "2025-01-01",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "MXN",
    "price": "2056025",
    "priceValidUntil": "2027-12-31",
    "availability": "https://schema.org/InStock"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Parque Alcumbre, Lomas de Angelópolis III",
    "addressLocality": "San Andrés Cholula",
    "addressRegion": "Puebla",
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.0068",
    "longitude": "-98.2421"
  },
  "numberOfRooms": "1-3",
  "floorSize": {
    "@type": "QuantitativeValue",
    "minValue": "53.80",
    "maxValue": "119.05",
    "unitCode": "MTK"
  },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Alberca con carril de nado", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Cancha de pádel", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Gimnasio equipado", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Sala de cine VIP", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Elevador para autos", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Estacionamiento subterráneo", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Jardín Zen", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Terraza común", "value": true }
  ],
  "seller": {
    "@type": "RealEstateAgent",
    "name": "Emporio Inmobiliario",
    "url": "https://www.emporioinmobiliario.com.mx",
    "telephone": "+522222573237",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5to Retorno de Osa Menor 2A, Reserva Territorial Atlixcayotl",
      "addressLocality": "San Andrés Cholula",
      "addressRegion": "Puebla",
      "addressCountry": "MX"
    }
  }
};

function Lightbox({ items, index, onClose, onPrev, onNext }) {
  if (index === null) return null;
  return (
    <div onClick={onClose} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.93)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <button onClick={onClose} style={{ position:"absolute", top:20, right:24, background:"rgba(255,255,255,.12)", border:"none", color:"#fff", fontSize:22, width:44, height:44, borderRadius:"50%", cursor:"pointer" }}>✕</button>
      <div style={{ position:"absolute", top:24, left:"50%", transform:"translateX(-50%)", background:"rgba(255,255,255,.12)", color:"#fff", padding:"4px 16px", borderRadius:99, fontSize:13, fontWeight:600 }}>
        {items[index].label} — {index + 1} / {items.length}
      </div>
      <button onClick={e => { e.stopPropagation(); onPrev(); }} style={{ position:"absolute", left:20, background:"rgba(255,255,255,.15)", border:"none", color:"#fff", fontSize:28, width:52, height:52, borderRadius:"50%", cursor:"pointer" }}>‹</button>
      <img src={items[index].src} alt={items[index].label} onClick={e => e.stopPropagation()} style={{ maxWidth:"85vw", maxHeight:"85vh", objectFit:"contain", borderRadius:8 }} />
      <button onClick={e => { e.stopPropagation(); onNext(); }} style={{ position:"absolute", right:20, background:"rgba(255,255,255,.15)", border:"none", color:"#fff", fontSize:28, width:52, height:52, borderRadius:"50%", cursor:"pointer" }}>›</button>
    </div>
  );
}

function GaleriaGrid({ items, titulo }) {
  const [lb, setLb] = useState(null);
  const prev = () => setLb(i => (i - 1 + items.length) % items.length);
  const next = () => setLb(i => (i + 1) % items.length);
  return (
    <>
      <Lightbox items={items} index={lb} onClose={() => setLb(null)} onPrev={prev} onNext={next} />
      <div style={{ marginBottom:48 }}>
        {titulo && <h3 style={{ fontSize:20, fontWeight:800, color:"#1a1a2e", margin:"0 0 20px" }}>{titulo}</h3>}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))", gap:12 }}>
          {items.map((img, i) => (
            <div key={i} onClick={() => setLb(i)} style={{ borderRadius:12, overflow:"hidden", aspectRatio:"4/3", cursor:"zoom-in", position:"relative", background:"#f3f4f6" }}>
              <img src={img.src} alt={img.label} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block", transition:"transform .3s" }}
                onMouseOver={e => e.target.style.transform="scale(1.04)"}
                onMouseOut={e => e.target.style.transform="scale(1)"} />
              <div style={{ position:"absolute", bottom:0, left:0, right:0, background:"linear-gradient(transparent,rgba(0,0,0,.5))", padding:"20px 12px 10px" }}>
                <span style={{ fontSize:12, color:"#fff", fontWeight:600 }}>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function TorreZaia() {
  return (
    <>
      <Head>
        <title>Torre Zaia — Departamentos en Preventa en Lomas de Angelópolis III, Puebla</title>
        <meta name="description" content="Torre Zaia: departamentos en preventa en Lomas de Angelópolis III, Puebla. 40 unidades, 6 tipologías desde $2,056,025. Enganche desde 10%. Entrega diciembre 2027. Parque Alcumbre con alberca, spa, cine y más." />
        <meta name="keywords" content="torre zaia puebla, departamentos preventa lomas angelópolis III, preventa puebla 2027, departamentos nuevos angelópolis, parque alcumbre departamentos, torre zaia lomas angelópolis" />
        <meta property="og:title" content="Torre Zaia — Departamentos en Preventa Lomas de Angelópolis III | Emporio Inmobiliario" />
        <meta property="og:description" content="40 departamentos en preventa desde $2,056,025. 6 tipologías, enganche desde 10%. Entrega diciembre 2027. Parque Alcumbre, Lomas de Angelópolis III." />
        <meta property="og:image" content={IMGS.fachada1} />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/torre-zaia" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/torre-zaia" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
        />
      </Head>

      <div style={{ fontFamily:"'Montserrat', sans-serif", background:"#fff" }}>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html:`* { box-sizing:border-box; } @media(max-width:768px){ .hero-grid{grid-template-columns:1fr!important;} .stats-grid{grid-template-columns:repeat(2,1fr)!important;} .pago-grid{grid-template-columns:1fr!important;} h1{font-size:34px!important;} }` }} />
        <Navbar />

        {/* HERO */}
        <div style={{ position:"relative", minHeight:"90vh", display:"flex", alignItems:"center", overflow:"hidden" }}>
          <img src={IMGS.fachada1} alt="Torre Zaia fachada principal — Lomas de Angelópolis III" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top" }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(90deg, rgba(10,15,25,.92) 0%, rgba(10,15,25,.6) 60%, rgba(10,15,25,.2) 100%)" }} />
          <div style={{ position:"relative", zIndex:1, maxWidth:1100, margin:"0 auto", padding:"100px 32px 80px", width:"100%" }}>
            <div style={{ maxWidth:580 }}>
              <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(200,16,46,.25)", border:"1px solid rgba(200,16,46,.5)", padding:"6px 16px", borderRadius:99, marginBottom:24 }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:"#C8102E", display:"inline-block" }} />
                <span style={{ fontSize:11, color:"#fca5a5", fontWeight:700, letterSpacing:".1em", textTransform:"uppercase" }}>Preventa activa · Lomas de Angelópolis III</span>
              </div>
              <h1 style={{ fontSize:60, fontWeight:900, color:"#fff", lineHeight:1.0, margin:"0 0 8px", letterSpacing:"-.02em" }}>Torre <span style={{ color:"#C8102E" }}>Zaia</span></h1>
              <p style={{ fontSize:15, color:"rgba(255,255,255,.5)", margin:"0 0 20px", letterSpacing:".15em", textTransform:"uppercase", fontWeight:600 }}>Emporio Inmobiliario · Puebla</p>
              <p style={{ fontSize:17, color:"rgba(255,255,255,.75)", lineHeight:1.8, margin:"0 0 16px" }}>
                40 departamentos en la zona de mayor plusvalía de Lomas de Angelópolis. A 2 minutos del nuevo Barrio Cascatta en Parque Alcumbre. 6 tipologías, terrazas privadas y acceso a amenidades premium del cluster.
              </p>
              <p style={{ fontSize:22, fontWeight:900, color:"#f59e0b", margin:"0 0 32px" }}>Desde $2,056,025 · Enganche desde 10%</p>
              <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                <a href="https://wa.me/522222573237?text=Hola,%20quiero%20información%20sobre%20Torre%20Zaia" target="_blank" rel="noreferrer" data-proyecto-cta="hero-whatsapp"
                  style={{ background:"#C8102E", color:"#fff", padding:"14px 28px", borderRadius:12, fontWeight:800, fontSize:15, textDecoration:"none" }}>
                  💬 Quiero información
                </a>
                <a href="#disponibilidad" data-proyecto-cta="hero-disponibilidad" style={{ background:"rgba(255,255,255,.12)", color:"#fff", padding:"14px 28px", borderRadius:12, fontWeight:700, fontSize:15, textDecoration:"none", border:"1px solid rgba(255,255,255,.25)" }}>
                  Ver disponibilidad →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div style={{ background:"#1a1a2e" }}>
          <div className="stats-grid" style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)" }}>
            {[
              { val:"40", label:"Departamentos" },
              { val:"7", label:"Niveles" },
              { val:"6", label:"Tipologías" },
              { val:"Dic 2027", label:"Entrega" },
            ].map((s, i) => (
              <div key={i} style={{ padding:"28px 20px", textAlign:"center", borderRight: i < 3 ? "1px solid rgba(255,255,255,.08)" : "none" }}>
                <div style={{ fontSize:32, fontWeight:900, color:"#f59e0b" }}>{s.val}</div>
                <div style={{ fontSize:12, color:"rgba(255,255,255,.4)", marginTop:4, textTransform:"uppercase", letterSpacing:".5px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CONTEXTO SEO — texto rico para Google */}
        <div style={{ padding:"56px 32px 0", background:"#fafafa" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div style={{ maxWidth:760, margin:"0 auto", textAlign:"center" }}>
              <p style={{ fontSize:11, color:"#C8102E", fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", margin:"0 0 12px" }}>Por qué Torre Zaia</p>
              <h2 style={{ fontSize:28, fontWeight:900, color:"#1a1a2e", margin:"0 0 16px" }}>La mejor inversión en Lomas de Angelópolis III</h2>
              <p style={{ fontSize:15, color:"#6b7280", lineHeight:1.8, margin:"0 0 12px" }}>
                Torre Zaia es un proyecto de preventa ubicado en Parque Alcumbre, dentro de Lomas de Angelópolis III — la zona residencial de mayor plusvalía en San Andrés Cholula, Puebla. A solo 2 minutos del nuevo Barrio Cascatta y a 15 minutos de Angelópolis, ofrece conectividad total con el área metropolitana de Puebla.
              </p>
              <p style={{ fontSize:15, color:"#6b7280", lineHeight:1.8, margin:0 }}>
                Con 40 departamentos distribuidos en 7 niveles y 6 tipologías — desde lofts tipo estudio hasta departamentos dúplex de doble altura — Torre Zaia tiene una opción para cada estilo de vida. Los precios de preventa inician en $2,056,025 MXN con enganche desde el 10% y financiamiento hasta la entrega en diciembre de 2027.
              </p>
            </div>
          </div>
        </div>

        {/* ESQUEMA DE PAGO */}
        <div style={{ padding:"72px 32px", background:"#fafafa" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:40 }}>
              <p style={{ fontSize:11, color:"#C8102E", fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", margin:"0 0 10px" }}>Financiamiento flexible</p>
              <h2 style={{ fontSize:36, fontWeight:900, color:"#1a1a2e", margin:0 }}>Esquema de pago en preventa</h2>
            </div>
            <div className="pago-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
              {[
                { paso:"01", titulo:"Enganche 20%", desc:"Pago inicial al apartar. Aseguras el precio de preventa desde el primer día.", color:"#C8102E" },
                { paso:"02", titulo:"10 mensualidades", desc:"Durante construcción pagas mensualidades equivalentes al 10% adicional del enganche.", color:"#1a1a2e" },
                { paso:"03", titulo:"70% a la entrega", desc:"El saldo restante al recibir las llaves. Puedes usar crédito hipotecario.", color:"#C8102E" },
              ].map((p, i) => (
                <div key={i} style={{ background:p.color, borderRadius:16, padding:"32px 28px", position:"relative", overflow:"hidden" }}>
                  <div style={{ position:"absolute", bottom:-20, right:-10, fontSize:80, fontWeight:900, color:"rgba(255,255,255,.08)", lineHeight:1 }}>{p.paso}</div>
                  <div style={{ fontSize:11, fontWeight:700, color:"rgba(255,255,255,.5)", letterSpacing:".1em", textTransform:"uppercase", marginBottom:12 }}>Paso {p.paso}</div>
                  <h3 style={{ fontSize:22, fontWeight:900, color:"#fff", margin:"0 0 12px" }}>{p.titulo}</h3>
                  <p style={{ fontSize:14, color:"rgba(255,255,255,.7)", lineHeight:1.7, margin:0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ background:"#fff", border:"1px solid #f3f4f6", borderRadius:12, padding:"16px 24px", marginTop:20, textAlign:"center" }}>
              <p style={{ fontSize:14, color:"#6b7280", margin:0 }}>También disponible: <strong style={{ color:"#1a1a2e" }}>Enganche del 10%</strong> con mensualidades ajustadas. Consulta condiciones específicas por unidad.</p>
            </div>
          </div>
        </div>

        {/* GALERÍA ZAIA */}
        <div style={{ padding:"72px 32px", background:"#fff" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div style={{ marginBottom:40 }}>
              <p style={{ fontSize:11, color:"#C8102E", fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", margin:"0 0 10px" }}>Áreas comunes · Torre Zaia</p>
              <h2 style={{ fontSize:36, fontWeight:900, color:"#1a1a2e", margin:0 }}>Espacios diseñados para vivir bien.</h2>
            </div>
            <GaleriaGrid items={GALERIA_ZAIA} />
          </div>
        </div>

        {/* GALERÍA ALCUMBRE */}
        <div style={{ padding:"72px 32px", background:"#fafafa" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div style={{ marginBottom:40 }}>
              <p style={{ fontSize:11, color:"#C8102E", fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", margin:"0 0 10px" }}>Amenidades del cluster · Parque Alcumbre</p>
              <h2 style={{ fontSize:36, fontWeight:900, color:"#1a1a2e", margin:"0 0 12px" }}>Acceso a amenidades premium de nivel resort.</h2>
              <p style={{ fontSize:15, color:"#6b7280", lineHeight:1.7 }}>Torre Zaia está ubicada dentro del cluster de Parque Alcumbre, con acceso a amenidades de primer nivel que incluyen alberca con carril de nado, spa con vapor y jacuzzi, gimnasio equipado, cine privado VIP, ludoteca, sala de juegos con billar, cancha de pádel y más de 25 amenidades premium.</p>
            </div>
            <GaleriaGrid items={GALERIA_ALCUMBRE} />
          </div>
        </div>

        {/* DISPONIBILIDAD */}
        <div id="disponibilidad" style={{ padding:"72px 32px", background:"#fff" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div style={{ marginBottom:32 }}>
              <p style={{ fontSize:11, color:"#C8102E", fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", margin:"0 0 10px" }}>Lista de precios actualizada</p>
              <h2 style={{ fontSize:36, fontWeight:900, color:"#1a1a2e", margin:"0 0 8px" }}>Disponibilidad Torre Zaia</h2>
              <p style={{ fontSize:14, color:"#6b7280" }}>Solo unidades disponibles. Consulta disponibilidad exacta — algunas se apartan rápido.</p>
            </div>
            <div style={{ border:"1px solid #f3f4f6", borderRadius:16, overflow:"hidden", boxShadow:"0 4px 20px rgba(0,0,0,.06)", overflowX:"auto" }}>
              <div style={{ display:"grid", gridTemplateColumns:"70px 1fr 80px 70px 90px 120px 130px", background:"#C8102E", minWidth:680 }}>
                {["Unidad","Tipología","Nivel","m² Depto","m² Total","Precio","Eng. 20%"].map((h,i) => (
                  <div key={i} style={{ padding:"12px 14px", fontSize:11, fontWeight:800, color:"#fff", borderLeft: i>0?"1px solid rgba(255,255,255,.2)":"none" }}>{h}</div>
                ))}
              </div>
              {DISPONIBLES.map((dep, i) => (
                <div key={i} style={{ display:"grid", gridTemplateColumns:"70px 1fr 80px 70px 90px 120px 130px", background: i%2===0?"#fff":"#fafafa", borderTop:"1px solid #f3f4f6", minWidth:680 }}>
                  <div style={{ padding:"13px 14px", fontSize:13, fontWeight:700, color:"#1a1a2e" }}>{dep.id}</div>
                  <div style={{ padding:"13px 14px", fontSize:13, color:"#374151", borderLeft:"1px solid #f3f4f6" }}>{dep.tipo}</div>
                  <div style={{ padding:"13px 14px", fontSize:12, color:"#6b7280", borderLeft:"1px solid #f3f4f6" }}>{dep.nivel}</div>
                  <div style={{ padding:"13px 14px", fontSize:13, color:"#374151", borderLeft:"1px solid #f3f4f6" }}>{dep.m2}</div>
                  <div style={{ padding:"13px 14px", fontSize:13, color:"#374151", borderLeft:"1px solid #f3f4f6" }}>{dep.total}</div>
                  <div style={{ padding:"13px 14px", fontSize:13, fontWeight:800, color:"#C8102E", borderLeft:"1px solid #f3f4f6" }}>{fmt(dep.precio)}</div>
                  <div style={{ padding:"13px 14px", fontSize:13, color:"#374151", borderLeft:"1px solid #f3f4f6" }}>{fmt(dep.eng20)}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize:12, color:"#9ca3af", marginTop:12, fontStyle:"italic" }}>*Precios en MXN + IVA. Sujetos a cambio sin previo aviso. Entrega proyectada diciembre 2027.</p>
            <div style={{ textAlign:"center", marginTop:32 }}>
              <a href="https://wa.me/522222573237?text=Hola,%20quiero%20información%20sobre%20Torre%20Zaia" target="_blank" rel="noreferrer" data-proyecto-cta="disponibilidad-whatsapp"
                style={{ display:"inline-block", background:"#C8102E", color:"#fff", padding:"14px 32px", borderRadius:12, fontWeight:800, fontSize:15, textDecoration:"none" }}>
                💬 Apartar mi departamento en Torre Zaia
              </a>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div style={{ background:"#C8102E", padding:"72px 32px", textAlign:"center" }}>
          <div style={{ maxWidth:640, margin:"0 auto" }}>
            <h2 style={{ fontSize:36, fontWeight:900, color:"#fff", margin:"0 0 16px", lineHeight:1.1 }}>¿Listo para invertir en Torre Zaia?</h2>
            <p style={{ fontSize:16, color:"rgba(255,255,255,.85)", margin:"0 0 32px", lineHeight:1.7 }}>Las unidades se están agotando. Habla con un asesor de Emporio Inmobiliario hoy y asegura tu precio de preventa.</p>
            <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
              <a href="https://wa.me/522222573237?text=Hola,%20quiero%20información%20sobre%20Torre%20Zaia" target="_blank" rel="noreferrer" data-proyecto-cta="cta-final-whatsapp"
                style={{ background:"#fff", color:"#C8102E", padding:"14px 28px", borderRadius:12, fontWeight:800, fontSize:15, textDecoration:"none" }}>
                💬 Hablar por WhatsApp
              </a>
              <a href="tel:+522222573237" data-proyecto-cta="cta-final-telefono" style={{ background:"rgba(255,255,255,.15)", color:"#fff", padding:"14px 28px", borderRadius:12, fontWeight:700, fontSize:15, textDecoration:"none", border:"1px solid rgba(255,255,255,.3)" }}>
                📞 222 257 3237
              </a>
            </div>
          </div>
        </div>

        <LeyendaProfeco />
        <Footer />
        <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" data-proyecto-cta="flotante-whatsapp"
          style={{ position:"fixed", bottom:24, right:24, background:"#25d366", color:"#fff", width:56, height:56, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, boxShadow:"0 4px 16px rgba(0,0,0,.2)", textDecoration:"none", zIndex:100 }}>
          💬
        </a>
      </div>
    </>
  );
}
