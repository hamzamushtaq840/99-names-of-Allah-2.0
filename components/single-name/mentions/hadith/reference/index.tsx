// UI Component
import { IReferenceComponentProp } from "@/lib/interfaces";

// Font
import { workSans } from "@/components/ui/fonts";

const Reference = ({ hadith }: IReferenceComponentProp) => {
  return (
    <p
      className={`${workSans.className} flex flex-col text-pretty rounded bg-[#252836ba] p-4 text-base leading-[30px] text-grey shadow-quranAyah sm:text-xl sm:leading-[35px]`}
    >
      <span className="mb-1 self-start text-[12px] font-[700] uppercase text-[#ccc]">
        Narrated <span className="italic text-white">{hadith.narrated}</span> :
      </span>
      {hadith.content}
      <a
        target="_blank"
        href={hadith.link}
        rel="noopener noreferrer"
        className="cursor-pointer self-end text-sm text-[#2faee0]"
      >
        — ({hadith.hadeesNo})
      </a>
    </p>
  );
};

export default Reference;
