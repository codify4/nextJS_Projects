import Hero from "@/components/Hero";
import Options from "@/components/Options";
import Services from "@/components/Services";
import TeamSection from "@/components/TeamSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Options />
      <TeamSection />
    </main>
  );
}
