import GearIllustration from "@/app/(components)/GearIllustration";

import type { GearElement } from "@/app/gear";
import { cn } from "@/lib/utils";

interface IProps {
  className: string;
  title: string;
  gearTitleColor: `#${string}`;
  titleBackgroundColor: `#${string}`;
  gearList: GearElement[];
}

export default async function GearSection({
  className,
  title,
  gearTitleColor,
  titleBackgroundColor,
  gearList,
}: IProps) {
  return (
    <section
      className={cn(
        "w-full flex flex-col items-center border-black border-t-2 py-10 gap-2",
        className
      )}
    >
      <h3 className="font-chango text-3xl" style={{ color: gearTitleColor }}>
        {title}
      </h3>

      <ul className="flex w-full overflow-x-auto gap-4 px-16">
        {gearList.map((gearElement) => (
          <GearIllustration
            key={gearElement.name}
            name={gearElement.name}
            image={gearElement.image}
            titleBackgroundColor={titleBackgroundColor}
          />
        ))}
      </ul>
    </section>
  );
}
