import Image from "next/image";
import { SupportedLocales, getDictionary } from "../dictionaries";
import Contact from "@/app/(components)/Contact";

import computer from "@/images/computer.svg";

interface PageParams {
  params: { lang: SupportedLocales };
}

export default async function RemoteRecording({
  params: { lang },
}: Readonly<PageParams>) {
  const dict = await getDictionary(lang);

  return (
    <div className="bg-background-remote-recording-1 flex flex-col items-center *:px-4 md:*:px-20">
      <section className="w-full flex flex-col items-center justify-center relative md:py-14 pt-14">
        <Image
          priority
          src={computer}
          alt="Computer illustration"
          className="hidden md:block absolute left-0 md:-bottom-2 -bottom-1 md:max-h-60 max-h-28 w-auto"
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

        <Image
          priority
          src={computer}
          alt="Computer illustration"
          className="block md:hidden w-1/2 -ml-4 translate-y-1 self-start pt-3"
        />
      </section>

      <section className="bg-background-remote-recording-2 w-full flex flex-col items-center justify-center gap-2 border-t-2 border-black pt-4">
        <Contact lang={lang} />
      </section>
    </div>
  );
}
