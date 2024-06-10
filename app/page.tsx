import Hadith from "@/app/_components/hadith";
import Hero from "@/app/_components/hero";
import Names from "@/app/_components/names";
import Unnamed from "./_components/unnamed";
import Accordion from "./_components/accordion";

export default function Home() {
  return (
    <main>
      <Hero />
      <Unnamed />
      <Hadith />
      <Names />
      <Accordion />
    </main>
  );
}
