"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { useContext } from "react";
import { MenuContext } from "@/contexts/MenuContext";
import { cn } from "@/lib/utils";

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
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(MenuContext);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={cn(
        "font-grotesk overflow-hidden font-extrabold *:min-h-10 *:px-4 sm:hidden absolute w-full z-50 transition-[max-height] duration-500 ease-in-out",
        isMobileMenuOpen ? "max-h-[100%]" : "max-h-0"
      )}
      onClick={closeMenu}
    >
      <Link
        href="/booking"
        className="bg-background-booking flex justify-start items-center border-b-[1px] border-black"
      >
        {bookSession}
      </Link>
      {/* <Accordion
        type="single"
        collapsible
        className="bg-background-gear-1 border-b-[1px] border-black"
      >
        <AccordionItem value="gear">
          <AccordionTrigger
            className="font-grotesk font-extrabold"
            onClick={(event) => event.stopPropagation()}
          >
            {gear}
          </AccordionTrigger>
          <AccordionContent>
            <Link href="/gear">gear content TBD</Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}
      <Link
        href="/gear"
        className="bg-background-gear-1 flex justify-start items-center border-b-[1px] border-black"
      >
        {gear}
      </Link>
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
    </div>
  );
}
