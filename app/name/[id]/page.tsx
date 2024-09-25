import EnglishName from "@/app/components/single-name/EnglishName";
import Heading from "@/app/components/single-name/Heading";
import Intro from "@/app/components/single-name/Intro";
import NextButton from "@/app/components/single-name/NextButton";
import PreviousButton from "@/app/components/single-name/PreviousButton";
import { fetchName } from "@/app/lib/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

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
    <main className="mt-8 flex flex-col items-center">
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
