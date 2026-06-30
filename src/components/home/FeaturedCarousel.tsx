import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getFeaturedProperties } from "../../data/properties";
import { PropertyCard } from "../property/PropertyCard";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export function FeaturedCarousel() {
  const featured = getFeaturedProperties();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-neutral-50 py-12 sm:py-16 lg:py-24">
      <Container>
        <SectionHeading
          title="Featured Properties"
          subtitle="Hand-picked listings across Egypt's top investment destinations."
          action={
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={scrollPrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          }
        />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {featured.map((property) => (
              <div
                key={property.slug}
                className="min-w-0 shrink-0 grow-0 basis-full sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button to="/properties" variant="secondary">
            View All Properties
          </Button>
        </div>
      </Container>
    </section>
  );
}
