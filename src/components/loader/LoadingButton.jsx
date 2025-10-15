import BlockLoader from "@/components/loader/BlockLoader";
import { Button } from "@/components/ui/button";

function LoadingButton({isLoading, children, ...props}) {
  return (
    <Button disabled={isLoading} {...props}>
      {isLoading?<BlockLoader/>:children}
    </Button>
  );
}

export default LoadingButton;