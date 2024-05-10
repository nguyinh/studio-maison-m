import Image, { StaticImageData } from "next/image";
import SoundPlayer from "./SoundPlayer";
import { SupportedLocales, getDictionary } from "../dictionaries";

interface IProps {
  illustrationSrc: StaticImageData;
  title: string;
  sounds: string[];
  lang: SupportedLocales;
  color: `#${string}`;
}

export default async function StudioSound({
  illustrationSrc,
  title,
  sounds,
  lang,
  color,
}: IProps) {
  const dict = await getDictionary(lang);

  return (
    <div className="bg-white border-black border-2 relative flex flex-row ml-4 mt-8 w-1/2">
      <div className="relative lg:min-w-56">
        <Image
          src={illustrationSrc}
          alt="Vintage tight sounds illutration"
          className="border-black border-2 -translate-x-4 -translate-y-4 sm:min-w-56"
          width={500}
        />

        <div
          className="border-2 font-grotesk font-extrabold border-black drop-shadow-studio-sound-title absolute -top-8 px-4 py-2"
          style={{ backgroundColor: color }}
        >
          {title}
        </div>
      </div>

      <div className="py-8 pl-2 pr-4 flex flex-col md:items-stretch items-center font-extrabold gap-4 w-full">
        <ul className="list-disc">
          {sounds.map((sound) => (
            <li key={sound} className="ml-5">
              {sound}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-2">
          <p className="hidden md:block">{dict.studio.soundExample}</p>

          <SoundPlayer backgroundColor={color} />
        </div>
      </div>
    </div>
  );
}
