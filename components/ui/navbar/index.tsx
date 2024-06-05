import React from "react";

const Navbar = () => {
  return (
    <nav className="readex mx-28 grid h-[91px] grid-cols-3 items-center text-white">
      <div className="flex gap-7 font-medium">
        {/* <span>Home</span> */}
        <span>Hadiths</span>
        <span>Names</span>
      </div>
      <div>
        <span className="flex justify-center text-2xl font-semibold">
          99NAMESOFALLAH<span className="text-[#FB5322]">.</span>
        </span>
      </div>
      <div className="flex justify-end gap-7 font-medium">
        <span>Blog</span>
        <span>Contact</span>
      </div>
    </nav>
  );
};

export default Navbar;
