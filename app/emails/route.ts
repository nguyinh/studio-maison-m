import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { SupportedLocales } from "../[lang]/dictionaries";
import StudioMaisonMBookingEmail from "@/lib/react-email/BookingEmail";
import * as React from "react";

export const dynamic = "force-dynamic"; // defaults to auto

export async function POST(request: NextRequest) {
  console.log();
  const body: { email: string; lang: SupportedLocales } = await request.json();

  console.log("receive POST !!!");
  const resend = new Resend(process.env.RESEND_API_KEY);

  console.log("send email !!!");

  if (!process.env.SENDER_EMAIL) {
    return NextResponse.json({ message: "Booking email not sent to owner" });
  }

  try {
    const emailData = await resend.emails.send({
      from: process.env.SENDER_EMAIL,
      to: body.email,
      subject: "C'est ton website qui te parle",
      // html: "<p>Coucou <strong>boté</strong>!</p>",
      // reply_to: process.env.OWNER_EMAIL,
      react: StudioMaisonMBookingEmail({ date: "21 Mai 2024" }),
    });
    console.log(emailData);
  } catch (err) {
    console.log(err);
  }
  // await resend.emails.send({
  //   from: process.env.SENDER_EMAIL,
  //   to: "studiomaisonm@gmail.com",
  //   subject: "C'est ton website qui te parle",
  //   html: "<p>Coucou <strong>boté</strong>!</p>",
  // });

  return NextResponse.json({ message: "Booking email sent !" });
}
