import { fetchAssignments } from "@/services/fetchApi";
import { redirect } from "next/navigation";
import getServerAuthHeaders from "@/services/getServerAuthHeaders";

async function Layout({children, params}) {
  const {id} = await params;

  const headers = await getServerAuthHeaders()
  const assignments = await fetchAssignments(headers);

  const assignment = assignments.find((assignment) => assignment.id === Number(id));

  if (!assignment) {
    redirect("/app")
  }

  return children;
}

export default Layout;