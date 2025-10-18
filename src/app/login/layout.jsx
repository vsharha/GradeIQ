import Header from "@/components/custom/Header";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

async function Layout({children}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (user) {
    return redirect("/app")
  }

  return (
    <div className="overflow-hidden h-screen-dynamic flex flex-col">
      <Header />
      <main className="py-5 overscroll-contain px-4 sm:px-6 sm:py-7 flex-1 w-full flex flex-col items-center overflow-auto">
        {children}
      </main>
    </div>
  );
}

export default Layout;