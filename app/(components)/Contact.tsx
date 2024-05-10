import { SupportedLocales, getDictionary } from "../[lang]/dictionaries";
import { cn } from "@/lib/utils";
interface IProps {
  lang: SupportedLocales;
  hideTitle?: boolean;
  className?: string;
}

export default async function Contact({ lang, className, hideTitle }: IProps) {
  const dict = await getDictionary(lang);

  return (
    <div
      className={cn(
        "flex gap-4 w-full justify-center items-center flex-col",
        className
      )}
    >
      {!hideTitle && (
        <h2 className="underline font-chango text-3xl">Contact</h2>
      )}

      <div className="flex gap-4 w-full justify-center items-center flex-col md:flex-row">
        <a href="tel:+33628624256" className="md:w-auto w-full">
          <button className="bg-[#75D6FF] text-xl text-center font-grotesk font-extrabold border-solid border-2 border-black rounded-full px-8 py-2 drop-shadow-button hover:brightness-95 active:drop-shadow-none active:translate-y-1 w-full">
            {dict.contact.callUs}
          </button>
        </a>
        <a href="mailto:studiomaisonm@gmail.com" className="md:w-auto w-full">
          <button className="bg-[#479BFF] text-xl text-center font-grotesk font-extrabold border-solid border-2 border-black rounded-full px-8 py-2 drop-shadow-button hover:brightness-95 active:drop-shadow-none active:translate-y-1 w-full">
            {dict.contact.sendEmail}
          </button>
        </a>
      </div>
    </div>
  );
}
