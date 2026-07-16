import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import BranchNetwork from "@/components/contact/BranchNetwork";
import ContactForm from "@/components/contact/ContactForm";
import MapSection from "@/components/contact/MapSection";
import SupportSection from "@/components/contact/SupportSection";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <ContactInfo />

      <BranchNetwork />

      <MapSection />

      <ContactForm />

      <SupportSection />
    </main>
  );
}