"use client";

import { ChangeEvent, useContext, useId, useState } from "react";
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
  const {
    step,
    contact,
    date,
    hour,
    phone,
    setDate,
    setStep,
    setHour,
    setContact,
    setPhone,
  } = useContext(BookingContext);

  const [emailError, setEmailError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const onPhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value ?? null);
  };

  const onContactSubmit = async () => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!contact || !emailRegex.test(contact)) {
      setEmailError(true);
      return;
    }

    setIsSubmitting(true);

    const localeDate =
      lang === "en"
        ? dayjs(date).locale("en").format("D MMMM YYYY")
        : dayjs(date).locale("fr").format("D MMMM YYYY");

    const response = await fetch("/emails", {
      method: "POST",
      body: JSON.stringify({
        email: contact,
        lang,
        date: localeDate,
        hour,
        phone,
      }),
    });

    if (response.status === 200) {
      setStep("BOOKING_SUCCESS");
    } else if (response.status === 422) {
      setEmailError(true);
    }

    setIsSubmitting(false);
  };

  const emailInputId = useId();
  const phoneInputId = useId();

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

          <div className="flex flex-row justify-center gap-4 h-full *:basis-1/2">
            <button
              className="bg-[#EEF3F1] border-black border-2 rounded-md flex-1 drop-shadow-button hover:brightness-95 active:drop-shadow-none active:translate-y-1"
              onClick={() => onHourSelection("MORNING")}
            >
              <p>{dict.booking.hourStep.morningBookingType}</p>
              <p>8h00-13h00</p>
            </button>

            <button
              className="bg-[#EEF3F1] p-2 border-black border-2 rounded-md flex-1 drop-shadow-button hover:brightness-95 active:drop-shadow-none active:translate-y-1"
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
        <div className="w-[350px] min-h-[380px] bg-white border-black border-2 rounded-[20px] flex flex-col gap-2 p-4">
          <h4 className="font-grotesk text-2xl font-extrabold text-center">
            {dict.booking.contactStep.title}
          </h4>

          <p>{dict.booking.contactStep.instruction}</p>

          <div>
            <label htmlFor={emailInputId}>
              {dict.booking.contactStep.emailInput}
            </label>
            <input
              id={emailInputId}
              name="email"
              type="email"
              className="bg-[#F3EEFB] border-black border-2 rounded-sm w-full py-2 px-4"
              style={{ borderColor: emailError ? "#e75c5c" : undefined }}
              onChange={(event) => {
                setEmailError(false);
                onEmailChange(event);
              }}
            />
          </div>

          <div>
            <label htmlFor={phoneInputId}>
              {dict.booking.contactStep.phoneInput}
            </label>
            <input
              id={phoneInputId}
              name="phone"
              type="phone"
              placeholder="facultatif"
              className="bg-[#F3EEFB] border-black border-2 rounded-sm w-full py-2 px-4"
              // style={{ borderColor: phoneError ? "#e75c5c" : undefined }}
              onChange={(event) => {
                onPhoneChange(event);
              }}
            />
          </div>

          <button
            className="bg-[#CFB2FF] disabled:bg-[#DCDCDC] disabled:drop-shadow-button disabled:translate-y-0 rounded-full border-black border-2 drop-shadow-button hover:enabled:brightness-95 active:drop-shadow-none active:translate-y-1 px-4 py-2 mt-auto"
            onClick={onContactSubmit}
            disabled={!contact || isSubmitting}
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
              {`${
                lang === "en"
                  ? dayjs(date).locale("en").format("[The] D MMMM")
                  : dayjs(date).locale("fr").format("[Le] D MMMM")
              } (${
                hour === "MORNING"
                  ? dict.booking.morning
                  : dict.booking.afternoon
              })`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
