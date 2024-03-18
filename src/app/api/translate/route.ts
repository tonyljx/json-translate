import { translate } from "@vitalets/google-translate-api";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const reqJson = await req.json();
  const reqText = reqJson?.text;
  console.log("req ", reqText);
  const { text } = await translate(reqText, { to: "en" });
  return NextResponse.json({ message: text }, { status: 200 });
}
