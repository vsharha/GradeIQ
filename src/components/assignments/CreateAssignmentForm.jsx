"use client";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DateTimePicker } from "@/components/ui/datetime-picker";

function CreateAssignmentForm({form}) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit()} className="space-y-3 mt-2">
        <FormField
          control={form.control}
          name="due"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Due date</FormLabel>
              <FormControl>
                <DateTimePicker value={field.value} onChange={field.onChange}/>
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
        <div className="flex gap-3">
          <FormField
            control={form.control}
            name="max_grade"
            render={({ field }) => (
              <FormItem>
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
              <FormItem>
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
      </form>
    </Form>
  );
}

export default CreateAssignmentForm;