// Interfaces and Types
import { IHeading3ComponentProps } from "@/lib/interfaces/heading.interface";

// Fonts
import { readex } from "../fonts";

const Heading3 = ({ content }: IHeading3ComponentProps) => {
  return (
    <h3
      className={`${readex.className} w-full text-2xl font-semibold text-white sm:w-[33%] sm:text-4xl sm:leading-[45px]`}
    >
      {content}
    </h3>
  );
};

export default Heading3;
