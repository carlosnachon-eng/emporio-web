# Cierre V1 — Micrositio de Administración de Condominios

**Ruta:** `/administracion-de-condominios-puebla`
**Rama:** `codex/landing-administracion-condominios`
**Alcance:** landing, calculadora, evaluación, resultado, Reporte Ejecutivo PDF y formulario inteligente.
**Fuera de alcance:** CRM, automatizaciones comerciales, cuentas de usuario, persistencia de reportes y cualquier cambio en `inmoadmin`.

## Hero: diez versiones revisadas

1. **Que el condominio esté en orden no debería depender solo de ti.**
2. Dirigir el comité no debería significar cargar con todo.
3. Más claridad para tu comité. Más tranquilidad para ti.
4. Que cada decisión del condominio te deje tranquilidad, no más dudas.
5. Un condominio en orden empieza con un comité que puede decidir con claridad.
6. No necesitas saberlo todo para cuidar bien el condominio.
7. Tu responsabilidad es importante. La incertidumbre no debería acompañarla.
8. Cuando las cuentas están claras, el comité puede volver a avanzar.
9. Menos pendientes inciertos. Más tranquilidad para quienes cuidan el condominio.
10. Cuidar el patrimonio de todos no debería sentirse como una carga personal.

### Versión seleccionada

**Que el condominio esté en orden no debería depender solo de ti.**

Razón: habla directamente al presidente del comité, reconoce el peso de su responsabilidad y presenta el servicio como una forma de recuperar orden y tranquilidad. No vende tecnología ni promete resolver problemas antes de conocer el caso.

Subtítulo implementado:

> Ayudamos a presidentes y comités a recuperar claridad sobre cuotas, gastos, pendientes y decisiones. Completa una evaluación inicial sin costo, obtén un resultado real y decide después si quieres hablar con nosotros.

## Contrato de eventos V1

Los eventos se emiten en `window.dataLayer` y, en paralelo, mediante el evento interno `emporio:condominios`. No contienen nombre, teléfono, correo ni nombre del condominio.

| Evento | Momento | Propiedades permitidas |
|---|---|---|
| `condominios_calculadora_inicio` | Primer inicio de la calculadora | `origen` |
| `condominios_calculadora_final` | Finaliza el quinto paso | `unidades`, `nivel_complejidad` |
| `condominios_evaluacion_inicio` | Primer inicio de la evaluación | `origen` |
| `condominios_evaluacion_final` | Responde la pregunta 15 | `indice_control`, `nivel_salud` |
| `condominios_pdf_descarga` | PDF generado y descarga iniciada | `indice_control`, `nivel_complejidad` |
| `condominios_pdf_compartir` | El usuario intenta compartir | `metodo` |
| `condominios_cta_diagnostico` | Solicita revisar el diagnóstico después de generar el reporte | `ubicacion` |
| `condominios_whatsapp` | Clic en el WhatsApp del CTA final | `ubicacion` |
| `condominios_formulario_iniciado` | Primer foco dentro del formulario | `ubicacion` |
| `condominios_formulario_enviado` | API confirma los datos mínimos y se genera el reporte | `modo`, `prioridad` |

No se conectó CRM. La clasificación A–D permanece interna y únicamente se incluye en el correo técnico cuando el envío real está habilitado.

# Checklists de publicación

## 1. Lanzamiento

- [x] Alcance V1 cerrado.
- [x] Landing, calculadora, evaluación, resultado, PDF y formulario implementados.
- [x] Navegación y footer enlazan la página.
- [x] El micrositio no modifica `inmoadmin`.
- [x] El formulario permanece en modo preview por defecto.
- [ ] Autorizar commit y push.
- [ ] Crear preview remoto de Vercel.
- [ ] Validar el preview remoto con las variables reales de entrega todavía deshabilitadas.
- [ ] Autorizar despliegue a producción.

## 2. SEO

- [x] Title único: `Administración de condominios en Puebla | Emporio`.
- [x] Meta description específica y orientada a reporte/diagnóstico.
- [x] Un solo H1.
- [x] Jerarquía H2/H3 coherente.
- [x] Canonical absoluto y autorreferente.
- [x] OpenGraph y Twitter Cards.
- [x] Imagen social 1200 × 630.
- [x] Schema `Service`, `WebApplication`, `Organization` y `BreadcrumbList`.
- [x] Enlace interno desde menú y footer.
- [x] Sin FAQ Schema innecesario.
- [ ] Validar HTML de producción después del despliegue.

## 3. Analytics

- [x] Diez eventos V1 instrumentados.
- [x] Eventos sin datos personales.
- [x] Contrato de nombres y propiedades documentado.
- [ ] Crear disparadores en Google Tag Manager o la herramienta vigente.
- [ ] Mapear eventos a GA4.
- [ ] Marcar `condominios_formulario_enviado` como conversión principal.
- [ ] Validar en DebugView sin registrar datos personales.

## 4. Vercel

