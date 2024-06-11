import { HadithAttr } from "@/app/lib/definitions";

const Hadith = ({ hadith }: { hadith: HadithAttr }) => {
  return (
    <>
      <div className="flex min-h-[225px] justify-between px-24">
        <p className="readex w-[33%] text-4xl font-semibold text-white">
          {hadith.reference}
        </p>
        <p className="readex text-whiteSub w-[66%] text-2xl leading-relaxed">
          {hadith.content}
        </p>
      </div>
    </>
  );
};

export default Hadith;
