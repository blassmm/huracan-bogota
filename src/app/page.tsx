import Hero from "./sections/Hero";
import VisitBanner from "./sections/VisitBanner";
import CategoriesSection from "./sections/CategoriesSection";
import MethodologyPreview from "./sections/MethodologyPreview";
import ProductsPreview from "./sections/ProductsPreview";
import BenefitsSection from "./sections/BenefitsSection";
import SponsorsSection from "./sections/SponsorsSection";
import CTASection from "./sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <VisitBanner />
      <CategoriesSection />
      <MethodologyPreview />
      <ProductsPreview />
      <BenefitsSection />
      <SponsorsSection />
      <CTASection />
    </>
  );
}
