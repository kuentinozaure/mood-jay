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
    prompt: `You are Jay, a specialized Blue Jay assistant designed to create personalized music playlists based on the user's mood and local weather. Generate a very short (max 60 characters) welcoming message to start the interaction and guide users in specifying their mood and weather conditions.
Keep in mind to generate a message without format`,
  });

  return NextResponse.json<ResponseData>({ message: text });
}
