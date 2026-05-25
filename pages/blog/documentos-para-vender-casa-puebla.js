import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const DOCUMENTOS = [
{
numero:"01",
titulo:"Escritura del inmueble",
emoji:"📜",
descripcion:"La escritura acredita la propiedad y contiene información importante sobre el inmueble.",
revisar:[
"Nombre del propietario",
"Datos del inmueble",
"Copropietarios",
"Antecedentes"
]
},
{
numero:"02",
titulo:"Identificación oficial vigente",
emoji:"🪪",
descripcion:"Debe coincidir con los datos de la escritura y de la operación.",
revisar:[
"INE",
"Pasaporte",
"Cédula profesional"
]
},
{
numero:"03",
titulo:"CURP y RFC",
emoji:"🧾",
descripcion:"Estos documentos suelen requerirse durante el proceso.",
revisar:[
"CURP actualizada",
"RFC"
]
},
{
numero:"04",
titulo:"Boleta predial",
emoji:"🏠",
descripcion:"Ayuda a confirmar situación y adeudos.",
revisar:[
"Predial vigente",
"Adeudos pendientes"
]
},
{
numero:"05",
titulo:"Comprobante de agua",
emoji:"🚰",
descripcion:"Importante revisar si existen adeudos.",
revisar:[
"Pago vigente",
"Adeudos"
]
},
{
numero:"06",
titulo:"Documentos de condominio",
emoji:"🏢",
descripcion:"Si aplica para departamentos o fraccionamientos.",
revisar:[
"Reglamento",
"Mantenimiento"
]
},
{
numero:"07",
titulo:"Documentos adicionales",
emoji:"📄",
descripcion:"Dependiendo del caso pueden requerirse documentos extra.",
revisar:[
"Cancelación de hipoteca",
"Poderes",
"Sucesiones"
]
}
];

export default function DocumentosVenderCasa(){

return(
<>
<Head>

<title>
7 documentos necesarios para vender una casa en Puebla — Emporio Inmobiliario
</title>

<meta
name="description"
content="Descubre qué documentos necesitas para vender una casa en Puebla y evita retrasos durante el proceso de compraventa."
/>

<meta
name="keywords"
content="documentos vender casa Puebla, requisitos vender casa Puebla, escritura casa Puebla, documentos compraventa Puebla"
/>

<meta
property="og:title"
content="7 documentos necesarios para vender una casa en Puebla"
/>

<meta
property="og:description"
content="Conoce los documentos necesarios para vender una casa y evitar retrasos."
/>

<link
rel="canonical"
href="https://www.emporioinmobiliario.com.mx/blog/documentos-para-vender-casa-puebla"
/>

</Head>

<div style={{
fontFamily:"Montserrat,sans-serif"
}}>

<Navbar/>

<div style={{
background:"linear-gradient(120deg,#1a1a2e 0%,#0f1520 100%)",
padding:"70px 30px"
}}>

<div style={{
maxWidth:"780px",
margin:"auto"
}}>

<span style={{
color:"#fca5a5",
fontWeight:"700"
}}>
Documentación inmobiliaria
</span>

<h1 style={{
fontSize:"46px",
fontWeight:"900",
color:"#fff",
marginTop:"20px"
}}>
7 documentos necesarios para vender una casa en Puebla
</h1>

<p style={{
fontSize:"18px",
color:"rgba(255,255,255,.7)"
}}>
Conoce qué documentos debes preparar para evitar retrasos y facilitar tu operación inmobiliaria.
</p>

<div style={{
marginTop:"20px",
display:"flex",
gap:"20px",
color:"rgba(255,255,255,.5)"
}}>
<span>📅 11 mayo 2026</span>
<span>⏱ 6 min</span>
</div>

</div>

</div>

<div style={{
maxWidth:"780px",
margin:"auto",
padding:"50px 30px"
}}>

{DOCUMENTOS.map((doc)=>(
<div
key={doc.numero}
style={{
border:"1px solid #eee",
padding:"30px",
borderRadius:"20px",
marginBottom:"30px"
}}
>

<h2>
{doc.emoji} {doc.titulo}
</h2>

<p>
{doc.descripcion}
</p>

{
doc.revisar.map((item,index)=>(
<p key={index}>
✓ {item}
</p>
))
}

</div>
))}

</div>

<Footer/>

</div>

</>
)

}
