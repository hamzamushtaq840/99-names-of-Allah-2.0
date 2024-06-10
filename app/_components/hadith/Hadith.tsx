import { HadithAttr } from "@/app/lib/definitions";
import React from "react";

const Hadith = ({ hadith }: { hadith: HadithAttr }) => {
  return (
    <>
      <div className="flex min-h-[225px] justify-between px-24">
        <p className="readex w-[33%] text-4xl font-semibold">
          {hadith.reference}
        </p>
        <p className="readex w-[66%] text-2xl leading-relaxed text-[#c5ccd3]">
          {hadith.content}
        </p>
      </div>
    </>
  );
};

export default Hadith;
