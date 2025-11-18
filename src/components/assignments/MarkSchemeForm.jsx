"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import { useForm } from "react-hook-form";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";
import { generateRubrics } from "@/services/fetchApi";
import useGenerate from "@/hooks/useGenerate";
import LoadingButton from "@/components/loader/LoadingButton";
import { Button } from "@/components/ui/button";
import fileToBase64 from "@/services/fileToBase64";
import { Input } from "@/components/ui/input";
import { Trash } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SelectModel from "@/components/custom/SelectModel";

function MarkSchemeForm({ onSubmit, setGenerated }) {
  const form = useForm({
    defaultValues: {
      ai_config: {},
      files: null,
    },
  });

  const { mutate, isPending } = useGenerate(async (data) => {
    console.log(data);
    const headers = await getClientAuthHeaders();
    const files = data.files;
    let encoded = null;
    if (files && files.length > 0) {
      encoded = await fileToBase64(files[0]);
    }
    const payload = { ai_config: data.ai_config, encoded };
    const response = await generateRubrics(payload, headers);

    const result = { ...response, encoded };
    console.log(result);
    setGenerated(result);
    if (typeof onSubmit === "function") {
      onSubmit();
    }
  });

  const messages = [
    "Crunching grades...",
    "Consulting the grading oracle...",
    "Applying fairness filters...",
    "Polishing rubrics...",
    "Formatting constructive feedback...",
    "Summoning teaching assistants (virtual)...",
    "Calibrating confidence scores...",
    "Searching for the perfect comment...",
    "Checking for academic flair...",
    "Optimising for clarity and kindness...",
  ];

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
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ai_config"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <div className="flex gap-3 flex-col">
                  <FormLabel>Select AI model</FormLabel>
                  <SelectModel disabled={isPending} {...field} />
                </div>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton
          isLoading={isPending}
          className="w-full"
          messages={messages}
        >
          Generate
        </LoadingButton>
        <Button
          onClick={onSubmit}
          className="w-full"
          variant="secondary"
          disabled={isPending}
        >
          Enter manually
        </Button>
      </form>
    </Form>
  );
}

export default MarkSchemeForm;
