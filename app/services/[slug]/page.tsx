import ServiceHero from "@/components/home/services/ServiceHero";
import ServiceFeatures from "@/components/home/services/ServiceFeatures";
import ServiceBenefits from "@/components/home/services/ServiceBenefits";
import ServiceHowItWorks from "@/components/home/services/ServiceHowItWorks";
import ServiceFAQ from "@/components/home/services/ServiceFAQ";
import ServiceCTA from "@/components/home/services/ServiceCTA";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="overflow-hidden">
      <ServiceHero slug={slug} />
      <ServiceFeatures slug={slug} />
      <ServiceBenefits slug={slug} />
      <ServiceHowItWorks slug={slug} />
      <ServiceFAQ slug={slug} />
      <ServiceCTA />
    </main>
  );
}