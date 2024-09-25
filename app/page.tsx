import Hadith from "@/app/components/hadith";
import Hero from "@/app/components/hero";
import Names from "@/app/components/names";
import Accordion from "./components/accordion";
import Unnamed from "./components/unnamed";

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
