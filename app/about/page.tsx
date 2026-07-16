import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import WhyChooseUs  from "@/components/about/WhyChooseUs";
import MissionVision from "@/components/about/MissionVision";
import Coverage from "@/components/about/Coverage";
import CompanyStats from "@/components/about/CompanyStats";
import ContactSection from "@/components/about/CompanyStats";
export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <Coverage />
      <WhyChooseUs />
      <CompanyStats />
      <ContactSection />
    </main>
  );
}