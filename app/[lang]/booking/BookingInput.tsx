"use client";

import { ChangeEvent, useContext, useId } from "react";
import { BookingContext, Hour } from "@/app/(contexts)/BookingProvider";
import Calendar from "react-calendar";
import { SupportedLocales, getDictionary } from "../dictionaries";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/fr";

interface IProps {
  lang: SupportedLocales;
  dict: Awaited<ReturnType<typeof getDictionary>>;
}

export default function BookingInput({ lang, dict }: IProps) {
  const { step, contact, date, setDate, setStep, setHour, setContact } =
    useContext(BookingContext);

  const onDateSelection = (selectedDate: unknown) => {
    setDate(selectedDate as Date);
    setStep("HOUR_SELECTION");
  };

  const onHourSelection = (selectedHour: Hour) => {
    setHour(selectedHour);
    setStep("EMAIL_INPUT");
  };

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContact(event.target.value ?? null);
  };

  const onContactSubmit = async () => {
    // TODO: test if email is valid
    const response = await fetch("/emails", {
      method: "POST",
      body: JSON.stringify({ email: contact }),
    });

    console.log(response);

    // setStep("BOOKING_SUCCESS");
  };

  const emailInputId = useId();

  return (
    <div className="font-grotesk font-bold flex flex-row items-center justify-center">
      <div>
        {step === "DAY_SELECTION" && (
          <Calendar
            onChange={onDateSelection}
            locale={lang}
            minDate={new Date()}
          />
        )}
      </div>

      {step === "HOUR_SELECTION" && (
        <div className="w-[350px] h-[323px] bg-white border-black border-2 rounded-[20px] flex flex-col gap-2 justify-center p-4">
          <h4 className="font-grotesk text-2xl font-extrabold text-center">
            {dict.booking.hourStep.instruction}
          </h4>

          <div className="flex flex-row justify-center gap-4 h-full">
            <button
              className="bg-[#EEF3F1] border-black border-2 rounded-md flex-1 drop-shadow-button hover:brightness-95 active:drop-shadow-none active:translate-y-1"
              onClick={() => onHourSelection("MORNING")}
            >
              <p>{dict.booking.hourStep.morningBookingType}</p>
              <p>8h00-13h00</p>
            </button>

            <button
              className="bg-[#EEF3F1] border-black border-2 rounded-md flex-1 drop-shadow-button hover:brightness-95 active:drop-shadow-none active:translate-y-1"
              onClick={() => onHourSelection("AFTERNOON")}
            >
              <p>{dict.booking.hourStep.afternoonBookingType}</p>
              <p>15h00-20h00</p>
            </button>
          </div>
        </div>
      )}

      {/* <p>{step === "GEAR_SELECTION" && instructions.gear}</p> */}

      {step === "EMAIL_INPUT" && (
        <div className="w-[350px] h-[323px] bg-white border-black border-2 rounded-[20px] flex flex-col gap-2 p-4">
          <h4 className="font-grotesk text-2xl font-extrabold text-center">
            {dict.booking.contactStep.title}
          </h4>

          <p>{dict.booking.contactStep.instruction}</p>

          <div>
            <label htmlFor={emailInputId}>Your e-mail TBT:</label>
            <input
              id={emailInputId}
              name="email"
              type="email"
              className="bg-[#F3EEFB] border-black border-2 rounded-sm w-full py-2 px-4"
              onChange={onEmailChange}
            />
          </div>

          <button
            className="bg-[#CFB2FF] disabled:bg-[#DCDCDC] disabled:drop-shadow-button disabled:translate-y-0 rounded-full border-black border-2 drop-shadow-button hover:brightness-95 active:drop-shadow-none active:translate-y-1 px-4 py-2 mt-auto"
            onClick={onContactSubmit}
            disabled={!contact}
          >
            {dict.booking.contactStep.button}
          </button>
        </div>
      )}

      {step === "BOOKING_SUCCESS" && (
        <div className="w-[350px] h-[323px] bg-white border-black border-2 rounded-[20px] flex flex-col gap-2 p-4">
          <h4 className="font-grotesk text-2xl font-extrabold text-center">
            {dict.booking.bookingCompleteStep.title}
          </h4>

          <p>{dict.booking.bookingCompleteStep.instruction}</p>

          <div className="text-lg font-bold">
            <p className="underline underline-offset-4">
              {dict.booking.bookingCompleteStep.location.name}
            </p>
            <p>{dict.booking.bookingCompleteStep.location.address}</p>
            <p>
              {lang === "en"
                ? dayjs(date).locale("en").format("[The] D MMMM [at] h:mm A")
                : dayjs(date).locale("fr").format("[Le] D MMMM [à] h:mm")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
