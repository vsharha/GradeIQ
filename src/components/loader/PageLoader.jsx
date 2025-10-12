import Loader from "@/components/loader/Loader";

function PageLoader() {
  return (
    <div className="w-full mt-10 flex items-center justify-center">
      <Loader size={2}/>
    </div>
  );
}

export default PageLoader;