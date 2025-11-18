import { Button } from "@/components/ui/button";
import Link from "next/link";

function LoginButton() {
  return (
    <Link href={"/app"}>
      <Button>Log in</Button>
    </Link>
  );
}

export default LoginButton;
