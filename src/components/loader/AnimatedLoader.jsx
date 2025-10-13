import { Loader } from "lucide-react";

function AnimatedLoader({size = 30, className}) {
  return (
    <div className="overflow-hidden">
      {/*<div style={{height:`${2*size}rem`, width:`${2*size}rem`, borderWidth:`${0.25*size}rem`}} className={cn("border-t-stone-500 border-stone-400 rounded-full animate-spin dark:border-input dark:border-t-muted-foreground", className)}></div>*/}
      <Loader className="animate-spin" size={size}/>
    </div>
  );
}

export default AnimatedLoader;