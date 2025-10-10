"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

function BackButton({href}) {
  const router = useRouter();

  return (
    <Button onClick={() => href?router.push(href):router.back()} variant="outline" className="w-fit">
      <ArrowLeft/> Back
    </Button>
  );
}

export default BackButton;