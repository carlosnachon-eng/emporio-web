import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SECCIONES = [
  {
    titulo: "1. Identidad y domicilio del responsable",
    contenido: "Grupo Inmobiliario Nachón Torres S.A. de C.V., con domicilio en Quinto Retorno de Osa Menor, 2A, Col. Reserva Territorial Atlixcayotl, San Andrés Cholula, Puebla, C.P. 72820, es responsable del tratamiento de sus datos personales conforme a lo establecido en el presente Aviso de Privacidad."
  },
  {
    titulo: "2. Datos personales que recabamos",
    contenido: "Grupo Inmobiliario Nachón Torres S.A. de C.V. recaba y trata datos personales de clientes, propietarios, arrendadores, arrendatarios y prospectos, incluyendo pero no limitándose a:\n• Datos de identificación (nombre, edad, estado civil, nacionalidad, RFC, CURP, identificación oficial).\n• Datos de contacto (teléfono, correo electrónico, domicilio).\n• Datos patrimoniales y financieros (información bancaria, comprobantes de ingresos, escrituras de propiedad, historial de pagos).\n• Datos fiscales y comerciales (RFC, constancia de situación fiscal, facturación).\n• En caso de arrendamientos, referencias personales y antecedentes de historial crediticio."
  },
  {
    titulo: "3. Finalidades del tratamiento de los datos personales",
    contenido: "Los datos personales que recabamos serán utilizados para las siguientes finalidades:\n• Prestación de servicios inmobiliarios de intermediación para compra, venta o renta de inmuebles.\n• Elaboración y formalización de contratos de arrendamiento y compraventa.\n• Verificación de antecedentes y capacidad financiera de arrendadores y arrendatarios.\n• Facturación y cumplimiento de obligaciones fiscales.\n• Envío de información relevante sobre inmuebles y servicios relacionados.\n• Contacto y seguimiento de prospectos y clientes.\n• Cumplimiento de obligaciones legales y contractuales."
  },
  {
    titulo: "4. Transferencia de datos personales",
    contenido: "Sus datos personales podrán ser compartidos con terceros únicamente para el cumplimiento de los servicios ofrecidos, incluyendo:\n• Notarios públicos y autoridades para formalización de contratos.\n• Instituciones bancarias en caso de procesos de financiamiento.\n• Despachos legales o administrativos en caso de procedimientos legales o de cobranza.\n• Empresas de marketing y publicidad (únicamente con fines de promoción de servicios y siempre con su consentimiento previo)."
  },
  {
    titulo: "5. Medios para ejercer sus derechos ARCO",
    contenido: "Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (derechos ARCO) al tratamiento de sus datos personales. Para ejercer estos derechos, puede enviar una solicitud por escrito al correo electrónico administracion@emporioinmobiliario.com.mx con los siguientes datos:\n• Nombre completo.\n• Identificación oficial.\n• Descripción clara del derecho que desea ejercer."
  },
  {
    titulo: "6. Medidas de seguridad",
    contenido: "Grupo Inmobiliario Nachón Torres S.A. de C.V. implementa medidas de seguridad físicas, administrativas y tecnológicas para proteger sus datos personales contra acceso no autorizado, uso indebido o alteración."
  },
  {
    titulo: "7. Modificaciones al aviso de privacidad",
    contenido: "Grupo Inmobiliario Nachón Torres S.A. de C.V. se reserva el derecho de modificar este Aviso de Privacidad en cualquier momento. Cualquier cambio será publicado en nuestra página web."
  },
  {
    titulo: "8. Contacto",
    contenido: "Si tiene dudas o desea más información sobre el tratamiento de sus datos personales, puede contactarnos en administracion@emporioinmobiliario.com.mx o al teléfono 2222573237.\n\nFecha de última actualización: 18/03/2025"
  },
];

export default function AvisoPrivacidad() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <div style={{ background: "#1a1a2e" }}><Navbar transparent={false} /></div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 32px" }}>
        <p style={{ fontSize: 12, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 16px" }}>Legal</p>
        <h1 style={{ fontSize: 44, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>Aviso de privacidad</h1>
        <p style={{ fontSize: 15, color: "#9ca3af", margin: "0 0 60px" }}>Grupo Inmobiliario Nachón Torres S.A. de C.V. · Última actualización: 18/03/2025</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {SECCIONES.map((s, i) => (
            <div key={i} style={{ borderTop: "1px solid #f3f4f6", padding: "32px 0" }}>
              <h2 style={{ fontSize: 16, fontWeight: 800, color: "#1a1a2e", margin: "0 0 16px" }}>{s.titulo}</h2>
              <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.9, margin: 0, whiteSpace: "pre-line" }}>{s.contenido}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
