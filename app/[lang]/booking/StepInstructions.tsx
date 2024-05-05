"use client";

import { useContext } from "react";
import { BookingContext } from "@/app/(contexts)/BookingProvider";
import smiley from "@/images/smiley.svg";
import Image from "next/image";

interface IProps {
  instructions: Record<"day" | "hour" | "gear" | "contact", string>;
}

export default function StepInstructions({ instructions }: IProps) {
  const { step } = useContext(BookingContext);

  return (
    <div className="hidden md:flex font-grotesk font-bold flex-col items-center justify-center h-full text-2xl">
      <p>{step === "DAY_SELECTION" && instructions.day}</p>
      <p>{step === "HOUR_SELECTION" && instructions.hour}</p>
      {/* <p>{step === "GEAR_SELECTION" && instructions.gear}</p> */}
      <p>{step === "EMAIL_INPUT" && instructions.contact}</p>
      <p>
        {step === "BOOKING_SUCCESS" && (
          <Image src={smiley} alt="Smiley illustration" />
        )}
      </p>
    </div>
  );
}
