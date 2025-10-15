import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

function StyledCollapsible({title, children}) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="flex items-center mb-4">
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