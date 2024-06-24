import React from "react";

const Intro = ({ intro }: { intro: string }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: intro }}
      className="outfit mt-4 w-[70%] text-justify text-lg leading-[28px] text-grey"
    ></div>
  );
};

export default Intro;
