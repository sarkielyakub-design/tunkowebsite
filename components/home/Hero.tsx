import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContents";
import HeroPhone from "./HeroPhone";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">

      <HeroBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">

        <HeroContent />

        <HeroPhone />

      </div>

    </section>
  );
}