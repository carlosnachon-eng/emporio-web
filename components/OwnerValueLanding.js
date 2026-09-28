import Head from "next/head";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SemanticBreadcrumbs from "./SemanticBreadcrumbs";
import OwnerLeadForm from "./OwnerLeadForm";
import { generarSlugPropiedad, SITE_URL } from "../lib/propertySeo";
import { registrarEventoSitio } from "../lib/siteAnalytics";

const CSS = `
*{box-sizing:border-box}.op-page{font-family:'Montserrat',sans-serif;color:#171717;background:#f8f7f5}.op-wrap{max-width:1160px;margin:0 auto}.op-section{padding:82px 28px}.op-hero{min-height:660px;display:flex;align-items:center;position:relative;background:#111;color:#fff;isolation:isolate;overflow:hidden}.op-hero:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,8,8,.96),rgba(8,8,8,.78) 52%,rgba(8,8,8,.3));z-index:-1}.op-hero-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2}.op-kicker,.owner-eyebrow{font-size:12px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#c8102e}.op-hero .op-kicker{color:#ffb2bd}.op-hero h1{font-size:58px;line-height:1.03;max-width:790px;margin:14px 0 22px;letter-spacing:-.035em}.op-hero-copy{font-size:19px;line-height:1.7;color:#ececec;max-width:690px}.op-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}.op-button{display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:7px;padding:15px 21px;background:#c8102e;color:#fff;text-decoration:none;font-weight:900;cursor:pointer;font:inherit}.op-button-secondary{background:transparent;border:1px solid rgba(255,255,255,.75)}.op-two{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}.op-three{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.op-section h2{font-size:38px;line-height:1.15;margin:10px 0 18px;letter-spacing:-.025em}.op-copy{color:#575757;line-height:1.8;font-size:16px}.op-factors{display:grid;gap:14px}.op-factor{padding:18px;background:#fff;border-left:3px solid #c8102e;box-shadow:0 5px 22px rgba(0,0,0,.045)}.op-dark{background:#141414;color:#fff}.op-dark .op-copy{color:#ccc}.op-review{padding:40px;background:#fff;color:#171717}.op-process{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:32px;counter-reset:step}.op-step{counter-increment:step;background:#fff;padding:24px 20px;border-top:2px solid #171717}.op-step:before{content:"0" counter(step);display:block;color:#c8102e;font-weight:900;font-size:13px;margin-bottom:18px}.op-step h3{font-size:17px;margin:0 0 9px}.op-step p{font-size:14px;color:#666;line-height:1.65}.op-zones{display:flex;gap:9px;flex-wrap:wrap;margin-top:24px}.op-zones span{background:#fff;border:1px solid #ddd;padding:8px 12px;font-size:13px;font-weight:800}.op-card{background:#fff;color:#171717;text-decoration:none;border:1px solid #e1e1e1;overflow:hidden}.op-card img{width:100%;height:190px;object-fit:cover;display:block}.op-card div{padding:18px}.op-card h3{font-size:16px;line-height:1.45;margin:7px 0}.op-location{font-size:13px;color:#666}.op-form-section{background:#eeeae5}.owner-form{background:#fff;padding:38px;border-top:4px solid #c8102e;box-shadow:0 16px 50px rgba(0,0,0,.08)}.owner-form h2{font-size:31px;margin:8px 0 10px}.owner-form-intro{color:#666;line-height:1.65;margin:0 0 24px}.owner-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:17px}.owner-form label{font-size:13px;font-weight:800;color:#333}.owner-form label span,.owner-privacy{font-weight:400;color:#777}.owner-wide{grid-column:1/-1}.owner-submit{width:100%;margin-top:20px;border:0;border-radius:7px;padding:15px;background:#c8102e;color:#fff;font-weight:900;font-size:15px;cursor:pointer}.owner-submit:disabled{opacity:.65}.owner-privacy{font-size:11px;line-height:1.6}.owner-error{color:#991b1b;font-size:13px}.owner-success{display:grid;gap:8px;padding:32px;background:#ecfdf5;color:#065f46;border-left:4px solid #059669}.op-final{background:#c8102e;color:#fff;text-align:center}.op-final .op-button{background:#111}.op-final p{max-width:700px;margin:0 auto 25px;line-height:1.7;color:#ffe8ec}
@media(max-width:900px){.op-two{grid-template-columns:1fr;gap:34px}.op-process{grid-template-columns:1fr 1fr}.op-three{grid-template-columns:1fr 1fr}.op-hero h1{font-size:46px}}@media(max-width:620px){.op-section{padding:58px 20px}.op-hero{min-height:650px}.op-hero:before{background:linear-gradient(180deg,rgba(8,8,8,.92),rgba(8,8,8,.78))}.op-hero h1{font-size:38px}.op-hero-copy{font-size:16px}.op-actions,.op-actions .op-button{width:100%}.op-section h2{font-size:30px}.op-process,.op-three,.owner-form-grid{grid-template-columns:1fr}.owner-wide{grid-column:auto}.owner-form{padding:26px 20px}.op-card:nth-child(n+3){display:none}}
`;

