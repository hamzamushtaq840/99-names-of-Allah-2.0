import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const PreviousButton = ({ prevName }: { prevName: string }) => {
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
    >
      <IoIosArrowBack />
    </Link>
  );
};

export default PreviousButton;
