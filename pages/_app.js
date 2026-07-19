// pages/_app.js
//
// Punto de entrada global del sitio. Antes no existía este archivo (Next.js
// usa un comportamiento default sin él), pero lo necesitamos para declarar
// la fuente Montserrat con next/font/google de forma centralizada.
//
// Por qué esto importa para rendimiento: antes, cada página cargaba la
// fuente con un <link> a Google Fonts directamente en el cuerpo del JSX
// (no en <Head>), lo cual el navegador descubre tarde y bloquea el
// renderizado mientras espera la respuesta de fonts.googleapis.com.
//
// next/font/google descarga la fuente en build time, la sirve desde el
// propio dominio (sin depender de una petición externa a Google en cada
// visita), y la inyecta sin bloquear el render — el navegador puede pintar
// el contenido de inmediato con una fuente de respaldo mientras la fuente
// real termina de cargar.

import { Montserrat } from "next/font/google";
import GoogleAnalytics from "../components/GoogleAnalytics";
import ProyectosAnalytics from "../components/ProyectosAnalytics";
import SiteAnalytics from "../components/SiteAnalytics";
import StructuredData from "../components/StructuredData";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }) {
  // El wrapper es necesario para que next/font inyecte la variable CSS de
  // la fuente (--font-montserrat) en el árbol de React. No lleva estilos
  // de tamaño/posición propios, así que no debería alterar el layout de
  // ninguna página (cada página sigue controlando su propio min-height,
  // display, etc. en su elemento raíz interno).
  return (
    <div className={montserrat.variable}>
      <GoogleAnalytics />
      <ProyectosAnalytics />
      <SiteAnalytics />
      <StructuredData />
      <Component {...pageProps} />
    </div>
  );
}
