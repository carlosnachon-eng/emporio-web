import { inspectWhatsappAttributionPilot } from "../../../lib/whatsapp-attribution/config.mjs";
import { verifyWhatsappAttributionStorage } from "../../../lib/whatsapp-attribution/server.mjs";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  if (process.env.VERCEL_ENV !== "preview") return res.status(404).json({ ok: false, error: "Not Found" });
  try {
    const storage = await verifyWhatsappAttributionStorage({ env: process.env });
    return res.status(storage.ready ? 200 : 404).json({ ok: storage.ready, ...storage });
  } catch {
    const preflight = inspectWhatsappAttributionPilot(process.env);
    return res.status(424).json({ ok: false, ...preflight });
  }
}
