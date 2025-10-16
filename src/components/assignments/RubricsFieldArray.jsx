import { useFieldArray } from "react-hook-form";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import StyledCollapsible from "@/components/custom/StyledCollapsible";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

function RubricsFieldArray({form, index, defaultRubric={}}) {
  const name = `mark_scheme.${index}.rubrics`

  const {
    fields: rubricFields,
    append: addRubric,
    remove: removeRubric,
  } = useFieldArray({
    control: form.control,
    name,
  });

  return (
    <StyledCollapsible title="Rubrics" defaultOpen={true}>
      {
        rubricFields.map((field, index) =>
          <div key={field.id} className="flex gap-3 items-center">
            <FormItem className="flex-1">
              <FormLabel>Criterion</FormLabel>
              <FormControl>
                <div className="flex gap-3 items-center">
                  <h1>{index + 1})</h1>
                  <Input {...form.register(`${name}.${index}.criterion`)}/>
                </div>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
            <FormItem className="w-25">
              <FormLabel>Marks</FormLabel>
              <FormControl>
                <div className="flex gap-2">
                  <Input {...form.register(`${name}.${index}.marks`)}/>
                  <Button variant="secondary" onClick={(e)=>{e.preventDefault();removeRubric(index)}}>
                    <Trash/>
                  </Button>
                </div>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          </div>
        )
      }
      <Button variant="secondary" className="w-fit" onClick={(e)=>{e.preventDefault();addRubric(defaultRubric)}}>
        + Add rubric
      </Button>
    </StyledCollapsible>
  )
  ;
}

export default RubricsFieldArray;