import { Loader } from "lucide-react";

function AnimatedLoader({ size = 30 }) {
  return (
    <div className="overflow-hidden">
      <Loader className="animate-spin" size={size} />
    </div>
  );
}

export default AnimatedLoader;
