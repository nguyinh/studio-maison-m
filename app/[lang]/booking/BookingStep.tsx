"use client";

import calandarIcon from "@/images/calandar-icon.svg";
import clockIcon from "@/images/clock-icon.svg";
// import microphoneIcon from "@/images/microphone-icon.svg";
import emailIcon from "@/images/email-icon.svg";
import stepArrowIcon from "@/images/step-arrow-icon.svg";
import Image from "next/image";
import { useContext } from "react";
import { BookingContext } from "@/app/(contexts)/BookingProvider";
import ReactConfetti from "react-confetti";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/fr";
import { SupportedLocales, getDictionary } from "../dictionaries";

const DAY_COLOR = "#F7F987";
const HOUR_COLOR = "#9AF1C7";
// const GEAR_COLOR = "#8BB3FF";
const CONTACT_COLOR = "#CFB2FF";

interface IProps {
  lang: SupportedLocales;
  dict: Awaited<ReturnType<typeof getDictionary>>;
}

export default function BookingStep({ lang, dict }: IProps) {
  const { step, date, hour, contact, setStep, setDate } =
    useContext(BookingContext);

  const isAfterContactStep = step === "BOOKING_SUCCESS";
  // const isAfterGearStep = isAfterContactStep || ...;
  const isAfterHourStep = isAfterContactStep || step === "EMAIL_INPUT";
  const isAfterDateStep = isAfterHourStep || step === "HOUR_SELECTION";

  if (typeof window === "undefined") {
    return null;
  }

  const { innerWidth: width, innerHeight: height } = window;

  return (
    <div className="border-black border-2 bg-white flex flex-row justify-around rounded-[16px] font-grotesk font-extrabold overflow-hidden md:w-full w-[350px] text-nowrap">
      {step === "BOOKING_SUCCESS" ? (
        <div className="flex flex-row bg-black text-white items-center justify-center px-4 py-4 gap-1 w-full">
          <p>{dict.booking.bookingCompleteStep.message}</p>

          <ReactConfetti width={width} height={height} gravity={0.37} />
        </div>
      ) : (
        <>
          <div
            className="flex flex-row items-center justify-center px-4 py-2 gap-1 w-full"
            style={{
              backgroundColor: isAfterDateStep ? DAY_COLOR : "transparent",
            }}
            onClick={() => setStep("DAY_SELECTION")}
          >
            <Image src={calandarIcon} alt="Calendar icon" width={30} />
            <span>
              {step === "DAY_SELECTION"
                ? dict.booking.day
                : dayjs(date).locale(lang).format("D MMMM") ?? ""}
            </span>
          </div>

          {isAfterDateStep ? (
            <div
              style={{
                borderRight: "2px solid black",
              }}
            />
          ) : (
            <Image src={stepArrowIcon} alt="Arrow icon" width={30} />
          )}

          <div
            className="flex flex-row items-center justify-center px-4 py-2 gap-1 w-full"
            style={{
              backgroundColor: isAfterHourStep ? HOUR_COLOR : "transparent",
            }}
            onClick={() => {
              setStep("HOUR_SELECTION");
              setDate(new Date());
            }}
          >
            <Image src={clockIcon} alt="Clock icon" />
            {step === "HOUR_SELECTION"
              ? dict.booking.time
              : hour === "MORNING"
              ? dict.booking.morning
              : hour === "AFTERNOON"
              ? dict.booking.afternoon
              : ""}
          </div>

          {/* <div>
          <Image src={microphoneIcon} alt="Microphone icon" />
        </div> */}

          {isAfterHourStep ? (
            <div
              style={{
                borderRight: "2px solid black",
              }}
            />
          ) : (
            <Image src={stepArrowIcon} alt="Arrow icon" width={30} />
          )}

          <div
            className="flex flex-row items-center justify-center px-4 py-2 gap-1 w-full"
            style={{
              backgroundColor: isAfterContactStep
                ? CONTACT_COLOR
                : "transparent",
            }}
            onClick={() => setStep("EMAIL_INPUT")}
          >
            <Image src={emailIcon} alt="Email icon" />
            <span> {step === "EMAIL_INPUT" ? dict.booking.finish : ""}</span>
          </div>
        </>
      )}
    </div>
  );
}
