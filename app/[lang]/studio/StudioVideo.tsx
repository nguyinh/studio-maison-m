"use client";

import { useContext, useState } from "react";
import { MenuContext } from "@/contexts/MenuContext";

export default function StudioVideo() {
  // const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(MenuContext);

  // const closeMenu = () => {
  //   setIsMobileMenuOpen(false);
  // };

  const [muted, setMuted] = useState(true);

  return (
    <video
      width="1920"
      height="1080"
      autoPlay
      muted={muted}
      loop
      playsInline
      preload="auto"
      className="object-cover h-full w-full"
      onClick={() => setMuted(!muted)}
    >
      <source src="/videos/studio-video-compressed.mp4" type="video/mp4" />
      Your browser does not support the video.
    </video>
  );
}
