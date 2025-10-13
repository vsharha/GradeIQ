import { Button } from "@/components/ui/button";

function LoginButton() {
  return (
    <Link href={"/app"}>
      <Button>Log in</Button>
    </Link>
  );
}

export default LoginButton;