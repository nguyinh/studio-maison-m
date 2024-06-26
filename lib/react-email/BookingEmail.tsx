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
  preview: string;
  title: string;
  greeting: string;
  body: string;
  sign: string;
}

export const StudioMaisonMBookingEmail = ({
  preview,
  title,
  greeting,
  body,
  sign,
}: BookingEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border-solid border-black border-2 bg-[#fffaec] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src="https://d1fuzbe05rn43r.cloudfront.net/logo.png"
                width="200"
                alt="Studio Maison M logo"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              {title}
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              {greeting}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              {body}
            </Text>
            <Text className="text-black font-bold text-[14px] leading-[24px]">
              {sign}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default StudioMaisonMBookingEmail;
