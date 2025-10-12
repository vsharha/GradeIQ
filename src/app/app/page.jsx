import { redirect } from "next/navigation";

function Page() {
  redirect('/app/login');
  
  return null;
}

export default Page;