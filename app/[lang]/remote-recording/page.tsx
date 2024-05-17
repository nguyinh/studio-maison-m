import type { Metadata } from "next";
import Image from "next/image";
import { SupportedLocales, getDictionary } from "../dictionaries";
import Contact from "@/app/(components)/Contact";

import computer from "@/images/computer.svg";
import arrow from "@/images/bouncing-arrow.svg";
import mousePath from "@/images/mouse-path.svg";
import mobileMousePath from "@/images/mobile-mouse-path.svg";

interface PageParams {
  params: { lang: SupportedLocales };
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  return {
    title: params.lang === "fr" ? "Session à distance" : "Remote recording",
    description:
      params.lang === "fr"
        ? "Demandez à ce que l'on enregistre des instruments pour vos chansons sans quitter chez vous"
        : "Request us to record instruments for your songs without leaving your home",
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
      title: `${
        params.lang === "fr" ? "Session à distance" : "Remote recording"
      } | Studio Maison M`,
      description:
        params.lang === "fr"
          ? "Demandez à ce que l'on enregistre des instruments pour vos chansons sans quitter chez vous"
          : "Request us to record instruments for your songs without leaving your home",
      siteName: "Studio Maison M",
      images: [
        {
          url: "https://d1fuzbe05rn43r.cloudfront.net/logo.png",
        },
      ],
    },
  };
}

export default async function RemoteRecording({
  params: { lang },
}: Readonly<PageParams>) {
  const dict = await getDictionary(lang);

  return (
    <div className="bg-background-remote-recording-1 flex flex-col items-center overflow-hidden *:px-4 md:*:px-0">
      <section className="w-full flex flex-col md:flex-row md:justify-between items-center relative md:py-14 pt-14 md:*:basis-1/3 z-20">
        <Image
          priority
          src={computer}
          alt="Computer illustration"
          className="hidden md:block max-w-[33%] min-w-[33%] translate-y-16"
        />

        <div className="max-w-sm flex flex-col items-center justify-center gap-4">
          <h2 className="font-chango md:text-5xl text-4xl text-center">
            {dict.remoteRecording.title}
          </h2>

          <p className="font-grotesk font-medium text-md text-center hidden md:block">
            <strong>{dict.remoteRecording.description1}</strong>
            {dict.remoteRecording.description2}
            <strong>{dict.remoteRecording.description3}</strong>
            {dict.remoteRecording.description4}
            <strong>{dict.remoteRecording.description5}</strong>
          </p>

          <p className="font-grotesk font-medium text-md text-center block md:hidden">
            {dict.remoteRecording.mobileDescription1}
            <strong>{dict.remoteRecording.mobileDescription2}</strong>
            {dict.remoteRecording.mobileDescription3}
            <strong>{dict.remoteRecording.mobileDescription4}</strong>
          </p>
        </div>

        <div className="hidden md:block" />

        <Image
          priority
          src={computer}
          alt="Computer illustration"
          className="block md:hidden w-1/2 -ml-4 translate-y-1 self-start pt-3"
        />
      </section>

      <section className="bg-background-remote-recording-2 w-full flex flex-col items-center justify-center gap-2 border-t-2 border-black md:pt-20 pb-12 py-4 relative 10">
        <Image
          priority
          src={mousePath}
          alt="Mouse path"
          className="hidden md:block absolute max-w-[80%]"
        />

        <Image
          priority
          src={mobileMousePath}
          alt="Mouse path"
          className="block md:hidden absolute w-full mr-8"
        />

        <Image
          priority
          src={arrow}
          alt="Arrow illustration"
          className="hidden md:block absolute w-1/12 bottom-36 animate-bounce"
        />

        <Contact lang={lang} className="z-10" />
      </section>
    </div>
  );
}
