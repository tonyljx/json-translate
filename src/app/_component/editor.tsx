"use client";
import React, { useEffect } from "react";

import Editor, { useMonaco } from "@monaco-editor/react";
import { format } from "path";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatJSON } from "@/lib/json";

type Props = {
  jsonValue: string | undefined;
  handleJsonChange: (jsonString: string | undefined) => void;
  setJsonValue: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export default function CodeEditor({
  jsonValue,
  handleJsonChange,
  setJsonValue,
}: Props) {
  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      console.log("here is the monaco instance:", monaco);
    }
  }, [monaco]);

  return (
    <div>
      <Editor
        className="w-full"
        height="60vh"
        defaultLanguage="json"
        defaultValue={`{"hello": "world"}`}
        value={jsonValue}
        onChange={handleJsonChange}
        loading={<Loader2 className="animate-spin h-8 w-8" />}
        options={{
          formatOnPaste: true,
          formatOnType: true,
          minimap: {
            enabled: false,
          },
          scrollbar: {},
          automaticLayout: true,
        }}
      />
    </div>
  );
}
