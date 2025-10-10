import { Calendar } from "lucide-react";
import { formatDate } from "@/services/services";

function VariableView({children, variable}) {
  return (
    <div className="flex gap-1 flex-col w-1/2 md:w-1/4">
      <span className="flex items-center gap-2">{children}</span>
      <p className="text-sm text-muted-foreground">{variable}</p>
    </div>
  );
}

export default VariableView;