import GearIllustration from "@/app/(components)/GearIllustration";
import { SupportedLocales, getDictionary } from "../dictionaries";

import guitar from "@/images/guitar.svg";
import microphone from "@/images/microphone.svg";
import {
  cymbales,
  instruments,
  microphones,
  others,
  snareDrums,
} from "@/app/gear";
import GearSection from "./GearSection";
import Contact from "@/app/(components)/Contact";
import Image from "next/image";
import type { Metadata } from "next";

interface PageParams {
  params: { lang: SupportedLocales };
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  return {
    title: params.lang === "fr" ? "Matos" : "Gear",
    description:
      params.lang === "fr"
        ? "Choisissez les micros et instruments que vous souhaitez utiliser pour votre session"
        : "Choose what mics and instruments you would like to use in your session",
    keywords: [
      "studio",
      "music",
      "mixing",
      "mastering",
      "recording",
      "rehearsals",
      "podcast",
      "drums",
      "piano",
      "percussions",
    ],
    creator: "Nguyinh",
    openGraph: {
      type: "website",
      url: "https://studio-maison-m.com",
      title: `${params.lang === "fr" ? "Matos" : "Gear"} | Studio Maison M`,
      description:
        params.lang === "fr"
          ? "Choisissez les micros et instruments que vous souhaitez utiliser pour votre session"
          : "Choose what mics and instruments you would like to use in your session",
      siteName: "Studio Maison M",
      images: [
        {
          url: "https://d1fuzbe05rn43r.cloudfront.net/logo.png",
        },
      ],
    },
  };
}

export default async function About({
  params: { lang },
}: Readonly<PageParams>) {
  const dict = await getDictionary(lang);

  return (
    <div className="bg-background-gear-1 flex flex-col items-center">
      <section className="flex flex-col items-center w-full py-8 relative overflow-hidden">
        <Image
          src={guitar}
          alt="Guitar illustration"
          className="absolute -right-10 md:bottom-10 md:top-auto -top-5 md:max-h-48 max-h-24 w-auto rotate-12"
        />

        <Image
          src={microphone}
          alt="Microphone illustration"
          className="absolute md:left-10 -left-10 -bottom-[1px] md:max-h-36 max-h-28"
        />

        <div className="max-w-xl flex flex-col items-center gap-2 z-10 px-16 md:px-8">
          <h2 className="font-chango text-5xl">{dict.gear.title}</h2>
          <p className="font-grotesk font-bold text-justify">
            {dict.gear.description}
          </p>
        </div>
      </section>

      <section className="bg-background-gear-divider w-full h-3 border-black border-t-2 border-b-[1px]" />

      <GearSection
        className="bg-background-gear-2"
        title={dict.gear.microphones}
        gearTitleColor="#5775AE"
        titleBackgroundColor="#C3D8FF"
        gearList={microphones}
      />

      <GearSection
        className="bg-background-gear-3"
        title={dict.gear.snareDrums}
        gearTitleColor="#6C79C1"
        titleBackgroundColor="#BCC6FF"
        gearList={snareDrums}
      />

      <GearSection
        className="bg-background-gear-4"
        title={dict.gear.cymbales}
        gearTitleColor="#7366BF"
        titleBackgroundColor="#C6BDFF"
        gearList={cymbales}
      />

      <GearSection
        className="bg-background-gear-5"
        title={dict.gear.instruments}
        gearTitleColor="#8E67C0"
        titleBackgroundColor="#DDC1FF"
        gearList={instruments}
      />

      <GearSection
        className="bg-background-gear-5"
        title={dict.gear.others}
        gearTitleColor="#A76FC1"
        titleBackgroundColor="#EECAFF"
        gearList={others}
      />

      <Contact
        lang={lang}
        className="bg-[#C0CDFB] py-8 border-t-2 border-black px-4"
      />
    </div>
  );
}
