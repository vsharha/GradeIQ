import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useAssignmentMutation(mutationFn) {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn,
        onSuccess: async () => {
            await queryClient.invalidateQueries(["assignments"]);
        },
        onError: (error) => {
            console.error(error);
        }
    });

    return mutation
}