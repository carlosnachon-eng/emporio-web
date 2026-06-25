import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LeyendaProfeco from "../components/LeyendaProfeco";

const BASE = "https://equiah.com/app-assets/images";

const IMGS = {
  hero: `${BASE}/banner-vive-01.jpg`,
  hero2: `${BASE}/banner-vive-02.jpg`,
  ubicacion: `${BASE}/img-ubicacion.jpg`,
  conoce1: `${BASE}/carrousel-conoce-01.jpg`,
  conoce2: `${BASE}/carrousel-conoce-02.jpg`,
  conoce3: `${BASE}/carrousel-conoce-03.jpg`,
  sauce_plano: `${BASE}/sauce-01.png`,
  sauce1: `${BASE}/sauce-01.jpg`,
  sauce2: `${BASE}/sauce-02.jpg`,
  sauce3: `${BASE}/sauce-03.jpg`,
  sauce4: `${BASE}/sauce-04.jpg`,
  sauce5: `${BASE}/sauce-05.jpg`,
  encino_plano: `${BASE}/encino-01.png`,
  encino1: `${BASE}/encino-01.jpg`,
  encino2: `${BASE}/encino-02.jpg`,
  encino3: `${BASE}/encino-03.jpg`,
  encino4: `${BASE}/encino-04.jpg`,
  encino5: `${BASE}/encino-05.jpg`,
};

const fmt = (n) => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", minimumFractionDigits: 0 }).format(n);

const ENCINO = [
  { id:"D2", nivel:"2", m2:161.64, extra:"—", total:195.14, precio:5640000, entrega:"Jun 2026", nota:"Incluye muebles estudio y mueble negro sala-comedor" },
  { id:"D3", nivel:"3 y 4", m2:169.06, extra:"77.89 m² Roof G", total:280.36, precio:5950000, entrega:"Jul 2026", nota:"" },
  { id:"C1", nivel:"1 (PB)", m2:161.64, extra:"42.34 m² jardín", total:238.4, precio:5800000, entrega:"Ene 2027", nota:"" },
  { id:"C2", nivel:"2", m2:161.64, extra:"—", total:196.0, precio:5350000, entrega:"Mar 2027", nota:"" },
  { id:"C3", nivel:"3 y 4", m2:162.21, extra:"109.52 m² Roof G", total:305.5, precio:5800000, entrega:"May 2027", nota:"" },
];

const SAUCE = [
  { id:"E2", nivel:"2", m2:243.87, extra:"28.01 m² cajones", total:271.9, precio:8950000, entrega:"Sep 2026", nota:"Incluye muebles estudio y mueble negro pasillo" },
  { id:"G2", nivel:"2", m2:244.6, extra:"28.01 m² cajones", total:272.6, precio:8800000, entrega:"May 2027", nota:"" },
];

const GALERIA_CONOCE = [
  { src: IMGS.conoce1, label: "Áreas comunes" },
  { src: IMGS.conoce2, label: "Espacios naturales" },
  { src: IMGS.conoce3, label: "Comunidad" },
];

const GALERIA_SAUCE = [
  { src: IMGS.sauce1, label: "Sala / comedor" },
  { src: IMGS.sauce2, label: "Recámara principal" },
  { src: IMGS.sauce3, label: "Cocina" },
  { src: IMGS.sauce4, label: "Terraza" },
  { src: IMGS.sauce5, label: "Área exterior" },
];

