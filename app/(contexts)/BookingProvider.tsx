import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

export type Step =
  | "DAY_SELECTION"
  | "HOUR_SELECTION"
  | "EMAIL_INPUT"
  | "BOOKING_SUCCESS";
export type Hour = "MORNING" | "AFTERNOON" | null;

export const BookingContext = createContext<{
  step: Step;
  date: Date | null;
  hour: Hour;
  contact: string | null;
  phone: string | null;
  setStep: Dispatch<SetStateAction<Step>>;
  setDate: Dispatch<SetStateAction<Date | null>>;
  setHour: Dispatch<SetStateAction<Hour>>;
  setContact: Dispatch<SetStateAction<string | null>>;
  setPhone: Dispatch<SetStateAction<string | null>>;
}>({
  step: "DAY_SELECTION",
  setStep: () => {},
  date: null,
  setDate: () => {},
  hour: null,
  setHour: () => {},
  contact: null,
  setContact: () => {},
  phone: null,
  setPhone: () => {},
});

export function BookingProvider({ children }: PropsWithChildren) {
  const [step, setStep] = useState<Step>("DAY_SELECTION");
  const [date, setDate] = useState<Date | null>(null);
  const [hour, setHour] = useState<Hour>(null);
  const [contact, setContact] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);

  return (
    <BookingContext.Provider
      value={{
        step,
        setStep,
        date,
        setDate,
        hour,
        setHour,
        contact,
        setContact,
        phone,
        setPhone,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}
