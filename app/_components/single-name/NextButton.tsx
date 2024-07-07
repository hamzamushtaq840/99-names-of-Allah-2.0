import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import clsx from "clsx";

const NextButton = ({ nextName }: { nextName: string }) => {
  return (
    <Link
      href={`/name/${nextName}`}
      style={{
        pointerEvents: !nextName ? "none" : "auto",
      }}
      title={nextName}
      className={clsx("text-4xl", {
        "cursor-pointer text-white/90 hover:text-white/70": nextName,
        "text-grey": !nextName,
      })}
    >
      <IoIosArrowForward />
    </Link>
  );
};

export default NextButton;
