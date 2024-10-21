// Core
import clsx from "clsx";

// Font
import { readex } from "../fonts";

// Interface
import { IHeading2ComponentProps } from "@/lib/interfaces";

const Heading2Title = ({
  content,
  id,
  isSmallText,
}: IHeading2ComponentProps) => {
  return (
    <h2
      id={id}
      className={clsx(
        readex.className,
        "heading-2-title ml-[-10px] font-bold hover:cursor-pointer",
        {
          "text-4xl sm:text-6xl": isSmallText,
          "text-6xl sm:text-8xl": !isSmallText,
        },
      )}
    >
      {content}
    </h2>
  );
};

export default Heading2Title;
