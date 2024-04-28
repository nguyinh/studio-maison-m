import Image from "next/image";
import Link from "next/link";
import { SupportedLocales, getDictionary } from "./dictionaries";
import logo from "@/images/logo.svg";
import LanguageToggle from "@/components/LanguageToggle";

interface PageParams {
  params: { lang: SupportedLocales };
}

export default async function Layout({
  children,
  params: { lang },
}: Readonly<
  {
    children: React.ReactNode;
  } & PageParams
>) {
  return (
    <>
      {/* TODO shrink on scroll */}
      <nav className="flex flex-col gap-2 p-2 bg-main-background border-b-black border-b-2 sticky z-10">
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
          <LanguageToggle currentLocale={lang} />
        </div>
      </nav>

      {children}
    </>
  );
}
