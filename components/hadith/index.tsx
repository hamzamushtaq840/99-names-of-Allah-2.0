"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
