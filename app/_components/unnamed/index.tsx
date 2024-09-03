import Image from "next/image";
import { gulzar } from "../ui/fonts";

const Unnamed = () => {
  return (
    <div className="mx-24 mb-20 mt-20 flex items-center justify-between xsm:mx-10 xsm:mb-12 xsm:flex-col-reverse xsm:gap-10">
      <div className="flex flex-col gap-6 pr-20 xsm:pr-0">
        <h1 className="readex mt-0 text-6xl font-semibold leading-[120%] text-white xsm:text-3xl">
          Intro to The 99 Names of <span className="text-[#FB5322]">Allah</span>{" "}
          {/* <span className={`${gulzar.className} mt-[-100px]`}>ﷻ</span> */}
        </h1>
        <span className="readex w-[95%] text-xl font-light leading-[31px] text-[#a4a4a4] xsm:w-full xsm:text-lg">
          The 99 names of Allah (known as Asma ul Husna) serve as a mosaic of
          His infinite attributes, each one reflecting a unique quality of the
          Creator that resonates with the human experience. These names are not
          just titles; they are descriptors of Allah&apos;s actions in the world
          and His relationship with creation. In the Quran, Allah introduces
          Himself through these names, laying a foundation for love and
          understanding.
        </span>
      </div>
      <div className="relative h-[649px] min-w-[449px] overflow-hidden rounded-xl xsm:h-[500px] xsm:min-w-full xsm:p-10">
        {/* "https://i.pinimg.com/originals/f2/35/01/f235016367d4708d2b1e851a338dc51b.jpg" */}
        {/* "https://i.pinimg.com/originals/c6/42/9c/c6429ca185919142ff176c3be02ea4f1.jpg" */}
        <Image src={"/unnamed.jpg"} loading="eager" alt="My Image" fill />
      </div>
    </div>
  );
};

export default Unnamed;
