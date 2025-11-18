import { useQuery } from "@tanstack/react-query";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";
import { getSubmissionFileURL, fetchUser } from "@/services/fetchApi";

export default function useDownloadSubmission(submission_id, options = {}) {
  const { enabled: optEnabled, ...restOptions } = options;

  const query = useQuery({
    queryKey: ["submission_file", submission_id],
    queryFn: async () => {
      let headers = {};

      try {
        headers = await getClientAuthHeaders();
      } catch (e) {
        return null;
      }

      return await getSubmissionFileURL(submission_id, headers);
    },
    enabled:
      typeof optEnabled === "boolean" ? optEnabled : Boolean(submission_id),
    refetchOnWindowFocus: true,
    ...restOptions,
  });

  return { ...query, file: query.data };
}
