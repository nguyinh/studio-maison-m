import { cn } from "@/lib/utils";
import { SupportedLocales, getDictionary } from "../[lang]/dictionaries";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface IProps {
  lang: SupportedLocales;
  className?: string;
}

export default async function FAQ({ lang, className }: IProps) {
  const dict = await getDictionary(lang);

  return (
    <section
      className={cn(
        "bg-background-about-2 border-t-2 border-black flex flex-col gap-4",
        className
      )}
    >
      <div className="flex justify-center">
        <h3 className="font-chango text-4xl underline">{dict.faq.title}</h3>
      </div>

      <Accordion type="single" collapsible className="">
        <AccordionItem value="question-1" className="border-black">
          <AccordionTrigger className="font-outfit font-semibold text-start">
            {dict.faq.question1}
          </AccordionTrigger>
          <AccordionContent className="font-outfit font-regular">
            {dict.faq.answer1}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="question-1" className="border-black">
          <AccordionTrigger className="font-outfit font-semibold text-start">
            {dict.faq.question2}
          </AccordionTrigger>
          <AccordionContent className="font-outfit font-regular">
            {dict.faq.answer2}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="question-1" className="border-black">
          <AccordionTrigger className="font-outfit font-semibold text-start">
            {dict.faq.question3}
          </AccordionTrigger>
          <AccordionContent className="font-outfit font-regular">
            {dict.faq.answer3}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