function primeraFoto(propiedad) {
  return propiedad?.fotos?.find?.((foto) => foto?.url)?.url || "";
}

export default function OwnerValueLanding({ plaza, propiedades = [] }) {
  const veracruz = plaza === "VERACRUZ";
  const path = veracruz ? "/vender-propiedad-veracruz" : "/vender-propiedad-puebla";
  const city = veracruz ? "Veracruz" : "Puebla";
  const title = veracruz ? "Vender propiedad en Veracruz | Opinión de Valor | Emporio" : "Vender propiedad en Puebla | Opinión de Valor | Emporio";
  const description = veracruz
    ? "Solicita una Opinión de Valor y define una estrategia para vender tu casa, departamento o terreno en Veracruz con Emporio Inmobiliario."
    : "Solicita una Opinión de Valor y define una estrategia para vender tu casa, departamento o terreno en Puebla con Emporio Inmobiliario.";
  const config = {
    plaza,
    landingPath: path,
    subject: `Opinión de Valor — propietario ${city}`,
    defaultScenario: "opinion_valor",
    analyticsContext: veracruz ? "captacion_propietarios_veracruz" : "captacion_propietarios_puebla",
    conversionEvent: veracruz ? "site_owner_lead_veracruz" : "site_owner_lead_puebla",
    zonePlaceholder: veracruz ? "Veracruz, Boca del Río o Riviera Veracruzana" : "Puebla, Cholula, Lomas, Cuautlancingo o Atlixco",
  };
  const heroImage = primeraFoto(propiedades[0]);
  const schema = {
    "@context":"https://schema.org","@graph":[
      {"@type":"WebPage","@id":`${SITE_URL}${path}#webpage`,url:`${SITE_URL}${path}`,name:title,description,inLanguage:"es-MX"},
      {"@type":"Service","@id":`${SITE_URL}${path}#service`,name:`Opinión de Valor para vender propiedad en ${city}`,serviceType:"Opinión de valor y estrategia de comercialización inmobiliaria",provider:{"@type":"RealEstateAgent",name:"Emporio Inmobiliario",url:SITE_URL},areaServed:(veracruz?["Veracruz","Boca del Río","Riviera Veracruzana"]:["Puebla","Cholula","Lomas de Angelópolis","Cuautlancingo","Atlixco"]).map((name)=>({"@type":"Place",name})),audience:{"@type":"Audience",audienceType:"Propietarios de inmuebles"}},
      {"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Inicio",item:`${SITE_URL}/`},{"@type":"ListItem",position:2,name:`Vender propiedad en ${city}`,item:`${SITE_URL}${path}`}]}
    ]
  };
  const [scenario, setScenario] = require("react").useState("opinion_valor");
  const move = (next) => {
    setScenario(next);
    registrarEventoSitio("site_lead_cta_click",{contexto:config.analyticsContext,destino:"formulario_opinion_valor",ubicacion:next,ruta:path,plaza,servicio:"SELL_PROPERTY",owner_scenario:next});
    requestAnimationFrame(()=>document.getElementById("formulario")?.scrollIntoView({behavior:"smooth",block:"start"}));
  };

  return (
    <>
      <Head><title>{title}</title><meta name="description" content={description}/><link rel="canonical" href={`${SITE_URL}${path}`}/><meta name="robots" content="index, follow"/><meta property="og:type" content="website"/><meta property="og:title" content={title}/><meta property="og:description" content={description}/><meta property="og:url" content={`${SITE_URL}${path}`}/><meta property="og:image" content={heroImage || `${SITE_URL}/logo.png`}/><meta name="twitter:card" content="summary_large_image"/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></Head>
      <style dangerouslySetInnerHTML={{__html:CSS}}/>
      <div className="op-page">
        <Navbar/>
        <SemanticBreadcrumbs items={[{label:"Propietarios",href:"/propietarios"},{label:city,href:veracruz?"/inmobiliaria-veracruz":"/propiedades?estado=Puebla"},{label:"Comercializa tu propiedad",href:path}]}/>
        <header className="op-hero op-section">{heroImage&&<img className="op-hero-image" src={heroImage} alt={`Propiedad comercializada por Emporio en ${city}`}/>}<div className="op-wrap" style={{width:"100%"}}><p className="op-kicker">Emporio Inmobiliario · {city}</p><h1>¿Quieres vender tu propiedad en {city}?</h1><p className="op-hero-copy">Conoce su valor comercial y define una estrategia de venta antes de publicarla. Emporio analiza tu propiedad y te acompaña durante todo el proceso comercial.</p><div className="op-actions"><button className="op-button" onClick={()=>move("opinion_valor")}>Solicitar Opinión de Valor</button><button className="op-button op-button-secondary" onClick={()=>move("propiedad_publicada")}>Mi propiedad ya está en venta</button></div></div></header>
        <main>
          <section className="op-section"><div className="op-wrap op-two"><div><p className="op-kicker">Decidir con información</p><h2>Una estrategia de venta comienza por entender el valor comercial</h2><p className="op-copy">La Opinión de Valor ayuda a posicionar una casa, departamento o terreno frente a la oferta disponible. No es un avalúo bancario: es el punto de partida para tomar decisiones comerciales mejor sustentadas.</p><div className="op-zones">{(veracruz?["Veracruz","Boca del Río","Riviera Veracruzana"]:["Puebla","Cholula","Lomas de Angelópolis","Cuautlancingo","Atlixco"]).map(z=><span key={z}>{z}</span>)}</div></div><div className="op-factors"><div className="op-factor"><strong>Propiedad y ubicación</strong><p className="op-copy">Características, superficie, estado y entorno.</p></div><div className="op-factor"><strong>Oferta y competencia</strong><p className="op-copy">Comparables y alternativas con las que competirá.</p></div><div className="op-factor"><strong>Posicionamiento</strong><p className="op-copy">Precio, presentación, demanda y estrategia comercial.</p></div></div></div></section>
          <section className="op-section op-dark"><div className="op-wrap op-two"><div className="op-review"><p className="op-kicker">Segunda mirada</p><h2>¿Tu propiedad lleva meses en venta?</h2><p className="op-copy">Antes de seguir bajando el precio conviene revisar presentación, competencia, demanda y estrategia. Un ajuste aislado no siempre resuelve el problema de posicionamiento.</p><button className="op-button" onClick={()=>move("propiedad_publicada")}>Quiero revisar mi propiedad</button></div><div><p className="op-kicker">Más que publicar</p><h2>Emporio dirige un proceso comercial</h2><p className="op-copy">Conocemos el inmueble, analizamos el mercado, preparamos su promoción, filtramos interesados, coordinamos visitas y acompañamos la negociación y el cierre.</p></div></div></section>
          <section className="op-section"><div className="op-wrap"><p className="op-kicker">Cómo trabaja Emporio</p><h2>De conocer tu propiedad a acompañar el cierre</h2><div className="op-process">{[["Conocemos el inmueble","Entendemos características, ubicación y objetivo."],["Analizamos el mercado","Revisamos competencia y comparables pertinentes."],["Definimos la estrategia","Preparamos posicionamiento, presentación y promoción."],["Gestionamos la operación","Filtramos interesados, visitas, negociación y cierre."]].map(([h,p])=><article className="op-step" key={h}><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>
          {propiedades.length>0&&<section className="op-section" style={{background:"#fff"}}><div className="op-wrap"><p className="op-kicker">{veracruz?"Operación real":"Experiencia operativa"}</p><h2>{veracruz?"Ya estamos comercializando propiedades en Veracruz":"Propiedades que ya comercializamos en Puebla"}</h2><p className="op-copy" style={{maxWidth:740}}>Esta selección muestra nuestra actividad real en la plaza y ayuda a sustentar una estrategia comercial con conocimiento del mercado.</p><div className="op-three" style={{marginTop:30}}>{propiedades.slice(0,3).map((propiedad)=><Link className="op-card" href={`/propiedades/${generarSlugPropiedad(propiedad)}`} key={propiedad.public_id}><article>{primeraFoto(propiedad)&&<img loading="lazy" src={primeraFoto(propiedad)} alt={propiedad.titulo}/>}<div><p className="op-kicker">{propiedad.status==="reserved"?"Reservada":"Disponible"}</p><h3>{propiedad.titulo}</h3><p className="op-location">{[propiedad.colonia,propiedad.ciudad,propiedad.estado].filter(Boolean).join(", ")}</p></div></article></Link>)}</div></div></section>}
          <section className="op-section op-form-section"><div className="op-wrap op-two" style={{alignItems:"start"}}><div><p className="op-kicker">Primer paso</p><h2>Solicita una Opinión de Valor</h2><p className="op-copy">Compártenos los datos esenciales. El equipo de captación de Emporio revisará tu caso y se pondrá en contacto contigo.</p></div><OwnerLeadForm config={config} requestedScenario={scenario} key={scenario}/></div></section>
          <section className="op-section op-final"><div className="op-wrap"><h2>Tu propiedad merece una estrategia, no sólo una publicación</h2><p>Conoce cómo puede posicionarse en el mercado de {city} y decide el siguiente paso con información.</p><button className="op-button" onClick={()=>move("opinion_valor")}>Solicitar Opinión de Valor</button></div></section>
        </main>
        <Footer showContextualLinks={false} brandDescription={veracruz?"Experiencia inmobiliaria aplicada a la venta, renta y comercialización de propiedades, ahora con operación activa en Veracruz.":undefined}/>
      </div>
    </>
  );
}
