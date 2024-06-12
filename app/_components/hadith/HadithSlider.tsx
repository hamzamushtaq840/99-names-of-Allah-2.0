import CustomDot from "@/app/_assets/CustomDot";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Hadith from "./Hadith";
import hadiths from "../../lib/hadiths";

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
    <div className="mt-40 px-2">
      <Slider {...settings}>
        {hadiths.map((hadith, index) => {
          return <Hadith key={index} hadith={hadith} />;
        })}
      </Slider>
    </div>
  );
};

export default HadithSlider;
