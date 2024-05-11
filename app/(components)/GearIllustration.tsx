import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface IProps {
  name: string;
  image: StaticImageData;
  titleBackgroundColor: string;
}

export default function GearIllustration({
  name,
  image,
  titleBackgroundColor,
}: IProps) {
  return (
    <div className="border-black border-2 relative mt-8">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="min-h-60 min-w-60 max-h-60 max-w-60 object-cover"
        objectFit="cover"
      />

      <h4
        className={cn(
          "absolute -top-6 left-2 text-lg py-1 px-4 max-w-56 rounded-full border-black border-2 drop-shadow-gear-title font-grotesk font-extrabold"
        )}
        style={{ backgroundColor: titleBackgroundColor }}
      >
        {name}
      </h4>
    </div>
  );
}
