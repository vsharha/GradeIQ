import Loader from "@/components/custom/Loader";

function OverlayLoader({isLoading}) {
  if(!isLoading)
    return null;

  return (
    <div className="absolute top-0 w-full h-full flex justify-center items-center backdrop-blur brightness-95 z-45 animate-fade-in-loader"><Loader/></div>
  );
}

export default OverlayLoader;