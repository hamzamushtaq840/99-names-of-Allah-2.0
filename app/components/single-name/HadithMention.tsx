import { HadithMentions } from "@/app/lib/definitions";
import Content from "./Content";
import Hadith from "./Hadith";

const HadithMention = ({ mentions }: { mentions: HadithMentions[] }) => {
  return (
    <aside className="flex max-w-[580px] flex-col">
      <span className="rubik text-center text-xl font-[600] text-white">
        HADITH
      </span>
      <div className="mt-4 flex flex-col gap-6">
        {mentions?.map((val, index) => {
          return val.contentType === "text" ? (
            <Content key={index} content={val.content} />
          ) : (
            <Hadith
              key={index}
              content={val.content}
              narrated={val.narrated!}
              hadeesNo={val.hadeesNo!}
              link={val.link!}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default HadithMention;
