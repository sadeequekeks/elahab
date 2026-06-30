import { services } from "../data/services";
import { openWhatsApp } from "../lib/whatsapp";
import { site } from "../data/site";
import { Container } from "../components/ui/Container";
import { PageMeta } from "../components/layout/PageMeta";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { StaggerGrid } from "../components/motion/StaggerGrid";

export function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Services"
        description="Residential sales, commercial properties, investment consultation, and relocation assistance in Egypt."
      />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <Container className="py-8 sm:py-12 lg:py-16">
          <SectionHeading
            title="Our Services"
            subtitle="End-to-end real estate solutions for buyers, investors, and families relocating to Egypt."
          />
          <div className="mb-16 rounded-3xl border border-neutral-100 bg-neutral-50 p-8 text-center md:text-left">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-2">
              About Us | 28 September 2025
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold uppercase tracking-wider text-ink sm:text-3xl">
              Comprehensive Real Estate Services
            </h2>
            <div className="mt-6 inline-block bg-gold px-6 py-3 rounded-xl shadow-xs">
              <span className="font-[family-name:var(--font-heading)] text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white block">
                From Vision to Reality, Every Step Matters
              </span>
            </div>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-600">
              Our services cover all aspects of real estate, including residential property acquisitions, commercial leasing, land investments, and property management. With El Albab Real Estate Agency, you can trust every detail is handled with precision, ensuring a seamless and rewarding experience.
            </p>
            <div className="mt-8 border-t border-neutral-200/60 pt-6">
              <span className="font-[family-name:var(--font-heading)] text-xs font-bold uppercase tracking-wider text-emerald">
                Full-Service Solutions Tailored to You
              </span>
            </div>
          </div>
          <StaggerGrid className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-neutral-100 p-8 transition hover:border-emerald/30 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold transition group-hover:bg-emerald/10 group-hover:text-emerald">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-heading)] text-xl font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-neutral-600">{service.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-6"
                  onClick={() =>
                    openWhatsApp(
                      `Hello ${site.name}, I'm interested in your ${service.title} service.`,
                    )
                  }
                >
                  Learn More
                </Button>
              </div>
            ))}
          </StaggerGrid>
        </Container>
      </div>
    </>
  );
}
