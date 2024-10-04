// Font
import { readex } from "../fonts";

const Heading1 = () => {
  return (
    <h1 className={`${readex.className} heading-1 text-subWhite sm:w-[1100px]`}>
      99 NAMES OF <span className="text-orange">ALLAH</span>
    </h1>
  );
};

export default Heading1;
