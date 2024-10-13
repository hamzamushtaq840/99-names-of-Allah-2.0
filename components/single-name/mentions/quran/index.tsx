import Ayah from "./ayah";

const QuranMention = ({ mentions }: { mentions: any }) => {
  return (
    <aside className="flex max-w-[580px] flex-col">
      <span className="rubik text-center text-xl font-[600] text-white">
        QURAN
      </span>
      <div className="mt-4 flex flex-col gap-6">
        {mentions?.map((val: any, index: number) => {
          return val.contentType === "text" ? (
            <p className="outfit text-center text-[18px] leading-[28px] text-[#c5ccd3]">
              {val.content}
            </p>
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
