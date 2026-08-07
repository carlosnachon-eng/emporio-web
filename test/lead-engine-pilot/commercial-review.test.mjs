import test from "node:test";
import assert from "node:assert/strict";
import { validateCommercialState } from "../../lib/lead-engine-pilot/commercial-review.mjs";

const valid = {
  leadId: "10000000-0000-4000-8000-000000000001",
  attention: "contacted",
  qualification: "potential",
  progress: "appointment_scheduled",
  result: "operation_in_process",
};

test("acepta exactamente las cuatro acciones comerciales", () => {
  assert.deepEqual(validateCommercialState(valid), valid);
});

test("rechaza estados fuera del piloto", () => {
  assert.equal(validateCommercialState({ ...valid, result: "custom_pipeline" }), null);
});
