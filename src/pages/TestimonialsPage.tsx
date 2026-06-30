import { Star, Quote } from "lucide-react";
import { testimonials, reviewCount } from "../data/testimonials";
import { Container } from "../components/ui/Container";
import { PageMeta } from "../components/layout/PageMeta";
import { SectionHeading } from "../components/ui/SectionHeading";
import { SafeImage } from "../components/ui/SafeImage";
import { AnimateIn } from "../components/motion/AnimateIn";
import { StaggerGrid } from "../components/motion/StaggerGrid";

export function TestimonialsPage() {
  return (
    <>
      <PageMeta
        title="Testimonials"
        description="Read what our clients say about buying property in Egypt with El Albab Real Estate."
      />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <Container className="py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              title="Client Success Stories"
              subtitle="Trusted by investors and families across Africa and beyond."
              className="mb-0"
            />
            <AnimateIn delay={0.15} className="md:shrink-0">
              <div className="flex flex-wrap items-center gap-3 pb-2">
                <div className="flex -space-x-2">
                  {testimonials.slice(0, 4).map((t) => (
                    <SafeImage
                      key={t.id}
                      src={t.image}
                      alt=""
                      className="h-10 w-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <p className="text-sm text-neutral-600">
                  More than <strong>{reviewCount}+</strong> reviews
                </p>
              </div>
            </AnimateIn>
          </div>

          <StaggerGrid className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <Quote className="h-8 w-8 text-emerald" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
                <p className="mt-4 leading-relaxed text-neutral-600">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-4">
                  <SafeImage
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-neutral-500">{t.location}</p>
                  </div>
                </div>
              </article>
            ))}
          </StaggerGrid>
        </Container>
      </div>
    </>
  );
}
