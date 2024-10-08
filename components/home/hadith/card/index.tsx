// Custom Components
import Heading3 from "@/components/ui/headings/heading3";

// Interfaces and Types
import { IHadiths } from "@/lib/interfaces/hadiths.interface";

// Font
import { readex } from "@/components/ui/fonts";

const HadithCard = ({ hadith }: { hadith: IHadiths }) => {
  return (
    <div className="flex min-h-[225px] flex-col justify-start gap-3 sm:min-h-[270px] sm:flex-row sm:justify-between sm:gap-0">
      <Heading3 content={hadith.reference} />
      <p
        className={`${readex.className} w-full text-base font-light leading-[30px] text-grey sm:w-[66%] sm:text-2xl sm:leading-[35px]`}
      >
        {hadith.content}
      </p>
    </div>
  );
};

export default HadithCard;
