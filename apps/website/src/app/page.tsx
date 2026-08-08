import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Features from "@/sections/Features";
import HowItWorks from "@/sections/HowItWorks";
import Impact from "@/sections/XP/Impact";
import TimeLine from "@/sections/Timeline";
import Ranks from "@/sections/Ranks";
import CTA from "@/sections/CTA";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Features />

      <HowItWorks />

      <Impact />

      <TimeLine />

      <Ranks />

      <CTA />

      <Footer />
    </>
  );
}