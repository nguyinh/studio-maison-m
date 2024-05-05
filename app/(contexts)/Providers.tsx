"use client";

import { PropsWithChildren } from "react";
import { MenuProvider } from "@/contexts/MenuContext";
import { BookingProvider } from "@/contexts/BookingProvider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <MenuProvider>
      <BookingProvider>{children}</BookingProvider>
    </MenuProvider>
  );
}
