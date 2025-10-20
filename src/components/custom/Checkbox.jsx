import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function Checkbox({className, ...props}) {
  return (
    <Input type="checkbox" className={cn("accent-primary w-fit", className)} {...props}/>
  );
}

export default Checkbox;