import React from "react";
import * as React from "react";
type Props = {};
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          <SelectItem value="zh">Chinese</SelectItem>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="fr">French</SelectItem>
          <SelectItem value="ge">Germeny</SelectItem>
          <SelectItem value="as">Aus</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default function languageSelector({}: Props) {
  return <SelectDemo />;
}
