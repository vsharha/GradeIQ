"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

function BackButton() {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()} variant="outline" className="w-fit">
      <ArrowLeft/> Back
    </Button>
  );
}

export default BackButton;