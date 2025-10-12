import { redirect } from "next/navigation";

function Page() {
  redirect('/app/assignments');
  
  return null;
}

export default Page;