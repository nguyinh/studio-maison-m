import { SupportedLocales } from "./dictionaries";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface PageParams {
  params: { lang: SupportedLocales };
}

export default async function Layout({
  children,
  params: { lang },
}: Readonly<
  {
    children: React.ReactNode;
  } & PageParams
>) {
  return (
    <>
      <Navbar lang={lang} />

      {children}

      <Footer lang={lang} />
    </>
  );
}
