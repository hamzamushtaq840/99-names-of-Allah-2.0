import ArabicName from "@/app/_components/single-name/ArabicName";
import NameAudio from "@/app/_components/single-name/NameAudio";
import EnglishName from "@/app/_components/single-name/EnglishName";
import HadithMention from "@/app/_components/single-name/HadithMention";
import Heading from "@/app/_components/single-name/Heading";
import Intro from "@/app/_components/single-name/Intro";
import QuranMention from "@/app/_components/single-name/QuranMention";
import { fetchName } from "@/app/lib/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PreviousButton from "@/app/_components/single-name/PreviousButton";
import NextButton from "@/app/_components/single-name/NextButton";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = params.id;
  const name = fetchName(id);

  return {
    title: name?.metaTitle,
    description: name?.metaDescription,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const name = fetchName(id);

  if (!name) {
    notFound();
  }

  return (
    <main className="flex min-h-[100vh] flex-col items-center">
      <div className="flex items-center gap-10">
        <PreviousButton prevName={name?.prevName!} />
        <Heading name={name} />
        {/* <ArabicName name={name?.arabic?.name} /> */}
        {/* <NameAudio name={name?.english?.name} /> */}
        <NextButton nextName={name?.nextName!} />
      </div>

      <EnglishName name={name?.english?.name} />
      <Intro intro={name?.intro} />

      {/* <p className="rubik mt-8 text-[26px] font-[600] text-white">Mentions</p>
      <section className="xsm:flex-col mt-6 flex w-full justify-center gap-12 px-[55px]">
        <QuranMention mentions={name.quranMentions} />
        <HadithMention mentions={name.hadithMentions} />
      </section> */}
    </main>
  );
}
