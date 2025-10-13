import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

async function Layout({children}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login")
  }

  return children;
}

export default Layout;