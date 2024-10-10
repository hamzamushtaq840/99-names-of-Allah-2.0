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
      className={clsx("text-4xl", {
        "cursor-pointer text-[#FDC237]/75 hover:text-[#FDC237]": nextName,
        "text-grey": !nextName,
      })}
      aria-label="forward"
    >
      <IoIosArrowForward />
    </Link>
  );
};

export default NextButton;
