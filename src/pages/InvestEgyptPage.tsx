import { Check } from "lucide-react";
import {
  foreignBuyerBenefits,
  investRegions,
  roiStats,
} from "../data/investEgypt";
import { openWhatsApp } from "../lib/whatsapp";
import { site } from "../data/site";
import { Container } from "../components/ui/Container";
import { PageMeta } from "../components/layout/PageMeta";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { SafeImage } from "../components/ui/SafeImage";
import { AnimateIn } from "../components/motion/AnimateIn";
import { StaggerGrid } from "../components/motion/StaggerGrid";

export function InvestEgyptPage() {
  return (
    <>
      <PageMeta
        title="Invest in Egypt"
        description="Discover why Egypt's real estate market offers exceptional ROI for African and international investors."
      />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <Container className="py-8 sm:py-12 lg:py-16">
          <SectionHeading
            title="Invest in Egypt"
            subtitle="From the New Administrative Capital to the North Coast — Egypt's property market is one of Africa's most compelling investment opportunities."
          />

          <div className="space-y-16">
            {investRegions.map((region, i) => (
              <AnimateIn
                key={region.title}
                delay={i * 0.05}
                className={`grid items-center gap-8 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <SafeImage
                    src={region.image}
                    alt={region.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-3xl object-cover"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-ink sm:text-3xl">
                    {region.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-neutral-600">{region.description}</p>
                  
                  <div className="mt-6 grid grid-cols-3 gap-2 border-y border-neutral-100 py-4 text-center">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold block">Starting Price</span>
                      <span className="text-sm font-bold text-gold">{region.startingPrice}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold block">Payment Plan</span>
                      <span className="text-sm font-bold text-ink">{region.paymentPlan}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold block">Delivery</span>
                      <span className="text-xs font-bold text-emerald block truncate">{region.delivery}</span>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2">
                    {region.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-neutral-600 text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            ))}
          </div>

          <div className="mt-20">
            <SectionHeading
              title="Market Highlights"
              subtitle="Illustrative figures based on market trends — contact us for personalized analysis."
            />
            <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {roiStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-neutral-100 bg-neutral-50 p-6 text-center"
                >
                  <p className="font-[family-name:var(--font-heading)] text-4xl font-bold text-gold">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-semibold text-ink">{stat.label}</p>
                  <p className="mt-1 text-xs text-neutral-500">{stat.note}</p>
                </div>
              ))}
            </StaggerGrid>
          </div>

          <AnimateIn className="mt-20 rounded-3xl bg-neutral-50 p-8 sm:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-ink sm:text-3xl">
              Benefits for Foreign Buyers
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {foreignBuyerBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-neutral-600">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                  {benefit}
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn delay={0.1} className="mt-16 rounded-3xl bg-emerald px-8 py-12 text-center sm:px-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white sm:text-3xl">
              Talk to Our Experts Today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/90">
              Get a free consultation on the best investment strategy for your budget and goals.
            </p>
            <Button
              variant="ghost"
              size="lg"
              className="mt-8"
              onClick={() =>
                openWhatsApp(
                  `Hello ${site.name}, I'd like to speak with an investment expert about properties in Egypt.`,
                )
              }
            >
              Contact Us on WhatsApp
            </Button>
          </AnimateIn>
        </Container>
      </div>
    </>
  );
}
