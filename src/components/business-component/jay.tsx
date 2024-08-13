import Image from "next/image";
import { useEffect, useRef } from "react";

export interface JayProps {
  audioFile?: string;
}
export default function Jay(props: JayProps) {
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
        <source
          src={props.audioFile ? props.audioFile : "/bird_sound.mp3"}
          type="audio/mp3"
        />
      </audio>
    </div>
  );
}
