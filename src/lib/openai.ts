import { encodingForModel } from "js-tiktoken";

const gpt4Enc = encodingForModel("gpt-4-0125-preview");

const gpt3Enc = encodingForModel("gpt-3.5-turbo-0125");

export function getGPT3TokenLength(text: string | undefined) {
  if (!text) {
    return 0;
  }
  return gpt3Enc.encode(text).length;
}

export function getGPT4TokenLength(text: string) {
  return gpt4Enc.encode(text).length;
}
