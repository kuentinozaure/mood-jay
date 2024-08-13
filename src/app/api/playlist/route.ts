import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";
import { NextRequest, NextResponse } from "next/server";

type Albums = {
  title: string;
  creator: string;
  year: number;
  album: string;
};

export type Tracks = Array<Albums>;

type ResponseData = {
  response: Tracks;
};

export async function GET(req: NextRequest) {
  console.log(req.nextUrl.searchParams);
  const mood = req.nextUrl.searchParams.get("mood");

  const groq = createOpenAI({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: process.env.GROQ_API_KEY,
  });

  const { text } = await generateText({
    model: groq("llama3-8b-8192"),
    prompt: `Generate me a spotify playlist according to the mood i ve : ${mood} (dont take in charge the emoji). Respect this conditions :

- return me 20 element
- only reply with json avoid adding text, i want to get your response in json format
- in json format
- avoid generating the same music twice
- and the music to display must match this pattern


{
   title : title of the music
   creator: band or the creator of the song
   year: year of the song release
   album: albums the song is from
}`,
  });

  return NextResponse.json<ResponseData>({ response: JSON.parse(text) });
}
