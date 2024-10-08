// Core
import Image from "next/image";

// Custom Components
import Heading2Intro from "@/components/ui/headings/heading2-intro";

const Intro = () => {
  return (
    <section className="mx-8 mb-12 mt-16 flex flex-col-reverse items-center justify-between gap-10 sm:mx-20 sm:mb-20 sm:flex-row sm:gap-0">
      {/* left side */}
      <div className="flex flex-col gap-4 sm:gap-6">
        <Heading2Intro />

        <p className="ml-1 w-full text-base font-light leading-[30px] text-grey sm:w-[85%] sm:text-xl sm:leading-[35px]">
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
      {/* // TODO: add sizes in image */}
      <div className="relative h-[500px] min-w-full overflow-hidden rounded-xl p-10 sm:h-[649px] sm:min-w-[449px] sm:p-0">
        <Image src={"/unnamed.jpg"} loading="eager" alt="My Image" fill />
      </div>
    </section>
  );
};

export default Intro;
