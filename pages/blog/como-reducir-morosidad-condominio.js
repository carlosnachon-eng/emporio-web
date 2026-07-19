import CondominioArticle from "../../components/blog/CondominioArticle";

const article = {
  slug: "como-reducir-morosidad-condominio",
  title: "¿Cómo reducir la morosidad en un condominio?",
  seoTitle: "Cómo reducir la morosidad en un condominio | Guía práctica",
  description: "Una guía práctica para ordenar saldos, mejorar la comunicación y establecer seguimiento de cuotas sin depender de recordatorios improvisados.",
  eyebrow: "Cobranza condominal",
  readTime: "8 min de lectura",
  intro: [
    "La morosidad no sólo afecta el saldo bancario. Cuando crece, obliga a posponer mantenimiento, presiona a quienes sí pagan y aumenta los conflictos entre residentes y comité.",
    "No existe una acción aislada que resuelva todos los adeudos. Los mejores resultados suelen comenzar con información confiable, reglas conocidas y un seguimiento consistente que distinga retrasos recientes de carteras antiguas.",
  ],
  sections: [
    {
      title: "Primero: confirmar que la cartera sea confiable",
      paragraphs: ["Antes de enviar avisos es necesario verificar que los saldos correspondan a cuotas, periodos, recargos y pagos correctamente identificados."],
      items: [
        "Conciliar depósitos y referencias sin identificar.",
        "Separar saldo ordinario, extraordinario y otros conceptos.",
        "Registrar convenios o aclaraciones vigentes.",
        "Conservar evidencia del estado de cuenta enviado a cada unidad.",
      ],
    },
    {
      title: "Segmentar evita tratar todos los casos igual",
      paragraphs: ["Una unidad con un retraso reciente requiere un seguimiento diferente al de una cuenta con varios periodos vencidos o una aclaración pendiente."],
      items: [
        { title: "Retraso reciente", text: "Recordatorio claro, saldo actualizado y opciones de pago accesibles." },
        { title: "Adeudo recurrente", text: "Seguimiento con fechas, compromisos documentados y revisión de cumplimiento." },
        { title: "Aclaración", text: "Resolver diferencias antes de continuar acumulando mensajes o recargos discutidos." },
        { title: "Cartera de mayor antigüedad", text: "Revisión individual con el comité para definir acciones conforme a documentos y acuerdos aplicables." },
      ],
    },
    {
      title: "La comunicación debe ser predecible",
      paragraphs: [
        "La cobranza pierde fuerza cuando depende del ánimo o disponibilidad de una persona. Conviene establecer fechas de emisión, recordatorios, actualización de saldos y reportes al comité.",
        "Los mensajes deben indicar periodo, concepto, saldo y canal de aclaración. Exponer públicamente a residentes o utilizar mensajes ambiguos suele aumentar el conflicto sin mejorar el control.",
      ],
    },
    {
      title: "El comité necesita indicadores, no sólo una lista de deudores",
      items: [
        "Porcentaje de cuotas cobradas durante el periodo.",
        "Monto y antigüedad de la cartera vencida.",
        "Unidades con convenios o aclaraciones.",
        "Recuperación lograda frente al periodo anterior.",
        "Efecto de la morosidad sobre presupuesto y mantenimiento.",
      ],
    },
    {
      title: "Cuándo la morosidad revela un problema más amplio",
      paragraphs: [
        "Si los saldos no pueden conciliarse, no existen estados de cuenta periódicos o los acuerdos se conservan únicamente en conversaciones, el problema ya no es sólo de cobranza. También es de información y continuidad administrativa.",
        "En esos casos conviene diagnosticar controles financieros y documentales antes de aumentar la presión de cobro. Un saldo confiable es la base de cualquier seguimiento.",
      ],
    },
  ],
  faqs: [
    { question: "¿Publicar una lista de deudores reduce la morosidad?", answer: "No necesariamente y puede generar conflictos. Es preferible aplicar procesos documentados, comunicación individual y acciones compatibles con los acuerdos y documentos del condominio." },
    { question: "¿Qué indicador debe revisar primero el comité?", answer: "El porcentaje cobrado del periodo junto con el monto y antigüedad de la cartera vencida. Ambos permiten distinguir un retraso temporal de un problema acumulado." },
    { question: "¿La administración puede garantizar que todos paguen?", answer: "No. Puede mejorar registros, comunicación y seguimiento, pero el resultado también depende de la situación de cada cuenta y de las decisiones que correspondan al comité." },
  ],
};

const related = [
  { slug: "como-saber-si-condominio-bien-administrado", title: "Cómo saber si un condominio está bien administrado" },
  { slug: "que-hace-administrador-condominios-fraccionamientos", title: "Qué hace un administrador de condominios y fraccionamientos" },
  { slug: "cuanto-cuesta-administracion-condominios-puebla", title: "Cuánto cuesta la administración de condominios en Puebla" },
];

export default function Page() {
  return <CondominioArticle article={article} related={related} />;
}
