import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-28 mt-16 bg-black">
      <h1 className="readex name text-white">99 NAMES OF ALLAH</h1>

      <div className="mt-10 grid grid-cols-2 gap-10">
        <div>
          <div className="h-[1px] w-full bg-white"></div>
        </div>
        <div className="mt-2">
          <div className="flex flex-col text-xl text-[#A4A4A4]">
            <div>
              {/* <span className="text-[#FB5322]">" </span> */}
              <span>
                He is Allah, the Creator, the Originator, The Fashioner, to Him
                belong the most beautiful names...{" "}
              </span>
              {/* <span className="text-[#FB5322]">"</span> */}
            </div>

            <span className="ml-auto text-sm text-[#FB5322]">
              Surah Al-Hashr 59:24
            </span>
          </div>
        </div>
      </div>

      <div className="mt-14 flex justify-center">
        <img
          src="https://assets-global.website-files.com/65ec76596f839f619b8b82fe/660a48e25f4b7a8e5c1ed820_Scroll.webp"
          loading="eager"
          width="28"
          height="32"
          alt="scroll"
        />
      </div>
    </section>
  );
}
