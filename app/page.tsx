import Hero from "@/components/home/hero";
import Intro from "../components/home/intro";
import Hadith from "@/components/home/hadith";
import Names from "@/components/home/names";
import Accordion from "../components/home/accordion";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Hadith />
      <Names />
      {/* <Accordion /> */}
    </main>
  );
}
