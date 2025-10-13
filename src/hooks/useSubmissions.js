import { useQuery } from "@tanstack/react-query";
import { fetchSubmissions } from "@/services/fetchApi";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";

function useSubmissions(assignment_id) {
    const query = useQuery({
        queryKey: ["submissions", assignment_id],
        queryFn: async () => {
            const headers = await getClientAuthHeaders()
            return fetchSubmissions(assignment_id, headers)
        },
        refetchOnWindowFocus: true,
    })

    return {...query, submissions: query.data}
}

export default useSubmissions