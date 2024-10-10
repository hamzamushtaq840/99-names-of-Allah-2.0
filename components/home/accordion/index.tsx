"use client";
// Core
import { useState } from "react";

// Constant
import { ACCORDIANS } from "@/lib/constants";

// Library
import parse from "html-react-parser";

const Accordion = () => {
  // State
  const [activeIndex, setActiveIndex] = useState<Number | null>();

  // Handler
  const toggleAccordion = (index: number) => {
    if (index === activeIndex) {
      return setActiveIndex(null);
    }
    setActiveIndex(index);
  };

  return (
    <section className="mx-8 my-28 flex flex-col text-white sm:mx-20">
      {ACCORDIANS.map((section, index) => (
        <div
          key={index}
          onClick={() => toggleAccordion(index)}
          className={`mx-2 cursor-pointer border-b-[0.1px] border-[#cccccc93] ${
            activeIndex === index ? "mx-[2px] max-h-[1000px]" : "max-h-[52px]"
          } group overflow-hidden transition-all duration-500`}
        >
          <div
            className={`${
              activeIndex === index ? "my-2 rounded-lg bg-orangeSub px-4" : ""
            } space-y-4 py-2 transition-all duration-500 sm:py-4`}
          >
            <div className={`mb-2 flex w-full justify-between`}>
              {/* heading */}
              <h2
                className={`select-none text-sm tracking-[0.05em] sm:text-base ${
                  activeIndex === index
                    ? "text-lg text-white"
                    : "text-[#ccccccb1]"
                } transition-all duration-200 group-hover:text-white`}
              >
                {section.title}
              </h2>
              <span
                className={`${
                  activeIndex === index ? "rotate-[-90deg]" : "rotate-[90deg]"
                } min-w-10 text-gray-500 transition-all duration-300 group-hover:text-white sm:min-w-max`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5031 11.3008L9.90312 5.60078C9.50312 5.20078 8.90313 5.20078 8.50313 5.60078C8.10313 6.00078 8.10313 6.60078 8.50313 7.00078L13.4031 11.9008L8.50313 16.8008C8.30313 17.0008 8.20312 17.2008 8.20312 17.5008C8.20312 18.1008 8.60312 18.5008 9.20312 18.5008C9.50312 18.5008 9.70312 18.4008 9.90312 18.2008L15.6031 12.5008C15.9031 12.3008 15.9031 11.7008 15.5031 11.3008Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>

            {/* content */}
            <div className="select-none text-xs font-light leading-[30px] text-grey sm:text-base sm:leading-[26px]">
              {parse(section.content)}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Accordion;
