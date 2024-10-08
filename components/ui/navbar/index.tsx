"use client";
// Core
import Image from "next/image";
import Link from "next/link";

// Libraries
import clsx from "clsx";

// Icons
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

// Fonts
import { readex } from "../fonts";
import { useState } from "react";
import LocomotiveScroll from "../locomotive";

// Custom Components

const Navbar = () => {
  const [isMobileActive, setIsMobileActive] = useState(false);

  return (
    <nav
      className={`${readex.className} relative mx-5 mt-5 flex items-center justify-between rounded-full bg-[#242424] px-8 py-4 text-white sm:mx-20 2xl:mt-8 2xl:py-5`}
    >
      {/* left-side  */}
      <span className="flex gap-2">
        <Image src={"./logo.svg"} alt="logo" width={20} height={30} priority />
        <p className="text-lg font-semibold tracking-wider">NAMESOFALLAH</p>
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
        <li className="flex h-10 items-center gap-2 rounded-lg bg-[#853D00] px-2 text-white">
          <span>Donate</span>
          <FaExternalLinkAlt className="h-4 w-4" />
        </li>
      </ul>

      {/* right-side  */}
      <button
        name="submenu"
        aria-label="Toggle menu"
        onClick={() => {
          setIsMobileActive(!isMobileActive);
        }}
      >
        <IoMdMenu className="block text-2xl sm:hidden" />
      </button>

      {/* For smooth scroll across all pages */}
      <LocomotiveScroll />
    </nav>
  );
};

export default Navbar;
