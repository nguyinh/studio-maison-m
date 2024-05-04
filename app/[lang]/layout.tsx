import Image from "next/image";
import Link from "next/link";
import { SupportedLocales, getDictionary } from "./dictionaries";
import logo from "@/images/logo.svg";
import burgerMenu from "@/images/burger-menu.svg";
import LanguageToggle from "@/components/LanguageToggle";
import MobileMenuContent from "../(components)/MobileMenuContent";
import invertedLogo from "@/images/inverted-logo.svg";
import spotifyLogo from "@/images/spotify-logo.svg";
import instagramLogo from "@/images/instagram-logo.svg";
import tiktokLogo from "@/images/tiktok-logo.svg";
import youtubeLogo from "@/images/youtube-logo.svg";

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
  const dict = await getDictionary(lang);

  return (
    <>
      {/* TODO shrink on scroll */}
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

          <div className="sm:hidden absolute right-2 h-full flex">
            <Image src={burgerMenu} alt="Menu burger" />
          </div>
        </div>

        <div className="hidden sm:flex flex-row gap-14 justify-center font-grotesk font-extrabold items-center">
          <Link href="/booking">Book a session</Link>
          <Link href="/gear">Gear</Link>
          <Link href="/remote-recording">Remote Recording</Link>
          <Link href="/about">About</Link>
          <LanguageToggle currentLocale={lang} />
        </div>
      </nav>

      <MobileMenuContent
        bookSession={dict.navbar.booking}
        gear={dict.navbar.gear}
        remoteRecording={dict.navbar.remoteRecording}
        about={dict.navbar.about}
      />

      {children}

      <section className="bg-black flex flex-col gap-8 py-8 pb-16 px-4 md:px-16 z-10 relative text-white">
        <Image
          priority
          src={invertedLogo}
          alt="Studio Maison M logo"
          className="max-w-3xl"
        />

        <div className="border-t-2 border-white w-full" />

        <nav className="font-grotesk font-extrabold flex flex-row w-full">
          <div className="flex flex-col basis-full">
            <Link href="/booking">{dict.navbar.booking}</Link>
            <Link href="/gear">{dict.navbar.gear}</Link>
            <Link href="/remote-recording">{dict.navbar.remoteRecording}</Link>
          </div>

          <div className="border-l-[1px] border-white basis-8" />

          <div className="flex flex-col basis-full">
            <Link href="/about">{dict.navbar.about}</Link>
            <Link href="/privacy-policy">TBT</Link>
          </div>
        </nav>

        <div className="font-grotesk font-bold flex flex-col gap-4">
          <p>{dict.footer.socialMediaFollow}</p>

          <div className="flex flex-row gap-8">
            <Link
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                priority
                src={spotifyLogo}
                alt="Spotify logo"
                className="w-lg"
              />
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                priority
                src={instagramLogo}
                alt="Instagram logo"
                className="w-lg"
              />
            </Link>

            <Link
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                priority
                src={tiktokLogo}
                alt="Tiktok logo"
                className="w-lg"
              />
            </Link>

            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                priority
                src={youtubeLogo}
                alt="Youtube logo"
                className="w-lg"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
