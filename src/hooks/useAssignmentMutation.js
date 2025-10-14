import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useAssignmentMutation(mutationFn, onSuccess) {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn,
        onSuccess: async () => {
            await queryClient.invalidateQueries(["assignments"]);
            if (typeof onSuccess === "function") {
                onSuccess();
            }
        },
        onError: (error) => {
            console.error(error);
        }
    });

    return mutation
}