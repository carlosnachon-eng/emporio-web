import { createClient } from "@supabase/supabase-js";
import { listDemoLeads, updateDemoLead } from "../../../lib/lead-engine-pilot/commercial-review.mjs";

function sameOrigin(req) {
  if (!req.headers.origin) return false;
  try {
    return new URL(req.headers.origin).host === req.headers.host;
  } catch {
    return false;
  }
}

export default async function handler(req, res) {
  if (!new Set(["GET", "PATCH"]).has(req.method)) return res.status(405).json({ error: "Method not allowed" });
  if (process.env.VERCEL_ENV !== "preview") return res.status(404).json({ error: "Not found" });
  if (req.method === "PATCH" && !sameOrigin(req)) return res.status(403).json({ error: "Invalid origin" });

  try {
    if (req.method === "GET") {
      const leads = await listDemoLeads({ env: process.env, createClient, fetchImpl: fetch });
      res.setHeader("Cache-Control", "no-store");
      return res.status(200).json({ leads });
    }
    const state = await updateDemoLead({ env: process.env, input: req.body, createClient, fetchImpl: fetch });
    return res.status(200).json({ state });
  } catch {
    return res.status(404).json({ error: "Demo unavailable" });
  }
}
