import { Award, LineChart, Shield } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { StaggerGrid } from "../motion/StaggerGrid";

const items = [
  {
    icon: LineChart,
    title: "Invest in Egypt",
    description:
      "Tap into one of Africa's fastest-growing real estate markets with government-backed megaprojects and rising foreign demand.",
  },
  {
    icon: Shield,
    title: "Licensed & Trusted",
    description:
      "Fully licensed in Egypt with verified developers, transparent contracts, and documented every step of your purchase.",
  },
  {
    icon: Award,
    title: "High ROI Potential",
    description:
      "Strategic locations in NAC, New Cairo, and the North Coast offer strong appreciation and rental yield opportunities.",
  },
];

export function WhyEgypt() {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <Container>
        <SectionHeading
          title="Why Egypt, Why El Albab"
          subtitle="Three reasons investors and families choose us for their Egyptian property journey."
          align="center"
        />
        <StaggerGrid className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-neutral-100 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-heading)] text-xl font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-neutral-600">{item.description}</p>
            </div>
          ))}
        </StaggerGrid>
      </Container>
    </section>
  );
}
