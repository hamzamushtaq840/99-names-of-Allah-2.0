// Font
import { readex } from "../fonts";

const Heading2Intro = () => {
  return (
    <h2
      className={`${readex.className} text-3xl font-semibold leading-[45px] text-white sm:pr-20 sm:text-6xl sm:leading-[75px]`}
    >
      Intro to The 99 Names of <span className="text-[#FB5322]">Allah</span>
    </h2>
  );
};

export default Heading2Intro;
