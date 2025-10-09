import { cn } from "@/lib/utils";
import Loader from "@/components/custom/Loader";

function OverlayLoader({isLoading}) {
  return (
    <div className={cn("absolute top-0 w-full h-full flex justify-center items-center backdrop-blur brightness-95 z-45 transition-all duration-300", isLoading?"opacity-100":"opacity-0")}><Loader/></div>
  );
}

export default OverlayLoader;