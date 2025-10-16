import { useFieldArray } from "react-hook-form";
import { FormControl, FormDescription, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

function OptionsFieldArray({form, index}) {
  const name = `mark_scheme.${index}.options`

  const {
    fields: optionFields,
    append: addOption,
    remove: removeOption,
  } = useFieldArray({
    control: form.control,
    name,
  });

  return (
    <div className="w-full mb-2">
      <h1 className={"mb-2"}>Answer options</h1>
      {
        optionFields.map((option, index)=>
          <FormItem className="flex-1" key={option.id}>
            <FormControl>
              <div className="flex gap-3 items-center">
                <Input {...form.register(`${name}.${index}.value`)}/>
                <Button variant="secondary" onClick={(e)=>{e.preventDefault();removeOption(index)}}>
                  <Trash/>
                </Button>
              </div>
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        )
      }

      <Button variant="secondary" className="w-fit" onClick={(e)=>{e.preventDefault();addOption({value: ""})}}>
        + Add option
      </Button>
    </div>
  );
}

export default OptionsFieldArray;