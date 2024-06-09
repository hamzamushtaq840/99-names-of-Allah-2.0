import React from "react";

const Navbar = () => {
  return (
    <nav className="readex mx-28 grid h-24 grid-cols-3 items-center text-white">
      <ul className="flex gap-7 font-medium">
        <li>Hadiths</li>
        <li>Names</li>
      </ul>

      <span className="flex justify-center text-2xl font-semibold">
        99NAMESOFALLAH<span className="text-[#FB5322]">.</span>
      </span>

      <ul className="flex justify-end gap-7 font-medium">
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
