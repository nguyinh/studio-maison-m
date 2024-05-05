import Image from "next/image";
import { SupportedLocales, getDictionary } from "../dictionaries";
import studioBackground from "@/images/about/studio-background.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Contact from "@/app/(components)/Contact";

interface PageParams {
  params: { lang: SupportedLocales };
}

export default async function About({
  params: { lang },
}: Readonly<PageParams>) {
  const dict = await getDictionary(lang);

  return (
    <div className="bg-background-about-1 flex flex-col gap-6 *:px-4 md:*:px-20">
      <section className="!px-0">
        <div className="relative">
          <Image
            priority
            src={studioBackground}
            alt="Studio background"
            className="max-h-[40dvh] overflow-hidden object-cover"
          />
          <div className="hidden md:flex font-chango text-6xl absolute top-0 w-full justify-center">
            <h2>{dict.about.title}</h2>
          </div>
        </div>
      </section>

      <p className="font-grotesk font-medium">{dict.about.description}</p>

      <Contact lang={lang} hideTitle />

      <section className="bg-background-about-2 border-t-2 border-black flex flex-col gap-4 pt-4">
        <div className="flex justify-center">
          <h3 className="font-chango text-4xl underline">{dict.faq.title}</h3>
        </div>

        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="question-1" className="border-black">
              <AccordionTrigger className="font-outfit font-semibold">
                {dict.faq.question1}
              </AccordionTrigger>
              <AccordionContent className="font-outfit font-regular">
                {dict.faq.answer1}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="question-1" className="border-black">
              <AccordionTrigger className="font-outfit font-semibold">
                {dict.faq.question2}
              </AccordionTrigger>
              <AccordionContent className="font-outfit font-regular">
                {dict.faq.answer2}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="question-1" className="border-black">
              <AccordionTrigger className="font-outfit font-semibold">
                {dict.faq.question3}
              </AccordionTrigger>
              <AccordionContent className="font-outfit font-regular">
                {dict.faq.answer3}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
