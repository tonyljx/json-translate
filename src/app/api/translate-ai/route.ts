import { NextResponse } from "next/server";
import OpenAI from "openai";
const openai = new OpenAI({
  baseURL: process.env.OPENAI_BASE_URL,
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const reqJson = await req.json();
  const reqText = reqJson?.text;
  const language = reqJson?.language;

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant designed to output JSON.",
      },
      {
        role: "system",
        content:
          "You are a language expert and help me translate the json object value",
      },
      {
        role: "user",
        content: `Help me translate the json object value, keep the json object key the same, just change the value to ${language} language`,
      },
      {
        role: "user",
        content: `Here is the json object ${reqText}`,
      },
    ],
    model: "gpt-3.5-turbo-0125",
    response_format: { type: "json_object" },
  });

  const res = completion.choices[0].message.content;

  return NextResponse.json({ message: res }, { status: 200 });
}
