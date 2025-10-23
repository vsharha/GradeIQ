import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useModels from "@/hooks/useModels";
import { useState } from "react";

function SelectModel({ onChange, ...props }) {
  const {models, isLoading} = useModels();

  const [model, setModel] = useState(undefined);

  function handleChange(prefixedModel) {
    setModel(prefixedModel)

    if(isLoading || !prefixedModel) {
      return
    }

    const [provider, model] = prefixedModel.split(':')

    onChange?.({provider, model})
  }

  return (
    <Select {...props} value={model} onValueChange={handleChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select a model"/>
      </SelectTrigger>
      <SelectContent>
        {!isLoading && Object.entries(models).map(([provider, models])=>
          <SelectGroup key={provider}>
            <SelectLabel>{provider}</SelectLabel>
            {models.map((model)=>
              <SelectItem value={`${provider}:${model}`} key={model}>{model}</SelectItem>
            )}
          </SelectGroup>
        )}
      </SelectContent>
    </Select>
  );
}

export default SelectModel;