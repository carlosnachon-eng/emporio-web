import { createWhatsappAttributionClick, sameOriginRequest } from "../../../lib/whatsapp-attribution/server.mjs";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  if (!sameOriginRequest(req)) return res.status(403).json({ ok: false, error: "Invalid origin" });

  try {
    const result = await createWhatsappAttributionClick({ env: process.env, input: req.body });
    if (result?.status === "disabled") return res.status(404).json({ ok: false, error: "Not Found" });
    return res.status(200).json({
      ok: true,
      status: result.status,
      whatsappAttributionId: result.attribution_id,
      reference: result.reference_code,
      expiresAt: result.expires_at,
    });
  } catch (error) {
    if (error?.statusCode === 400) return res.status(400).json({ ok: false, error: "Invalid context" });
    console.warn("[whatsapp-attribution-click]", error?.code || "failed_open");
    return res.status(503).json({ ok: false, error: "Attribution unavailable" });
  }
}
