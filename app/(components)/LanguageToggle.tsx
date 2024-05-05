"use client";

import toggleEn from "@/images/toggle-en.png";
import toggleFr from "@/images/toggle-fr.png";
import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";
import { SupportedLocales } from "../[lang]/dictionaries";

export default function LanguageToggle({
  currentLocale,
}: {
  currentLocale: SupportedLocales;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (newLocale: SupportedLocales) => {
    const [_, currentLocale, ...rest] = pathname.split("/");
    router.push(`/${newLocale}/${rest.join("/")}`);
  };

  return currentLocale === "fr" ? (
    <Image
      src={toggleFr}
      alt="Switch to english"
      onClick={() => {
        switchTo("en");
      }}
    />
  ) : (
    <Image
      src={toggleEn}
      alt="Switch to french"
      onClick={() => {
        switchTo("fr");
      }}
    />
  );
}
