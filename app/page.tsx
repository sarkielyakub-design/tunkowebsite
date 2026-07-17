import Navbar from "@/components/home/header/Navbar";

import Hero from "@/components/home/Hero";
import Statistics from "@/components/home/Statistics";
import WhyChooseTunko from "@/components/home/WhyChooseTunko";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Download from "@/components/home/Download";

import ExchangeSection from "@/components/home/exchange/ExchangeSection";
import CountriesSection from "@/components/home/countries/CountriesSection";
import ServicesSection from "@/components/home/services/ServiceSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        <Hero />

        <Statistics />

        <ServicesSection />

        <ExchangeSection />

        <CountriesSection />

        <WhyChooseTunko />

        <Testimonials />

        <FAQ />

        <Download />
      </main>
    </>
  );
}