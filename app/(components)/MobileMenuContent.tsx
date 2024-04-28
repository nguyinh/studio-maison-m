"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

interface IProps {
  bookSession: string;
  gear: string;
  remoteRecording: string;
  about: string;
}

export default function MobileMenuContent({
  bookSession,
  gear,
  remoteRecording,
  about,
}: IProps) {
  return (
    <div className="font-grotesk font-extrabold *:min-h-10 *:px-4 sm:hidden">
      <Link
        href="/booking"
        className="bg-booking flex justify-start items-center border-b-[1px] border-black"
      >
        {bookSession}
      </Link>
      <Accordion
        type="single"
        collapsible
        className="bg-background-gear-1 border-b-[1px] border-black"
      >
        <AccordionItem value="gear">
          <AccordionTrigger className="font-grotesk font-extrabold">
            {gear}
          </AccordionTrigger>
          <AccordionContent>
            <Link href="/gear">gear content TBD</Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Link
        href="/remote-recording"
        className="bg-background-remote-recording-1 flex justify-start items-center border-b-[1px] border-black"
      >
        {remoteRecording}
      </Link>
      <Link
        href="/about"
        className="bg-background-about-1 flex justify-start items-center border-b-[1px] border-black"
      >
        {about}
      </Link>
      TODO: Menu à relier au burger icon
    </div>
  );
}
