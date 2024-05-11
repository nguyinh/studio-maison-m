import { PropsWithChildren, createContext, useState } from "react";
import useSound from "use-sound";

export const AudioContext = createContext<{
  studioVideoAudio: {
    muted: boolean;
    toggleMute: Function;
  };
  deepCrunchy: {
    play: Function;
    stop: Function;
    isPlaying: boolean;
  };
  punchyRock: {
    play: Function;
    stop: Function;
    isPlaying: boolean;
  };
  vintageCrisp: {
    play: Function;
    stop: Function;
    isPlaying: boolean;
  };
  stopAllAudios: Function;
}>({
  studioVideoAudio: {
    muted: false,
    toggleMute: () => {},
  },
  deepCrunchy: {
    play: () => {},
    stop: () => {},
    isPlaying: false,
  },
  punchyRock: {
    play: () => {},
    stop: () => {},
    isPlaying: false,
  },
  vintageCrisp: {
    play: () => {},
    stop: () => {},
    isPlaying: false,
  },
  stopAllAudios: () => {},
});

export function AudioProvider({ children }: PropsWithChildren) {
  const [studioVideoMuted, setStudioVideoMuted] = useState(true);
  const [
    playDeepCrunchyMix,
    { stop: stopDeepCrunchyMix, isPlaying: isDeepCrunchyMixPlaying },
  ] = useSound("/wav/deep-crunchy-mix.wav");
  const [
    playPunchyRockMix,
    { stop: stopPunchyRockMix, isPlaying: isPunchyRockMixPlaying },
  ] = useSound("/wav/punchy-rock-mix.wav");
  const [
    playVintageCrispMix,
    { stop: stopVintageCrispMix, isPlaying: isVintageCrispMixPlaying },
  ] = useSound("/wav/vintage-crisp-mix.wav");

  const stopAllAudios = () => {
    stopDeepCrunchyMix();
    stopPunchyRockMix();
    stopVintageCrispMix();
    setStudioVideoMuted(true);
  };

  const toggleMute = () => {
    setStudioVideoMuted(!studioVideoMuted);
  };

  return (
    <AudioContext.Provider
      value={{
        studioVideoAudio: {
          muted: studioVideoMuted,
          toggleMute,
        },
        deepCrunchy: {
          play: playDeepCrunchyMix,
          stop: stopDeepCrunchyMix,
          isPlaying: isDeepCrunchyMixPlaying,
        },
        punchyRock: {
          play: playPunchyRockMix,
          stop: stopPunchyRockMix,
          isPlaying: isPunchyRockMixPlaying,
        },
        vintageCrisp: {
          play: playVintageCrispMix,
          stop: stopVintageCrispMix,
          isPlaying: isVintageCrispMixPlaying,
        },
        stopAllAudios,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}
