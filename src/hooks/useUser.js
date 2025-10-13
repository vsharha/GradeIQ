import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "@/services/fetchApi";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";

function useUser() {
    const query = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            let headers = {}

            try {
                headers = await getClientAuthHeaders()
            } catch (e) {
                return null
            }

            return await fetchUser(headers);
        },
        refetchOnWindowFocus: true,
    })

    return {...query, user: query.data}
}

export default useUser