# Analítica global del sitio

## Objetivo

La integración global complementa los eventos especializados del micrositio de
condominios y permite medir los puntos de contacto comercial del resto de
Emporio Inmobiliario.

El componente se monta desde `pages/_app.js`. La ruta
`/administracion-de-condominios-puebla` se excluye explícitamente para evitar
duplicar sus eventos `condominios_*`. Las rutas de verificación por folio
también se excluyen para no incorporar identificadores únicos a los reportes.

## Eventos

| Evento | Cuándo se registra | Parámetros |
| --- | --- | --- |
| `site_whatsapp_click` | Clic en un enlace a WhatsApp | `contexto`, `destino`, `ubicacion`, `ruta` |
| `site_phone_click` | Clic en un enlace telefónico | `contexto`, `destino`, `ubicacion`, `ruta` |
| `site_email_click` | Clic en un enlace de correo | `contexto`, `destino`, `ubicacion`, `ruta` |
| `site_lead_cta_click` | Clic hacia contacto, propietarios o un formulario interno | `contexto`, `destino`, `ubicacion`, `ruta` |
| `site_rental_application_click` | Inicio de una solicitud de arrendamiento | `contexto`, `destino`, `ubicacion`, `ruta` |
| `site_property_click` | Clic hacia el detalle de una propiedad | `contexto`, `destino`, `ubicacion`, `ruta` |
| `site_property_view` | Vista de una ficha de propiedad | `contexto`, `ruta` |
| `site_form_start` | Primera interacción con un formulario comercial | `contexto`, `tipo_formulario`, `ruta` |
| `site_form_submit` | La API confirma un formulario comercial | `contexto`, `tipo_formulario`, `ruta` |

## Formularios cubiertos

- contacto general;
- captación de propietarios;
- interés en una propiedad.

## Privacidad

La función de registro utiliza listas cerradas de eventos y parámetros. No
acepta ni envía:

- nombre;
- correo electrónico;
- teléfono;
- mensajes;
- colonia;
- título de la propiedad;
- texto prellenado de WhatsApp;
- parámetros de consulta de la URL.

La ruta enviada se normaliza sin `query string` ni fragmento.

## Conversiones recomendadas en GA4

Marcar como eventos clave:

- `site_form_submit`;
- `site_whatsapp_click`;
- `site_rental_application_click`.

`site_phone_click` puede marcarse como evento clave si el volumen de llamadas
justifica tratarlo como una conversión principal.
