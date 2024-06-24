import React from "react";

const Heading2 = ({ content, id }: { content: string; id?: string }) => {
  return (
    <div id={id} className="readex about-text abc ml-24 mt-7 xsm:ml-10">
      <h2 className="text-outline text-8xl hover:cursor-pointer xsm:text-6xl">
        {content}
      </h2>
    </div>
  );
};

export default Heading2;
