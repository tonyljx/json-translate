"use client";
import CodeEditor from "@/app/_component/editor";
import FancyMultiSelect from "@/app/_component/language-selector";
import { LanguageSelector } from "@/app/_component/language-single-select";
import { Button } from "@/components/ui/button";
import { formatJSON, transformToJSONString } from "@/lib/json";
import { getGPT3TokenLength } from "@/lib/openai";
import { Loader2 } from "lucide-react";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

type Props = {};

export default function CodePage({}: Props) {
  const [jsonValue, setJsonValue] = useState<string | undefined>(
    `{"hello": "world"}`
  );
  // 计算token
  const gpt3TokenLength = getGPT3TokenLength(jsonValue);

  const [jsonTransValue, setTransValue] = useState<string | undefined>(``);

  const [language, setLanguage] = useState("en");

  const [loading, setLoading] = useState(false);

  const [apiKey, setApiKey] = useState("");

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

  /**
   * 翻译
   * @returns
   */
  const handleTranslate = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/translate-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: JSON.stringify(jsonValue),
          language: language,
        }),
      });
      if (!res.ok) {
        toast.error("error translate");
        return;
      }
      const { message } = await res.json();

      toast.success(message); // => 'Hello World! How are you?'
      setTransValue(message);
    } catch (error) {
      toast.error("error translate");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col  gap-3">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold tracking-tight">Origin Json</h2>

            <div className="flex gap-2 items-center">
              <Button
                className="self-start"
                variant="secondary"
                onClick={handleFormat}
              >
                Format
              </Button>
              <p>Token Usage: {gpt3TokenLength}</p>
            </div>
          </div>

          <div className="border-2 focus-within:border-blue-500 w-full p-1 rounded">
            <CodeEditor
              jsonValue={jsonValue}
              handleJsonChange={setJsonValue}
              setJsonValue={setJsonValue}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-blue-500 text-3xl font-bold tracking-tight ">
              Output Json
            </h2>
            {/* <Button onClick={handleDownload}>Download</Button> */}
            <div className="flex gap-2 items-center justify-between">
              <LanguageSelector language={language} setLanguage={setLanguage} />
              <div className="flex gap-3">
                <Button
                  onClick={handleTranslate}
                  className="flex justify-center gap-2"
                >
                  {loading && <Loader2 className="animate-spin h-4 w-4" />}
                  Translate
                </Button>
              </div>
            </div>
          </div>

          <div className="border-2 focus-within:border-blue-500 w-full p-1 rounded">
            <CodeEditor
              jsonValue={jsonTransValue}
              handleJsonChange={setTransValue}
              setJsonValue={setTransValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
