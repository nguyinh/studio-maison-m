import { SupportedLocales, getDictionary } from "../[lang]/dictionaries";
import { cn } from "@/lib/utils";
interface IProps {
  lang: SupportedLocales;
  className?: string;
}

export default async function Contact({ lang, className }: IProps) {
  const dict = await getDictionary(lang);

  return (
    <div
      className={cn(
        "flex gap-4 w-full justify-center items-center flex-col",
        className
      )}
    >
      <h2 className="underline font-chango text-3xl">Contact</h2>

      <div className="flex gap-4 w-full justify-center flex-col md:flex-row">
        <button className="bg-[#75D6FF] text-xl font-grotesk font-extrabold border-solid border-2 border-black rounded-full px-8 py-2 drop-shadow-button">
          {dict.contact.callUs}
        </button>

        <button className="bg-[#479BFF] text-xl font-grotesk font-extrabold border-solid border-2 border-black rounded-full px-8 py-2 drop-shadow-button">
          {dict.contact.sendEmail}
        </button>
      </div>
    </div>
  );
}
