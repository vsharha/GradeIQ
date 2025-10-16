import { Check, LucideX } from "lucide-react";

function Boolean({flag}) {
  if(flag) {
    return <Check/>
  }

  else {
    return (
      <LucideX/>
    );
  }
}

export default Boolean;