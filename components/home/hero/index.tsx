// Core
import Image from "next/image";

// UI Components
import Heading1 from "@/components/ui/headings/heading1";

export default function Hero() {
  return (
    <section className="mx-8 mt-8 sm:mx-24 sm:mt-16">
      <Heading1 />

      <div className="mt-8 flex flex-col gap-8 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-10">
        <hr className="w-full bg-line"></hr>

        <div className="flex flex-col gap-5 sm:mt-14 sm:gap-0">
          <p className="text-base font-light leading-[30px] text-grey sm:text-xl sm:leading-[35px]">
            He is Allah, the Creator, the Originator, The Fashioner, to Him
            belong the most beautiful names .....
          </p>
          <p className="ml-auto mt-2 rounded-md bg-ayahBg px-2 py-1 text-sm text-ayahText sm:mt-10">
            Surah Al-Hashr 59:24
          </p>
        </div>
      </div>

      <div className="my-10 mt-16 flex justify-center sm:my-0 sm:mt-20">
        <Image
          src="https://assets-global.website-files.com/65ec76596f839f619b8b82fe/660a48e25f4b7a8e5c1ed820_Scroll.webp"
          width={28}
          height={32}
          alt="scroll"
          priority
        />
      </div>
    </section>
  );
}
