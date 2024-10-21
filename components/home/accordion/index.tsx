"use client";
// Core
import { useState } from "react";

// Constant
import { ACCORDIANS } from "@/lib/constants";

// Library
import parse from "html-react-parser";

// Icons
import { IoIosArrowDown } from "react-icons/io";

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
                  activeIndex === index ? "rotate-[180deg]" : ""
                } min-w-10 text-gray-500 transition-all duration-300 group-hover:text-white sm:min-w-max`}
              >
                <IoIosArrowDown />
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
