import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useSubmissionMutation(assignment_id, mutationFn) {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn,
        onSuccess: async () => {
            await queryClient.invalidateQueries(["submissions"], assignment_id);
        },
        onError: (error) => {
            console.error(error);
        }
    });

    return mutation
}