import ArabicName from "@/app/_components/single-name/ArabicName";
import NewAudio from "@/app/_components/single-name/Audio";
import HadithMention from "@/app/_components/single-name/HadithMention";
import Heading from "@/app/_components/single-name/Heading";
import Intro from "@/app/_components/single-name/Intro";
import QuranMention from "@/app/_components/single-name/QuranMention";
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
    <main className="flex min-h-[100vh] flex-col items-center">
      <section className="flex items-center gap-4">
        <ArabicName arabicName={name?.arabic?.name} />
        <NewAudio englishName={name?.english?.name} />
      </section>

      <Heading content={name?.english?.name} />
      <Intro intro={name?.intro} />

      <p className="rubik mt-8 text-[26px] font-[600] text-white">Mentions</p>
      <section className="xsm:flex-col mt-6 flex w-full justify-center gap-12 px-[55px]">
        <QuranMention mentions={name.quranMentions} />
        <HadithMention mentions={name.hadithMentions} />
      </section>
    </main>
  );
}
