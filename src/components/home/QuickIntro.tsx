import { Container } from "../ui/Container";
import { AnimateIn } from "../motion/AnimateIn";

export function QuickIntro() {
  return (
    <section id="intro" className="py-12 sm:py-16 lg:py-24">
      <Container>
        <AnimateIn className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Who We Are
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-ink sm:text-4xl">
            The First Nigerian-Licensed Real Estate Agency in Egypt
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            El Albab Real Estate bridges African investors and international buyers
            with Egypt&apos;s most promising property markets — from the New
            Administrative Capital to the Mediterranean North Coast.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            Our mission is simple: deliver transparency, trust, and premium service
            at every step — from your first WhatsApp message to holding the keys to
            your new home.
          </p>
        </AnimateIn>
      </Container>
    </section>
  );
}
