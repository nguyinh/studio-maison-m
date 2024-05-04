import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const MenuContext = createContext<{
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}>({
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: () => {},
});

export function MenuProvider({ children }: PropsWithChildren) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
}
