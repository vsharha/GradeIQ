import { fetchAssignments, fetchSubmissions, fetchUser } from "@/services/fetchApi";
import { redirect } from "next/navigation";
import getServerAuthHeaders from "@/services/getServerAuthHeaders";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

async function Layout({children, params}) {
  const {id} = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['assignments'],
    queryFn: async ()=>{
      const headers = await getServerAuthHeaders();
      return await fetchAssignments(headers)
    },
  });

  const assignments = queryClient.getQueryData(['assignments']);
  const assignment = assignments?.find((a) => a.id === Number(id));

  if(!assignment) {
    redirect("/app")
  } else {
    // await queryClient.prefetchQuery({
    //   queryKey: ['submissions', assignment.id],
    //   queryFn: async ()=>{
    //     const headers = await getServerAuthHeaders();
    //     return await fetchSubmissions(assignment.id, headers)
    //   },
    // });
  }

  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
      children
    // </HydrationBoundary>
  );
}

export default Layout;