"use client";
// Library
import Slider from "react-slick";

// UI Components
import HadithCard from "../card";

// Utils and Constants
import { hadiths } from "@/lib/constants";

// Icons
import { ICONS } from "@/assets/icons";

// Styles
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const HadithSlider = () => {
  // Configuration
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: () => <div>{ICONS.customDot()}</div>,
  };

  return (
    <div>
      <Slider {...settings}>
        {hadiths.map((hadith, index) => {
          return <HadithCard key={index} hadith={hadith} />;
        })}
      </Slider>
    </div>
  );
};

export default HadithSlider;
