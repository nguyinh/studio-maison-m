import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Chango, Outfit } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "@/contexts/Providers";
import "./globals.css";

const chango = Chango({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-chango",
});
const outfit = Outfit({
  weight: ["400", "800", "900"],
  subsets: ["latin"],
  variable: "--font-outfit",
});
const cabinetGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/CabinetGrotesk/CabinetGrotesk-Extrabold.woff2",
      weight: "800",
      style: "extrabold",
    },
    {
      path: "../public/fonts/CabinetGrotesk/CabinetGrotesk-Bold.woff2",
      weight: "600",
      style: "bold",
    },
    {
      path: "../public/fonts/CabinetGrotesk/CabinetGrotesk-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/fonts/CabinetGrotesk/CabinetGrotesk-Regular.woff2",
      weight: "400",
      style: "regular",
    },
  ],
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Studio Maison M",
    default: "Studio Maison M",
  },
  description:
    "Record your songs using our carefully selected microphones and our top-tier instruments. (You can also use the space for rehearsals or create social media content.)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cabinetGrotesk.variable} ${outfit.variable} ${chango.variable} font-sans`}
      >
        <Analytics />

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
