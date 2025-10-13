import { Progress } from "@/components/ui/progress";
import { Loader } from "lucide-react";
import AnimatedLoader from "@/components/loader/AnimatedLoader";

function StyledProgress({value, max, label, isLoading, ...props}) {
  const percentageValue = value/max * 100

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex gap-3 justify-between">
        <span>{label}</span>
        {isLoading?<AnimatedLoader size={20}/>:<span>{value}/{max}</span>}
      </div>
      <Progress value={percentageValue} {...props}/>
    </div>
  );
}

export default StyledProgress;