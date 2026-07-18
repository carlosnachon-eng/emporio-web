const AMENIDADES = [
  { id: "caseta", label: "Caseta y control de acceso", peso: 3 },
  { id: "areas-verdes", label: "Áreas verdes", peso: 2 },
  { id: "cisterna-bombas", label: "Cisterna y bombas", peso: 4 },
  { id: "salon", label: "Salón de usos múltiples", peso: 2 },
  { id: "elevadores", label: "Elevadores", peso: 6 },
  { id: "alberca-gimnasio", label: "Alberca o gimnasio equipado", peso: 8 },
];

const PREGUNTAS_SALUD = [
  {
    id: "estado-financiero",
    dominio: "Finanzas",
    texto: "¿El comité recibe un estado financiero comprensible cada mes?",
    ayuda: "Un reporte útil permite entender ingresos, gastos, saldos y pendientes sin reconstruirlos desde varios archivos.",
  },
  {
    id: "gastos-evidencia",
    dominio: "Finanzas",
    texto: "¿Cada gasto conserva factura, recibo o evidencia suficiente?",
    ayuda: "La comprobación protege al comité y permite explicar con claridad en qué se utilizaron los recursos.",
    critica: true,
  },
  {
    id: "cuenta-separada",
    dominio: "Finanzas",
    texto: "¿Los recursos se manejan en una cuenta separada de cuentas personales?",
    ayuda: "Separar los fondos del condominio reduce riesgos y facilita la rendición de cuentas.",
    critica: true,
  },
  {
    id: "presupuesto",
    dominio: "Finanzas",
    texto: "¿Existe un presupuesto anual aprobado?",
    ayuda: "El presupuesto ayuda a anticipar gastos y distinguir prioridades de decisiones improvisadas.",
  },
  {
    id: "fondo-reserva",
    dominio: "Finanzas",
    texto: "¿Existe un fondo de reserva con reglas claras?",
    ayuda: "Un fondo definido permite atender necesidades futuras sin depender siempre de cuotas extraordinarias.",
  },
  {
    id: "cartera",
    dominio: "Finanzas",
    texto: "¿La cartera vencida está identificada y tiene seguimiento?",
    ayuda: "Conocer montos, antigüedad y acciones evita que la morosidad se convierta en un dato incierto.",
  },
  {
    id: "autorizaciones",
    dominio: "Gobierno",
    texto: "¿Los gastos tienen reglas claras de autorización?",
    ayuda: "Definir quién aprueba, hasta qué monto y cómo se registra protege al comité y al condominio.",
  },
  {
    id: "acuerdos",
    dominio: "Gobierno",
    texto: "¿Los acuerdos quedan registrados con responsable y fecha?",
    ayuda: "Un acuerdo sin responsable ni vencimiento suele convertirse en un pendiente difícil de seguir.",
  },
  {
    id: "acceso-informacion",
    dominio: "Gobierno",
    texto: "¿El comité puede consultar la información sin depender de una sola persona?",
    ayuda: "La información debe pertenecer al condominio y poder entregarse de manera ordenada.",
    critica: true,
  },
  {
    id: "proveedores",
    dominio: "Operación",
    texto: "¿Los proveedores cuentan con contratos, cotizaciones o expediente?",
    ayuda: "Un expediente básico permite comparar, supervisar y justificar decisiones de contratación.",
  },
  {
    id: "evidencia-trabajos",
    dominio: "Operación",
    texto: "¿Los trabajos relevantes conservan evidencia de su ejecución?",
    ayuda: "La evidencia permite confirmar alcance, resultado y condiciones antes de autorizar un cierre.",
  },
  {
    id: "mantenimiento-preventivo",
    dominio: "Operación",
    texto: "¿Existe un calendario de mantenimiento preventivo?",
    ayuda: "Programar reduce improvisación y ayuda a proteger instalaciones y presupuesto.",
  },
  {
    id: "incidencias",
    dominio: "Operación",
    texto: "¿Las incidencias tienen responsable, estatus y fecha de seguimiento?",
    ayuda: "Registrar el siguiente paso evita que las solicitudes se pierdan en conversaciones aisladas.",
  },
  {
    id: "padron",
    dominio: "Información",
    texto: "¿El padrón de unidades y contactos está actualizado?",
    ayuda: "Un padrón confiable es la base de la cobranza, comunicación y estados de cuenta.",
  },
  {
    id: "entrega-ordenada",
    dominio: "Continuidad",
    texto: "¿La administración podría entregar documentos, saldos y pendientes de manera ordenada?",
    ayuda: "Una transición clara protege al condominio de saldos inciertos, documentos perdidos y tareas sin responsable.",
    critica: true,
  },
];

