"use client";

import Image from "next/image";
import playButton from "@/images/play-button.svg";
import pauseButton from "@/images/pause-button.svg";
import { useContext, useMemo, useRef } from "react";
import { AudioContext } from "@/app/(contexts)/AudioProvider";

interface IProps {
  backgroundColor: `#${string}`;
  mix: "deepCrunchy" | "punchyRock" | "vintageCrisp";
}

export default function SoundPlayer({ backgroundColor, mix }: IProps) {
  const audioContext = useContext(AudioContext);

  const playerRef = useRef<HTMLDivElement>(null);

  const currentWidth = playerRef.current?.getBoundingClientRect().width ?? 0;

  const bars = useMemo(() => {
    const barNumber = Math.round(currentWidth / 8);

    return Array.from(Array(barNumber).keys()).map((bar, index) => (
      <div
        className="w-[2px] rounded-full bg-black"
        style={{ height: `${Math.max(Math.random() * 100, 20)}%` }}
        key={index}
      />
    ));
  }, [currentWidth]);

  const toggleSound = () => {
    audioContext.stopAllAudios();

    if (!audioContext[mix].isPlaying) {
      audioContext[mix].play();
    }
  };

  return (
    <div
      className="rounded-full p-2 drop-shadow-studio-sound-title border-2 border-black flex flex-row md:w-full w-fit"
      style={{
        backgroundColor,
      }}
    >
      {audioContext[mix].isPlaying ? (
        <Image
          src={pauseButton}
          alt="Pause sound button"
          height={50}
          onClick={toggleSound}
          className="cursor-pointer"
        />
      ) : (
        <Image
          src={playButton}
          alt="Play sound button"
          height={50}
          onClick={toggleSound}
          className="cursor-pointer"
        />
      )}

      <div
        ref={playerRef}
        className="md:w-full hidden md:flex flex-row items-center justify-between px-2 w-full"
      >
        {bars}
      </div>
    </div>
  );
}
