import { SupportedLocales, getDictionary } from "../dictionaries";

import deepCrunchy from "@/images/studio-sounds/deep-crunchy-sounds.jpg";
import classicRock from "@/images/studio-sounds/classic-rock-sounds.jpeg";
import vintageCrisp from "@/images/studio-sounds/vintage-crisp-sounds.jpeg";
import StudioSound from "./StudioSound";
import Contact from "@/app/(components)/Contact";
import FAQ from "@/app/(components)/FAQ";
import StudioVideo from "./StudioVideo";

interface PageParams {
  params: { lang: SupportedLocales };
}

export default async function Studio({
  params: { lang },
}: Readonly<PageParams>) {
  const dict = await getDictionary(lang);

  return (
    <div className="bg-background-studio md:*:px-16 *:px-4">
      <section className="bg-background-studio flex flex-col justify-center items-center font-chango !md:px-0 !px-0 md:h-[90dvh] h-[30dvh]">
        <StudioVideo />
      </section>

      <section className="bg-background-studio-sounds flex flex-col items-center md:px-16 gap-8 py-8">
        <h2 className="text-4xl font-chango underline text-center">
          {dict.studio.studioSounds}
        </h2>

        <div className="flex flex-row flex-wrap lg:*:basis-[30%] *:basis-[100%] gap-4 justify-between font-grotesk font-bold">
          <StudioSound
            illustrationSrc={deepCrunchy}
            mix="deepCrunchy"
            title={dict.studio.deepCrunchy.title}
            sounds={dict.studio.deepCrunchy.sounds}
            lang={lang}
            color="#D1A3FF"
          />

          <StudioSound
            illustrationSrc={classicRock}
            mix="punchyRock"
            title={dict.studio.classicRock.title}
            sounds={dict.studio.classicRock.sounds}
            lang={lang}
            color="#FF7A7A"
          />

          <StudioSound
            illustrationSrc={vintageCrisp}
            mix="vintageCrisp"
            title={dict.studio.vintageCrisp.title}
            sounds={dict.studio.vintageCrisp.sounds}
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
