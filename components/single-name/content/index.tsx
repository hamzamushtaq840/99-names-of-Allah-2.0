import { workSans } from "@/components/ui/fonts";

const Content = ({ content }: { content: any }) => {
  return (
    <div className="mb-10 w-[70%] xsm:w-[85%]">
      <div
        className={`${workSans.className} mt-4 break-words text-lg leading-8 text-[#98989A]`}
      >
        {content}
      </div>
    </div>
  );
};

export default Content;
