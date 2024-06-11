"use client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HadithSlider from "./HadithSlider";
import Heading2 from "../ui/Heading2";

const Hadith = () => {
  return (
    <>
      <Heading2 content="Hadiths" id="hadiths" />

      <HadithSlider />
    </>
  );
};

export default Hadith;
