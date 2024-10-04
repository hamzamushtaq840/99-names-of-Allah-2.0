import React from "react";
import NameAudio from "./name-audio";
import NextButton from "./next-button";
import PreviousButton from "./prev-button";

const Heading = ({ name }: { name: any }) => {
  return (
    <>
      <div className="flex items-center gap-10">
        <PreviousButton prevName={name?.prevName!} />

        <div className="flex items-center gap-4">
          {/* arabic name */}
          <span className="rakkas ml-5 select-none bg-gradient-to-r from-[#FE6F2D] to-[#FDCE38] bg-clip-text text-[96px] leading-[180px] text-transparent">
            {name?.arabic?.name}
          </span>
          {/* audio play button */}
          <NameAudio name={name?.english?.name} />
        </div>

        <NextButton nextName={name?.nextName!} />
      </div>
      <h1 className="lime xsm:text-[18px] mb-4 mt-[-20px] select-none text-center text-[24px] font-[400] text-white">
        {name?.english?.name}
      </h1>
    </>
  );
};

export default Heading;