const RESPUESTAS_SALUD = [
  { valor: 2, etiqueta: "Sí, podemos comprobarlo", detalle: "Existe información verificable y accesible para el comité." },
  { valor: 1, etiqueta: "Existe parcialmente", detalle: "Se realiza, pero no siempre queda documentado." },
  { valor: 0, etiqueta: "No existe de forma constante", detalle: "No hay un proceso que podamos confirmar hoy." },
  { valor: 0, etiqueta: "No tengo información", detalle: "No cuento con elementos suficientes para confirmarlo." },
];

const PESO_PROBLEMA = {
  transparencia: 8,
  morosidad: 9,
  entrega: 10,
  legal: 12,
  mantenimiento: 7,
  convivencia: 5,
  documentos: 8,
};

function numeroSeguro(valor, fallback = 0) {
  const numero = Number(valor);
  return Number.isFinite(numero) ? numero : fallback;
}

function redondearMil(valor) {
  return Math.max(0, Math.round(valor / 1000) * 1000);
}

function moneda(valor) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(valor);
}

function calcularComplejidad(perfil = {}) {
  const unidades = Math.max(1, numeroSeguro(perfil.unidades, 1));
  let puntaje = unidades <= 20 ? 4 : unidades <= 40 ? 8 : unidades <= 80 ? 14 : unidades <= 120 ? 18 : 20;

  puntaje += { vertical: 5, horizontal: 3, mixto: 7 }[perfil.tipo] || 0;
  puntaje += { operando: 1, transicion: 5, entrega: 7 }[perfil.etapa] || 0;

  const amenidades = Array.isArray(perfil.amenidades) ? perfil.amenidades : [];
  const puntajeAmenidades = amenidades.reduce((total, id) => {
    const amenidad = AMENIDADES.find((item) => item.id === id);
    return total + (amenidad?.peso || 0);
  }, 0);
  puntaje += Math.min(18, puntajeAmenidades);

  const proveedores = numeroSeguro(perfil.proveedores, 0);
  puntaje += proveedores <= 3 ? 2 : proveedores <= 6 ? 6 : 10;
  puntaje += { ninguno: 0, supervision: 5, transferencia: 12 }[perfil.personal] || 0;
  puntaje += { empresa: 2, comite: 5, persona: 8, ninguna: 9, desarrollador: 7 }[perfil.administracionActual] || 0;
  puntaje += PESO_PROBLEMA[perfil.problema] || 0;
  puntaje += { baja: 1, media: 5, alta: 10, desconocida: 7 }[perfil.morosidad] || 0;
  puntaje += { ordenada: 0, parcial: 5, dispersa: 9, desconocida: 8 }[perfil.documentacion] || 0;

  puntaje = Math.min(100, puntaje);

  const nivel =
    puntaje <= 24
      ? { id: "baja", etiqueta: "Baja", descripcion: "La operación parece relativamente sencilla y con pocos factores extraordinarios." }
      : puntaje <= 44
        ? { id: "moderada", etiqueta: "Moderada", descripcion: "Existen varios elementos que requieren coordinación y seguimiento constante." }
        : puntaje <= 64
          ? { id: "alta", etiqueta: "Moderada-alta", descripcion: "La operación combina factores financieros, documentales u operativos que deben ordenarse antes de cotizar." }
          : { id: "especializada", etiqueta: "Especializada", descripcion: "La operación requiere una revisión presencial y un alcance diseñado específicamente." };

  const factores = [];
  if (unidades >= 40) factores.push(`${unidades} unidades`);
  if (amenidades.length) factores.push(`${amenidades.length} amenidades o equipos compartidos`);
  if (proveedores > 3) factores.push(`${proveedores} proveedores recurrentes`);
  if (perfil.personal === "supervision") factores.push("personal por supervisar");
  if (perfil.personal === "transferencia") factores.push("posible transferencia de personal");
  if (perfil.morosidad === "media" || perfil.morosidad === "alta") factores.push("cartera vencida relevante");
  if (perfil.documentacion === "dispersa" || perfil.documentacion === "desconocida") factores.push("información documental incompleta");
  if (perfil.etapa === "transicion" || perfil.etapa === "entrega") factores.push("proceso de transición");

  const fueraSegmentoInicial =
    unidades > 120 ||
    perfil.personal === "transferencia" ||
    amenidades.includes("alberca-gimnasio") ||
    perfil.problema === "legal";

  return {
    puntaje,
    nivel,
    factores: factores.slice(0, 5),
    fueraSegmentoInicial,
  };
}

