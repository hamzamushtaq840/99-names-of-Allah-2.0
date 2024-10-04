// Font
import { readex } from "../fonts";

const Heading3 = () => {
  return (
    <h3
      className={`${readex.className} text-3xl font-semibold leading-[45px] text-white sm:text-6xl sm:leading-[75px]`}
    >
      Intro to The 99 Names of <span className="text-[#FB5322]">Allah</span>
    </h3>
  );
};

export default Heading3;
