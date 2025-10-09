import { Progress } from "@/components/ui/progress";

function StyledProgress({value, max, label, ...props}) {
  const percentageValue = value/max * 100

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex gap-3 justify-between">
        <span>{label}</span>
        <span>{value}/{max}</span>
      </div>
      <Progress value={percentageValue} {...props}/>
    </div>
  );
}

export default StyledProgress;