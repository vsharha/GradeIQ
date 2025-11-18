import { useForm } from "react-hook-form";
import useSubmissionMutation from "@/hooks/useSubmissionMutation";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";
import { uploadSubmissions } from "@/services/fetchApi";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import LoadingButton from "@/components/loader/LoadingButton";
import fileToBase64 from "@/services/fileToBase64";

function UploadSubmissionsForm({ assignment_id, onUpload }) {
  const form = useForm({
    defaultValues: {
      files: null,
    },
  });

  const { mutate, isPending } = useSubmissionMutation(
    assignment_id,
    async (data) => {
      const headers = await getClientAuthHeaders();
      const files = data.files;

      let encoded_files = [];
      if (files && files.length > 0) {
        for (const file of files) {
          const encoded = await fileToBase64(file);
          encoded_files.push(encoded);
        }
      }
      console.log(encoded_files);
      const result = await uploadSubmissions(
        assignment_id,
        { encoded_files },
        headers,
      );
      if (typeof onUpload === "function") {
        onUpload();
      }
      return result;
    },
  );

  return (
    <Form className="w-full" {...form}>
      <form
        onSubmit={form.handleSubmit(mutate)}
        className="space-y-3 mt-2 w-full"
      >
        <FormField
          control={form.control}
          name="files"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Dropzone
                  accept={{ "application/pdf": [] }}
                  maxFiles={10}
                  maxSize={10 * 1024 * 1024}
                  onDrop={(files) => field.onChange(files)}
                  src={field.value}
                  className="border-2 border-dashed w-full"
                >
                  <DropzoneEmptyState />
                  <DropzoneContent />
                </Dropzone>
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton isLoading={isPending} className="w-full">
          Upload
        </LoadingButton>
      </form>
    </Form>
  );
}

export default UploadSubmissionsForm;
