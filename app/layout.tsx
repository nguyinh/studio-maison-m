import type { Metadata } from "next";
import { Inter, Chango } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import logo from "@/images/logo.svg";
import LanguageToggle from "@/components/LanguageToggle";
import Image from "next/image";
import Link from "next/link";

const chango = Chango({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-chango",
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
  title: "Studio Maison M",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cabinetGrotesk.variable} ${chango.variable} font-sans`}
      >
        {/* TODO shrink on scroll */}
        <nav className="flex flex-col gap-2 p-2 bg-main-background border-b-black border-b-2">
          <div className="flex flex-row gap-14 justify-center">
            <Link href="/studio">
              <Image priority src={logo} alt="Studio Maison M logo" />
            </Link>
          </div>

          <div className="flex flex-row gap-14 justify-center font-grotesk font-extrabold items-center">
            <Link href="/booking">Book a session</Link>
            <Link href="/gear">Gear</Link>
            <Link href="/remote-recording">Remote Recording</Link>
            <Link href="/about">About</Link>
            <LanguageToggle />
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
