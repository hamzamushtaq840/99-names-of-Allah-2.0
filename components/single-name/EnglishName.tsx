import React from "react";

const EnglishName = ({ name }: { name: string }) => {
  return (
    <h1 className="lime mb-4 mt-[-20px] text-center text-[24px] font-[400] text-white xsm:text-[18px]">
      {name}
    </h1>
  );
};

export default EnglishName;
