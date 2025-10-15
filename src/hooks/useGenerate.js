import { useMutation } from "@tanstack/react-query";

function useGenerate(mutationFn) {
  const mutation = useMutation({
    mutationFn,
    onSuccess: async () => {
    },
    onError: (error) => {
      console.error(error);
    }
  });

  return mutation
}

export default useGenerate