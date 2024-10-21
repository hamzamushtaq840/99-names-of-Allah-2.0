// UI Components
import Ayah from "./ayah";

// Interface
import { IQuranMentionsComponentProp, QuranMentions } from "@/lib/interfaces";

// Font
import { workSans } from "@/components/ui/fonts";

export const QuranMention = ({ mentions }: IQuranMentionsComponentProp) => {
  return (
    <aside className="flex w-full flex-col sm:w-1/2">
      <span className="my-5 text-center text-[18px] font-semibold tracking-widest text-white sm:text-[24px]">
        QURAN
      </span>
      <div className="mt-4 flex flex-col gap-6">
        {mentions?.map((val: QuranMentions, index: number) => {
          return val.contentType === "text" ? (
            <p
              key={index}
              className={`${workSans.className} text-pretty text-base leading-[30px] text-grey sm:text-xl sm:leading-[35px]`}
            >
              {val.content}
            </p>
          ) : (
            <Ayah key={index} ayah={val} />
          );
        })}
      </div>
    </aside>
  );
};
