// Core
import Link from "next/link";
import Image from "next/image";

// UI Components
import CardDescription from "./card-description";

// Interface
import { INameCardComponentProps } from "@/lib/interfaces";

const Card = ({ name, index }: INameCardComponentProps) => {
  return (
    <Link
      href={`/name/${name.english.name}`}
      key={index}
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
      />
      <CardDescription name={name} index={index} />
    </Link>
  );
};

export default Card;
