import { fetchAssignments } from "@/services/fetchApiServer";
import { redirect } from "next/navigation";

async function Layout({children, params}) {
  const {id} = await params;

  const assignments = await fetchAssignments();

  const assignment = assignments.find((assignment) => assignment.id === Number(id));

  if (!assignment) {
    redirect("/app")
  }

  return children;
}

export default Layout;