import React from "react";

const Navbar = () => {
  return (
    <nav className="readex mx-28 flex h-[91px] items-center justify-between text-white">
      <div className="flex gap-7 font-medium">
        <span>Home</span>
        <span>Hadith</span>
        <span>Names</span>
      </div>
      <div>
        <span className="text-2xl font-semibold">
          99NAMESOFALLAH<span className="text-[#FB5322]">.</span>
        </span>
      </div>
      <div className="flex gap-7 font-medium">
        <span>Blog</span>
        <span>Contact</span>
      </div>
    </nav>
  );
};

export default Navbar;
