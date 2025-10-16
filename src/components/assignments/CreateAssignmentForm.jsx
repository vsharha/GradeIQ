"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { DateTimePicker } from "@/components/ui/datetime-picker";
import { Input } from "@/components/ui/input";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import useAssignmentMutation from "@/hooks/useAssignmentMutation";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";
import { createAssignment } from "@/services/fetchApi";
import LoadingButton from "@/components/loader/LoadingButton";
import { Trash } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import RubricsFieldArray from "@/components/assignments/RubricsFieldArray";
import OptionsFieldArray from "@/components/assignments/OptionsFieldArray";

function CreateAssignmentForm({generated = {}, onSubmit}) {
  const defaultRubric = {
    criterion: "",
    marks: "",
  }

  const defaultMarkScheme = {
    number: 1,
    question: "",
    answer: "",
    options: [""],
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

  const {fields: markSchemeFields, append: addMarkScheme, remove: removeMarkScheme} = useFieldArray({
    control: form.control, name: "mark_scheme"
  })

  const [activeTab, setActiveTab] = useState(markSchemeFields[0]?.id)

  function addTab() {
    const id = markSchemeFields.length+1

    addMarkScheme({...defaultMarkScheme, id})
  }

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
        <Tabs defaultValue={form.watch(`mark_scheme.0.id`)} className="w-full flex flex-col gap-2 mt-5" value={activeTab} onValueChange={setActiveTab}>
          <h1>Questions</h1>
          <div className="flex gap-1">
            <div className="flex-1">
              <TabsList className="flex flex-wrap mb-3 w-full h-fit">
                {markSchemeFields.map((field, index) => (
                  <TabsTrigger value={field.id} key={field.id} className="min-w-[8%] w-[50%]">
                    {form.watch(`mark_scheme.${index}.number`)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <Button variant="secondary" onClick={(e)=>{e.preventDefault(); addTab()}}>
              <span className="flex items-center justify-center w-full h-full text-center">
                +
              </span>
            </Button>
          </div>
          {markSchemeFields.map((field, index) => (
            <TabsContent value={field.id} key={field.id}>
              <div className="flex flex-col gap-2">
                <FormItem className="flex-1">
                  <FormLabel>Number</FormLabel>
                  <div className="flex items-center gap-3">
                    <FormControl>
                      <Input {...form.register(`mark_scheme.${index}.number`)} className="w-1/4" />
                    </FormControl>
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeMarkScheme(index);
                        if (fields.length > 1) {
                          const prev = fields[Math.max(index - 1, 0)];
                          setActiveTab(prev.id);
                        }
                      }}
                    >
                      <Trash />
                    </Button>
                  </div>
                  <FormMessage />
                  <FormDescription />
                </FormItem>

                <FormItem className="flex-1">
                  <FormLabel>Question</FormLabel>
                  <FormControl>
                    <Textarea {...form.register(`mark_scheme.${index}.question`)} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
                <FormItem className="flex-1">
                  <FormLabel>Answer</FormLabel>
                  <FormControl>
                    <Textarea {...form.register(`mark_scheme.${index}.answer`)} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
                <FormItem className="flex-1 flex items-center">
                  <FormControl className="flex items-start">
                    <Input type="checkbox"
                           className="w-5" {...form.register(`mark_scheme.${index}.precise_answer`)} />
                  </FormControl>
                  <FormLabel>Answer is precise</FormLabel>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
                <OptionsFieldArray form={form} indx={index}/>
                <RubricsFieldArray form={form} index={index} defaultRubric={defaultRubric}/>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <LoadingButton isLoading={isPending} className="w-full">
          Create
        </LoadingButton>
      </form>
    </Form>
  );
}

export default CreateAssignmentForm;