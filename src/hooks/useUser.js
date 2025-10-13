import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "@/services/fetchApi";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";

function useUser() {
    const query = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const headers = await getClientAuthHeaders()
            return await fetchUser(headers);
        },
        refetchOnWindowFocus: true,
    })

    return {...query, user: query.data}
}

export default useUser