"use client";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { readex } from "../fonts";
import { useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const [isMobileActive, setIsMobileActive] = useState(false);

  return (
    <nav
      className={`${readex.className} relative mx-5 mt-5 flex items-center justify-between rounded-full bg-[#242424] px-8 py-4 text-white sm:mx-20 2xl:mt-8 2xl:py-5`}
    >
      {/* left-side  */}
      <span className="flex gap-2">
        <Image src={"./logo.svg"} alt="logo" width={20} height={30} priority />
        <span className="text-lg font-semibold tracking-wider">
          NAMESOFALLAH
        </span>
      </span>

      {/* right-side  */}
      <ul
        className={clsx("items-center justify-end gap-7 font-medium", {
          "absolute left-1 right-1 top-16 mt-2 space-y-3 rounded-md bg-black p-6 sm:h-40":
            isMobileActive,
          "hidden w-full sm:flex": !isMobileActive,
        })}
      >
        <li>
          <Link className="cursor-pointer hover:text-white/75" href="/#names">
            Names
          </Link>
        </li>
        <li>
          <Link className="cursor-pointer hover:text-white/75" href="/#names">
            Quiz
          </Link>
        </li>
        <li>
          <Link className="cursor-pointer hover:text-white/75" href="/#hadiths">
            Contact
          </Link>
        </li>
        <li className="flex h-[40px] items-center gap-2 rounded-lg bg-[#d8642a] px-2 text-white">
          <span>Donate</span>
          <FaExternalLinkAlt className="h-4 w-4" />
        </li>
      </ul>

      {/* right-side  */}
      <button
        onClick={() => {
          setIsMobileActive(!isMobileActive);
        }}
      >
        <IoMdMenu className="block text-2xl sm:hidden" />
      </button>
    </nav>
  );
};

export default Navbar;
