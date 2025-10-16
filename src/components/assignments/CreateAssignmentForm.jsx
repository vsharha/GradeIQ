"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { DateTimePicker } from "@/components/ui/datetime-picker";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import useAssignmentMutation from "@/hooks/useAssignmentMutation";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";
import { createAssignment } from "@/services/fetchApi";
import LoadingButton from "@/components/loader/LoadingButton";
import MarkSchemeFieldArray from "@/components/assignments/MarkSchemeFieldArray";

function CreateAssignmentForm({generated = {}, onSubmit}) {
  const defaultRubric = {
    criterion: "",
    marks: "",
  }

  const defaultMarkScheme = {
    number: 1,
    question: "",
    answer: "",
    precise_answer: false,
    rubrics: [
      defaultRubric
    ]
  }

  const form = useForm({
    defaultValues: {
      due: generated.due ?? new Date(Date.now() + 24 * 60 * 60 * 1000),
      max_grade: generated.max_grade ?? 100,
      passing_grade: generated.passing_grade ?? 40,
      files: generated.files ?? null,
      title: generated.title ?? "",
      description: generated.description ?? "",
      encoded: generated.encoded??"",
      mark_scheme: generated.mark_scheme ?? [
        defaultMarkScheme
      ]
    }
  })

  const {mutate, isPending} = useAssignmentMutation(async (assignment) => {
    const headers = await getClientAuthHeaders();
    const result = await createAssignment(assignment, headers, form.setError);
    if(typeof onSubmit === "function") {
      onSubmit();
    }
    return result;
  })


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(mutate)} className="space-y-3 mt-5">
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
        <MarkSchemeFieldArray form={form} defaultMarkScheme={defaultMarkScheme} defaultRubric={defaultRubric}/>
        <LoadingButton isLoading={isPending} className="w-full">
          Create
        </LoadingButton>
      </form>
    </Form>
  );
}

export default CreateAssignmentForm;