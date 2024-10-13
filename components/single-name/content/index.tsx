// Interface
import { IHadithContentProps } from "@/lib/interfaces";

// Font
import { workSans } from "@/components/ui/fonts";

// Library
import parse from "html-react-parser";

const Content = ({ content }: IHadithContentProps) => {
  return (
    <div
      className={`${workSans.className} mb-10 mt-4 w-full text-pretty text-base leading-[30px] text-grey selection:bg-orangeSub selection:text-white sm:w-[97%] sm:text-xl sm:leading-[35px]`}
    >
      {parse(content ?? "")}
    </div>
  );
};

export default Content;
