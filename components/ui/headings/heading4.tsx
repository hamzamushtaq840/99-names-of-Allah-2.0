// Interfaces and Types
import { IHeading4ComponentProps } from "@/lib/interfaces/heading2.interface";

const Heading4 = ({ content }: IHeading4ComponentProps) => {
  return (
    <h4 className="readex w-full text-2xl font-semibold text-white sm:w-[33%] sm:text-4xl sm:leading-[45px]">
      {content}
    </h4>
  );
};

export default Heading4;
