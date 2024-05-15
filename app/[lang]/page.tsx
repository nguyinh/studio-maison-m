import { redirect } from "next/navigation";
import { SupportedLocales } from "./dictionaries";
import type { Metadata } from "next";

type Props = {
  params: { lang: SupportedLocales };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "Studio Maison M",
    description:
      params.lang === "fr"
        ? "Enregistrer vos chansons avec nos microphones sélectionnés avec soin et nos instruments de haute qualité. (Vous pouvez aussi utiliser le studio pour répéter ou bien créer du contenu pour les réseaux sociaux.)"
        : "Record your songs using our carefully selected microphones and our top-tier instruments. (You can also use the space for rehearsals or create social media content.)",
    metadataBase: new URL("https://studio-maison-m.com"),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en",
        "fr-FR": "/fr",
      },
    },
    openGraph: {
      images: "https://d1fuzbe05rn43r.cloudfront.net/logo.png",
    },
  };
}

export default function LangPage() {
  redirect("/studio");
}
