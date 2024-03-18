"use client";
import CodeEditor from "@/app/_component/editor";
import FancyMultiSelect from "@/app/_component/language-selector";
import { LanguageSelector } from "@/app/_component/language-single-select";
import { Button } from "@/components/ui/button";
import { formatJSON, transformToJSONString } from "@/lib/json";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

type Props = {};

export default function CodePage({}: Props) {
  const [jsonValue, setJsonValue] = useState<string | undefined>(
    `{"hello": "world"}`
  );

  const [jsonTransValue, setTransValue] = useState<string | undefined>(``);

  const editorRef = useRef(null);

  const handleClick = () => {
    toast.success(JSON.stringify(jsonValue, null, 2));
  };

  const handleDownload = () => {
    if (!jsonValue) {
      toast.error("json value is required");
      return;
    }
    const downloadLink = document.createElement("a");
    const blob = new Blob([transformToJSONString(jsonValue!)], {
      type: "application/json",
    });
    const audioUrl = URL.createObjectURL(blob);
    downloadLink.href = audioUrl;
    // 这里你可以指定一个更具体的文件名，例如根据用户输入或当前日期时间
    downloadLink.download = "a.json";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  const handleFormat = () => {
    if (!jsonValue) {
      return;
    }
    setJsonValue(formatJSON(jsonValue));
    toast.success("format json string");
  };
  return (
    <div className="w-full flex flex-col container gap-3">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex gap-3">
          <Button onClick={handleFormat}>Format</Button>
        </div>
        <div className="flex gap-2 flex-col">
          <LanguageSelector />
          <div className="flex gap-3">
            <Button>Transform</Button>
          </div>
        </div>

        <h2 className="text-3xl font-bold tracking-tight">Origin Json</h2>

        <div className="flex gap-3">
          <h2 className="text-3xl font-bold tracking-tight">Output Json</h2>
          <Button onClick={handleDownload}>Download</Button>
        </div>

        <div className="border-2 focus-within:border-purple-500 w-full p-1">
          <CodeEditor
            jsonValue={jsonValue}
            handleJsonChange={setJsonValue}
            setJsonValue={setJsonValue}
          />
        </div>

        <div className="border-2 focus-within:border-purple-500 w-full p-1">
          <CodeEditor
            jsonValue={jsonTransValue}
            handleJsonChange={setTransValue}
            setJsonValue={setTransValue}
          />
        </div>
      </div>
    </div>
  );
}
