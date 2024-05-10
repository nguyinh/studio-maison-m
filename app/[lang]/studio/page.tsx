import { SupportedLocales, getDictionary } from "../dictionaries";

import vintageTight from "@/images/studio-sounds/vintage-tight-sounds.jpg";
import classicRock from "@/images/studio-sounds/classic-rock-sounds.jpeg";
import jazzyVibes from "@/images/studio-sounds/jazzy-vibes-sounds.jpeg";
import StudioSound from "./StudioSound";
import Contact from "@/app/(components)/Contact";
import FAQ from "@/app/(components)/FAQ";

interface PageParams {
  params: { lang: SupportedLocales };
}

export default async function Studio({
  params: { lang },
}: Readonly<PageParams>) {
  const dict = await getDictionary(lang);

  return (
    <div className="bg-background-studio md:*:px-16 *:px-4">
      <section className="bg-background-studio h-[80dvh] flex flex-col justify-center items-center font-chango md:px-0">
        Askip yaura une vidéo ici
      </section>

      <section className="bg-background-studio-sounds flex flex-col items-center md:px-16 gap-8 py-8">
        <h2 className="text-4xl font-chango underline text-center">
          {dict.studio.studioSounds}
        </h2>

        <div className="flex flex-row flex-wrap lg:*:basis-[45%] *:basis-[100%] gap-4 justify-between font-grotesk font-bold">
          <StudioSound
            illustrationSrc={vintageTight}
            title={dict.studio.vintageTight.title}
            sounds={dict.studio.vintageTight.sounds}
            lang={lang}
            color="#D1A3FF"
          />

          <StudioSound
            illustrationSrc={classicRock}
            title={dict.studio.classicRock.title}
            sounds={dict.studio.classicRock.sounds}
            lang={lang}
            color="#FF7A7A"
          />

          <StudioSound
            illustrationSrc={vintageTight}
            title={dict.studio.modernTones.title}
            sounds={dict.studio.modernTones.sounds}
            lang={lang}
            color="#B9C9FF"
          />

          <StudioSound
            illustrationSrc={jazzyVibes}
            title={dict.studio.jazzyVibes.title}
            sounds={dict.studio.jazzyVibes.sounds}
            lang={lang}
            color="#FFE872"
          />
        </div>
      </section>

      <Contact lang={lang} className="border-t-2 border-black py-8" />

      <FAQ lang={lang} className="py-8" />
    </div>
  );
}
