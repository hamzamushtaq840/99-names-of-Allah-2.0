// Font
import { readex } from "../fonts";

// Interface
import { IHeading2ComponentProps } from "@/lib/interfaces";

const Heading2Title = ({ content, id }: IHeading2ComponentProps) => {
  return (
    <h2
      id={id}
      className={`${readex.className} heading-2-title ml-[-10px] text-6xl hover:cursor-pointer sm:text-8xl`}
    >
      {content}
    </h2>
  );
};

export default Heading2Title;
