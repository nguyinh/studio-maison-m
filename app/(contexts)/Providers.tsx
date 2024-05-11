"use client";

import { PropsWithChildren } from "react";
import { MenuProvider } from "@/contexts/MenuContext";
import { BookingProvider } from "@/contexts/BookingProvider";
import { AudioProvider } from "./AudioProvider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <MenuProvider>
      <BookingProvider>
        <AudioProvider>{children}</AudioProvider>
      </BookingProvider>
    </MenuProvider>
  );
}
