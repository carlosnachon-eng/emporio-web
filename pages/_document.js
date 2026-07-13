import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Metadatos compartidos; title, description y URL se definen por página. */}
        <meta name="author" content="Emporio Inmobiliario" />

        {/* Open Graph — vista previa en WhatsApp, Facebook, etc. */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Emporio Inmobiliario" />
        <meta property="og:image" content="https://www.emporioinmobiliario.com.mx/logo.png" />
        <meta property="og:image:width" content="768" />
        <meta property="og:image:height" content="434" />
        <meta property="og:locale" content="es_MX" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.emporioinmobiliario.com.mx/logo.png" />

        {/* Google Search Console — agregar tu código aquí cuando lo tengas */}
        {/* <meta name="google-site-verification" content="TU_CODIGO_AQUI" /> */}
      </Head>
      {/* La variable --font-montserrat la inyecta next/font/google
          automáticamente (declarada en pages/_app.js) — esto reemplaza el
          <link> a fonts.googleapis.com que antes bloqueaba el render en
          cada página individual. */}
      <body style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
