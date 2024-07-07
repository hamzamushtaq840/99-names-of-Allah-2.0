import React from "react";

const Intro = ({ intro }: { intro: string[] }) => {
  return (
    <div className="flex w-[70%] flex-col gap-2">
      {intro.map((v, index) => {
        return (
          <div
            key={index}
            className="readex mt-4 text-justify text-lg text-grey"
          >
            {v}
          </div>
        );
      })}
    </div>
  );
};

export default Intro;
