"use client";
import Jay from "@/components/business-component/jay";
import Moods from "@/components/business-component/moods";

export default function Page() {
  return (
    <div>
      <Moods />
      <Jay audioFile={"bird_sound_question.mp3"} />
    </div>
  );
}
