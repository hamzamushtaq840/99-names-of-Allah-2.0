// UI Components
import NameAudio from "./name-audio";
import NextButton from "./next-button";
import PreviousButton from "./prev-button";

// Fonts
import { rakkas, readex } from "@/components/ui/fonts";

// Interface
import { INameHeadingComponentProp } from "@/lib/interfaces";

const Heading = ({ name }: INameHeadingComponentProp) => {
  return (
    <>
      <div className="flex w-full items-center justify-between gap-10">
        {/* prev button */}
        <PreviousButton prevName={name?.prevName!} />

        {/* arabic name and audio */}
        <div className="flex items-center gap-4">
          <p
            className={`${rakkas.className} ml-5 select-none bg-gradient-to-r from-[#FE6F2D] to-[#FDCE38] bg-clip-text text-[96px] leading-[180px] text-transparent`}
          >
            {name?.arabic?.name}
          </p>
          <NameAudio name={name?.english?.name} />
        </div>

        {/* next button */}
        <NextButton nextName={name?.nextName!} />
      </div>

      {/* english name */}
      <h1
        className={`${readex.className} mb-3 mt-[-20px] text-[18px] font-semibold tracking-widest text-white sm:text-[24px]`}
      >
        {name?.english?.name}
      </h1>
    </>
  );
};

export default Heading;
