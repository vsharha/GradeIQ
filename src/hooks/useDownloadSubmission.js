import { useQuery } from "@tanstack/react-query";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";
import { downloadSubmissionFile, fetchUser } from "@/services/fetchApi";

export default function useDownloadSubmission(submission_id) {
    const query = useQuery({
        queryKey: ["submission_file", submission_id],
        queryFn: async () => {
            let headers = {}

            try {
                headers = await getClientAuthHeaders()
            } catch (e) {
                return null
            }

            return await downloadSubmissionFile(submission_id,headers);
        },
        refetchOnWindowFocus: true,
    })

    return {...query, file: query.data}
}