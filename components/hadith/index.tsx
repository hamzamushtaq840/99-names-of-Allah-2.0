"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KABAH from "@/assets/KABAH.jpg";
import Image from "next/image";

const EnabledDot = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
      fill="#FB5322"
    />
  </svg>
);

const DisabledDot = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
      fill="white"
    />
  </svg>
);

const Hadith = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current: any, next: any) => setActiveSlide(next),
    customPaging: (i: any) => (
      <div>{i === activeSlide ? <EnabledDot /> : <DisabledDot />}</div>
    ),
    appendDots: (dots: any) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="text-black">
      <div className="mx-24 mb-20 flex items-center justify-between">
        <div className="flex flex-col gap-6 pr-20">
          <h1 className="readex mt-0 text-5xl font-semibold leading-[120%] text-white">
            I provide artistic <span className="text-[#FB5322]">solutions</span>{" "}
            to meet your business requirements.
          </h1>
          <span className="readex text-xl font-[300] text-[#a4a4a4]">
            Direct your energy towards growing your business, and entrust me
            with the task of efficiently presenting your business in the digital
            world, setting it apart from competitors.
          </span>
        </div>
        <div className="relative h-[649px] min-w-[449px] overflow-hidden rounded-xl">
          {/* "https://i.pinimg.com/originals/f2/35/01/f235016367d4708d2b1e851a338dc51b.jpg" */}
          {/* "https://i.pinimg.com/originals/c6/42/9c/c6429ca185919142ff176c3be02ea4f1.jpg" */}
          <Image
            src={
              "https://i.pinimg.com/originals/b3/e1/46/b3e1465360a979b69676242154ed86d3.jpg"
            }
            alt="My Image"
            fill
          />
        </div>
      </div>

      <div className="readex about-text abc ml-24 mt-7">
        <h1 className="text-outline">Hadiths</h1>
      </div>

      <div className="slider-container mt-40 px-[6px] text-white">
        <Slider {...settings}>
          {/* Hadith 1 */}
          <>
            <div className="flex justify-between px-24">
              <p className="readex w-[33%] text-4xl font-semibold">
                Sahih Muslim 2677
              </p>
              <p className="readex w-[66%] text-2xl leading-relaxed text-[#c5ccd3]">
                Abu Huraira reported: The Prophet, peace and blessings be upon
                him, said, “Allah has ninety-nine names, i.e. one-hundred minus
                one, and whoever knows them will go to Paradise.”
              </p>
            </div>
          </>

          {/* Hadith 2 */}
          <>
            <div className="flex min-h-[225px] justify-between px-24">
              <p className="readex w-[33%] text-4xl font-semibold">
                Surah Al-Isra 17:1107
              </p>
              <p className="readex w-[66%] text-2xl leading-relaxed text-[#c5ccd3]">
                Say, ˹O Prophet,˺ “Call upon Allah or call upon the Most
                Compassionate—whichever you call, He has the Most Beautiful
                Names.”
              </p>
            </div>
          </>
          {/* Hadith 1 */}
          <>
            <div className="flex justify-between px-24">
              <p className="readex w-[33%] text-4xl font-semibold">
                Sahih Muslim 2677
              </p>
              <p className="readex w-[66%] text-2xl leading-relaxed text-[#c5ccd3]">
                Abu Huraira reported: The Prophet, peace and blessings be upon
                him, said, “Allah has ninety-nine names, i.e. one-hundred minus
                one, and whoever knows them will go to Paradise.”
              </p>
            </div>
          </>

          {/* Hadith 2 */}
          <>
            <div className="flex min-h-[235px] justify-between px-24">
              <p className="readex w-[33%] text-4xl font-semibold">
                Surah Al-Isra 17:1107
              </p>
              <p className="readex w-[66%] text-2xl leading-relaxed text-[#c5ccd3]">
                Say, ˹O Prophet,˺ “Call upon Allah or call upon the Most
                Compassionate—whichever you call, He has the Most Beautiful
                Names.”
              </p>
            </div>
          </>
        </Slider>
      </div>
    </div>
  );
};

export default Hadith;
