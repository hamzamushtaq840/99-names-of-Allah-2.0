const HadithMention = ({ mentions }: { mentions: any }) => {
  return (
    <aside className="flex max-w-[580px] flex-col">
      <span className="rubik text-center text-xl font-[600] text-white">
        HADITH
      </span>
      <div className="mt-4 flex flex-col gap-6">
        {mentions?.map((val: any, index: number) => {
          return val.contentType === "text" ? (
            <p className="outfit text-center text-[18px] leading-[28px] text-[#c5ccd3]">
              {val.content}
            </p>
          ) : (
            <p className="shadow-quranAyah outfit flex flex-col rounded bg-[#252836ba] p-4 text-justify text-[16px] leading-[28px] text-[#c5ccd3]">
              <span className="mb-1 self-start text-[12px] font-[700] uppercase text-[#ccc]">
                Narrated{" "}
                <span className="italic text-white">{val.narrated}</span> :
              </span>
              {val.content}
              <a
                target="_blank"
                href={val.link}
                rel="noopener noreferrer"
                className="cursor-pointer self-end text-[#2faee0]"
              >
                — ({val.hadeesNo})
              </a>
            </p>
          );
        })}
      </div>
    </aside>
  );
};

export default HadithMention;
