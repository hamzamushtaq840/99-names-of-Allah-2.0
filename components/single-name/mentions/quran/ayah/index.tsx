const Ayah = ({
  ayahNo,
  content,
  link,
}: {
  ayahNo: string;
  content: string;
  link: string;
}) => {
  return (
    <p className="quranAyah2 outfit flex flex-col rounded bg-[#252836ba] p-4 text-justify text-[16px] leading-[28px] text-[#c5ccd3]">
      <span className="mb-1 self-start text-[12px] font-[700] uppercase text-[#ccc]">
        English Translation:
      </span>
      {content}
      <a
        target="_blank"
        href={link}
        rel="noopener noreferrer"
        className="cursor-pointer self-end text-[#2faee0]"
      >
        — (Quran {ayahNo})
      </a>
    </p>
  );
};

export default Ayah;