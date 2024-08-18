import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="readex mx-28 flex h-24 items-center justify-between text-white xsm:mx-10">
      <span className="flex gap-[7px]">
        <Image src={"./logo.svg"} alt="logo" width={20} height={30} />
        <span className="text-lg font-semibold tracking-wider">
          NAMESOFALLAH
        </span>
        {/* <span className="text-[#FB5322]">.</span> */}
      </span>

      {/* <ul className="flex gap-7 font-medium xsm:hidden">
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
      </ul> */}

      <ul className="flex items-center gap-7 font-medium">
        <li>
          <Link className="hover:text-white/75" href="/#names">
            Names
          </Link>
        </li>
        <li>
          <Link className="hover:text-white/75" href="/#names">
            Quiz
          </Link>
        </li>
        <li>
          <Link className="hover:text-white/75 xsm:hidden" href="/#hadiths">
            Contact
          </Link>
        </li>
        <button className="flex h-[40px] items-center gap-2 rounded-lg bg-[#d8642a] px-2 text-white">
          Donate
          <FaExternalLinkAlt className="h-4 w-4" />
        </button>
        <li>
          <IoMdMenu className="hidden text-2xl xsm:block" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
