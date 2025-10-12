import { useQuery } from "@tanstack/react-query";
import { fetchAssignments } from "@/services/fetchApi";

function useAssignments() {
    const query = useQuery({
        queryKey: ["assignments"],
        queryFn: fetchAssignments
    })

    return {...query, assignments: query.data}
}

export default useAssignments