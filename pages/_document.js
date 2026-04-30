import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Fuentes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Meta básico */}
        <meta name="description" content="Emporio Inmobiliario — Vende, renta o encuentra tu próxima propiedad en Puebla. Más de 20 años de experiencia, sin costo hasta cerrar." />
        <meta name="keywords" content="inmobiliaria puebla, renta puebla, venta casas puebla, departamentos puebla, emporio inmobiliario" />
        <meta name="author" content="Emporio Inmobiliario" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph — vista previa en WhatsApp, Facebook, etc. */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Emporio Inmobiliario" />
        <meta property="og:title" content="Emporio Inmobiliario — Tu propiedad en Puebla" />
        <meta property="og:description" content="Vende, renta o encuentra tu próxima propiedad en Puebla. Más de 20 años de experiencia, sin costo hasta cerrar." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx" />
        <meta property="og:image" content="https://www.emporioinmobiliario.com.mx/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_MX" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Emporio Inmobiliario — Tu propiedad en Puebla" />
        <meta name="twitter:description" content="Vende, renta o encuentra tu próxima propiedad en Puebla. Más de 20 años de experiencia." />
        <meta name="twitter:image" content="https://www.emporioinmobiliario.com.mx/og-image.jpg" />

        {/* Google Search Console — agregar tu código aquí cuando lo tengas */}
        {/* <meta name="google-site-verification" content="TU_CODIGO_AQUI" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
