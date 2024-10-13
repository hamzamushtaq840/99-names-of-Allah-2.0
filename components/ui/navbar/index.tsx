"use client";
// Core
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Library
import clsx from "clsx";

// Icons
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { CiCoffeeCup } from "react-icons/ci";

// Fonts
import { readex } from "../fonts";

// UI Components
import LocomotiveScroll from "../locomotive";

const Navbar = () => {
  //State
  const [isMobileActive, setIsMobileActive] = useState(false);

  return (
    <nav
      className={`${readex.className} relative mx-5 mt-5 flex items-center justify-between rounded-full bg-[#242424] px-8 py-4 text-white sm:mx-20 2xl:mt-8 2xl:py-5`}
    >
      {/* left-side  */}
      <Link href={"/"} className="flex gap-2">
        <div className="h-4 w-6">
          <svg
            viewBox="0 0 308 285"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.7039 2.66659C36.5891 5.06659 26.6377 10.2666 18.1285 18.6666C9.47506 27.0666 5.4368 34.2666 2.69656 45.8666C-0.187914 58.7999 -0.187914 226.533 2.69656 239.467C5.4368 251.067 9.47506 258.267 18.1285 266.667C26.7819 275.2 36.5891 280.267 49.2807 282.667C63.7031 285.467 244.848 285.467 259.27 282.667C271.962 280.267 281.769 275.2 290.422 266.667C299.076 258.267 303.114 251.067 305.854 239.467C308.739 226.4 308.739 58.7999 305.71 45.5999C303.114 33.8666 297.634 24.7999 288.403 16.7999C279.317 8.79993 271.529 5.06659 258.982 2.53326C245.28 -0.133406 62.1166 -7.4478e-05 48.7039 2.66659ZM113.172 47.1999C125.719 49.1999 136.392 53.4666 145.91 60.5333L154.708 67.0666L158.746 63.1999C161.054 60.9333 167.832 56.9333 173.89 54.1333C216.868 34.1333 267.635 54.9332 278.308 96.7999C287.682 134 268.19 170.7 218 221.5L207.5 229L195.5 234.5L184.5 237L173.89 238.133C158.025 238.133 150.67 238.8 150.958 238.133C151.247 237.467 159.9 228.267 170.14 217.733C180.524 207.2 193.216 194.133 198.264 188.667L207.494 178.667L197.254 177.733C186.005 176.667 173.746 172.8 165.813 168C162.929 166.133 160.477 164.667 160.189 164.667C159.9 164.667 156.439 169.733 152.256 176C142.593 190.667 123.797 205.9 107.5 221.5L93 232.5L81.4912 236.483L68.6067 239.067L41.9253 238.667L54.1843 226.533C60.9628 219.867 74.0872 206.4 83.4617 196.533L100.336 178.667L95.5765 178.267C75.241 176.933 61.5397 171.733 49.1365 160.667C34.4257 147.6 28.0799 132.8 28.0799 111.6C28.0799 93.4666 33.9931 79.9999 47.2616 67.3333C59.3764 55.8666 71.2027 49.9999 88.3653 47.3333C98.0283 45.8666 104.086 45.8666 113.172 47.1999Z"
              fill="#E36A00"
            />
            <path
              d="M94.1344 85.9997C72.6451 91.9997 65.5782 117.866 81.1543 133.066C86.9233 138.8 92.6922 141.066 101.057 141.066C124.854 141.066 137.69 113.733 122.691 94.9331C119.229 90.6664 106.97 84.6664 101.778 84.7997C99.6149 84.7997 96.2978 85.3331 94.1344 85.9997Z"
              fill="#E36A00"
            />
            <path
              d="M198.985 86.6664C190.908 89.1998 183.12 97.7331 180.957 106.266C176.918 121.466 186.293 136.933 201.725 140.533C220.041 144.8 236.339 132 236.194 113.333C236.194 100.133 228.118 89.1998 215.859 85.9998C208.936 84.2664 206.052 84.3998 198.985 86.6664Z"
              fill="#E36A00"
            />
          </svg>
        </div>

        <span className="text-lg font-semibold tracking-wider">
          NAMESOFALLAH
        </span>
      </Link>

      {/* right-side  */}
      <ul
        className={clsx("items-center justify-end gap-7 font-medium", {
          "absolute left-1 right-1 top-16 mt-2 space-y-3 rounded-md bg-black p-6 sm:h-40":
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
        <li className="flex h-10 items-center gap-1 rounded-full bg-orangeSub px-4 text-white">
          <span>Buy me Coffee</span>
          <CiCoffeeCup className="h-6 w-6" />
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