const GALERIA_ENCINO = [
  { src: IMGS.encino1, label: "Sala / comedor" },
  { src: IMGS.encino2, label: "Recámara principal" },
  { src: IMGS.encino3, label: "Cocina" },
  { src: IMGS.encino4, label: "Terraza" },
  { src: IMGS.encino5, label: "Área exterior" },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": "Equiah Departamentos — Preventa junto a Val'Quirico, Tlaxcala",
  "description": "Equiah Villa Sustentable: departamentos en preventa junto a Val'Quirico, Tlaxcala. Solo 7 unidades disponibles. Modelo Encino 2 recámaras desde $5,350,000 y Sauce 3 recámaras desde $8,800,000. 35,000 m² de áreas verdes, alberca techada, hípico, yoga, cancha de tenis y tecnología sustentable. A 18 km de Cholula y 15 km del aeropuerto de Puebla.",
  "url": "https://www.emporioinmobiliario.com.mx/equiah",
  "image": `${BASE}/banner-vive-01.jpg`,
  "datePosted": "2025-01-01",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "MXN",
    "price": "5350000",
    "priceValidUntil": "2027-12-31",
    "availability": "https://schema.org/LimitedAvailability"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Km 2 Carretera Xoxtla-Tlaxcala, Hacienda Santa Águeda",
    "addressLocality": "San Sebastián Atlahapa",
    "addressRegion": "Tlaxcala",
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.2614",
    "longitude": "-98.2089"
  },
  "numberOfRooms": "2-3",
  "floorSize": {
    "@type": "QuantitativeValue",
    "minValue": "161.64",
    "maxValue": "253",
    "unitCode": "MTK"
  },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Alberca techada con carriles de nado", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Gimnasio equipado", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Sala de yoga", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Hípico Equiah", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Cancha de tenis", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "4 paneles solares por departamento", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Cerraduras inteligentes", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "35,000 m² de áreas verdes", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Terraza panorámica", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Cafetería", "value": true }
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

function GaleriaGrid({ items }) {
  const [lb, setLb] = useState(null);
  const prev = () => setLb(i => (i - 1 + items.length) % items.length);
  const next = () => setLb(i => (i + 1) % items.length);
  return (
    <>
      <Lightbox items={items} index={lb} onClose={() => setLb(null)} onPrev={prev} onNext={next} />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))", gap:12 }}>
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
    </>
  );
}

