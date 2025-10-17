"use client";

import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Dropzone, DropzoneContent, DropzoneEmptyState } from "@/components/ui/shadcn-io/dropzone";
import { useForm } from "react-hook-form";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";
import { generateRubrics } from "@/services/fetchApi";
import useGenerate from "@/hooks/useGenerate";
import LoadingButton from "@/components/loader/LoadingButton";
import { Button } from "@/components/ui/button";
import fileToBase64 from "@/services/fileToBase64";

function MarkSchemeForm({onSubmit, setGenerated}) {
  const form = useForm({
    defaultValues: {
      files: null,
    }
  })

  const {mutate, isPending} = useGenerate(async (data)=>{
    const headers = await getClientAuthHeaders();
    const files = data.files;
    let encoded = null;
    if (files && files.length > 0) {
      encoded = await fileToBase64(files[0]);
    }
    const payload = { encoded };
    const response = await generateRubrics(payload, headers);

    const result = {...response, encoded}
    console.log(result)
    setGenerated(result);
    if(typeof onSubmit === "function") {
      onSubmit();
    }
  })


  return (
    <Form className="w-full" {...form}>
      <form onSubmit={form.handleSubmit(mutate)} className="space-y-3 mt-2 w-full">
        <FormField
          control={form.control}
          name="files"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Dropzone
                  accept={{ "application/pdf": [] }}
                  maxFiles={1}
                  maxSize={10 * 1024 * 1024}
                  onDrop={(files) => field.onChange(files)}
                  src={field.value}
                  disabled={isPending}
                  className="border-2 border-dashed w-full"
                >
                  <DropzoneEmptyState />
                  <DropzoneContent />
                </Dropzone>
              </FormControl>
              <FormDescription>

              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton isLoading={isPending} className="w-full" type="generate">
          Generate
        </LoadingButton>
        <Button onClick={onSubmit} className="w-full" variant="secondary" disabled={isPending}>
          Enter manually
        </Button>
      </form>
    </Form>
  );
}

export default MarkSchemeForm;