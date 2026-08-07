import HeroOrb from "./HeroOrb";
import HeroButtons from "./HeroButtons";
import HeroDivider from "./HeroDivider";
import HeroTagline from "./HeroTagline";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center overflow-hidden pt-36">

      <HeroOrb />

      <HeroButtons />

      <HeroDivider />

      <HeroTagline />

    </section>
  );
}