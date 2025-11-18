"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import BlockLoader from "@/components/loader/BlockLoader";
import LoadingButton from "@/components/loader/LoadingButton";

function LogoutButton() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogout() {
    setIsLoading(true);
    const supabase = await createClient();
    await supabase.auth.signOut();

    queryClient.clear();
    router.push("/");
    router.refresh();
  }

  return (
    <LoadingButton
      className="w-full"
      onClick={handleLogout}
      isLoading={isLoading}
      variant="secondary"
    >
      Log out
    </LoadingButton>
  );
}

export default LogoutButton;
