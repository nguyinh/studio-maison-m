import { redirect } from "next/navigation";
import { SupportedLocales } from "./dictionaries";

type Props = {
  params: { lang: SupportedLocales };
};

export async function generateMetadata({ params }: Props) {
  return {
    title: "Studio Maison M",
    description: params.lang === "en" ? "english" : "french",
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
