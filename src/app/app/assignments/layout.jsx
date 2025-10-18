// import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
// import getServerAuthHeaders from "@/services/getServerAuthHeaders";
// import { fetchAssignments } from "@/services/fetchApi";

async function Layout({children}) {
  // const queryClient = new QueryClient();
  //
  // await queryClient.prefetchQuery({
  //   queryKey: ['assignments'],
  //   queryFn: async ()=>{
  //     const headers = await getServerAuthHeaders();
  //     return await fetchAssignments(headers)
  //   },
  // });

  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
      children
    // </HydrationBoundary>
  );
}

export default Layout;