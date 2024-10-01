import { HiArrowLongRight } from "react-icons/hi2";

const CardDescription = ({ name, index }: { name: any; index: number }) => {
  return (
    <>
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center text-white hover:bg-[#00000015]">
        <span className="sans absolute bottom-10 left-4 text-[75px] font-extrabold leading-[31px] opacity-[0.3]">
          {index + 1}
        </span>
        <p className="rakkas mt-[40px] flex flex-1 items-end text-center text-[80px] xsm:text-[50px]">
          {name.arabic.name}
        </p>
        <p className="readex mt-2 text-[24px] font-[700] tracking-wide xsm:text-[18px]">
          {name.english.name}
        </p>
        <p className="lime flex-1 px-[30px] pt-10 text-center text-[24px] font-[400] italic xsm:text-[18px]">
          {name.english.meaning}
        </p>
      </div>
      {/* next arrow */}
      <span className="absolute bottom-5 right-6 hidden text-6xl font-extrabold leading-[31px] text-white group-hover:block">
        <HiArrowLongRight />
      </span>
      {/* number count */}
      <span className="sans absolute bottom-10 left-4 text-[75px] font-extrabold leading-[31px] opacity-[0.3] group-hover:opacity-[0.1]">
        {index + 1}
      </span>
    </>
  );
};

export default CardDescription;
