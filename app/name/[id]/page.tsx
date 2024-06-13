import NewAudio from "@/app/_components/single-name/Audio";
import HadithMention from "@/app/_components/single-name/HadithMention";
import Heading from "@/app/_components/single-name/Heading";
import Intro from "@/app/_components/single-name/Intro";
import QuranMention from "@/app/_components/single-name/QuranMention";
import { fetchName } from "@/app/lib/data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = params.id;
  const name = fetchName(id);
  return {
    title: name?.metaTitle,
    description: name?.metaDescription,
  };
}

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const name = fetchName(id);

  if (!name) {
    notFound();
  }

  return (
    <div className="flex min-h-[100vh] flex-col items-center">
      <div className="my-[60px] flex flex-col items-center">
        <div className="flex items-center gap-4">
          <h1 className="rakkas ml-5 bg-gradient-to-r from-[#FE6F2D] to-[#FDCE38] bg-clip-text text-[96px] leading-[180px] text-transparent">
            {name?.arabic?.name}
          </h1>
          <NewAudio englishName={name?.english?.name} />
        </div>

        <Heading content={name?.english?.name} />
        <Intro intro={name?.intro} />

        <p className="rubik mt-8 text-[26px] font-[600] text-white">Mentions</p>
        <section className="xsm:flex-col mt-6 flex w-full justify-center gap-12 px-[55px]">
          <QuranMention mentions={name.quranMentions} />
          <HadithMention mentions={name.hadithMentions} />
        </section>
      </div>
    </div>
  );
}
