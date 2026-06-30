import type { ReactNode } from "react";
import { Container } from "../ui/Container";
import { SafeImage } from "../ui/SafeImage";
import { MotionReveal } from "../motion/MotionReveal";

interface PageHeroProps {
  image: string;
  imageAlt?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}

export function PageHero({
  image,
  imageAlt = "",
  eyebrow,
  title,
  subtitle,
  children,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <SafeImage
        src={image}
        alt={imageAlt}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/25 to-ink/80" />

      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-20 pt-20 sm:pb-28 sm:pt-24 lg:pb-32 lg:pt-28">
        <div className="max-w-3xl">
          {eyebrow && (
            <MotionReveal as="p" delay={0.1} className="text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
              {eyebrow}
            </MotionReveal>
          )}
          <MotionReveal
            as="h1"
            delay={0.2}
            className={`font-[family-name:var(--font-heading)] text-3xl font-bold leading-[1.15] text-white sm:text-4xl md:text-5xl lg:text-6xl ${
              eyebrow ? "mt-3 sm:mt-4" : ""
            }`}
          >
            {title}
          </MotionReveal>
          {subtitle && (
            <MotionReveal
              as="p"
              delay={0.3}
              className="mt-3 text-base text-white/90 sm:mt-4 sm:max-w-xl sm:text-lg"
            >
              {subtitle}
            </MotionReveal>
          )}
          {children && (
            <MotionReveal delay={0.4} className="mt-6 sm:mt-8">
              {children}
            </MotionReveal>
          )}
        </div>
      </Container>
    </section>
  );
}
