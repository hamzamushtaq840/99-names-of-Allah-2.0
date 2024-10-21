// UI Component
import Reference from "./reference";

// Interface
import {
  HadithMentions,
  IHadithMentionsComponentProp,
} from "@/lib/interfaces";

// Font
import { workSans } from "@/components/ui/fonts";

export const HadithMention = ({ mentions }: IHadithMentionsComponentProp) => {
  return (
    <aside className="flex w-1/2 flex-col">
      <span className="my-5 text-center text-[18px] font-semibold tracking-widest text-white sm:text-[24px]">
        HADITH
      </span>
      <div className="mt-4 flex flex-col gap-6">
        {mentions?.map((val: HadithMentions, index: number) => {
          return val.contentType === "text" ? (
            <p
              key={index}
              className={`${workSans.className} text-pretty text-base leading-[30px] text-grey sm:text-xl sm:leading-[35px]`}
            >
              {val.content}
            </p>
          ) : (
            <Reference key={index} hadith={val} />
          );
        })}
      </div>
    </aside>
  );
};
