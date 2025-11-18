import AnimatedLoader from "@/components/loader/AnimatedLoader";

function PageLoader({ size = 40, ...props }) {
  return (
    <div className="w-full mt-10 flex items-center justify-center">
      <AnimatedLoader size={size} {...props} />
    </div>
  );
}

export default PageLoader;
