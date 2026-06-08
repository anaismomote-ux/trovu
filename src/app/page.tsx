import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedProfessionals from "@/components/home/FeaturedProfessionals";
import HowItWorks from "@/components/home/HowItWorks";
import TrustSection from "@/components/home/TrustSection";
import GiftVouchersBanner from "@/components/home/GiftVouchersBanner";
import ForProviders from "@/components/home/ForProviders";
import AffiliateAndBusiness from "@/components/home/AffiliateAndBusiness";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProfessionals />
      <HowItWorks />
      <TrustSection />
      <GiftVouchersBanner />
      <ForProviders />
      <AffiliateAndBusiness />
      <Testimonials />
      <CTASection />
    </>
  );
}
