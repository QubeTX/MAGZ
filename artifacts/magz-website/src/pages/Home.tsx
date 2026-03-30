import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Brands } from "@/components/Brands";
import { Gallery } from "@/components/Gallery";
import { Careers } from "@/components/Careers";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <Brands />
      <Gallery />
      <Careers />
      <Footer />
    </main>
  );
}
