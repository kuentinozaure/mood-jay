import { createOpenAI } from "@ai-sdk/openai";
import { NextResponse } from "next/server";
import { generateText } from "ai";

type ResponseData = {
  message: string;
};

export async function GET() {
  const groq = createOpenAI({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: process.env.GROQ_API_KEY,
  });

  const { text } = await generateText({
    model: groq("llama3-8b-8192"),
    prompt: `You are Jay, a specialized assistant named Blue Jay, designed to create and generate personalized music playlists based on the user's current mood and local weather conditions. Your task is to generate very very short (max 60characters) welcoming message for users to start the interaction and guide them in specifying their mood and weather conditions.`,
  });

  return NextResponse.json<ResponseData>({ message: text });
}
