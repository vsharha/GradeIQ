import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useAssignmentMutation(mutationFn) {
    const queryClient = useQueryClient();

    const {isLoading, mutate} = useMutation({
        mutationFn,
        onSuccess: async () => {
            await queryClient.invalidateQueries(["assignments"]);
            toast("Successfully added assignment")
        },
        onError: (error) => {
            console.error(error);
        }
    });

    return {isLoading, mutate}
}