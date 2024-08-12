"use client";

import Image from "next/image";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [welcomingMessage, setWelcomingMessage] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleAudioEnded = () => {
    // Call the callback function when the audio ends
  };

  const fetchWelcomingMessage = async () => {
    const response = await fetch("/api/welcome");
    const result = await response.json();
    setWelcomingMessage(result.message);
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.autoplay = false;
      audioRef.current.play();
    }
  };

  useEffect(() => {
    fetchWelcomingMessage();
    playAudio();
  }, []);

  return (
    <main className="p-8 w-screen h-screen flex flex-col bg-[#98C1D9] gap-8">
      <div className="flex content-center justify-center ">
        <Card className="w-3/6">
          <CardHeader>
            <CardDescription>{welcomingMessage}</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="flex content-center justify-center">
        <Image
          src={`/jay_background-free.png`}
          alt={`My name is Jay`}
          width="500"
          height="500"
        />
      </div>

      <audio
        ref={audioRef}
        controls
        className="hidden"
        onEnded={handleAudioEnded}
      >
        <source src={"/bird_sound.mp3"} type="audio/mp3" />
      </audio>
    </main>
  );
}