function calcularHonorarios(perfil = {}, complejidad = calcularComplejidad(perfil)) {
  const unidades = Math.max(1, numeroSeguro(perfil.unidades, 1));
  let base;

  if (unidades <= 40) {
    base = Math.max(8000, 5500 + unidades * 180);
  } else if (unidades <= 120) {
    base = Math.max(16000, 8500 + unidades * 150);
  } else {
    base = 13500 + unidades * 115;
  }

  const ajuste = {
    baja: 0,
    moderada: 0.05,
    alta: 0.12,
    especializada: 0.2,
  }[complejidad.nivel.id];

  const minimo = redondearMil(base * (1 + ajuste));
  const maximo = redondearMil(base * (1 + ajuste) * 1.22);

  return {
    minimo,
    maximo: Math.max(minimo + 2000, maximo),
    texto: `${moneda(minimo)}-${moneda(Math.max(minimo + 2000, maximo))} MXN + IVA al mes`,
    requiereDiagnostico: complejidad.nivel.id === "especializada" || complejidad.fueraSegmentoInicial,
    nota: "Estimación preliminar. No constituye una cotización, propuesta contractual ni diagnóstico definitivo.",
  };
}

function calcularSalud(respuestas = {}) {
  const total = PREGUNTAS_SALUD.reduce((suma, pregunta) => suma + Math.max(0, Math.min(2, numeroSeguro(respuestas[pregunta.id], 0))), 0);
  const porcentaje = Math.round((total / (PREGUNTAS_SALUD.length * 2)) * 100);

  const nivel =
    total >= 25
      ? { id: "solido", etiqueta: "Control sólido", descripcion: "Existen bases claras y documentadas; las mejoras pueden concentrarse en puntos específicos." }
      : total >= 16
        ? { id: "fragmentado", etiqueta: "Control fragmentado", descripcion: "La operación funciona, pero presenta brechas relevantes de comprobación, seguimiento o continuidad." }
        : { id: "riesgo", etiqueta: "Riesgo operativo alto", descripcion: "La falta de información o controles puede afectar decisiones, recursos y continuidad." };

  const dominios = {};
  for (const pregunta of PREGUNTAS_SALUD) {
    dominios[pregunta.dominio] ||= { puntos: 0, maximo: 0 };
    dominios[pregunta.dominio].puntos += Math.max(0, Math.min(2, numeroSeguro(respuestas[pregunta.id], 0)));
    dominios[pregunta.dominio].maximo += 2;
  }

  const puntuacionDominios = Object.fromEntries(
    Object.entries(dominios).map(([dominio, datos]) => [
      dominio,
      Math.round((datos.puntos / datos.maximo) * 100),
    ])
  );

  const fortalezas = PREGUNTAS_SALUD
    .filter((pregunta) => numeroSeguro(respuestas[pregunta.id], 0) === 2)
    .slice(0, 3)
    .map((pregunta) => pregunta.texto.replace(/^¿|\?$/g, ""));

  const riesgosCriticos = PREGUNTAS_SALUD.filter(
    (pregunta) => pregunta.critica && numeroSeguro(respuestas[pregunta.id], 0) === 0
  );
  const otrosRiesgos = PREGUNTAS_SALUD.filter(
    (pregunta) => !riesgosCriticos.includes(pregunta) && numeroSeguro(respuestas[pregunta.id], 0) < 2
  );
  const riesgos = [...riesgosCriticos, ...otrosRiesgos]
    .slice(0, 3)
    .map((pregunta) => pregunta.texto.replace(/^¿|\?$/g, ""));

  const recomendaciones = [
    {
      plazo: "30 días",
      texto: riesgosCriticos.length
        ? "Inventariar documentos, saldos, cuentas, contratos y responsables críticos."
        : "Confirmar responsables, documentos disponibles y pendientes prioritarios.",
    },
    {
      plazo: "60 días",
      texto: "Formalizar autorizaciones, evidencia de gastos y seguimiento de proveedores.",
    },
    {
      plazo: "90 días",
      texto: "Cerrar un ciclo mensual con información consolidada y pendientes trazables.",
    },
  ];

  return {
    puntos: total,
    porcentaje,
    nivel,
    dominios: puntuacionDominios,
    fortalezas: fortalezas.length ? fortalezas : ["Existe disposición para revisar y mejorar la operación."],
    riesgos: riesgos.length ? riesgos : ["Conviene validar que los controles se mantengan documentados y accesibles."],
    recomendaciones,
    riesgoCritico: riesgosCriticos.length > 0,
  };
}

