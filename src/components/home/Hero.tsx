import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { site } from "../../data/site";
import { stockImages } from "../../lib/images";
import { scaleIn } from "../../lib/motion";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SafeImage } from "../ui/SafeImage";
import { MotionReveal } from "../motion/MotionReveal";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <SafeImage
        src={stockImages.hero}
        alt="Luxury property in Egypt"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/25 to-ink/80" />

      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-20 pt-20 sm:pb-28 sm:pt-24 lg:pb-32 lg:pt-28">
        <MotionReveal variant={scaleIn} delay={0.15} className="mb-6 w-full max-w-sm rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur sm:p-5 lg:absolute lg:right-8 lg:top-28 lg:mb-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald">
            Featured
          </p>
          <p className="mt-1 font-[family-name:var(--font-heading)] text-base font-bold text-ink sm:text-lg">
            New Administrative Capital
          </p>
          <p className="text-sm text-neutral-600">Premium skyline residences</p>
          <p className="mt-2 font-[family-name:var(--font-heading)] text-xl font-bold text-gold sm:text-2xl">
            From EGP 2.5M
          </p>
        </MotionReveal>

        <div className="max-w-3xl">
          <MotionReveal as="p" delay={0.1} className="text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            El Albab Real Estate
          </MotionReveal>
          <MotionReveal
            as="h1"
            delay={0.2}
            className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold leading-[1.15] text-white sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Opening Doors to Egypt&apos;s{" "}
            <span className="text-gold">Finest Properties</span>
          </MotionReveal>
          <MotionReveal as="p" delay={0.3} className="mt-3 text-base text-white/90 sm:mt-4 sm:max-w-xl sm:text-lg">
            {site.tagline}
          </MotionReveal>
          <MotionReveal delay={0.4} className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button to="/properties" variant="primary" size="lg" className="w-full sm:w-auto">
              View Properties
            </Button>
            <Button to="/contact" variant="ghost" size="lg" className="w-full sm:w-auto">
              Contact Us
            </Button>
          </MotionReveal>
        </div>

        <Link
          to="#intro"
          className="absolute bottom-5 right-4 flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white sm:bottom-8 sm:right-6 lg:right-8"
        >
          <span className="sr-only sm:not-sr-only sm:inline">Scroll Down</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald text-white">
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </span>
        </Link>
      </Container>
    </section>
  );
}
