import { useQuery } from "@tanstack/react-query";
import { fetchSubmissions } from "@/services/fetchApi";

function useSubmissions(assignment_id) {
    const query = useQuery({
        queryKey: ["submissions", assignment_id],
        queryFn: () => fetchSubmissions(assignment_id),
        refetchOnWindowFocus: true,
    })

    return {...query, submissions: query.data}
}

export default useSubmissions