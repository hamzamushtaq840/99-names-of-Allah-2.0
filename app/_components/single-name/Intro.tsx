import React from "react";

const Intro = ({ intro }: { intro: string }) => {
  return (
    <div className="outfit mt-4 w-[70%] text-center text-[18px] leading-[28px] text-[#c5ccd3]">
      {intro}
    </div>
  );
};

export default Intro;
