import parse from "html-react-parser";
import { workSans } from "../ui/fonts";

const Intro = ({ intro }: { intro: any }) => {
  return (
    <div className="mb-10 w-[70%] xsm:w-[85%]">
      <div
        className={`${workSans.className} mt-4 break-words text-lg leading-8 text-[#98989A]`}
      >
        {parse(intro)}
      </div>
    </div>
  );
};

export default Intro;
