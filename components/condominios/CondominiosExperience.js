import { useMemo, useRef, useState } from "react";
import styles from "./CondominiosExperience.module.css";
import { registrarEventoCondominios } from "../../lib/condominiosAnalytics";

const {
  AMENIDADES,
  PREGUNTAS_SALUD,
  RESPUESTAS_SALUD,
  calcularComplejidad,
  calcularHonorarios,
  calcularSalud,
  calcularPrioridadLead,
} = require("../../lib/condominiosMarketing.cjs");

const PERFIL_INICIAL = {
  unidades: "",
  tipo: "",
  etapa: "",
  amenidades: [],
  proveedores: "",
  personal: "",
  administracionActual: "",
  problema: "",
  morosidad: "",
  documentacion: "",
  rol: "",
  comite: "",
  plazo: "",
};

const CONTACTO_INICIAL = {
  nombre: "",
  telefono: "",
  email: "",
  nombreCondominio: "",
  consentimiento: false,
  website: "",
};

const PASOS_CALCULADORA = [
  {
    titulo: "Para dimensionar el alcance, primero revisemos el desarrollo",
    ayuda: "El número de unidades, el tipo de condominio y su etapa modifican el volumen de coordinación que requiere.",
    campos: ["unidades", "tipo", "etapa"],
  },
  {
    titulo: "¿Qué espacios o equipos compartidos forman parte de la operación?",
    ayuda: "Selecciona los que apliquen. Cada elemento puede requerir proveedores, mantenimiento, evidencia y seguimiento propios.",
    campos: [],
  },
  {
    titulo: "Ahora revisemos la operación detrás de las áreas comunes",
    ayuda: "Considera proveedores recurrentes y personal que el comité o la administración deben coordinar.",
    campos: ["proveedores", "personal"],
  },
  {
    titulo: "Identifiquemos el punto de partida de la administración",
    ayuda: "No buscamos calificar a una persona. Queremos entender qué información existe y dónde conviene poner atención primero.",
    campos: ["administracionActual", "problema", "morosidad", "documentacion"],
  },
  {
    titulo: "Por último, ubiquemos el contexto del comité",
    ayuda: "La recomendación cambia según quién revisa el resultado y el momento en que podría tomarse una decisión.",
    campos: ["rol", "comite", "plazo"],
  },
];

const SELECTS = {
  tipo: [
    ["", "Selecciona una opción"],
    ["horizontal", "Condominio horizontal"],
    ["vertical", "Condominio vertical"],
    ["mixto", "Desarrollo mixto"],
  ],
  etapa: [
    ["", "Selecciona una opción"],
    ["operando", "Ya está en operación"],
    ["transicion", "Cambiará de administración"],
    ["entrega", "Está por ser entregado"],
  ],
  personal: [
    ["", "Selecciona una opción"],
    ["ninguno", "No hay personal"],
    ["supervision", "Hay personal que requiere supervisión"],
    ["transferencia", "Existe personal por transferir o regularizar"],
  ],
  administracionActual: [
    ["", "Selecciona una opción"],
    ["empresa", "Empresa administradora"],
    ["comite", "El comité administra directamente"],
    ["persona", "Administrador independiente"],
    ["desarrollador", "Desarrollador o régimen de entrega"],
    ["ninguna", "No hay administración formal"],
  ],
  problema: [
    ["", "Selecciona una opción"],
    ["transparencia", "Falta de claridad o transparencia"],
    ["morosidad", "Morosidad y cobranza"],
    ["entrega", "Cambio o entrega de administración"],
    ["mantenimiento", "Mantenimiento e incidencias"],
    ["documentos", "Información o documentos dispersos"],
    ["convivencia", "Comunicación y acuerdos"],
    ["legal", "Conflicto legal activo"],
  ],
  morosidad: [
    ["", "Selecciona una opción"],
    ["baja", "Menor al 5%"],
    ["media", "Entre 5% y 15%"],
    ["alta", "Mayor al 15%"],
    ["desconocida", "No tengo el dato"],
  ],
  documentacion: [
    ["", "Selecciona una opción"],
    ["ordenada", "Está ordenada y accesible"],
    ["parcial", "Existe, pero está incompleta"],
    ["dispersa", "Está dispersa o depende de una persona"],
    ["desconocida", "No lo sé"],
  ],
  rol: [
    ["", "Selecciona una opción"],
    ["presidente", "Presidente del comité"],
    ["tesorero", "Tesorero o responsable financiero"],
    ["comite", "Integrante del comité"],
    ["desarrollador", "Desarrollador"],
    ["propietario", "Propietario"],
    ["residente", "Residente"],
    ["otro", "Otro"],
  ],
  comite: [
    ["", "Selecciona una opción"],
    ["si", "Sí, está constituido"],
    ["en-proceso", "Está en proceso"],
    ["no", "No existe todavía"],
  ],
  plazo: [
    ["", "Selecciona una opción"],
    ["0-30", "En los próximos 30 días"],
    ["31-90", "Entre 1 y 3 meses"],
    ["explorando", "Solo estoy evaluando opciones"],
  ],
};

