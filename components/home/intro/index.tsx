// Core
import Image from "next/image";

const Intro = () => {
  return (
    <section className="mx-24 mb-20 mt-20 flex items-center justify-between xsm:mx-10 xsm:mb-12 xsm:flex-col-reverse xsm:gap-10">
      {/* left side */}
      <div className="flex flex-col gap-6 pr-20 xsm:pr-0">
        <h2 className="readex mt-0 text-6xl font-semibold leading-[120%] text-white xsm:text-3xl">
          Intro to The 99 Names of <span className="text-[#FB5322]">Allah</span>{" "}
        </h2>

        <p className="readex w-[95%] text-xl font-light leading-[35px] text-[#a4a4a4] xsm:w-full xsm:text-lg">
          {/* The 99 names of Allah (known as Asma ul Husna) serve as a mosaic of
          His infinite attributes, each one reflecting a unique quality of the
          Creator that resonates with the human experience. These names are not
          just titles; they are descriptors of Allah&apos;s actions in the world
          and His relationship with creation. In the Quran, Allah introduces
          Himself through these names, laying a foundation for love and
          understanding. */}
          There is no specific order to the names of Allah. We cannot
          definitively state which name is first and which is last. The
          sequencing we see often is just given by people, most likely in order
          of rhyme so that it is easier to pronounce them in continuity.
          Besides, Quran doesn&apos;t contain only 99 names/ attributes, but
          there are more. Since they are in phrases, like two attributes
          together, so the scholars did not count them in the list. The list of
          99 names is made because of a hadith which mentions of 99 names which
          is mentioned below.
        </p>
      </div>

      {/* right side */}
      <div className="relative h-[649px] min-w-[449px] overflow-hidden rounded-xl xsm:h-[500px] xsm:min-w-full xsm:p-10">
        <Image src={"/unnamed.jpg"} loading="eager" alt="My Image" fill />
      </div>
    </section>
  );
};

export default Intro;