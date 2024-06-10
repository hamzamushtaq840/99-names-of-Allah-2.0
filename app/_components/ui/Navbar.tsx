import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="readex mx-28 grid h-24 grid-cols-3 items-center text-white">
      <ul className="flex gap-7 font-medium">
        <li>
          <Link className="hover:text-orange" href="/#hadiths">
            Hadiths
          </Link>
        </li>
        <li>
          <Link className="hover:text-orange" href="/#names">
            Names
          </Link>
        </li>
      </ul>

      <span className="flex justify-center text-2xl font-semibold">
        99NAMESOFALLAH<span className="text-[#FB5322]">.</span>
      </span>

      <ul className="flex justify-end gap-7 font-medium">
        <Link className="hover:text-orange" href="/#hadiths">
          Contact Us
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
