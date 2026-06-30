import { Star, Quote } from "lucide-react";
import { testimonials, reviewCount } from "../../data/testimonials";
import { stockImages } from "../../lib/images";
import { scaleIn } from "../../lib/motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { SafeImage } from "../ui/SafeImage";
import { AnimateIn } from "../motion/AnimateIn";

export function TestimonialPreview() {
  const featured = testimonials[0];

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <Container>
        <AnimateIn className="mb-8 flex flex-col gap-4 sm:mb-10 sm:gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-ink sm:text-3xl md:text-4xl">
              Our Client Feedback
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
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
              More than <strong className="text-ink">{reviewCount}+</strong> Client Reviews
            </p>
          </div>
        </AnimateIn>

        <div className="relative min-h-[320px] overflow-hidden rounded-2xl sm:min-h-[360px] sm:rounded-3xl">
          <SafeImage
            src={stockImages.testimonialBg}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/50" />
          <AnimateIn variant={scaleIn} className="relative m-4 max-w-2xl sm:m-8 lg:m-10">
            <div className="rounded-2xl bg-white p-5 shadow-xl sm:rounded-3xl sm:p-8 lg:p-10">
              <div className="flex items-start justify-between gap-4">
                <Quote className="h-10 w-10 shrink-0 text-emerald" />
                <div className="flex gap-0.5">
                  {Array.from({ length: featured.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-base font-medium leading-relaxed text-ink sm:mt-6 sm:text-lg lg:text-xl">
                &ldquo;{featured.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <SafeImage
                  src={featured.image}
                  alt={featured.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-ink">{featured.name}</p>
                  <p className="text-sm text-neutral-500">{featured.location}</p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.15} className="mt-8 text-center">
          <Button to="/testimonials" variant="outline">
            Read More Reviews
          </Button>
        </AnimateIn>
      </Container>
    </section>
  );
}