function calcularPrioridadLead(perfil = {}, complejidad, salud, contacto = {}) {
  const unidades = numeroSeguro(perfil.unidades, 0);
  let puntaje = unidades >= 40 && unidades <= 80 ? 18 : unidades >= 21 && unidades <= 120 ? 10 : 3;
  puntaje += ["horizontal", "vertical"].includes(perfil.tipo) ? 5 : 3;
  puntaje += numeroSeguro(perfil.proveedores, 0) <= 3 ? 5 : 2;

  const municipio = String(contacto.municipio || "").toLowerCase();
  if (/puebla|cholula|cuautlancingo/.test(municipio)) puntaje += 7;

  puntaje += ["transparencia", "morosidad", "entrega", "documentos"].includes(perfil.problema) ? 10 : 6;
  puntaje += salud?.nivel?.id === "riesgo" ? 9 : salud?.nivel?.id === "fragmentado" ? 6 : 3;
  puntaje += complejidad?.nivel?.id === "alta" ? 6 : 3;

  puntaje += { presidente: 14, tesorero: 14, comite: 12, desarrollador: 10, propietario: 5, residente: 3, otro: 2 }[perfil.rol] || 0;
  puntaje += perfil.comite === "si" ? 6 : perfil.comite === "en-proceso" ? 3 : 0;
  puntaje += { "0-30": 10, "31-90": 7, explorando: 3 }[perfil.plazo] || 0;
  puntaje += contacto.consentimiento ? 10 : 0;

  const alertas = [];
  if (unidades > 120) {
    puntaje -= 12;
    alertas.push("Más de 120 unidades");
  }
  if (perfil.personal === "transferencia") {
    puntaje -= 10;
    alertas.push("Transferencia de personal por revisar");
  }
  if (perfil.problema === "legal") {
    puntaje -= 15;
    alertas.push("Conflicto legal activo");
  }
  if (perfil.comite === "no") {
    puntaje -= 12;
    alertas.push("Sin comité formal identificado");
  }

  puntaje = Math.max(0, Math.min(100, puntaje));
  const clasificacion = puntaje >= 75 ? "A" : puntaje >= 55 ? "B" : puntaje >= 35 ? "C" : "D";

  return {
    puntaje,
    clasificacion,
    alertas,
    explicacion:
      clasificacion === "A"
        ? "Encaje alto, necesidad clara y posibilidad real de avanzar a diagnóstico."
        : clasificacion === "B"
          ? "Buen encaje; falta confirmar decisión, alcance o condiciones de transición."
          : clasificacion === "C"
            ? "Interés válido, pero requiere organización o seguimiento educativo antes de una propuesta."
            : "Fuera del alcance inicial o con riesgos que requieren una evaluación distinta.",
  };
}

module.exports = {
  AMENIDADES,
  PREGUNTAS_SALUD,
  RESPUESTAS_SALUD,
  calcularComplejidad,
  calcularHonorarios,
  calcularSalud,
  calcularPrioridadLead,
  moneda,
};
