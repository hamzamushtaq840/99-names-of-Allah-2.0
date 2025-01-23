"use client";
// Core
import { useState } from "react";
import Link from "next/link";

// Library
import clsx from "clsx";

// Icons
import { IoMdMenu } from "react-icons/io";
import { BiDonateHeart } from "react-icons/bi";

// Fonts
import { readex } from "../fonts";

// Hooks
import useLocomotiveScroll from "@/hooks/useLocomotiveScroll";

// Icons
import { ICONS } from "@/assets/icons";

const Navbar = () => {
  // State
  const [isMobileActive, setIsMobileActive] = useState(false);

  // Hook - For smooth scroll across all pages
  useLocomotiveScroll();

  return (
    <nav
      className={`${readex.className} relative mx-5 mt-5 flex items-center justify-between rounded-full bg-[#242424] px-8 py-4 text-white sm:mx-20 2xl:mt-8 2xl:py-5`}
    >
      {/* left-side  */}
      <Link href={"/"} className="flex items-center gap-1">
        <span className="h-4 w-6">{ICONS.logo()}</span>

        <span className="text-lg font-semibold tracking-wider">
          NAMESOFALLAH
        </span>
      </Link>

      {/* right-side  */}
      <ul
        className={clsx("items-center justify-end gap-7 font-medium", {
          "right-1` absolute left-1 top-16 mt-2 space-y-3 rounded-md bg-black p-6 sm:h-40":
            isMobileActive,
          "hidden w-full sm:flex": !isMobileActive,
        })}
      >
        <li>
          <Link className="cursor-pointer hover:text-white/75" href="/#hadiths">
            Hadiths
          </Link>
        </li>
        <li>
          <Link className="cursor-pointer hover:text-white/75" href="/#names">
            Names
          </Link>
        </li>
        <Link
          href={"https://buymeacoffee.com/hamzamushtaq840"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 cursor-pointer items-center gap-1 rounded-full bg-orangeSub px-5 py-4 text-white transition-all duration-700 hover:scale-[1.1] hover:border-black hover:bg-orange"
        >
          <span>Hadiya</span>
          <BiDonateHeart className="h-6 w-6" />
        </Link>
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
    </nav>
  );
};

export default Navbar;
