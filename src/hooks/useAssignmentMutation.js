import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useAssignmentMutation(mutationFn, setError) {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: mutationFn,
        onSuccess: async () => {
            await queryClient.invalidateQueries(["assignments"]);
            toast("Successfully added assignment")
        },
        onError: (error) => {
            console.error(error);
        }
    });

    return mutation
}