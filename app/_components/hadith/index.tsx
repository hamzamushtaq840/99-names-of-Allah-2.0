"use client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Heading2 from "../ui/Heading2";
import HadithSlider from "./HadithSlider";

const Hadith = () => {
  return (
    <>
      <Heading2 content="Hadiths" id="hadiths" />

      <HadithSlider />
    </>
  );
};

export default Hadith;
