// Constants and Utils
import { NAMES } from "@/lib/constants";

// Custom Components
import Heading2 from "../../ui/headings/heading2";
import Card from "./card";

const Names = () => {
  return (
    <section id="names" className="mt-24 text-black">
      <Heading2 content="Names" />

      <div className="mx-24 mt-20 grid grid-cols-3 gap-x-10 gap-y-10 xsm:mx-10 xsm:mt-10 xsm:grid-cols-1">
        {NAMES.map((name: any, index: number) => {
          return <Card key={index} name={name} index={index} />;
        })}
      </div>
    </section>
  );
};

export default Names;
