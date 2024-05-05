import Image from "next/image";
import Link from "next/link";
import { SupportedLocales, getDictionary } from "./dictionaries";
import logo from "@/images/logo.svg";
import burgerMenu from "@/images/burger-menu.svg";
import LanguageToggle from "@/components/LanguageToggle";
import MobileMenuContent from "../(components)/MobileMenuContent";
import MenuBurger from "../(components)/MenuBurger";

interface IProps {
  lang: SupportedLocales;
}

export default async function Navbar({ lang }: IProps) {
  const dict = await getDictionary(lang);

  {
    /* TODO shrink on scroll */
  }
  return (
    <>
      <nav className="flex flex-col gap-2 bg-main-background border-b-black border-b-2 sticky z-10 sm:p-2 p-4">
        <div className="flex flex-row gap-14 justify-center relative">
          <Link href="/studio" className="flex justify-center">
            <Image
              priority
              src={logo}
              alt="Studio Maison M logo"
              className="sm:max-w-full max-w-[50%]"
            />
          </Link>

          <MenuBurger />
        </div>

        <div className="hidden sm:flex flex-row gap-14 justify-center font-grotesk font-extrabold items-center">
          <Link href="/booking">{dict.navbar.booking}</Link>
          <Link href="/gear">{dict.navbar.gear}</Link>
          <Link href="/remote-recording">{dict.navbar.remoteRecording}</Link>
          <Link href="/about">{dict.navbar.about}</Link>
          <LanguageToggle currentLocale={lang} />
        </div>
      </nav>

      <MobileMenuContent
        bookSession={dict.navbar.booking}
        gear={dict.navbar.gear}
        remoteRecording={dict.navbar.remoteRecording}
        about={dict.navbar.about}
      />
    </>
  );
}