export default function Equiah() {
  return (
    <>
      <Head>
        <title>Equiah Departamentos — Preventa junto a Val'Quirico | Emporio Inmobiliario</title>
        <meta name="description" content="Equiah Villa Sustentable: 7 departamentos en preventa junto a Val'Quirico, Tlaxcala. Encino 2 rec desde $5,350,000 y Sauce 3 rec desde $8,800,000. Alberca techada, hípico, yoga, 35,000 m² verdes. A 18 km de Cholula." />
        <meta name="keywords" content="equiah departamentos, equiah val quirico, departamentos preventa val quirico, equiah villa sustentable, departamentos tlaxcala puebla, hacienda santa agueda departamentos, departamentos sustentables puebla" />
        <meta property="og:title" content="Equiah Departamentos — Preventa junto a Val'Quirico | Emporio Inmobiliario" />
        <meta property="og:description" content="Solo 7 unidades disponibles. Encino desde $5,350,000 y Sauce desde $8,800,000. 35,000 m² de naturaleza junto a Val'Quirico, Tlaxcala." />
        <meta property="og:image" content={IMGS.hero} />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/equiah" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/equiah" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
        />
      </Head>

      <div style={{ fontFamily:"'Montserrat', sans-serif", background:"#fff", overflowX:"hidden", width:"100%" }}>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html:`
          * { box-sizing:border-box; margin:0; padding:0; }
          html, body { width:100%; overflow-x:hidden; }
          @media(max-width:768px){
            .hero-grid{grid-template-columns:1fr!important;}
            .tip-grid{grid-template-columns:1fr!important;}
            .stats-bar{grid-template-columns:repeat(2,1fr)!important;}
            .plano-grid{grid-template-columns:1fr!important;}
            h1{font-size:36px!important;}
            .hero-inner{padding:80px 20px 60px!important;}
          }
        ` }} />
        <Navbar />

        {/* HERO */}
        <div style={{ position:"relative", minHeight:"90vh", display:"flex", alignItems:"center", overflow:"hidden", width:"100%" }}>
          <img src={IMGS.hero} alt="Equiah Departamentos junto a Val'Quirico Tlaxcala" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(90deg, rgba(20,35,20,.92) 0%, rgba(20,35,20,.6) 60%, rgba(20,35,20,.2) 100%)" }} />
          <div className="hero-inner" style={{ position:"relative", zIndex:1, maxWidth:1100, margin:"0 auto", padding:"100px 32px 80px", width:"100%" }}>
            <div style={{ maxWidth:580 }}>
              <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(100,140,80,.3)", border:"1px solid rgba(100,140,80,.5)", padding:"6px 16px", borderRadius:99, marginBottom:24 }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:"#7cb87a", display:"inline-block" }} />
                <span style={{ fontSize:11, color:"#a8d4a6", fontWeight:700, letterSpacing:".1em", textTransform:"uppercase" }}>Preventa activa · Hacienda Santa Águeda</span>
              </div>
              <h1 style={{ fontSize:64, fontWeight:900, color:"#fff", lineHeight:1.0, margin:"0 0 4px", letterSpacing:"-.02em", fontStyle:"italic" }}>EQUIAH</h1>
              <p style={{ fontSize:13, color:"rgba(255,255,255,.5)", margin:"0 0 16px", letterSpacing:".3em", textTransform:"uppercase", fontWeight:600 }}>DEPARTAMENTOS</p>
              <p style={{ fontSize:20, color:"#a8d4a6", margin:"0 0 20px", fontStyle:"italic", fontWeight:300 }}>Respira calidad de vida.</p>
              <p style={{ fontSize:17, color:"rgba(255,255,255,.75)", lineHeight:1.8, margin:"0 0 16px" }}>
                35,000 m² de naturaleza y comunidad. Casi 4,000 árboles, tecnología sustentable y espacios diseñados para vivir diferente. Junto a Val'Quirico, a 18 km de Cholula.
              </p>
              <p style={{ fontSize:22, fontWeight:900, color:"#f59e0b", margin:"0 0 32px" }}>Encino desde $5,350,000 · Sauce desde $8,800,000</p>
              <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                <a href="https://wa.me/522222573237?text=Hola,%20me%20interesa%20información%20sobre%20Equiah%20Departamentos" target="_blank" rel="noreferrer" data-proyecto-cta="hero-whatsapp"
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
        <div style={{ background:"#2d3a2e" }}>
          <div className="stats-bar" style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)" }}>
            {[
              { val:"21", label:"Departamentos" },
              { val:"35,000", label:"m² totales" },
              { val:"~4,000", label:"Árboles" },
              { val:"7", label:"Solo 7 disponibles" },
            ].map((s, i) => (
              <div key={i} style={{ padding:"28px 20px", textAlign:"center", borderRight: i < 3 ? "1px solid rgba(255,255,255,.08)" : "none" }}>
                <div style={{ fontSize:28, fontWeight:900, color:"#a8d4a6" }}>{s.val}</div>
                <div style={{ fontSize:12, color:"rgba(255,255,255,.4)", marginTop:4, textTransform:"uppercase", letterSpacing:".5px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CONTEXTO SEO */}
        <div style={{ padding:"56px 32px 0", background:"#fafafa" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div style={{ maxWidth:760, margin:"0 auto", textAlign:"center" }}>
              <p style={{ fontSize:11, color:"#C8102E", fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", margin:"0 0 12px" }}>Por qué Equiah</p>
              <h2 style={{ fontSize:28, fontWeight:900, color:"#1a1a2e", margin:"0 0 16px" }}>El desarrollo sustentable más único cerca de Puebla</h2>
              <p style={{ fontSize:15, color:"#6b7280", lineHeight:1.8, margin:"0 0 12px" }}>
                Equiah Villa Sustentable es un exclusivo desarrollo habitacional ubicado junto a Val'Quirico, en Hacienda Santa Águeda, Tlaxcala. A tan solo 18 km de Cholula, 26 km de Angelópolis y 15 km del Aeropuerto Internacional de Puebla, Equiah combina conectividad metropolitana con un entorno natural de 35,000 m² y casi 4,000 árboles.
              </p>
              <p style={{ fontSize:15, color:"#6b7280", lineHeight:1.8, margin:0 }}>
                Con solo 21 departamentos en total y 7 unidades disponibles, Equiah ofrece dos modelos exclusivos: Encino de 2 recámaras y 161–169 m², y Sauce de 3 recámaras y 243–253 m². Cada departamento incluye 4 paneles solares, cerraduras inteligentes, bodega y 2 cajones de estacionamiento. Un proyecto de altísima plusvalía en la zona Puebla-Tlaxcala.
              </p>
            </div>
          </div>
        </div>

        {/* UBICACIÓN + GALERÍA */}
        <div style={{ padding:"72px 32px", background:"#fafafa" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div className="hero-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"center", marginBottom:56 }}>
              <div>
                <p style={{ fontSize:11, color:"#C8102E", fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", margin:"0 0 12px" }}>Ubicación privilegiada</p>
                <h2 style={{ fontSize:36, fontWeight:900, color:"#1a1a2e", margin:"0 0 16px" }}>Tan cerca de todo,<br />lejos del estrés.</h2>
                <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                  {[
                    { icon:"🏇", lugar:"Val'Quirico", dist:"Al lado" },
                    { icon:"🏛️", lugar:"Cholula", dist:"18 km" },
                    { icon:"🛍️", lugar:"Angelópolis, Costco, Hospital Ángeles", dist:"26 km" },
                    { icon:"✈️", lugar:"Aeropuerto Internacional de Puebla", dist:"15 km" },
                  ].map((item, i) => (
                    <div key={i} style={{ display:"flex", alignItems:"center", gap:14, padding:"14px 16px", background:"#fff", border:"1px solid #f3f4f6", borderRadius:10 }}>
                      <span style={{ fontSize:22, flexShrink:0 }}>{item.icon}</span>
                      <span style={{ fontSize:14, color:"#374151", fontWeight:500, flex:1 }}>{item.lugar}</span>
                      <span style={{ fontSize:13, fontWeight:800, color:"#C8102E" }}>{item.dist}</span>
                    </div>
                  ))}
                </div>
              </div>
              <img src={IMGS.ubicacion} alt="Ubicación Equiah junto a Val'Quirico" style={{ width:"100%", borderRadius:20, objectFit:"cover", height:380 }} />
            </div>
            <p style={{ fontSize:11, color:"#C8102E", fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", margin:"0 0 20px" }}>El desarrollo</p>
            <GaleriaGrid items={GALERIA_CONOCE} />
          </div>
        </div>

        {/* AMENIDADES */}
        <div style={{ padding:"72px 32px", background:"#2d3a2e" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:40 }}>
              <p style={{ fontSize:11, color:"#a8d4a6", fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", margin:"0 0 10px" }}>Amenidades</p>
              <h2 style={{ fontSize:36, fontWeight:900, color:"#fff", margin:0 }}>Un estilo de vida completo.</h2>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))", gap:16 }}>
              {[
                { icon:"🏊", name:"Alberca techada con carriles" },
                { icon:"💪", name:"Gimnasio" },
                { icon:"🧘", name:"Sala de yoga" },
                { icon:"🎾", name:"Cancha de tenis" },
                { icon:"⚽", name:"Cancha de fútbol / voleibol" },
                { icon:"☕", name:"Cafetería" },
                { icon:"🐴", name:"Hípico Equiah*" },
                { icon:"🛗", name:"Lobby y elevadores" },
                { icon:"🎉", name:"Salón Equiah" },
                { icon:"🌅", name:"Terraza panorámica" },
                { icon:"☀️", name:"4 paneles solares" },
                { icon:"🔐", name:"Cerraduras inteligentes" },
              ].map((a, i) => (
                <div key={i} style={{ background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.1)", borderRadius:12, padding:"20px 16px", textAlign:"center" }}>
                  <div style={{ fontSize:28, marginBottom:8 }}>{a.icon}</div>
                  <p style={{ fontSize:12, fontWeight:600, color:"rgba(255,255,255,.75)", margin:0, lineHeight:1.4 }}>{a.name}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize:12, color:"rgba(255,255,255,.3)", marginTop:20, textAlign:"center" }}>*Hípico Equiah es de propiedad privada y ofrece sus servicios al condominio con costo.</p>
          </div>
        </div>

        {/* TIPOLOGÍAS */}
        <div style={{ padding:"72px 32px", background:"#fff" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:48 }}>
              <p style={{ fontSize:11, color:"#C8102E", fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", margin:"0 0 10px" }}>Dos estilos</p>
              <h2 style={{ fontSize:36, fontWeight:900, color:"#1a1a2e", margin:0 }}>Encino & Sauce</h2>
            </div>

            {/* ENCINO */}
            <div style={{ marginBottom:56 }}>
              <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:24 }}>
                <h3 style={{ fontSize:24, fontWeight:900, color:"#1a1a2e", margin:0, fontStyle:"italic" }}>Encino</h3>
                <span style={{ fontSize:13, color:"#6b7280" }}>2 Recámaras · 2.5 Baños · 1 Estudio · 161–169 m²</span>
              </div>
              <div className="plano-grid" style={{ display:"grid", gridTemplateColumns:"300px 1fr", gap:32, alignItems:"start", marginBottom:24 }}>
                <img src={IMGS.encino_plano} alt="Plano departamento Encino Equiah 2 recámaras" style={{ width:"100%", borderRadius:12, border:"1px solid #f3f4f6" }} />
                <div>
                  <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
                    {["Sala / comedor","Cocina con isla de granito","2 terrazas","Jardín privado (Nivel 1)","Roof garden privado (Nivel 3)","2 cajones de estacionamiento","Bodega incluida","4 paneles solares","Cerraduras y apagadores inteligentes"].map((item, i) => (
                      <div key={i} style={{ display:"flex", gap:8, alignItems:"center" }}>
                        <span style={{ color:"#C8102E", fontSize:12, flexShrink:0 }}>✓</span>
                        <span style={{ fontSize:14, color:"#374151" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize:22, fontWeight:900, color:"#C8102E", margin:0 }}>Desde $5,350,000</p>
                </div>
              </div>
              <GaleriaGrid items={GALERIA_ENCINO} />
            </div>

            {/* SAUCE */}
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:24, flexWrap:"wrap" }}>
                <h3 style={{ fontSize:24, fontWeight:900, color:"#1a1a2e", margin:0, fontStyle:"italic" }}>Sauce</h3>
                <span style={{ fontSize:13, color:"#6b7280" }}>3 Recámaras · 3.5 Baños · Family room · 243–253 m²</span>
                <span style={{ fontSize:12, fontWeight:700, background:"#fff0f2", color:"#C8102E", padding:"4px 12px", borderRadius:99 }}>¡Solo 2 disponibles!</span>
              </div>
              <div className="plano-grid" style={{ display:"grid", gridTemplateColumns:"300px 1fr", gap:32, alignItems:"start", marginBottom:24 }}>
                <img src={IMGS.sauce_plano} alt="Plano departamento Sauce Equiah 3 recámaras" style={{ width:"100%", borderRadius:12, border:"1px solid #f3f4f6" }} />
                <div>
                  <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
                    {["Family room","Sala / comedor","Cocina con isla de granito","3 terrazas","Jardín privado (Nivel 1)","Roof garden (Nivel 3)","2 cajones de estacionamiento","4 paneles solares","Cerraduras inteligentes"].map((item, i) => (
                      <div key={i} style={{ display:"flex", gap:8, alignItems:"center" }}>
                        <span style={{ color:"#C8102E", fontSize:12, flexShrink:0 }}>✓</span>
                        <span style={{ fontSize:14, color:"#374151" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize:22, fontWeight:900, color:"#C8102E", margin:0 }}>Desde $8,800,000</p>
                </div>
              </div>
              <GaleriaGrid items={GALERIA_SAUCE} />
            </div>
          </div>
        </div>

        {/* RECORRIDOS VIRTUALES */}
        <div style={{ padding:"56px 32px", background:"#fafafa" }}>
          <div style={{ maxWidth:1100, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:11, color:"#C8102E", fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", margin:"0 0 10px" }}>Recorridos virtuales</p>
            <h2 style={{ fontSize:30, fontWeight:900, color:"#1a1a2e", margin:"0 0 32px" }}>Explora los departamentos en 360°</h2>
            <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
              <a href="https://kuula.co/share/collection/71qVk?logo=0&info=1&fs=1&vr=0&sd=1&thumbs=1" target="_blank" rel="noreferrer"
                style={{ background:"#1a1a2e", color:"#fff", padding:"14px 28px", borderRadius:12, fontWeight:800, fontSize:15, textDecoration:"none" }}>
                🏠 Tour virtual — 2 Recámaras (Encino)
              </a>
              <a href="https://kuula.co/share/collection/71lpq?logo=0&info=1&fs=1&vr=0&sd=1&thumbs=1" target="_blank" rel="noreferrer"
                style={{ background:"#2d3a2e", color:"#fff", padding:"14px 28px", borderRadius:12, fontWeight:800, fontSize:15, textDecoration:"none" }}>
                🏡 Tour virtual — 3 Recámaras (Sauce)
              </a>
            </div>
          </div>
        </div>

        {/* DISPONIBILIDAD */}
        <div id="disponibilidad" style={{ padding:"72px 32px", background:"#fff" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div style={{ marginBottom:32 }}>
              <p style={{ fontSize:11, color:"#C8102E", fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", margin:"0 0 10px" }}>Lista de precios Abril 2026</p>
              <h2 style={{ fontSize:36, fontWeight:900, color:"#1a1a2e", margin:"0 0 8px" }}>Disponibilidad Equiah</h2>
              <p style={{ fontSize:14, color:"#6b7280" }}>Solo 7 unidades disponibles en total. El resto ya está vendido.</p>
            </div>

            <h3 style={{ fontSize:18, fontWeight:800, color:"#1a1a2e", margin:"0 0 16px" }}>Modelo Encino — 2 Recámaras</h3>
            <div style={{ border:"1px solid #f3f4f6", borderRadius:16, overflow:"hidden", marginBottom:32, boxShadow:"0 4px 20px rgba(0,0,0,.06)", overflowX:"auto" }}>
              <div style={{ display:"grid", gridTemplateColumns:"70px 70px 80px 1fr 80px 130px 120px", background:"#2d3a2e", minWidth:600 }}>
                {["Depto","Nivel","m² Const","Extra","Total m²","Precio","Entrega"].map((h,i) => (
                  <div key={i} style={{ padding:"12px 14px", fontSize:11, fontWeight:800, color:"#fff", borderLeft:i>0?"1px solid rgba(255,255,255,.15)":"none" }}>{h}</div>
                ))}
              </div>
              {ENCINO.map((dep, i) => (
                <div key={i} style={{ display:"grid", gridTemplateColumns:"70px 70px 80px 1fr 80px 130px 120px", background:i%2===0?"#fff":"#fafafa", borderTop:"1px solid #f3f4f6", minWidth:600 }}>
                  <div style={{ padding:"13px 14px", fontSize:13, fontWeight:700, color:"#1a1a2e" }}>{dep.id}</div>
                  <div style={{ padding:"13px 14px", fontSize:13, color:"#6b7280", borderLeft:"1px solid #f3f4f6" }}>{dep.nivel}</div>
                  <div style={{ padding:"13px 14px", fontSize:13, color:"#374151", borderLeft:"1px solid #f3f4f6" }}>{dep.m2}</div>
                  <div style={{ padding:"13px 14px", fontSize:12, color:"#6b7280", borderLeft:"1px solid #f3f4f6" }}>{dep.extra}</div>
                  <div style={{ padding:"13px 14px", fontSize:13, color:"#374151", borderLeft:"1px solid #f3f4f6" }}>{dep.total}</div>
                  <div style={{ padding:"13px 14px", fontSize:13, fontWeight:800, color:"#C8102E", borderLeft:"1px solid #f3f4f6" }}>{fmt(dep.precio)}</div>
                  <div style={{ padding:"13px 14px", fontSize:12, color:"#374151", borderLeft:"1px solid #f3f4f6" }}>{dep.entrega}</div>
                </div>
              ))}
            </div>

            <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:16, flexWrap:"wrap" }}>
              <h3 style={{ fontSize:18, fontWeight:800, color:"#1a1a2e", margin:0 }}>Modelo Sauce — 3 Recámaras</h3>
              <span style={{ fontSize:12, fontWeight:700, background:"#fff0f2", color:"#C8102E", padding:"4px 12px", borderRadius:99 }}>¡Solo 2 disponibles!</span>
            </div>
            <div style={{ border:"1px solid #f3f4f6", borderRadius:16, overflow:"hidden", marginBottom:12, boxShadow:"0 4px 20px rgba(0,0,0,.06)", overflowX:"auto" }}>
              <div style={{ display:"grid", gridTemplateColumns:"70px 70px 80px 1fr 80px 130px 120px", background:"#1a1a2e", minWidth:600 }}>
                {["Depto","Nivel","m² Const","Extra","Total m²","Precio","Entrega"].map((h,i) => (
                  <div key={i} style={{ padding:"12px 14px", fontSize:11, fontWeight:800, color:"#fff", borderLeft:i>0?"1px solid rgba(255,255,255,.15)":"none" }}>{h}</div>
                ))}
              </div>
              {SAUCE.map((dep, i) => (
                <div key={i} style={{ display:"grid", gridTemplateColumns:"70px 70px 80px 1fr 80px 130px 120px", background:i%2===0?"#fff":"#fafafa", borderTop:"1px solid #f3f4f6", minWidth:600 }}>
                  <div style={{ padding:"13px 14px", fontSize:13, fontWeight:700, color:"#1a1a2e" }}>{dep.id}</div>
                  <div style={{ padding:"13px 14px", fontSize:13, color:"#6b7280", borderLeft:"1px solid #f3f4f6" }}>{dep.nivel}</div>
                  <div style={{ padding:"13px 14px", fontSize:13, color:"#374151", borderLeft:"1px solid #f3f4f6" }}>{dep.m2}</div>
                  <div style={{ padding:"13px 14px", fontSize:12, color:"#6b7280", borderLeft:"1px solid #f3f4f6" }}>{dep.extra}</div>
                  <div style={{ padding:"13px 14px", fontSize:13, color:"#374151", borderLeft:"1px solid #f3f4f6" }}>{dep.total}</div>
                  <div style={{ padding:"13px 14px", fontSize:13, fontWeight:800, color:"#C8102E", borderLeft:"1px solid #f3f4f6" }}>{fmt(dep.precio)}</div>
                  <div style={{ padding:"13px 14px", fontSize:12, color:"#374151", borderLeft:"1px solid #f3f4f6" }}>{dep.entrega}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize:12, color:"#9ca3af", fontStyle:"italic", marginBottom:32 }}>*Precios en MXN + IVA. Sujetos a cambio. Las condiciones pueden adaptarse al esquema de pago.</p>

            <div style={{ textAlign:"center" }}>
              <a href="https://wa.me/522222573237?text=Hola,%20me%20interesa%20información%20sobre%20Equiah%20Departamentos" target="_blank" rel="noreferrer" data-proyecto-cta="disponibilidad-whatsapp"
                style={{ display:"inline-block", background:"#C8102E", color:"#fff", padding:"14px 32px", borderRadius:12, fontWeight:800, fontSize:15, textDecoration:"none" }}>
                💬 Apartar mi departamento en Equiah
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ padding:"72px 32px", background:"#2d3a2e", textAlign:"center" }}>
          <div style={{ maxWidth:640, margin:"0 auto" }}>
            <h2 style={{ fontSize:36, fontWeight:900, color:"#fff", margin:"0 0 16px", lineHeight:1.1 }}>7 unidades. Sin segunda oportunidad.</h2>
            <p style={{ fontSize:16, color:"rgba(255,255,255,.7)", margin:"0 0 32px", lineHeight:1.7 }}>Equiah ya está prácticamente vendido. Si te interesa vivir en uno de los proyectos sustentables más únicos cerca de Puebla, habla con nosotros hoy.</p>
            <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
              <a href="https://wa.me/522222573237?text=Hola,%20me%20interesa%20información%20sobre%20Equiah%20Departamentos" target="_blank" rel="noreferrer" data-proyecto-cta="cta-final-whatsapp"
                style={{ background:"#C8102E", color:"#fff", padding:"14px 28px", borderRadius:12, fontWeight:800, fontSize:15, textDecoration:"none" }}>
                💬 Hablar por WhatsApp
              </a>
              <a href="tel:+522222573237" data-proyecto-cta="cta-final-telefono" style={{ background:"rgba(255,255,255,.12)", color:"#fff", padding:"14px 28px", borderRadius:12, fontWeight:700, fontSize:15, textDecoration:"none", border:"1px solid rgba(255,255,255,.25)" }}>
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