function CampoSelect({ id, label, value, onChange, options = SELECTS[id] }) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <select className={styles.select} id={id} value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map(([optionValue, optionLabel]) => (
          <option key={optionValue || "empty"} value={optionValue}>{optionLabel}</option>
        ))}
      </select>
    </div>
  );
}

function ToolHeader({ titulo, actual, total }) {
  const porcentaje = Math.round((actual / total) * 100);
  return (
    <div className={styles.toolHeader}>
      <strong>{titulo}</strong>
      <div className={styles.progress} aria-label={`${porcentaje}% completado`}>
        <small>{actual} de {total}</small>
        <div className={styles.progressTrack} aria-hidden="true">
          <div className={styles.progressFill} style={{ width: `${porcentaje}%` }} />
        </div>
      </div>
    </div>
  );
}

export default function CondominiosExperience() {
  const herramientaRef = useRef(null);
  const eventosUnicos = useRef(new Set());
  const [vista, setVista] = useState("landing");
  const [herramienta, setHerramienta] = useState("calculadora");
  const [pasoCalculadora, setPasoCalculadora] = useState(0);
  const [preguntaSalud, setPreguntaSalud] = useState(0);
  const [perfil, setPerfil] = useState(PERFIL_INICIAL);
  const [respuestas, setRespuestas] = useState({});
  const [calculadoraCompleta, setCalculadoraCompleta] = useState(false);
  const [saludCompleta, setSaludCompleta] = useState(false);
  const [contacto, setContacto] = useState(CONTACTO_INICIAL);
  const [error, setError] = useState("");
  const [estadoPdf, setEstadoPdf] = useState("");
  const [estadoFormulario, setEstadoFormulario] = useState({ tipo: "", texto: "" });
  const [enviando, setEnviando] = useState(false);

  const complejidad = useMemo(() => calcularComplejidad(perfil), [perfil]);
  const honorarios = useMemo(() => calcularHonorarios(perfil, complejidad), [perfil, complejidad]);
  const salud = useMemo(() => calcularSalud(respuestas), [respuestas]);
  const prioridad = useMemo(
    () => calcularPrioridadLead(perfil, complejidad, salud, contacto),
    [perfil, complejidad, salud, contacto]
  );

  function registrarInicioHerramienta(tipo) {
    const evento = tipo === "calculadora"
      ? "condominios_calculadora_inicio"
      : "condominios_evaluacion_inicio";
    if (!eventosUnicos.current.has(evento)) {
      registrarEventoCondominios(evento, { origen: "micrositio" });
      eventosUnicos.current.add(evento);
    }
  }

  function irAHerramienta(tipo) {
    registrarInicioHerramienta(tipo);
    setHerramienta(tipo);
    setVista("tool");
    setError("");
    window.setTimeout(() => herramientaRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  }

  function actualizarPerfil(campo, valor) {
    setPerfil((anterior) => ({ ...anterior, [campo]: valor }));
    setError("");
  }

  function validarPaso() {
    const requeridos = PASOS_CALCULADORA[pasoCalculadora].campos;
    const faltante = requeridos.find((campo) => perfil[campo] === "" || perfil[campo] === null);
    if (faltante) {
      setError("Completa los campos de este paso para continuar.");
      return false;
    }
    if (pasoCalculadora === 0 && (Number(perfil.unidades) < 2 || Number(perfil.unidades) > 1000)) {
      setError("Indica un número de unidades entre 2 y 1,000.");
      return false;
    }
    if (pasoCalculadora === 2 && (Number(perfil.proveedores) < 0 || Number(perfil.proveedores) > 100)) {
      setError("Indica un número de proveedores entre 0 y 100.");
      return false;
    }
    return true;
  }

  function avanzarCalculadora() {
    if (!validarPaso()) return;
    if (pasoCalculadora < PASOS_CALCULADORA.length - 1) {
      setPasoCalculadora((actual) => actual + 1);
      return;
    }
    setCalculadoraCompleta(true);
    if (!eventosUnicos.current.has("condominios_calculadora_final")) {
      registrarEventoCondominios("condominios_calculadora_final", {
        unidades: Number(perfil.unidades),
        nivel_complejidad: complejidad.nivel.id,
      });
      eventosUnicos.current.add("condominios_calculadora_final");
    }
    setError("");
    if (saludCompleta) {
      setVista("resultado");
    } else {
      registrarInicioHerramienta("salud");
      setHerramienta("salud");
    }
  }

  function responderSalud(valor) {
    const pregunta = PREGUNTAS_SALUD[preguntaSalud];
    const nuevas = { ...respuestas, [pregunta.id]: valor };
    setRespuestas(nuevas);
    if (preguntaSalud < PREGUNTAS_SALUD.length - 1) {
      setPreguntaSalud((actual) => actual + 1);
      return;
    }
    setSaludCompleta(true);
    if (!eventosUnicos.current.has("condominios_evaluacion_final")) {
      const resultadoSalud = calcularSalud(nuevas);
      registrarEventoCondominios("condominios_evaluacion_final", {
        indice_control: resultadoSalud.porcentaje,
        nivel_salud: resultadoSalud.nivel.id,
      });
      eventosUnicos.current.add("condominios_evaluacion_final");
    }
    if (calculadoraCompleta) {
      setVista("resultado");
    } else {
      registrarInicioHerramienta("calculadora");
      setHerramienta("calculadora");
    }
  }

  function payloadReporte() {
    return {
      perfil,
      respuestas,
      contacto: {
        nombre: contacto.nombre,
        nombreCondominio: contacto.nombreCondominio,
      },
    };
  }

  async function obtenerPdf() {
    const respuesta = await fetch("/api/reporte-condominal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payloadReporte()),
    });
    if (!respuesta.ok) throw new Error("No fue posible generar el reporte.");
    return respuesta.blob();
  }

  async function descargarPdf() {
    setEstadoPdf("Generando reporte...");
    try {
      const blob = await obtenerPdf();
      const url = URL.createObjectURL(blob);
      const enlace = document.createElement("a");
      enlace.href = url;
      enlace.download = "reporte-ejecutivo-condominal-emporio.pdf";
      enlace.click();
      URL.revokeObjectURL(url);
      registrarEventoCondominios("condominios_pdf_descarga", {
        indice_control: salud.porcentaje,
        nivel_complejidad: complejidad.nivel.id,
      });
      setEstadoPdf("Reporte listo.");
    } catch (pdfError) {
      setEstadoPdf(pdfError.message);
    }
  }

  async function compartirPdf() {
    setEstadoPdf("Preparando archivo...");
    registrarEventoCondominios("condominios_pdf_compartir", {
      metodo: navigator.share ? "nativo" : "descarga",
    });
    try {
      const blob = await obtenerPdf();
      const archivo = new File([blob], "reporte-ejecutivo-condominal-emporio.pdf", { type: "application/pdf" });
      if (navigator.share && navigator.canShare?.({ files: [archivo] })) {
        await navigator.share({
          title: "Reporte Ejecutivo Condominal",
          text: "Evaluación preliminar preparada con Emporio Inmobiliario.",
          files: [archivo],
        });
        setEstadoPdf("Reporte compartido.");
      } else {
        await descargarPdf();
      }
    } catch (shareError) {
      if (shareError.name !== "AbortError") setEstadoPdf("No fue posible compartir el reporte.");
    }
  }

  async function enviarFormulario(event) {
    event.preventDefault();
    setEstadoFormulario({ tipo: "", texto: "" });
    if (!contacto.consentimiento) {
      setEstadoFormulario({ tipo: "error", texto: "Necesitamos tu autorización para atender la solicitud." });
      return;
    }
    setEnviando(true);
    try {
      const respuesta = await fetch("/api/contacto-condominios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...contacto,
          perfil,
          resultado: {
            complejidad: complejidad.nivel.etiqueta,
            salud: salud.nivel.etiqueta,
            rango: honorarios.texto,
            prioridad,
          },
        }),
      });
      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.error || "No fue posible enviar la solicitud.");
      await descargarPdf();
      setEstadoFormulario({
        tipo: "ok",
        texto: datos.preview
          ? "Reporte generado en este preview. No se enviaron datos ni se conectó con producción."
          : "Tu Reporte Ejecutivo personalizado está listo. La descarga comenzará automáticamente.",
      });
      registrarEventoCondominios("condominios_formulario_enviado", {
        modo: datos.preview ? "preview" : "real",
        prioridad: prioridad.clasificacion,
      });
    } catch (formError) {
      setEstadoFormulario({ tipo: "error", texto: formError.message });
    } finally {
      setEnviando(false);
    }
  }

  function renderPasoCalculadora() {
    const paso = PASOS_CALCULADORA[pasoCalculadora];
    return (
      <>
        <ToolHeader titulo="Calculadora de Administración Condominal" actual={pasoCalculadora + 1} total={PASOS_CALCULADORA.length} />
        <div className={styles.toolBody}>
          {saludCompleta && !calculadoraCompleta && pasoCalculadora === 0 && (
            <div className={styles.toolSuccess}>Evaluación completada. Ahora dimensionemos el nivel de atención que requiere la operación.</div>
          )}
          <p className={styles.eyebrow}>Estimación orientativa</p>
          <h2 className={styles.questionTitle}>{paso.titulo}</h2>
          <p className={styles.questionHelp}>{paso.ayuda}</p>

          {pasoCalculadora === 0 && (
            <div className={styles.fieldGrid}>
              <div className={styles.field}>
                <label htmlFor="unidades">Número de unidades</label>
                <input className={styles.input} id="unidades" type="number" min="2" max="1000" inputMode="numeric" value={perfil.unidades} onChange={(e) => actualizarPerfil("unidades", e.target.value)} />
              </div>
              <CampoSelect id="tipo" label="Tipo de desarrollo" value={perfil.tipo} onChange={(valor) => actualizarPerfil("tipo", valor)} />
              <div className={styles.fieldFull}>
                <CampoSelect id="etapa" label="Etapa actual" value={perfil.etapa} onChange={(valor) => actualizarPerfil("etapa", valor)} />
              </div>
            </div>
          )}

          {pasoCalculadora === 1 && (
            <div className={styles.options}>
              {AMENIDADES.map((amenidad) => {
                const activa = perfil.amenidades.includes(amenidad.id);
                return (
                  <button key={amenidad.id} type="button" aria-pressed={activa} className={activa ? styles.optionSelected : styles.option} onClick={() => actualizarPerfil("amenidades", activa ? perfil.amenidades.filter((id) => id !== amenidad.id) : [...perfil.amenidades, amenidad.id])}>
                    {amenidad.label}
                  </button>
                );
              })}
            </div>
          )}

          {pasoCalculadora === 2 && (
            <div className={styles.fieldGrid}>
              <div className={styles.field}>
                <label htmlFor="proveedores">Proveedores recurrentes</label>
                <input className={styles.input} id="proveedores" type="number" min="0" max="100" inputMode="numeric" value={perfil.proveedores} onChange={(e) => actualizarPerfil("proveedores", e.target.value)} />
              </div>
              <CampoSelect id="personal" label="Personal" value={perfil.personal} onChange={(valor) => actualizarPerfil("personal", valor)} />
            </div>
          )}

          {pasoCalculadora === 3 && (
            <div className={styles.fieldGrid}>
              <CampoSelect id="administracionActual" label="Administración actual" value={perfil.administracionActual} onChange={(valor) => actualizarPerfil("administracionActual", valor)} />
              <CampoSelect id="problema" label="Principal problema" value={perfil.problema} onChange={(valor) => actualizarPerfil("problema", valor)} />
              <CampoSelect id="morosidad" label="Morosidad aproximada" value={perfil.morosidad} onChange={(valor) => actualizarPerfil("morosidad", valor)} />
              <CampoSelect id="documentacion" label="Estado de la documentación" value={perfil.documentacion} onChange={(valor) => actualizarPerfil("documentacion", valor)} />
            </div>
          )}

          {pasoCalculadora === 4 && (
            <div className={styles.fieldGrid}>
              <CampoSelect id="rol" label="Tu relación con el condominio" value={perfil.rol} onChange={(valor) => actualizarPerfil("rol", valor)} />
              <CampoSelect id="comite" label="¿Existe comité formal?" value={perfil.comite} onChange={(valor) => actualizarPerfil("comite", valor)} />
              <div className={styles.fieldFull}>
                <CampoSelect id="plazo" label="Momento de decisión" value={perfil.plazo} onChange={(valor) => actualizarPerfil("plazo", valor)} />
              </div>
            </div>
          )}

          {error && <p className={styles.toolError} role="alert">{error}</p>}
          <div className={styles.toolFooter}>
            <button type="button" className={styles.buttonGhost} disabled={pasoCalculadora === 0} onClick={() => setPasoCalculadora((actual) => Math.max(0, actual - 1))}>Anterior</button>
            <button type="button" className={styles.button} onClick={avanzarCalculadora}>
              {pasoCalculadora === PASOS_CALCULADORA.length - 1 ? (saludCompleta ? "Ver resultado" : "Continuar con la evaluación") : "Continuar"}
            </button>
          </div>
        </div>
      </>
    );
  }

  function renderEvaluacion() {
    const pregunta = PREGUNTAS_SALUD[preguntaSalud];
    return (
      <>
        <ToolHeader titulo="Evaluación de Salud Condominal" actual={preguntaSalud + 1} total={PREGUNTAS_SALUD.length} />
        <div className={styles.toolBody}>
          {calculadoraCompleta && !saludCompleta && preguntaSalud === 0 && (
            <div className={styles.toolSuccess}>Estimación completada. Ahora revisemos los controles que el comité puede comprobar hoy.</div>
          )}
          <p className={styles.eyebrow}>Revisión guiada · {pregunta.dominio}</p>
          <h2 className={styles.questionTitle}>{pregunta.texto}</h2>
          <p className={styles.questionHelp}>{pregunta.ayuda}</p>
          <div className={styles.options}>
            {RESPUESTAS_SALUD.map((respuesta, index) => {
              const seleccionada = respuestas[pregunta.id] === respuesta.valor && (respuesta.valor !== 0 || respuestas[`${pregunta.id}-indice`] === index);
              return (
                <button
                  key={`${pregunta.id}-${index}`}
                  type="button"
                  className={seleccionada ? styles.optionSelected : styles.option}
                  onClick={() => {
                    setRespuestas((anterior) => ({ ...anterior, [`${pregunta.id}-indice`]: index }));
                    responderSalud(respuesta.valor);
                  }}
                >
                  {respuesta.etiqueta}
                  <span className={styles.answerDetail}>{respuesta.detalle}</span>
                </button>
              );
            })}
          </div>
          <div className={styles.toolFooter}>
            <button type="button" className={styles.buttonGhost} disabled={preguntaSalud === 0} onClick={() => setPreguntaSalud((actual) => Math.max(0, actual - 1))}>Anterior</button>
            <span className={styles.questionHelp} aria-live="polite" style={{ margin: 0 }}>Responde según lo que hoy puede verificar el comité.</span>
          </div>
        </div>
      </>
    );
  }

  function renderResultado() {
    return (
      <>
        <ToolHeader titulo="Resultado de la evaluación" actual={2} total={2} />
        <div className={styles.toolBody}>
          <div className={styles.resultGrid}>
            <section className={styles.resultHero}>
              <p className={styles.eyebrow}>Resultado combinado</p>
              <h2 className={styles.questionTitle} style={{ color: "#fff" }}>Ya tienes una primera lectura para conversar con tu comité.</h2>
              <p className={styles.questionHelp} style={{ color: "rgba(255,255,255,.72)" }}>
                Esta lectura combina la complejidad operativa con los controles que hoy puedes verificar. Es un punto de partida para conversar con el comité, no una auditoría ni una cotización.
              </p>
              <div className={styles.resultLabels}>
                <span className={styles.pill}>Complejidad: {complejidad.nivel.etiqueta}</span>
                <span className={styles.pill}>Salud: {salud.nivel.etiqueta}</span>
                <span className={styles.pill}>{perfil.unidades} unidades</span>
              </div>
            </section>

            <section className={`${styles.metricCard} ${styles.economicReference}`}>
              <h3>Referencia para dimensionar el servicio</h3>
              <div className={`${styles.metricValue} ${styles.economicValue}`}>{honorarios.texto}</div>
              <p>{honorarios.nota}</p>
              <ul className={styles.list}>
                {complejidad.factores.length
                  ? complejidad.factores.map((factor) => <li key={factor}>{factor}</li>)
                  : <li>Operación con pocos factores extraordinarios identificados.</li>}
              </ul>
            </section>

            <section className={styles.metricCard}>
              <h3>Índice de Control Condominal</h3>
              <div className={styles.metricValue}>{salud.porcentaje}%</div>
              <p>{salud.nivel.descripcion}</p>
              <div className={styles.domains}>
                {Object.entries(salud.dominios).map(([dominio, valor]) => (
                  <div className={styles.domainRow} key={dominio}>
                    <span>{dominio}</span>
                    <div className={styles.domainBar}><span style={{ width: `${valor}%` }} /></div>
                    <strong>{valor}%</strong>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.metricCard}>
              <h3>Fortalezas observadas</h3>
              <ul className={styles.list}>{salud.fortalezas.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>

            <section className={styles.metricCard}>
              <h3>Riesgos que conviene revisar</h3>
              <ul className={styles.list}>{salud.riesgos.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>

            <section className={styles.metricCard} style={{ gridColumn: "1 / -1" }}>
              <h3>Ruta sugerida de 30, 60 y 90 días</h3>
              <div className={styles.outcomeGrid} style={{ marginTop: 18 }}>
                {salud.recomendaciones.map((item) => (
                  <div key={item.plazo}>
                    <strong style={{ color: "#C8102E" }}>{item.plazo}</strong>
                    <p>{item.texto}</p>
                  </div>
                ))}
              </div>
            </section>

            <form
              className={styles.formCard}
              onSubmit={enviarFormulario}
              onFocusCapture={() => {
                if (!eventosUnicos.current.has("condominios_formulario_iniciado")) {
                  registrarEventoCondominios("condominios_formulario_iniciado", { ubicacion: "resultado" });
                  eventosUnicos.current.add("condominios_formulario_iniciado");
                }
              }}
            >
              <p className={styles.eyebrow}>Personaliza tu reporte</p>
              <h3>Tu Reporte Ejecutivo ya está preparado.</h3>
              <p>Para incorporar el nombre de tu condominio y generar el documento sin costo, solo necesitamos estos datos.</p>
              <div className={styles.consultativeNote}>
                <strong>El reporte es tuyo, sin compromiso.</strong>
                <span>No generaremos una cotización automática. Primero podrás revisar el resultado y decidir si quieres conversar con nosotros.</span>
              </div>
              <div className={styles.knownData} aria-label="Datos que no volveremos a preguntar">
                <span>{perfil.unidades} unidades</span>
                <span>{complejidad.nivel.etiqueta}</span>
                <span>{salud.nivel.etiqueta}</span>
              </div>
              <div className={styles.fieldGrid}>
                <div className={styles.field}>
                  <label htmlFor="nombreCondominio">Nombre del condominio</label>
                  <input className={styles.input} id="nombreCondominio" required maxLength="120" value={contacto.nombreCondominio} onChange={(e) => setContacto({ ...contacto, nombreCondominio: e.target.value })} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="nombre">Nombre</label>
                  <input className={styles.input} id="nombre" autoComplete="name" required maxLength="100" value={contacto.nombre} onChange={(e) => setContacto({ ...contacto, nombre: e.target.value })} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Correo</label>
                  <input className={styles.input} id="email" type="email" autoComplete="email" required maxLength="150" value={contacto.email} onChange={(e) => setContacto({ ...contacto, email: e.target.value })} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="telefono">Teléfono</label>
                  <input className={styles.input} id="telefono" type="tel" inputMode="tel" autoComplete="tel" required maxLength="25" value={contacto.telefono} onChange={(e) => setContacto({ ...contacto, telefono: e.target.value })} />
                </div>
                <div className={styles.srOnly} aria-hidden="true">
                  <label htmlFor="website">Sitio web</label>
                  <input id="website" tabIndex="-1" autoComplete="off" value={contacto.website} onChange={(e) => setContacto({ ...contacto, website: e.target.value })} />
                </div>
              </div>
              <label className={styles.check}>
                <input type="checkbox" checked={contacto.consentimiento} onChange={(e) => setContacto({ ...contacto, consentimiento: e.target.checked })} />
                <span>Acepto que Emporio utilice estos datos para atender mi solicitud conforme al <a className={styles.privacyLink} href="/aviso-privacidad" target="_blank" rel="noreferrer">aviso de privacidad</a>.</span>
              </label>
              <div className={styles.actions}>
                <button className={styles.button} type="submit" disabled={enviando}>{enviando ? "Generando reporte..." : "Generar mi Reporte Ejecutivo personalizado"}</button>
                {estadoFormulario.tipo === "ok" && (
                  <button type="button" className={styles.buttonGhost} onClick={compartirPdf}>Compartir reporte</button>
                )}
              </div>
              {estadoPdf && <p className={styles.questionHelp} aria-live="polite" style={{ marginBottom: 0 }}>{estadoPdf}</p>}
              {estadoFormulario.texto && (
                <div className={`${styles.message} ${estadoFormulario.tipo === "ok" ? styles.messageOk : styles.messageError}`} role="status">
                  {estadoFormulario.texto}
                </div>
              )}
              {estadoFormulario.tipo === "ok" && (
                <a
                  className={styles.diagnosticLink}
                  href="https://wa.me/522222573237?text=Hola%2C%20quiero%20revisar%20mi%20Reporte%20Ejecutivo%20y%20conocer%20el%20Diagn%C3%B3stico%20de%20Control%20Condominal."
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    registrarEventoCondominios("condominios_cta_diagnostico", { ubicacion: "reporte_generado" });
                    registrarEventoCondominios("condominios_whatsapp", { ubicacion: "reporte_generado" });
                  }}
                >
                  Quiero revisar el Diagnóstico con un especialista
                </a>
              )}
            </form>
          </div>
        </div>
      </>
    );
  }

  const preguntasFaq = [
    ["¿La estimación es una cotización definitiva?", "No. El rango se calcula con la información proporcionada y sirve para dimensionar el servicio. Una propuesta formal requiere revisar documentos, operación, ubicación y alcance."],
    ["¿Qué es el Diagnóstico de Control Condominal?", "Es una revisión inicial para identificar información disponible, riesgos, prioridades y condiciones de transición antes de proponer una administración."],
    ["¿La evaluación sustituye una auditoría?", "No. Es una lectura inicial para reconocer fortalezas y riesgos. No constituye auditoría contable, legal o técnica ni un dictamen."],
    ["¿Emporio puede recibir un condominio que ya tiene administración?", "Sí, sujeto a una transición ordenada y a la revisión del alcance. El objetivo es proteger información, saldos, pendientes y responsabilidades."],
    ["¿El personal, proveedores y obras están incluidos en el rango?", "No necesariamente. El rango corresponde a honorarios estimados de administración. Nómina, servicios, proveedores, obras y gastos del condominio se revisan por separado."],
    ["¿Puedo hacer la evaluación aunque todavía no quiera cambiar?", "Sí. El reporte está diseñado para ayudar al comité a conversar sobre controles y prioridades, incluso si aún no existe una decisión de cambio."],
  ];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div>
            <p className={styles.eyebrow}>Administración de condominios en Puebla</p>
            <h1>¿Qué tan bien administrado está realmente tu condominio?</h1>
            <p className={styles.heroLead}>
              Ayudamos a presidentes y comités a recuperar claridad sobre cuotas, gastos, pendientes y decisiones. Completa una evaluación inicial sin costo, obtén un resultado real y decide después si quieres hablar con nosotros.
            </p>
            <div className={styles.actions}>
              <button className={styles.button} type="button" onClick={() => irAHerramienta("salud")}>Descubrir el nivel de control</button>
              <button className={styles.buttonSecondary} type="button" onClick={() => irAHerramienta("calculadora")}>Conocer el rango orientativo</button>
            </div>
          </div>
          <aside className={styles.heroCard}>
            <span className={styles.heroCardLabel}>Reporte Ejecutivo personalizado sin costo</span>
            <h2>Una conversación más clara para tu comité.</h2>
            <p>Completa las dos herramientas y obtén un documento para compartir con fortalezas, riesgos, recomendaciones y un rango orientativo.</p>
            <div className={styles.miniSteps}>
              {["Dimensiona la complejidad", "Revisa los controles actuales", "Descarga un reporte ejecutivo"].map((texto, index) => (
                <div className={styles.miniStep} key={texto}><span className={styles.miniNumber}>{index + 1}</span>{texto}</div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <div className={styles.trust}>
        <div className={`${styles.container} ${styles.trustGrid}`}>
          <div className={styles.trustItem}><strong>Más de 20 años</strong><span>acompañando decisiones patrimoniales en Puebla</span></div>
          <div className={styles.trustItem}><strong>Información verificable</strong><span>para que el seguimiento no dependa de una sola persona</span></div>
          <div className={styles.trustItem}><strong>Ecosistema Emporio</strong><span>experiencia inmobiliaria, Blindaje Legal e Inmoadmin</span></div>
        </div>
      </div>

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.problemGrid}`}>
          <div>
            <p className={styles.eyebrow}>El problema no siempre es visible</p>
            <h2 className={styles.title}>Administrar bien también significa poder explicar cada decisión.</h2>
            <p className={styles.subtitle}>Cuando documentos, saldos y pendientes están dispersos, el comité termina respondiendo preguntas sin contar con toda la información.</p>
            <div className={styles.quote}>La tranquilidad aparece cuando los recursos, las autorizaciones y el seguimiento pueden verificarse.</div>
          </div>
          <div className={styles.cards}>
            {[
              ["01", "Información dispersa", "Estados de cuenta, comprobantes y acuerdos viven en conversaciones o archivos separados."],
              ["02", "Responsabilidades inciertas", "No siempre queda claro quién autoriza, ejecuta o debe dar el siguiente paso."],
              ["03", "Mantenimiento reactivo", "Los pendientes se atienden cuando ya son urgentes y cuesta comparar alternativas."],
              ["04", "Transiciones frágiles", "Cambiar de administración puede dejar saldos, expedientes o compromisos sin contexto."],
            ].map(([icono, titulo, texto]) => (
              <article className={styles.card} key={titulo}><span className={styles.cardIcon}>{icono}</span><h3>{titulo}</h3><p>{texto}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Nuestro método</p>
          <h2 className={styles.title}>Una Cadena de Control que conecta la decisión con su evidencia.</h2>
          <p className={styles.subtitle}>El método ordena el recorrido completo para que el comité pueda consultar qué ocurrió, por qué y qué sigue.</p>
          <div className={styles.chain}>
            {[
              ["01", "Decisión", "Se define responsable, alcance y autorización."],
              ["02", "Ejecución", "El trabajo se coordina y cada avance queda registrado."],
              ["03", "Evidencia", "El resultado y cada gasto quedan respaldados."],
              ["04", "Reporte", "El comité recibe un resumen claro y útil."],
            ].map(([numero, titulo, texto]) => <article className={styles.chainItem} key={titulo}><span>{numero}</span><h3>{titulo}</h3><p>{texto}</p></article>)}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.soft}`} id="herramientas">
        <div className={styles.container}>
          <div className={styles.center}>
            <p className={styles.eyebrow}>Herramientas sin costo</p>
            <h2 className={styles.title}>Entiende primero. Decide después.</h2>
            <p className={styles.subtitle}>Conoce primero el resultado. Solo al final pediremos cuatro datos para personalizar tu Reporte Ejecutivo.</p>
          </div>
          {vista === "landing" && (
            <div className={styles.toolsIntro}>
              <button className={styles.toolChoice} type="button" onClick={() => irAHerramienta("calculadora")}>
                <strong>Calculadora de Administración Condominal</strong>
                <p>Dimensiona el nivel de atención que requiere la operación y conoce un rango mensual orientativo.</p>
                <small>5 pasos · aproximadamente 3 minutos →</small>
              </button>
              <button className={styles.toolChoice} type="button" onClick={() => irAHerramienta("salud")}>
                <strong>Evaluación de Salud Condominal</strong>
                <p>Revisa 15 controles esenciales de finanzas, gobierno, operación e información.</p>
                <small>15 preguntas · aproximadamente 4 minutos →</small>
              </button>
            </div>
          )}
          {vista !== "landing" && (
            <div className={styles.toolShell} ref={herramientaRef}>
              {vista === "resultado"
                ? renderResultado()
                : herramienta === "calculadora"
                  ? renderPasoCalculadora()
                  : renderEvaluacion()}
            </div>
          )}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.center}>
            <p className={styles.eyebrow}>Lo que recibe el comité</p>
            <h2 className={styles.title}>Información para conversar con hechos.</h2>
          </div>
          <div className={styles.outcomeGrid}>
            {[
              ["Lectura inicial", "Una visión conjunta de la complejidad y los controles actuales para reconocer el punto de partida."],
              ["Prioridades claras", "Fortalezas, riesgos y una ruta sugerida de 30, 60 y 90 días."],
              ["Alcance orientativo", "Una referencia que ayuda a dimensionar el servicio antes de solicitar una propuesta."],
            ].map(([titulo, texto]) => <article className={styles.outcomeCard} key={titulo}><h3>{titulo}</h3><p>{texto}</p></article>)}
          </div>
          <div className={styles.fitGrid}>
            <div className={styles.fitBox}><h3>Puede ser una buena opción si...</h3><ul className={styles.list}><li>el comité necesita mayor visibilidad financiera;</li><li>la información depende de personas o archivos aislados;</li><li>existe una transición por organizar;</li><li>se busca profesionalizar el seguimiento cotidiano.</li></ul></div>
            <div className={styles.fitBox}><h3>Primero debemos revisar...</h3><ul className={styles.list}><li>conflictos legales activos;</li><li>transferencia o regularización de personal;</li><li>desarrollos de alta complejidad técnica;</li><li>información financiera que todavía no puede entregarse.</li></ul></div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.soft}`}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Diagnóstico de Control Condominal</p>
          <h2 className={styles.title}>Antes de prometer, revisamos.</h2>
          <p className={styles.subtitle}>Una administración responsable comienza entendiendo documentos, responsables, pendientes y expectativas reales del comité.</p>
          <div className={styles.process}>
            {[
              ["01", "Escuchamos", "Conocemos objetivos, problemas y momento de decisión."],
              ["02", "Revisamos", "Validamos información, saldos, contratos y pendientes disponibles."],
              ["03", "Definimos", "Delimitamos alcance, transición y condiciones del servicio."],
              ["04", "Proponemos", "Entregamos una ruta clara para que el comité decida."],
            ].map(([numero, titulo, texto]) => <article className={styles.processStep} key={titulo}><span>{numero}</span><h3>{titulo}</h3><p>{texto}</p></article>)}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.narrow}>
          <div className={styles.center}><p className={styles.eyebrow}>Preguntas frecuentes</p><h2 className={styles.title}>Lo importante, con claridad.</h2></div>
          <div className={styles.faq} style={{ marginTop: 42 }}>
            {preguntasFaq.map(([pregunta, respuesta]) => <details key={pregunta}><summary>{pregunta}</summary><p>{respuesta}</p></details>)}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={`${styles.container} ${styles.finalCta}`}>
          <div><p className={styles.eyebrow}>Empieza sin compromiso</p><h2 className={styles.title}>Tu comité merece decisiones más claras y menos incertidumbre.</h2><p className={styles.subtitle}>Completa las herramientas, descarga el reporte y decide si vale la pena revisar el caso con un especialista.</p></div>
          <div className={styles.actions}>
              <button className={styles.button} type="button" onClick={() => irAHerramienta("salud")}>Comenzar evaluación</button>
              <a className={styles.buttonSecondary} href="https://wa.me/522222573237?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20administraci%C3%B3n%20de%20condominios." target="_blank" rel="noreferrer" onClick={() => registrarEventoCondominios("condominios_whatsapp", { ubicacion: "cta_final" })}>Hablar con un especialista</a>
          </div>
        </div>
      </section>
    </main>
  );
}
