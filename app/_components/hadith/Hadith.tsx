import { HadithAttr } from "@/app/lib/definitions";

const Hadith = ({ hadith }: { hadith: HadithAttr }) => {
  return (
    <>
      <div className="flex min-h-[225px] justify-between px-24 xsm:min-h-[270px] xsm:flex-col xsm:justify-start xsm:gap-3 xsm:px-10">
        <p className="readex w-[33%] text-4xl font-semibold text-white xsm:w-full xsm:text-2xl">
          {hadith.reference}
        </p>
        <p className="readex w-[66%] text-2xl leading-relaxed text-whiteSub xsm:w-full xsm:text-xl">
          {hadith.content}
        </p>
      </div>
    </>
  );
};

export default Hadith;
