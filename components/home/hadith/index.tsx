// UI Components
import HadithSlider from "./slider";
import Heading2Title from "@/components/ui/headings/heading2-title";

const Hadith = () => {
  return (
    <section className="mx-8 mt-8 flex flex-col gap-7 px-2 sm:mx-20 sm:mt-16 sm:gap-20">
      <Heading2Title content="Hadiths" id="hadiths" />
      <HadithSlider />
    </section>
  );
};

export default Hadith;
