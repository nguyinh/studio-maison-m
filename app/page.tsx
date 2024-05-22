import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Studio Maison M",
    default: "Studio Maison M",
  },
  description:
    "Record your songs using our carefully selected microphones and our top-tier instruments.",
};

export default function RootPage() {
  redirect("/studio");
}
