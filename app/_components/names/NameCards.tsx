import Card from "./Card";
import { NameAttr } from "@/app/lib/definitions";

const NameCards = ({ names }: { names: NameAttr[] }) => {
  return (
    <div className="mx-24 mt-20 grid grid-cols-3 gap-x-10 gap-y-10">
      {names.map((name: any, index: number) => {
        return <Card name={name} index={index} />;
      })}
    </div>
  );
};

export default NameCards;
