// Core
import { Metadata } from "next";
import { notFound } from "next/navigation";

// UI Components
import Content from "@/components/single-name/content";
import Heading from "@/components/single-name/heading";

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
    <main className="mx-8 mt-8 flex flex-col items-center sm:mx-20">
      <Heading name={name} />
      <Content content={name?.intro} />

      {/* // TODO : should this be added ? */}
      {/* <p className="rubik mt-8 text-[26px] font-[600] text-white">Mentions</p>
      <section className="xsm:flex-col mt-6 flex w-full justify-center gap-12 px-[55px]">
        <QuranMention mentions={name.quranMentions} />
        <HadithMention mentions={name.hadithMentions} />
      </section> */}
    </main>
  );
}
