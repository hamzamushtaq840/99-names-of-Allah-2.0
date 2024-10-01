import Link from "next/link";
import Image from "next/image";
import CardDescription from "./card-description";

const Card = ({ name, index }: { name: any; index: number }) => {
  return (
    <Link
      href={`/name/${name.english.name}`}
      key={index}
      className="group relative h-[527px] cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 xsm:h-[350px] xsm:rounded-lg"
      scroll={true}
    >
      <Image
        src={name.image}
        quality={100}
        alt="name"
        fill
        className="transform transition-transform duration-500 group-hover:scale-105"
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
