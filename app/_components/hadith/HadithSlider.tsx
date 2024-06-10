import CustomDot from "@/app/_assets/CustomDot";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Hadith from "./Hadith";
import hadiths from "./_hadiths";

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
    customPaging: (i: number) => (
      <div>
        <CustomDot />
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      {hadiths.map((hadith) => {
        return <Hadith hadith={hadith} />;
      })}
    </Slider>
  );
};

export default HadithSlider;
