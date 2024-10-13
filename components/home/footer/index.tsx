import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mx-8 flex min-h-[60vh] justify-between rounded-t-[70px] bg-black px-32 py-8 sm:mx-16">
      <div className="flex w-full flex-col justify-between gap-14">
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={"./logo.svg"}
            alt="logo"
            width={25}
            height={45}
            priority
          />
          <span className="self-center text-xl font-semibold tracking-wider text-white">
            NAMESOFALLAH
          </span>
        </Link>

        <p className="flex items-center justify-center gap-1 text-white">
          {new Date().getFullYear()} © Made with{" "}
          <span className="text-lg text-red-500">❤</span> by Hamza
        </p>
      </div>
    </div>
  );
};

export default Footer;
