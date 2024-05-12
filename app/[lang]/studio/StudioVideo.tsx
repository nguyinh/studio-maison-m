"use client";

import { useContext } from "react";
import { AudioContext } from "@/app/(contexts)/AudioProvider";

export default function StudioVideo() {
  const { studioVideoAudio, stopAllAudios } = useContext(AudioContext);

  const toggleMute = () => {
    stopAllAudios();
    studioVideoAudio.toggleMute();
  };

  return (
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
      <source src={process.env.STUDIO_VIDEO_URL} type="video/mp4" />
      Your browser does not support the video.
    </video>
  );
}
