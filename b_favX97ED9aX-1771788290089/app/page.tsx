import { HeroSection } from "@/components/landing/hero-section"
import { PainSection } from "@/components/landing/pain-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { LearnSection } from "@/components/landing/learn-section"
import { AudienceSection } from "@/components/landing/audience-section"
import { TrustSection } from "@/components/landing/trust-section"
import { OfferSection } from "@/components/landing/offer-section"
import { GuaranteeSection } from "@/components/landing/guarantee-section"
import { FaqSection } from "@/components/landing/faq-section"
import { FinalCtaSection } from "@/components/landing/final-cta-section"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <LearnSection />
      <AudienceSection />
      <TrustSection />
      <OfferSection />
      <GuaranteeSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
