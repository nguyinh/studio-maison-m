"use client";

import { useContext } from "react";
import Image from "next/image";
import { AudioContext } from "@/app/(contexts)/AudioProvider";
import speakerOn from "@/images/speaker-on.svg";
import speakerOff from "@/images/speaker-off.svg";

export default function StudioVideo() {
  const { studioVideoAudio, stopAllAudios } = useContext(AudioContext);

  const toggleMute = () => {
    stopAllAudios();
    studioVideoAudio.toggleMute();
  };

  return (
    <div className="h-full w-full relative">
      <video
        width="1920"
        height="1080"
        autoPlay
        muted={studioVideoAudio.muted}
        loop
        playsInline
        preload="auto"
        className="object-cover h-full w-full"
        onClick={toggleMute}
      >
        <source
          src={process.env.NEXT_PUBLIC_STUDIO_VIDEO_URL}
          type="video/mp4"
        />
        Your browser does not support the video.
      </video>

      {studioVideoAudio.muted ? (
        <Image
          src={speakerOff}
          alt="Speaker off"
          className="absolute top-4 left-4 border-[3px] rounded-full border-black active:scale-90"
          onClick={toggleMute}
        />
      ) : (
        <Image
          src={speakerOn}
          alt="Speaker on"
          className="absolute top-4 left-4 border-[3px] rounded-full border-black active:scale-90"
          onClick={toggleMute}
        />
      )}
    </div>
  );
}
