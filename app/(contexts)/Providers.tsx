"use client";

import { PropsWithChildren } from "react";
import { MenuProvider } from "@/contexts/MenuContext";

export function Providers({ children }: PropsWithChildren) {
  return <MenuProvider>{children}</MenuProvider>;
}
