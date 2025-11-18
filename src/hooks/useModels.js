import { useQuery } from "@tanstack/react-query";
import { fetchModels } from "@/services/fetchApi";

function useModels() {
  const query = useQuery({
    queryKey: ["models"],
    queryFn: async () => {
      return fetchModels();
    },
    refetchOnWindowFocus: true,
  });

  return { ...query, models: query.data };
}

export default useModels;
