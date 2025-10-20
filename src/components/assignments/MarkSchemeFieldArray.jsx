import { useFieldArray } from "react-hook-form";
import { useState } from "react";
import RubricsFieldArray from "@/components/assignments/RubricsFieldArray";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import OptionsFieldArray from "@/components/assignments/OptionsFieldArray";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import Checkbox from "@/components/custom/Checkbox";

function MarkSchemeFieldArray({form, defaultMarkScheme, defaultRubric}) {

  const {fields: markSchemeFields, append: addMarkScheme, remove: removeMarkScheme} = useFieldArray({
    control: form.control, name: "mark_scheme"
  })

  const [activeTab, setActiveTab] = useState(markSchemeFields[0]?.id)

  function addTab() {
    const id = markSchemeFields.length+1

    addMarkScheme({...defaultMarkScheme, id})
  }

  return (
    <Tabs defaultValue={form.watch(`mark_scheme.0.id`)} className="w-full flex flex-col gap-2 mt-5" value={activeTab} onValueChange={setActiveTab}>
      <h1>Questions</h1>
      <div className="flex gap-1">
        <div className="flex-1">
          <TabsList className="flex flex-wrap mb-3 w-full h-fit">
            {markSchemeFields.map((field, index) => (
              <TabsTrigger value={field.id} key={field.id} className="min-w-[12%] w-[50%] max-w-[calc(100%*1/3)]">
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
                  <Input {...form.register(`mark_scheme.${index}.number`, {
                    setValueAs: v => (v == null ? "" : String(v))
                  })} className="w-1/4" />
                </FormControl>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeMarkScheme(index);
                    if (markSchemeFields.length > 1) {
                      const prev = markSchemeFields[Math.max(index - 1, 0)];
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
                <Checkbox {...form.register(`mark_scheme.${index}.precise_answer`)} />
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
  );
}

export default MarkSchemeFieldArray;