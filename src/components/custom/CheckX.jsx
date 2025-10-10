import { Check, LucideX } from "lucide-react";

function CheckX({value}) {
  if(value) {
    return <Check className="text-green-700 dark:text-green-400"/>
  }

  else return <LucideX className="text-red-700 dark:text-red-400"/>
}

export default CheckX;