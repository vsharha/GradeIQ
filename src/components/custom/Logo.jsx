import { cn } from "@/lib/utils";
import { BrainCircuit } from "lucide-react";

function Logo({size="small"}) {
  const sizes = {
    small: "text-xl",
    medium: "text-3xl",
    large: "text-4xl"
  }

  return (
    <div className={cn("font-bold text-xl font-heading flex items-center h-10 flex gap-2", sizes[size])}>
      <BrainCircuit/>
      <h1>
        GradeIQ
      </h1>
    </div>
  );
}

export default Logo;