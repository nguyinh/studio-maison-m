declare module "*.mp3" {
  const content: string;
  export default content;
}

declare module "*.wav" {
  const content: string;
  export default content;
}

declare module "use-sound" {
  import { Howl, Howler } from "howler";

  interface HookOptions {
    volume?: number;
    playbackRate?: number;
    interrupt?: boolean;
    soundEnabled?: boolean;
    sprite?: SpriteMap;
    onload?: () => void;
  }

  interface ExposedData {
    volume: number;
    playbackRate: number;
    interrupt: boolean;
    soundEnabled: boolean;
    sprite: { [key: string]: [number, number] };
    // You can add more properties as needed based on your use case
  }

  type PlayFunction = (options?: PlayOptions) => void;

  interface PlayOptions {
    id?: string;
    forceSoundEnabled?: boolean;
    playbackRate?: number;
    // You can add more properties as needed based on your use case
  }

  interface PlayExposedData extends ExposedData {
    sound: Howl | null;
    stop: (id?: string) => void;
    pause: (id?: string) => void;
    isPlaying: boolean;
    duration: number | null;
  }

  type UseSoundTuple = [PlayFunction, PlayExposedData];

  const useSound: (src: string, options?: HookOptions) => UseSoundTuple;

  export default useSound;
}
