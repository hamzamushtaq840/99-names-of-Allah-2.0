import { names } from "@/app/lib/names";
import Card from "./Card";

const NameCards = () => {
  return (
    <div className="mx-24 mt-20 grid grid-cols-3 gap-x-10 gap-y-10 xsm:mx-10 xsm:mt-10 xsm:grid-cols-1">
      {names.map((name: any, index: number) => {
        return <Card key={index} name={name} index={index} />;
      })}
    </div>
  );
};

export default NameCards;
