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
import { SiAnthropic, SiGoogle } from "react-icons/si";
import _ from "lodash";
import { Brain } from "lucide-react";

const providerIcons = {
  anthropic: <SiAnthropic />,
  google: <SiGoogle />,
};

function SelectModel({ onChange, ...props }) {
  const { models, isLoading } = useModels();

  const [model, setModel] = useState(undefined);

  function handleChange(prefixedModel) {
    setModel(prefixedModel);

    if (isLoading || !prefixedModel) {
      return;
    }

    const [provider, model] = prefixedModel.split(":");

    onChange?.({ provider, model });
  }

  return (
    <Select
      id="select-model"
      {...props}
      value={model}
      onValueChange={handleChange}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a model" />
      </SelectTrigger>
      <SelectContent>
        {!isLoading &&
          Object.entries(models).map(([provider, models]) => (
            <SelectGroup key={provider}>
              <SelectLabel className="flex gap-2 items-center">
                {_.capitalize(provider)}
              </SelectLabel>
              {models.map((model) => (
                <SelectItem value={`${provider}:${model}`} key={model}>
                  {providerIcons[provider] || <Brain />} {model}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
      </SelectContent>
    </Select>
  );
}

export default SelectModel;
