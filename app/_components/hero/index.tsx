import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-28 mt-16 h-[calc(100vh-160px)] bg-black">
      <h1 className="readex name text-white">99 NAMES OF ALLAH</h1>

      <div className="mt-10 grid grid-cols-2 gap-10">
        <div className="h-[1px] w-full bg-line"></div>
        <div className="text-grey mt-2 flex flex-col text-xl">
          <span className="readex font-light">
            He is Allah, the Creator, the Originator, The Fashioner, to Him
            belong the most beautiful names...
          </span>
          <span className="text-orange readex ml-auto text-sm">
            Surah Al-Hashr 59:24
          </span>
        </div>
      </div>

      <div className="mt-20 flex justify-center">
        <Image
          src="https://assets-global.website-files.com/65ec76596f839f619b8b82fe/660a48e25f4b7a8e5c1ed820_Scroll.webp"
          loading="eager"
          width={28}
          height={32}
          alt="scroll"
        />
      </div>
    </section>
  );
}
