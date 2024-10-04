import { workSans } from "@/components/ui/fonts";
import parse from "html-react-parser";

const Content = ({ content }: { content: any }) => {
  return (
    <div className="xsm:w-[85%] mb-10 w-[70%]">
      <div
        className={`${workSans.className} mt-4 break-words text-lg leading-8 text-[#98989A]`}
      >
        {parse(content)}
      </div>
    </div>
  );
};

export default Content;
