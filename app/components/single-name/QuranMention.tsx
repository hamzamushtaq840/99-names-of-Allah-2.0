import { QuranMentions } from "@/app/lib/definitions";
import Content from "./Content";
import Ayah from "./Ayah";

const QuranMention = ({ mentions }: { mentions: QuranMentions[] }) => {
  return (
    <aside className="flex max-w-[580px] flex-col">
      <span className="rubik text-center text-xl font-[600] text-white">
        QURAN
      </span>
      <div className="mt-4 flex flex-col gap-6">
        {mentions?.map((val, index) => {
          return val.contentType === "text" ? (
            <Content key={index} content={val.content} />
          ) : (
            <Ayah
              key={index}
              ayahNo={val.ayahNo!}
              content={val.content}
              link={val.link!}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default QuranMention;
