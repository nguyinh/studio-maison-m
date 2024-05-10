import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface BookingEmailProps {
  date: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const StudioMaisonMBookingEmail = ({ date }: BookingEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Booking request received !</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid bg-[#fffaec] border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/png/logo.png`}
                width="200"
                alt="Studio Maison M logo"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Your booking at <strong>Studio Maison M</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hi there !
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              We received your booking request for {date}. We will keep you in
              touch ! Cya !
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

StudioMaisonMBookingEmail.PreviewProps = {
  date: "May 21 2024",
} as BookingEmailProps;

export default StudioMaisonMBookingEmail;
