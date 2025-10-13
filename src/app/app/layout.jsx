"use client"

import Header from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BlockLoader from "@/components/loader/BlockLoader";
import { useQueryClient } from "@tanstack/react-query";

function AppLayout({children}) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogout() {
    const supabase = await createClient();
    setIsLoading(true)
    await supabase.auth.signOut();
    queryClient.clear();
    router.push("/");
    router.refresh();
  }[]

  return (
    <>
      <Header>
        <Button onClick={handleLogout}>
          {isLoading?
            <BlockLoader/>
            :
            <span>Log out</span>
          }
        </Button>
      </Header>
      <main className="py-5 overscroll-contain px-4 sm:px-6 sm:py-7 flex-1 w-full flex flex-col items-center">
        {children}
      </main>
    </>
  );
}

export default AppLayout;