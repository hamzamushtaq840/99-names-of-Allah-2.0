import Image from "next/image";
import LocomotiveScroll from "./LocomotiveScroll";

export default function Hero() {
  return (
    <section className="mx-28 mt-16 h-[calc(100vh-160px)] xsm:mx-10 xsm:mt-6 xsm:h-auto">
      <h1 className="name text-whiteHeading">
        99 NAMES OF <span className="text-orange">ALLAH</span>
      </h1>

      <div className="mt-6 grid grid-cols-2 gap-10 xsm:flex xsm:flex-col">
        <div className="h-[1px] w-full bg-line"></div>
        <div className="text-whiteHeading mt-10 flex flex-col xsm:mt-1 xsm:gap-5">
          <span className="text-xl leading-[37px] tracking-wide xsm:text-base xsm:leading-[34px]">
            He is Allah, the Creator, the Originator, The Fashioner, to Him
            belong the most beautiful names .....
          </span>
          <span className="ml-auto rounded-md bg-[#cccccc3a] px-2 py-1 text-sm text-[#ffffffae]">
            Surah Al-Hashr 59:24
          </span>
        </div>
      </div>

      <div className="mt-20 flex justify-center xsm:my-10">
        <Image
          src="https://assets-global.website-files.com/65ec76596f839f619b8b82fe/660a48e25f4b7a8e5c1ed820_Scroll.webp"
          loading="eager"
          width={28}
          height={32}
          alt="scroll"
        />
      </div>
      <LocomotiveScroll />
    </section>
  );
}
