// Core
import { Metadata } from "next";
import { notFound } from "next/navigation";

// UI Components
import Navbar from "@/components/ui/navbar";
import Heading from "@/components/single-name/heading";
import Content from "@/components/single-name/content";
import Heading2Title from "@/components/ui/headings/heading2-title";
import { QuranMention } from "@/components/single-name/mentions/quran";
import { HadithMention } from "@/components/single-name/mentions/hadith";

// Methods
import { fetchName } from "@/lib/data";

// Metadata Method
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
    <>
      <Navbar />
      <main className="mx-8 mt-8 flex flex-col items-center sm:mx-20">
        <Heading name={name} />
        <Content content={name?.intro} />

        {/* {name.hadithMentions && name.quranMentions && ( <>
        <span className="mb-10 mt-[-10px]">{ICONS.divider()}</span>
        <Heading2Title content="Mentions" isSmallText />
        <section className="mt-6 flex w-full flex-col justify-center gap-12 sm:w-[97%] sm:flex-row">
        <QuranMention mentions={name?.quranMentions} />
        <HadithMention mentions={name.hadithMentions} />
        </section>
        </>
        )} */}
      </main>
    </>
  );
}
