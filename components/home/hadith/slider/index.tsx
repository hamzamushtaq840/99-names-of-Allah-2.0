"use client";
// Libraries
import Slider from "react-slick";

// Custom Components
import CustomDot from "@/assets/CustomDot";
import HadithCard from "../card";

// Utils and Constants
import { hadiths } from "@/lib/constants";

// Styles
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const HadithSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: () => (
      <div>
        <CustomDot />
      </div>
    ),
  };

  return (
    <div className="mt-40 px-2 xsm:mt-16">
      <Slider {...settings}>
        {hadiths.map((hadith, index) => {
          return <HadithCard key={index} hadith={hadith} />;
        })}
      </Slider>
    </div>
  );
};

export default HadithSlider;
