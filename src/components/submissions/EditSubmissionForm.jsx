import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";
import { updateSubmission } from "@/services/fetchApi";
import useSubmissionMutation from "@/hooks/useSubmissionMutation";
import LoadingButton from "@/components/loader/LoadingButton";
import Checkbox from "@/components/custom/Checkbox";

function EditSubmissionForm({ assignment_id, submission, onSubmit }) {
  const { student_name, grade, grade_confirmed } = submission;

  const form = useForm({
    defaultValues: {
      student_name,
      grade,
      grade_confirmed,
    },
  });

  const { mutate, isPending } = useSubmissionMutation(
    assignment_id,
    async (payload) => {
      console.log(payload);
      const headers = await getClientAuthHeaders();
      const result = await updateSubmission(
        submission.id,
        payload,
        headers,
        form.setError,
      );
      if (typeof onSubmit === "function") {
        onSubmit();
      }
      return result;
    },
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(mutate)}>
        <FormField
          control={form.control}
          name="student_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="grade"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Grade</FormLabel>
              <FormControl>
                <Input type="number" placeholder="" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="grade_confirmed"
          render={({ field }) => (
            <FormItem className="flex flex-row">
              <FormControl>
                <Checkbox
                  {...field}
                  checked={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormLabel>Confirmed</FormLabel>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton isLoading={isPending} className="w-full mt-5">
          Edit
        </LoadingButton>
      </form>
    </Form>
  );
}

export default EditSubmissionForm;
