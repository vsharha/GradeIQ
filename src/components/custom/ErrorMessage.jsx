import { LucideX } from "lucide-react";
import { cn } from "@/lib/utils";

function ErrorMessage({error, className}) {
  console.log(error)

  return (
    <div className={cn("flex flex-row gap-2 justify-center w-full", className)}>
      <LucideX/>
      <span>
        {error.message}
      </span>
    </div>
  );
}

export default ErrorMessage;