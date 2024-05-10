"use client";

import Image from "next/image";
import useSound from "use-sound";
import playButton from "@/images/play-button.svg";
import pauseButton from "@/images/pause-button.svg";
import { useMemo, useRef } from "react";

interface IProps {
  backgroundColor: `#${string}`;
}

export default function SoundPlayer({ backgroundColor }: IProps) {
  const [play, { stop, isPlaying }] = useSound("/mp3/i-see-money.mp3");
  const playerRef = useRef<HTMLDivElement>(null);

  const currentWidth = playerRef.current?.getBoundingClientRect().width ?? 0;

  const bars = useMemo(() => {
    const barNumber = Math.round(currentWidth / 8);

    return Array.from(Array(barNumber).keys()).map((bar, index) => (
      <div
        className="w-[2px] rounded-full bg-black"
        style={{ height: `${Math.max(Math.random() * 100, 10)}%` }}
        key={index}
      />
    ));
  }, [currentWidth]);

  const toggleSound = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
  };

  return (
    <div
      className="rounded-full p-2 drop-shadow-studio-sound-title border-2 border-black flex flex-row md:w-full w-fit"
      style={{
        backgroundColor,
      }}
    >
      {isPlaying ? (
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