- [x] Build local aprobado con variables Supabase ficticias.
- [x] Las APIs del PDF y formulario son server-side.
- [x] `CONDOMINIOS_LEADS_ENABLED` deshabilita la entrega real por defecto.
- [ ] Configurar variables del formulario en Preview.
- [ ] Probar envío real en Preview con correo controlado.
- [ ] Replicar variables autorizadas en Production.
- [ ] Confirmar dominio canónico `www.emporioinmobiliario.com.mx`.
- [ ] Revisar logs de funciones después del primer envío.

## 5. Search Console

- [ ] Inspeccionar la URL publicada.
- [ ] Probar URL publicada en vivo.
- [ ] Confirmar canonical elegido.
- [ ] Solicitar indexación una sola vez.
- [ ] Revisar cobertura e impresiones durante 2–4 semanas.
- [ ] No modificar el contenido por fluctuaciones de pocos días.

## 6. Sitemap

- [x] Ruta incluida en `pages/sitemap.xml.js`.
- [x] Prioridad y frecuencia coherentes con una página de servicio.
- [ ] Confirmar respuesta 200 de `/sitemap.xml` en producción.
- [ ] Confirmar que la URL canónica aparece una sola vez.
- [ ] Reenviar sitemap solo si Search Console reporta un error.

## 7. Robots

- [x] `robots.txt` permite el rastreo.
- [x] `robots.txt` declara el sitemap HTTPS.
- [x] La página incluye `index,follow`.
- [x] La API del PDF responde con `X-Robots-Tag: noindex, nofollow`.
- [ ] Verificar que Vercel no agregue `X-Robots-Tag: noindex` a producción.

## 8. Indexación

- [x] Canonical autorreferente.
- [x] Página accesible mediante enlaces internos.
- [x] Contenido principal presente en HTML.
- [x] No depende de completar las herramientas para explicar el servicio.
- [ ] Confirmar HTTP 200 en producción.
- [ ] Confirmar ausencia de contraseña o protección de preview en el dominio público.
- [ ] Solicitar indexación después de la validación final.

## 9. Rendimiento

- [x] Página estática; solo la experiencia interactiva usa estado del cliente.
- [x] PDF y QR se generan bajo demanda en servidor.
- [x] Imagen social fuera del recorrido visual principal.
- [x] Sin SDK adicional de CRM o analytics.
- [x] Sin desbordamiento horizontal en 390 px.
- [ ] Medir Lighthouse y Core Web Vitals en el preview remoto.
- [ ] Confirmar LCP, CLS e INP con datos reales después del lanzamiento.
- [ ] Revisar duración y memoria de la función PDF en Vercel.

## 10. Accesibilidad

- [x] Un solo H1 y estructura semántica.
- [x] Campos asociados con `label`.
- [x] Selectores nativos para teclado y lectores de pantalla.
- [x] Progreso con descripción accesible.
- [x] Estados y errores anunciados mediante `role`/`aria-live`.
- [x] Controles táctiles con tamaño suficiente.
- [x] Respeta `prefers-reduced-motion`.
- [ ] Probar navegación completa solo con teclado en preview remoto.
- [ ] Ejecutar revisión automatizada de contraste y nombres accesibles.

## 11. Legal

- [x] El rango se identifica como estimación, no cotización.
- [x] El reporte aclara que no es auditoría contable, legal ni técnica.
- [x] El formulario exige consentimiento y enlaza el aviso de privacidad.
- [x] Se explica que no habrá cotizaciones automáticas.
- [x] Honeypot, validación, límite de payload y rate limit básico.
- [ ] Confirmar con el responsable legal que el aviso de privacidad cubre este propósito.
- [ ] Confirmar responsable interno y plazo de conservación de los leads.
- [ ] Confirmar texto final del alcance del Diagnóstico de Control Condominal.

## 12. Formulario real

- [x] Endpoint independiente del formulario general.
- [x] Modo preview seguro cuando faltan variables.
- [x] No se conecta con CRM.
- [x] Valida campos, consentimiento, correo y teléfono.
- [ ] Definir correo de destino controlado.
- [ ] Configurar `CONDOMINIOS_LEADS_ENABLED=true`.
- [ ] Configurar `RESEND_API_KEY`.
- [ ] Configurar `CONDOMINIOS_LEADS_TO`.
- [ ] Configurar y verificar `CONDOMINIOS_LEADS_FROM`.
- [ ] Enviar un lead ficticio desde Preview.
- [ ] Confirmar recepción, reply-to, formato y ausencia de datos innecesarios.
- [ ] Repetir una prueba en producción y eliminar el registro ficticio.

# GO / NO GO

## Estado actual: NO GO operativo, código V1 terminado

La implementación está lista para revisión final, pero no debe publicarse todavía porque faltan tareas que dependen del entorno:

1. configurar y probar la entrega real del formulario en Vercel Preview;
2. confirmar que el aviso de privacidad cubre esta captación;
3. mapear y validar los eventos en la herramienta de analytics vigente;
4. validar el preview remoto, incluyendo rendimiento, teclado y envío real;
5. recibir autorización expresa de push y despliegue.

Estas tareas no requieren nuevas funcionalidades ni cambios conceptuales. Una vez aprobadas, la V1 puede pasar a producción. Todo requerimiento adicional queda fuera de V1 y se documentará, sin desarrollarse, como V2.
