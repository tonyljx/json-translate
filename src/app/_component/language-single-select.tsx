import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LANGUAGES } from "@/constants/language";

export function LanguageSelector() {
  const [selectedValue, setSelectedValue] = React.useState("en");
  return (
    <div className="flex gap-3 items-center">
      <Select onValueChange={(v) => setSelectedValue(v)} defaultValue="en">
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Language</SelectLabel>
            {LANGUAGES.map((item) => (
              <SelectItem key={item.label} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <p>{selectedValue}</p>
    </div>
  );
}
