import type { Metadata } from "next";
import Contact from "@/app/(components)/Contact";
import { SupportedLocales, getDictionary } from "../dictionaries";
import BookingInput from "./BookingInput";
import BookingStep from "./BookingStep";
import StepInstructions from "./StepInstructions";
import "@/styles/Calendar.css";

interface PageParams {
  params: { lang: SupportedLocales };
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  return {
    title: params.lang === "fr" ? "Réservation" : "Booking",
    description:
      params.lang === "fr"
        ? "Réserver votre prochaine session dans notre Studio dédié à l'expression créative"
        : "Book your next session in our Studio created exclusively to allow effortless expression of ideas.",
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
        params.lang === "fr" ? "Réservation" : "Booking"
      } | Studio Maison M`,
      description:
        params.lang === "fr"
          ? "Réserver votre prochaine session dans notre Studio dédié à l'expression créative"
          : "Book your next session in our Studio created exclusively to allow effortless expression of ideas.",
      siteName: "Studio Maison M",
      images: [
        {
          url: "https://d1fuzbe05rn43r.cloudfront.net/logo.png",
        },
      ],
    },
  };
}

export default async function Booking({
  params: { lang },
}: Readonly<PageParams>) {
  const dict = await getDictionary(lang);

  return (
    <div className="bg-background-booking flex flex-col items-center pt-8 gap-4 *:px-4 md:*:px-16">
      <h2 className="font-chango text-5xl px-2 text-center">
        {dict.booking.title}
      </h2>
      <p className="hidden md:block font-grotesk font-bold text-lg px-2 text-center">
        {dict.booking.description}
      </p>
      <p className="block md:hidden font-grotesk font-bold text-lg px-2 text-center">
        {dict.booking.mobileDescription}
      </p>

      <section className="flex md:flex-row flex-col w-full gap-12">
        <div className="basis-7/12 flex flex-col items-center">
          <BookingStep lang={lang} dict={dict} />

          <StepInstructions instructions={dict.booking.instructions} />
        </div>

        <div className="basis-5/12">
          <BookingInput lang={lang} dict={dict} />
        </div>
      </section>

      <Contact
        className="bg-[#FFFAEC] py-12 border-t-2 border-black"
        lang={lang}
      />
    </div>
  );
}
