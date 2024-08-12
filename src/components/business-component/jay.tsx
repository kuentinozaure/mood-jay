import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Jay() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    playAudio();
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <div className="flex content-center justify-center">
        <Image
          src={`/jay_background-free.png`}
          alt={`My name is Jay`}
          width="500"
          height="500"
        />
      </div>

      <audio ref={audioRef} controls className="hidden">
        <source src={"/bird_sound.mp3"} type="audio/mp3" />
      </audio>
    </div>
  );
}
