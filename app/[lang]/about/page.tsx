import Image from "next/image";
import { SupportedLocales, getDictionary } from "../dictionaries";
import studioBackground from "@/images/about/studio-background.png";
import Contact from "@/app/(components)/Contact";
import FAQ from "@/app/(components)/FAQ";

interface PageParams {
  params: { lang: SupportedLocales };
}

export default async function About({
  params: { lang },
}: Readonly<PageParams>) {
  const dict = await getDictionary(lang);

  return (
    <div className="bg-background-about-1 flex flex-col gap-6 *:px-4 md:*:px-20">
      <section className="!px-0">
        <div className="relative">
          <Image
            priority
            src={studioBackground}
            alt="Studio background"
            className="max-h-[40dvh] overflow-hidden object-cover w-full"
          />
          <div className="hidden md:flex font-chango text-6xl absolute top-0 w-full justify-center">
            <h2>{dict.about.title}</h2>
          </div>
        </div>
      </section>

      <p className="font-grotesk font-medium">{dict.about.description}</p>

      <Contact lang={lang} hideTitle />

      <FAQ lang={lang} className="py-8" />
    </div>
  );
}
