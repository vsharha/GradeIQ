import { LucideX } from "lucide-react";

function ErrorMessage({error}) {
  console.log(error)

  return (
    <div className="flex flex-row gap-2">
      <LucideX/>
      <span>
        {error.message}
      </span>
    </div>
  );
}

export default ErrorMessage;