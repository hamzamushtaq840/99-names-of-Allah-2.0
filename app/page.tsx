// UI Components
import Navbar from "@/components/ui/navbar";
import Hero from "@/components/home/hero";
import Intro from "../components/home/intro";
import Hadith from "@/components/home/hadith";
import Names from "@/components/home/names";
import Accordion from "@/components/home/accordion";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <Hadith />
      <Names />
      <Accordion />
      <Footer />
    </main>
  );
}
