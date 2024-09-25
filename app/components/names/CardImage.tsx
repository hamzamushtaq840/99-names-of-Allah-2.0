import { NameAttr } from "@/app/lib/definitions";
import Image from "next/image";

const CardImage = ({ name }: { name: NameAttr }) => {
  return (
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
  );
};

export default CardImage;
