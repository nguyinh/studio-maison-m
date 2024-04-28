import { SupportedLocales, getDictionary } from "../dictionaries";

interface PageParams {
  params: { lang: SupportedLocales };
}

export default async function Studio({
  params: { lang },
}: Readonly<PageParams>) {
  const dict = await getDictionary(lang);

  return <div className="bg-main-background">Un studio bien vide</div>;
}
