import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { SupportedLocales, getDictionary } from "../[lang]/dictionaries";
import StudioMaisonMBookingEmail from "@/lib/react-email/BookingEmail";
import BookingRequestEmail from "@/lib/react-email/BookingRequestEmail";
import { Hour } from "@/contexts/BookingProvider";

export const dynamic = "force-dynamic"; // defaults to auto

export async function POST(request: NextRequest) {
  const body: {
    email: string;
    lang: SupportedLocales;
    date: string;
    hour: Hour;
  } = await request.json();

  const dict = await getDictionary(body.lang);

  const resend = new Resend(process.env.RESEND_API_KEY);

  if (!process.env.SENDER_EMAIL) {
    return NextResponse.json({ message: "Booking email not sent to owner" });
  }

  try {
    const resendResponse = await resend.emails.send({
      from: process.env.SENDER_EMAIL,
      to: body.email,
      subject: `${dict.email.booking.object} (${body.date})`,
      reply_to: process.env.OWNER_EMAIL,
      react: StudioMaisonMBookingEmail({
        preview: dict.email.booking.preview,
        title: dict.email.booking.title,
        greeting: dict.email.booking.greeting,
        body: dict.email.booking.body,
        sign: dict.email.booking.sign,
      }),
    });

    if (
      (
        resendResponse.error as {
          name: string;
          statusCode: number;
          message: string;
        }
      )?.statusCode === 422
    ) {
      return NextResponse.json(
        { message: resendResponse.error?.message },
        { status: 422, statusText: "Invalid email" }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occured" },
      { status: 500, statusText: "Internal Server Error" }
    );
  }

  await resend.emails.send({
    from: process.env.SENDER_EMAIL,
    to: process.env.OWNER_EMAIL ?? "studiomaisonm@gmail.com",
    subject: `[${body.date} ${body.hour}] Demande de réservation`,
    react: BookingRequestEmail({
      date: body.date,
      customerContact: body.email,
      hour: body.hour,
    }),
  });

  return NextResponse.json({ message: "Booking email sent !" });
}
