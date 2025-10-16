import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

function StyledCollapsible({title, children, defaultOpen=true, className}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className={cn("flex items-center mb-4 justify-center h-full gap-2", className)}>
        {open?<ChevronDown/>:<ChevronRight />}
        <span>{title}</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col gap-3">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}

export default StyledCollapsible;