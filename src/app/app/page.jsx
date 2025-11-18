import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

async function Page() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return null;
}

export default Page;
