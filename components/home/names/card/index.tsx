// Core
import Link from "next/link";
import Image from "next/image";

// UI Components
import CardDescription from "./card-description";

// Interface
import { INameCardComponentProps } from "@/lib/interfaces";

// Methods
import getBase64 from "@/actions/getLocalBase64";

const Card = async ({ name }: INameCardComponentProps) => {
  const myBlurDataUrl = await getBase64(
    `https://www.99namesofallah.faith${name.image}`,
  );

  return (
    <Link
      href={`/name/${name.english.name}`}
      className="group relative h-[350px] cursor-pointer overflow-hidden rounded-lg sm:h-[527px]"
      scroll={true}
    >
      <Image
        src={name.image}
        quality={100}
        alt="name"
        fill
        className="transition-all duration-500 group-hover:scale-105"
        style={{
          objectFit: "cover",
          filter: `brightness(${name.imageBrightness})`,
        }}
        blurDataURL={myBlurDataUrl}
        placeholder="blur"
        loading="lazy"
      />
      <CardDescription name={name} />
    </Link>
  );
};

export default Card;
