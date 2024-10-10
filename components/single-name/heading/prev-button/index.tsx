// Core
import Link from "next/link";

// Icons
import { IoIosArrowBack } from "react-icons/io";

// Library
import clsx from "clsx";

// Interface
import { INamePrevComponentProp } from "@/lib/interfaces";

const PreviousButton = ({ prevName }: INamePrevComponentProp) => {
  return (
    <Link
      href={`/name/${prevName}`}
      title={prevName}
      style={{
        pointerEvents: !prevName ? "none" : "auto",
      }}
      className={clsx("text-4xl", {
        "cursor-pointer text-[#FDC237]/75 hover:text-[#FDC237]/90": prevName,
        "text-grey": !prevName,
      })}
      replace
      aria-label="back"
    >
      <IoIosArrowBack />
    </Link>
  );
};

export default PreviousButton;
