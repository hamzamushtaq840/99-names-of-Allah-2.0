// Constants and Utils
import { NAMES } from "@/lib/constants";

// UI Components
import Card from "./card";
import Heading2Title from "@/components/ui/headings/heading2-title";
import { IName } from "@/lib/interfaces";

const Names = () => {
  return (
    <section
      id="names"
      className="mx-8 mt-8 flex flex-col gap-7 px-2 sm:mx-20 sm:mt-16 sm:gap-20"
    >
      <Heading2Title content="Names" />

      <div className="mx-[-4px] grid grid-cols-1 gap-x-0 gap-y-10 sm:grid-cols-3 sm:gap-x-4 sm:px-0 lg:gap-x-8">
        {NAMES.map((name: IName) => {
          return <Card key={name.id} name={name} />;
        })}
      </div>
    </section>
  );
};

export default Names;
