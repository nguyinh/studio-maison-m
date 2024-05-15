import Image from "next/image";
import { SupportedLocales, getDictionary } from "../dictionaries";
import studioBackground from "@/images/about/studio-background.png";
import Contact from "@/app/(components)/Contact";
import FAQ from "@/app/(components)/FAQ";
import type { Metadata } from "next";

interface PageParams {
  params: { lang: SupportedLocales };
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  return {
    title: params.lang === "fr" ? "À propos" : "About",
    description:
      params.lang === "fr"
        ? "Studio Maison M a été fondé par nul-autre que le batteur Sami ROGER en 2021."
        : "Studio Maison M was founded by non-other than the drummer Sami ROGER in 2021.",
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
      title: `${params.lang === "fr" ? "À propos" : "About"} | Studio Maison M`,
      description:
        params.lang === "fr"
          ? "Studio Maison M a été fondé par nul-autre que le batteur Sami ROGER en 2021."
          : "Studio Maison M was founded by non-other than the drummer Sami ROGER in 2021.",
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
