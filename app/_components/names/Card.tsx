import { NameAttr } from "@/app/lib/definitions";
import Link from "next/link";
import CardDescription from "./CardDescription";
import CardImage from "./CardImage";

const Card = ({ name, index }: { name: NameAttr; index: number }) => {
  return (
    <Link
      href={`/name/${name.english.name}`}
      key={index}
      className="group relative h-[527px] cursor-pointer overflow-hidden rounded-sm transition-transform duration-300 xsm:h-[350px] xsm:rounded-lg"
    >
      <CardImage name={name} />
      <CardDescription name={name} index={index} />
    </Link>
  );
};

export default Card;
