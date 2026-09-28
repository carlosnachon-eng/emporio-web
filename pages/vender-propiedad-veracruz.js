import { createClient } from "@supabase/supabase-js";
import OwnerValueLanding from "../components/OwnerValueLanding";

const supabasePublic = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Page({ propiedades = [] }) {
  return <OwnerValueLanding plaza="VERACRUZ" propiedades={propiedades} />;
}

export async function getServerSideProps() {
  const estado = "Veracruz";
  const { data } = await supabasePublic
    .from("propiedades")
    .select("public_id,titulo,precio,operacion,tipo,ciudad,colonia,estado,fotos,status,created_at")
    .in("status", ["published","reserved"])
    .ilike("estado", estado)
    .order("created_at", { ascending: false })
    .limit(6);
  return { props: { propiedades: data || [] } };
}
