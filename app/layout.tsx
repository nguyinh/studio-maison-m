import type { Metadata } from "next";
import { Inter, Chango } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
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
        {children}
      </body>
    </html>
  );
}
