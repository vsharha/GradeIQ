import { useQuery } from "@tanstack/react-query";
import { fetchAssignments } from "@/services/fetchApi";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";

function useAssignments() {
  const query = useQuery({
    queryKey: ["assignments"],
    queryFn: async () => {
      const headers = await getClientAuthHeaders();
      return fetchAssignments(headers);
    },
    refetchOnWindowFocus: true,
    staleTime: 0,
  });

  return { ...query, assignments: query.data };
}

export default useAssignments;
