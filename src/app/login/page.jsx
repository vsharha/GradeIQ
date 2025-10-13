import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "@/components/login/LoginForm";
import { LogIn } from "lucide-react";

function Page() {
  return (
    <Card className="w-full max-w-120">
      <CardHeader>
        <CardTitle className="text-xl font-heading flex flex-row  gap-2 items-center"><LogIn/>Log in</CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm/>
      </CardContent>
    </Card>
  );
}

export default Page;