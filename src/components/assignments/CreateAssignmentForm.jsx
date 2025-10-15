"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { DateTimePicker } from "@/components/ui/datetime-picker";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import useAssignmentMutation from "@/hooks/useAssignmentMutation";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";
import { createAssignment } from "@/services/fetchApi";
import BlockLoader from "@/components/loader/BlockLoader";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/loader/LoadingButton";

function CreateAssignmentForm({generated = {}}) {
  const {mutate, isPending} = useAssignmentMutation(async (assignment) => {
    const headers = await getClientAuthHeaders();
    return await createAssignment(assignment, headers, form.setError);
  })

  const form = useForm({
    defaultValues: {
      due: generated.due ?? new Date(Date.now() + 24 * 60 * 60 * 1000),
      max_grade: generated.max_grade ?? "",
      passing_grade: generated.passing_grade ?? "",
      files: generated.files ?? null,
      title: generated.title ?? "",
      description: generated.description ?? "",
    }
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(mutate)} className="space-y-3 mt-2">
        <FormField
          control={form.control}
          name="due"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Due date</FormLabel>
              <FormControl>
                <DateTimePicker
                  {...field}
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Assignment title</FormLabel>
              <FormControl>
                <Input placeholder="" {...field}/>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Assignment description</FormLabel>
              <FormControl>
                <Textarea placeholder="" {...field}/>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-3 w-full">
          <FormField
            control={form.control}
            name="max_grade"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Max grade</FormLabel>
                <FormControl>
                  <Input type="number" {...field}/>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passing_grade"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Passing grade</FormLabel>
                <FormControl>
                  <Input type="number" {...field}/>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <LoadingButton isLoading={isPending}>
          Create
        </LoadingButton>
      </form>
    </Form>
  );
}

export default CreateAssignmentForm;