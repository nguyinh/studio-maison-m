import { Hour } from "@/contexts/BookingProvider";
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
  customerContact: string;
  hour: Hour;
  phone: string | null;
}

export const BookingRequestEmail = ({
  date,
  customerContact,
  hour,
  phone,
}: BookingEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        Une nouvelle demande de réservation vient d`&apos;`arriver !
      </Preview>
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
              Hello Samsam !
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Nouvelle demande de réservation du Studio Maison M pour le {date}{" "}
              ({hour})!
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Tu peux recontacter ton prospect via:
              <Text> 📧 {customerContact}</Text>
              {phone && (
                <Text className="text-black text-[14px] leading-[24px]">
                  📞 {phone}
                </Text>
              )}
            </Text>

            <Text className="text-black text-[14px] leading-[24px]">
              Bien cordialement avec des bisous
            </Text>
            <Text className="text-black font-bold text-[14px] leading-[24px]">
              Ton website qui déchire
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default BookingRequestEmail;
