"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Dropzone } from "@/components/ui/shadcn-io/dropzone";
import { UploadIcon } from "lucide-react";

function CreateAssignmentForm() {
  const form = useForm()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit()} className="space-y-5">
        <div>
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
                    value={field.value}
                  >
                    <h2 className="font-bold text-lg">Upload rubric</h2>
                    <UploadIcon/>
                    <p className="font-normal">Drag & drop files here, or click to select files</p>
                    <p className="text-muted-foreground font-normal">Supported filetypes: pdf</p>
                  </Dropzone>
                </FormControl>
                <FormDescription>

                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="assignment_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Assignment name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field}/>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}

export default CreateAssignmentForm;