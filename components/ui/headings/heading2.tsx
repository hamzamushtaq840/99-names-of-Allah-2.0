// Font
import { readex } from "../fonts";

// Interface and Types
import { IHeading2ComponentProps } from "@/lib/interfaces/heading2.interface";

const Heading2 = ({ content, id }: IHeading2ComponentProps) => {
  return (
    <h2
      id={id}
      className={`${readex.className} heading-2 ml-[-10px] text-6xl hover:cursor-pointer sm:text-8xl`}
    >
      {content}
    </h2>
  );
};

export default Heading2;
