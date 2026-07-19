import CondominioArticle from "../../components/blog/CondominioArticle";

const article = {
  slug: "que-hace-administrador-condominios-fraccionamientos",
  title: "¿Qué hace un administrador de condominios y fraccionamientos?",
  seoTitle: "Qué hace un administrador de condominios y fraccionamientos",
  description: "Conoce las responsabilidades financieras, operativas, documentales y de comunicación que debe coordinar una administración condominal.",
  eyebrow: "Funciones y responsabilidades",
  readTime: "8 min de lectura",
  intro: [
    "Administrar un condominio o fraccionamiento no consiste únicamente en cobrar cuotas y contratar mantenimiento. La función central es convertir decisiones colectivas, recursos y obligaciones en un sistema que el comité pueda supervisar.",
    "El alcance concreto depende del tamaño, las amenidades, el personal, los proveedores y los acuerdos de cada desarrollo. Aun así, existen responsabilidades que permiten distinguir una administración integral de una operación limitada a resolver pendientes.",
  ],
  sections: [
    {
      title: "Control financiero y cobranza",
      paragraphs: ["La administración debe proporcionar información suficiente para que el comité conozca qué se cobró, qué se gastó y qué compromisos siguen pendientes."],
      items: [
        { title: "Emisión y seguimiento de cuotas", text: "Mantener saldos por unidad, identificar pagos y dar seguimiento a adeudos conforme a los acuerdos aplicables." },
        { title: "Registro de gastos", text: "Relacionar cada egreso con su concepto, proveedor, comprobante y autorización." },
        { title: "Reportes para el comité", text: "Presentar información periódica que permita tomar decisiones, no sólo listas de movimientos." },
        { title: "Presupuesto", text: "Comparar la operación real contra lo aprobado e informar desviaciones relevantes." },
      ],
    },
    {
      title: "Operación, mantenimiento y proveedores",
      paragraphs: ["El administrador coordina la ejecución; el comité conserva la capacidad de supervisar prioridades, costos y resultados."],
      items: [
        "Programar mantenimiento preventivo y registrar su cumplimiento.",
        "Solicitar, comparar y conservar propuestas de proveedores.",
        "Dar seguimiento a incidencias hasta su cierre.",
        "Documentar servicios, evidencias y entregables.",
        "Coordinar al personal conforme a las necesidades del desarrollo.",
      ],
    },
    {
      title: "Documentación y continuidad",
      paragraphs: [
        "Los archivos del condominio pertenecen al proceso institucional, no a la computadora o al teléfono de una persona. Contratos, facturas, actas, pólizas y expedientes deben mantenerse localizables.",
        "Esta organización permite que el comité revise información y que una transición de administración no obligue a reconstruir la historia desde cero.",
      ],
    },
    {
      title: "Comunicación y acompañamiento al comité",
      paragraphs: [
        "El administrador no sustituye las decisiones que corresponden a la asamblea o al comité. Su función es preparar información, ejecutar acuerdos y comunicar avances con claridad.",
        "Una relación sana establece canales, responsables, tiempos de respuesta y límites. Esto reduce mensajes contradictorios y evita que todos los asuntos se atiendan como urgencias.",
      ],
    },
    {
      title: "Condominio y fraccionamiento: el método debe adaptarse",
      paragraphs: [
        "Un desarrollo vertical puede concentrar elevadores, accesos y equipos comunes; un fraccionamiento puede requerir mayor coordinación de vigilancia, vialidades, áreas verdes o servicios distribuidos. El método de control es comparable, pero la carga operativa no es idéntica.",
        "Por eso una propuesta responsable comienza analizando unidades, amenidades, proveedores, personal, morosidad, documentación y forma de gobierno antes de definir alcance y honorarios.",
      ],
    },
  ],
  faqs: [
    { question: "¿El administrador decide en lugar del comité?", answer: "No. Debe ejecutar los acuerdos y aportar información para la toma de decisiones, respetando las facultades que correspondan al comité y a la asamblea." },
    { question: "¿La administración incluye automáticamente todos los servicios?", answer: "No necesariamente. El alcance debe documentarse según las necesidades del desarrollo, el personal existente, las amenidades y los proveedores involucrados." },
    { question: "¿Un fraccionamiento puede utilizar el mismo proceso que un condominio?", answer: "Puede compartir controles financieros, documentales y de seguimiento, pero la operación debe adaptarse a su distribución, servicios y estructura de gobierno." },
  ],
};

const related = [
  { slug: "como-saber-si-condominio-bien-administrado", title: "Cómo saber si un condominio está bien administrado" },
  { slug: "cuanto-cuesta-administracion-condominios-puebla", title: "Cuánto cuesta la administración de condominios en Puebla" },
  { slug: "como-reducir-morosidad-condominio", title: "Cómo reducir la morosidad en un condominio" },
];

export default function Page() {
  return <CondominioArticle article={article} related={related} />;
}
