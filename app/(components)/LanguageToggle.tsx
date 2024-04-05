"use client";

import { useState } from "react";

import toggleEn from "@/images/toggle-en.png";
import toggleFr from "@/images/toggle-fr.png";
import Image from "next/image";

export default function LanguageToggle() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");

  return language === "fr" ? (
    <Image
      src={toggleEn}
      alt="Switch to english"
      onClick={() => setLanguage("en")}
    />
  ) : (
    <Image
      src={toggleFr}
      alt="Switch to french"
      onClick={() => setLanguage("fr")}
    />
  );
}
