import Image from "next/image";
import Link from "next/link";
import { SupportedLocales, getDictionary } from "./dictionaries";
import invertedLogo from "@/images/inverted-logo.svg";
import spotifyLogo from "@/images/spotify-logo.svg";
import instagramLogo from "@/images/instagram-logo.svg";
import tiktokLogo from "@/images/tiktok-logo.svg";
import LanguageToggle from "../(components)/LanguageToggle";
// import youtubeLogo from "@/images/youtube-logo.svg";

interface IProps {
  lang: SupportedLocales;
}

export default async function Footer({ lang }: IProps) {
  const dict = await getDictionary(lang);

  return (
    <section className="bg-black flex flex-col gap-8 py-8 pb-16 px-4 md:px-16 z-10 relative text-white">
      <div className="flex flex-row items-center justify-between">
        <Link href={`/${lang}/studio`}>
          <Image
            priority
            src={invertedLogo}
            alt="Studio Maison M logo"
            className="max-w-3xl"
          />
        </Link>

        <LanguageToggle currentLocale={lang} className="block sm:hidden" />
      </div>

      <div className="border-t-2 border-white w-full" />

      <nav className="font-grotesk font-extrabold flex flex-row w-full">
        <div className="flex flex-col basis-full">
          <Link href={`/${lang}/booking`}>{dict.navbar.booking}</Link>
          <Link href={`/${lang}/gear`}>{dict.navbar.gear}</Link>
          <Link href={`/${lang}/remote-recording`}>
            {dict.navbar.remoteRecording}
          </Link>
        </div>

        <div className="border-l-[1px] border-white basis-8" />

        <div className="flex flex-col basis-full">
          <Link href={`/${lang}/about`}>{dict.navbar.about}</Link>
        </div>
      </nav>

      <div className="font-grotesk font-bold flex flex-col gap-4">
        <p>{dict.footer.socialMediaFollow}</p>

        <div className="flex flex-row gap-8">
          <Link
            href="https://open.spotify.com/user/31g75cb3dssp5rb2l6jgabk2agse"
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
            href="https://www.instagram.com/studiomaisonm"
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
            href="https://www.tiktok.com/@studiomaisonm"
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

          {/* <Link
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
          </Link> */}
        </div>
      </div>
    </section>
  );
}
