// Custom Components
import Heading2 from "../../ui/headings/heading2";
import HadithSlider from "./slider";

const Hadith = () => {
  return (
    <section className="mx-8 mt-8 flex flex-col gap-7 px-2 sm:mx-20 sm:mt-16 sm:gap-20">
      <Heading2 content="Hadiths" />
      <HadithSlider />
    </section>
  );
};

export default Hadith;
