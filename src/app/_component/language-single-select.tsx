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

type LanguageProps = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

export function LanguageSelector({ language, setLanguage }: LanguageProps) {
  // const [selectedValue, setSelectedValue] = React.useState("en");
  return (
    <div className="flex gap-3 items-center">
      <Select onValueChange={(v) => setLanguage(v)} defaultValue="en">
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

      <p>{language}</p>
    </div>
  );
}
