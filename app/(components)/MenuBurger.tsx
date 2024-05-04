"use client";

import { useContext } from "react";
import { MenuContext } from "@/contexts/MenuContext";
import Image from "next/image";
import burgerMenu from "@/images/burger-menu.svg";

export default function MenuBurger() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(MenuContext);

  return (
    <div
      className="sm:hidden absolute right-2 h-full flex cursor-pointer"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      <Image src={burgerMenu} alt="Menu burger" />
    </div>
  );
}
