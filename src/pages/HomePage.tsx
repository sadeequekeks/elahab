import { PageMeta } from "../components/layout/PageMeta";
import { Hero } from "../components/home/Hero";
import { QuickIntro } from "../components/home/QuickIntro";
import { FeaturedCarousel } from "../components/home/FeaturedCarousel";
import { WhyEgypt } from "../components/home/WhyEgypt";
import { TestimonialPreview } from "../components/home/TestimonialPreview";
import { ContactTeaser } from "../components/home/ContactTeaser";

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Home"
        description="El Albab Real Estate — Nigeria's first licensed real estate agency in Egypt. Luxury properties in NAC, New Cairo, and the North Coast."
      />
      <Hero />
      <QuickIntro />
      <FeaturedCarousel />
      <WhyEgypt />
      <TestimonialPreview />
      <ContactTeaser />
    </>
  );
}
