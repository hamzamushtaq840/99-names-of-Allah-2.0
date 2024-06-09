"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { names } from "@/app/utils/consts";
import Link from "next/link";

const Names = () => {
  return (
    <section id="names" className="mt-24 text-black">
      <div className="readex about-text abc ml-24 mt-7">
        <motion.h1 className="text-outline">Names</motion.h1>
      </div>
      <div className="mt-20 flex items-center justify-center px-10">
        <div className="items-between grid grid-cols-3 gap-10 gap-y-16">
          {names.map((val: any, index: number) => (
            <div>
              <Link
                href={`/name/${val.english.name}`}
                key={index}
                className="image-box relative transform cursor-pointer"
              >
                <Image
                  src={val.image}
                  quality={100}
                  alt={val.metaTitle}
                  width={415}
                  height={0}
                  className="img xsm:h-[400px] xsm:max-h-[400px] xsm:w-[320px] h-[527px] max-h-[527px] rounded-sm"
                  style={{
                    objectFit: "cover",
                    filter: `brightness(${val.imageBrightness})`,
                  }}
                />
                <div className="absolute top-0 flex h-full w-full hover:bg-[#00000015]">
                  <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center text-white">
                    <span className="sans absolute bottom-10 left-4 text-[75px] font-extrabold leading-[31px] opacity-[0.3]">
                      {index + 1}
                    </span>
                    <p className="rakkas xsm:text-[50px] mt-[40px] flex flex-1 items-end text-center text-[80px]">
                      {val.arabic.name}
                    </p>
                    <p className="syne xsm:text-[18px] mt-2 text-[24px] font-[700] tracking-wide">
                      {val.english.name}
                    </p>
                    <p className="lime xsm:text-[18px] flex-1 px-[30px] pt-10 text-center text-[24px] font-[400] italic">
                      {val.english.meaning}
                    </p>
                    {/* <p className="gulzar flex-1 px-[30px] pt-10 text-center text-[30px] font-[400]  xsm:text-[18px]">
                    {val.urdu.meaning}
                  </p> */}
                  </div>
                  <span className="absolute bottom-[20px] right-[20px] z-50 hidden text-white">
                    {" "}
                    {`--->`}{" "}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Names;
