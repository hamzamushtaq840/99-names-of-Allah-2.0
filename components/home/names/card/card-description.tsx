// UI Components
import { HiArrowLongRight } from "react-icons/hi2";

// Fonts
import { lime, rakkas, readex } from "@/components/ui/fonts";

// Interface
import { INameCardComponentProps } from "@/lib/interfaces";

const CardDescription = ({ name, index }: INameCardComponentProps) => {
  return (
    <>
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center text-white">
        <p className="absolute bottom-10 left-4 text-7xl font-extrabold leading-[31px] opacity-[0.3]">
          {index + 1}
        </p>
        <p
          className={`${rakkas.className} mt-[40px] flex flex-1 items-end text-center text-[50px] sm:text-[80px]`}
        >
          {name.arabic.name}
        </p>
        <p
          className={`${readex.className} mt-2 text-[18px] font-semibold tracking-wide sm:text-[24px]`}
        >
          {name.english.name}
        </p>
        <p
          className={`${lime.className} flex-1 px-[30px] pt-10 text-center text-[16px] leading-[30px] sm:text-[22px] sm:leading-[35px]`}
        >
          {name.english.meaning}
        </p>
      </div>

      {/* hover: number count */}
      <p className="absolute bottom-10 left-4 text-7xl font-extrabold leading-[31px] opacity-30 group-hover:opacity-10">
        {index + 1}
      </p>
      {/* hover: next arrow */}
      <span className="absolute bottom-5 right-6 hidden text-6xl leading-[31px] text-white group-hover:block">
        <HiArrowLongRight />
      </span>
    </>
  );
};

export default CardDescription;
