import ServiceHero from "@/components/home/services/ServiceHero";
import ServiceFeatures from "@/components/home/services/ServiceFeatures";
import ServiceBenefits from "@/components/home/services/ServiceBenefits";
import ServiceHowItWorks from "@/components/home/services/ServiceHowItWorks";
import ServiceFAQ from "@/components/home/services/ServiceFAQ";
import ServiceCTA from "@/components/home/services/ServiceCTA";

export default function ServicePage() {
  return (
    <main className="overflow-hidden">
      <ServiceHero slug={""} />
      <ServiceFeatures />
      <ServiceBenefits />
      <ServiceHowItWorks />
      <ServiceFAQ />
      <ServiceCTA />
    </main>
  );
}