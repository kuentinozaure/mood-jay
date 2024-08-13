"use client";
import Jay from "@/components/business-component/jay";
import Moods from "@/components/business-component/moods";
import { Mood } from "@/constants/mood";
import { useState } from "react";
import { Tracks } from "../api/playlist/route";

export default function Page() {
  const [generatedPlaylist, setGeneratedPlaylist] = useState<Tracks>([]);
  const moodSelected = (mood: Mood) => {
    console.log(mood);
    fetchPlaylist(mood.title);
  };

  const fetchPlaylist = async (mood: string) => {
    const response = await fetch(`/api/playlist?mood=${mood}`);
    const result = await response.json();
    console.log(result.response.tracks);
    setGeneratedPlaylist(result.response.tracks);
  };

  return (
    <div>
      <Moods moodSelected={(mood) => moodSelected(mood)} />
      <Jay audioFile={"bird_sound_question.mp3"} />
      {generatedPlaylist.length > 0 && (
        <div>
          <h1>Generated Playlist</h1>
          <ul>
            {generatedPlaylist.map((track) => (
              <li key={track.title}>{track.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
