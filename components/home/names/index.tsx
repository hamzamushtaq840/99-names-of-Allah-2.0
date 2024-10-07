// Constants and Utils
import { NAMES } from "@/lib/constants";

// Custom Components
import Heading2 from "../../ui/headings/heading2";
import Card from "./card";

const Names = () => {
  return (
    <section
      id="names"
      className="mx-8 mt-8 flex flex-col gap-7 px-2 sm:mx-20 sm:mt-16 sm:gap-20"
    >
      <Heading2 content="Names" />

      <div className="mx-[-4px] grid grid-cols-1 gap-x-0 gap-y-10 sm:grid-cols-3 sm:gap-x-4 sm:px-0 lg:gap-x-8">
        {NAMES.map((name: any, index: number) => {
          return <Card key={index} name={name} index={index} />;
        })}
      </div>
    </section>
  );
};

export default Names;
