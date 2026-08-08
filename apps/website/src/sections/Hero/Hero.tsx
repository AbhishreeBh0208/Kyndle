import HeroOrb from "./HeroOrb";
import HeroWaves from "@/components/Hero/HeroWaves";
import HeroActions from "./HeroActions";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center overflow-hidden pt-36" id="hero">

      <HeroWaves />

      <HeroOrb />

      <HeroActions />

    </section>
  );
}