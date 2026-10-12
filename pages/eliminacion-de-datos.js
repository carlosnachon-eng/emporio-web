import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EliminacionDeDatos() {
  return (
    <>
      <Head>
        <title>Eliminación de datos de Facebook e Instagram — Emporio</title>
        <meta name="description" content="Cómo solicitar a Emporio la eliminación de datos asociados a Facebook e Instagram. Contacto, información necesaria y verificación de la solicitud." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/eliminacion-de-datos" />
      </Head>
      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
        <div style={{ background: "#1a1a2e" }}><Navbar transparent={false} /></div>
        <main className="deletion-content">
          <p className="eyebrow">Privacidad · Emporio</p>
          <h1>Eliminación de datos</h1>
          <p>Instrucciones para solicitar la eliminación de datos asociados a Facebook e Instagram tratados por <strong>Grupo Inmobiliario Nachón Torres S.A. de C.V.</strong>, a través de Emporio y sus integraciones, incluida Emporio Social.</p>

          <section aria-labelledby="solicitud">
            <h2 id="solicitud">1. Envía tu solicitud</h2>
            <p>Escribe a <a href="mailto:administracion@emporioinmobiliario.com.mx">administracion@emporioinmobiliario.com.mx</a> con el asunto <strong>“Solicitud de eliminación de datos — Facebook/Instagram”</strong>.</p>
            <p>Incluye únicamente la información necesaria para localizar tus datos:</p>
            <ul>
              <li>Tu nombre y un correo electrónico para responderte.</li>
              <li>La plataforma utilizada: Facebook o Instagram.</li>
              <li>El nombre de usuario o enlace al perfil con el que interactuaste con Emporio.</li>
              <li>Una descripción de los datos cuya eliminación solicitas y, si la conoces, la fecha aproximada de la interacción.</li>
            </ul>
            <p>No envíes contraseñas, códigos de acceso, tokens ni información bancaria. No adjuntes documentos de identidad en el primer correo; si hace falta información adicional para verificar la solicitud, te indicaremos cómo proporcionarla.</p>
          </section>

          <section aria-labelledby="verificacion">
            <h2 id="verificacion">2. Verificamos la solicitud</h2>
            <p>Antes de eliminar datos, verificaremos que la solicitud corresponda a la persona titular o a su representante autorizado y que podamos identificar los registros relacionados. Podemos pedir aclaraciones o información adicional necesaria para evitar eliminar datos de otra persona.</p>
          </section>

          <section aria-labelledby="atencion">
            <h2 id="atencion">3. Revisamos el alcance y te informamos</h2>
            <p>La eliminación no es instantánea. Revisaremos los datos identificados y te informaremos del resultado o de cualquier impedimento para atender la solicitud. Si determinados datos deben conservarse por una obligación aplicable, te indicaremos esa circunstancia.</p>
            <p>Esta solicitud se refiere a los datos tratados por Emporio. No elimina tu cuenta de Facebook o Instagram ni los datos que Meta u otros terceros administran por su cuenta.</p>
          </section>

          <section aria-labelledby="privacidad">
            <h2 id="privacidad">Más información</h2>
            <p>Consulta nuestro <a href="https://www.emporioinmobiliario.com.mx/aviso-privacidad">Aviso de Privacidad</a> para conocer el tratamiento de tus datos personales y los medios para ejercer tus derechos.</p>
          </section>
        </main>
        <Footer />
      </div>
      <style jsx>{`
        .deletion-content { max-width: 800px; margin: 0 auto; padding: 72px 24px; color: #4b5563; line-height: 1.85; }
        .eyebrow { color: #c8102e; font-size: 12px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }
        h1 { color: #1a1a2e; font-size: clamp(30px, 6vw, 44px); line-height: 1.2; font-weight: 900; margin: 16px 0 24px; }
        h2 { color: #1a1a2e; font-size: 20px; line-height: 1.4; margin: 0 0 16px; }
        p, li { font-size: 15px; }
        section { border-top: 1px solid #e5e7eb; margin-top: 32px; padding-top: 32px; }
        ul { padding-left: 24px; }
        li { margin-bottom: 8px; }
        a { color: #a30d26; text-decoration: underline; overflow-wrap: anywhere; }
        a:focus-visible { outline: 2px solid #a30d26; outline-offset: 4px; }
      `}</style>
    </>
  );
}
