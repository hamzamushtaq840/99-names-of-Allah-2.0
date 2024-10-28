// Core
import Link from "next/link";

// Icon
import { IoIosArrowForward } from "react-icons/io";

// Library
import clsx from "clsx";

// Interface
import { INameNextComponentProp } from "@/lib/interfaces";

const NextButton = ({ nextName }: INameNextComponentProp) => {
  return (
    <Link
      href={`/name/${nextName}`}
      style={{
        pointerEvents: !nextName ? "none" : "auto",
      }}
      title={nextName}
      replace
      className={clsx(
        "hover:bg-actionButton flex h-12 w-12 items-center justify-center rounded-full text-4xl",
        {
          "cursor-pointer text-[#FDC237]/75 hover:text-[#FDC237]": nextName,
          "text-grey": !nextName,
        },
      )}
      aria-label="forward"
    >
      <IoIosArrowForward />
    </Link>
  );
};

export default NextButton;
