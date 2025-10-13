import AnimatedLoader from "@/components/loader/AnimatedLoader";

function BlockLoader(props) {
  return (
    <div className="w-full flex justify-center">
      <AnimatedLoader {...props}/>
    </div>
  );
}

export default BlockLoader;