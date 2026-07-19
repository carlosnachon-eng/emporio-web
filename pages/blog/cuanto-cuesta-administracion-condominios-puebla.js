import CondominioArticle from "../../components/blog/CondominioArticle";

const article = {
  slug: "cuanto-cuesta-administracion-condominios-puebla",
  title: "¿Cuánto cuesta la administración de condominios en Puebla?",
  seoTitle: "Cuánto cuesta administrar un condominio en Puebla | Emporio",
  description: "Conoce qué variables determinan los honorarios de administración condominal y por qué una estimación responsable debe considerar la complejidad real.",
  eyebrow: "Honorarios y alcance",
  readTime: "7 min de lectura",
  intro: [
    "El costo de administrar un condominio no debería calcularse únicamente multiplicando el número de unidades por una tarifa. Dos desarrollos del mismo tamaño pueden requerir cargas de trabajo muy diferentes.",
    "Una estimación útil debe explicar qué variables incrementan la complejidad, qué actividades incluye el servicio y qué información falta antes de presentar una propuesta definitiva.",
  ],
  sections: [
    {
      title: "Las variables que más influyen en los honorarios",
      paragraphs: ["El número de unidades es relevante, pero no describe por sí solo la operación."],
      items: [
        { title: "Tipo y tamaño del desarrollo", text: "La distribución, cantidad de unidades y etapa operativa modifican el volumen de cobranza, atención y seguimiento." },
        { title: "Amenidades e infraestructura", text: "Elevadores, alberca, accesos, jardines, equipos y áreas compartidas implican proveedores y mantenimiento especializado." },
        { title: "Personal y proveedores", text: "La coordinación crece cuando existen varios contratos, turnos, entregables y autorizaciones." },
        { title: "Morosidad", text: "Una cartera vencida relevante requiere segmentación, seguimiento y acuerdos claros con el comité." },
        { title: "Estado documental", text: "Recibir expedientes completos es distinto a reconstruir contratos, saldos, actas y comprobantes dispersos." },
        { title: "Nivel de acompañamiento", text: "Reportes, reuniones, transición y atención deben definirse expresamente dentro del alcance." },
      ],
    },
    {
      title: "Por qué un precio bajo puede terminar costando más",
      paragraphs: [
        "Comparar propuestas sin revisar el alcance produce falsas equivalencias. Una tarifa puede excluir cobranza, supervisión, reportes, transición documental o seguimiento de proveedores.",
        "El comité necesita conocer qué actividades están incluidas, quién las ejecuta, con qué frecuencia se informa y cuáles servicios se cotizan por separado.",
      ],
    },
    {
      title: "Qué debe contener una propuesta clara",
      items: [
        "Descripción del alcance financiero, operativo y documental.",
        "Responsabilidades del administrador y del comité.",
        "Frecuencia y contenido de los reportes.",
        "Tratamiento de personal, proveedores y gastos extraordinarios.",
        "Proceso de transición y entrega de información.",
        "Honorarios, impuestos y conceptos adicionales claramente separados.",
      ],
    },
    {
      title: "Estimación orientativa frente a cotización definitiva",
      paragraphs: [
        "Una calculadora puede ofrecer un rango orientativo usando unidades, amenidades, proveedores, personal, morosidad y estado de la documentación. Ese resultado sirve para dimensionar la complejidad y preparar una conversación informada.",
        "No sustituye una cotización definitiva. Antes de asumir responsabilidades conviene revisar la información disponible y confirmar el alcance mediante un Diagnóstico de Control Condominal.",
      ],
    },
  ],
  faqs: [
    { question: "¿El número de departamentos define el precio?", answer: "Es una variable importante, pero debe analizarse junto con amenidades, proveedores, personal, morosidad, documentación y nivel de acompañamiento." },
    { question: "¿La calculadora entrega una cotización?", answer: "No. Entrega un rango orientativo basado en la información proporcionada. La propuesta definitiva requiere confirmar alcance y condiciones del desarrollo." },
    { question: "¿Por qué se recomienda un diagnóstico previo?", answer: "Porque permite identificar información disponible, riesgos, prioridades y condiciones de transición antes de comprometer un alcance y honorarios." },
  ],
};

const related = [
  { slug: "que-hace-administrador-condominios-fraccionamientos", title: "Qué hace un administrador de condominios y fraccionamientos" },
  { slug: "como-saber-si-condominio-bien-administrado", title: "Cómo saber si un condominio está bien administrado" },
  { slug: "como-reducir-morosidad-condominio", title: "Cómo reducir la morosidad en un condominio" },
];

export default function Page() {
  return <CondominioArticle article={article} related={related} />;
}
