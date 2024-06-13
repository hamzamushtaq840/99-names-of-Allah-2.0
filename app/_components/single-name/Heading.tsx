import React from "react";

const Heading = ({ content }: { content: string }) => {
  return (
    <h1 className="lime xsm:text-[18px] mb-4 mt-[-20px] text-center text-[24px] font-[400] text-white">
      {content}
    </h1>
  );
};

export default Heading;
