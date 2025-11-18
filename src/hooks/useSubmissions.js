import { useQuery } from "@tanstack/react-query";
import { fetchSubmissions } from "@/services/fetchApi";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";

function useSubmissions(assignment_id) {
  const query = useQuery({
    queryKey: ["submissions", assignment_id],
    queryFn: async () => {
      const headers = await getClientAuthHeaders();
      return fetchSubmissions(assignment_id, headers);
    },
    refetchOnWindowFocus: true,
    staleTime: 0,
    refetchInterval: (query) => {
      const hasPending = query.state.data?.some(
        (submission) => submission?.grading_status === "pending",
      );
      return hasPending ? 3000 : false;
    },
  });

  return { ...query, submissions: query.data };
}

export default useSubmissions;
