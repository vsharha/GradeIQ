import { fetchAssignments } from "@/services/fetchApi";
import { redirect } from "next/navigation";
import getServerAuthHeaders from "@/services/getServerAuthHeaders";

async function Layout({children, params}) {
  const {id} = await params;

  let assignment = {}

  try {
    const headers = await getServerAuthHeaders()
    const assignments = await fetchAssignments(headers);
    assignment = assignments.find((assignment) => assignment.id === Number(id));
  } catch (e) {
    console.log(e)
    redirect("/app")
  }

  if (!assignment) {
    redirect("/app")
  }

  return children;
}

export default Layout;