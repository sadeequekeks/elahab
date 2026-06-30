import { founders, mission, vision, whyChooseUs } from "../data/founders";
import { stockImages } from "../lib/images";
import { Container } from "../components/ui/Container";
import { PageMeta } from "../components/layout/PageMeta";
import { PageHero } from "../components/layout/PageHero";
import { SectionHeading } from "../components/ui/SectionHeading";
import { SafeImage } from "../components/ui/SafeImage";
import { StaggerGrid } from "../components/motion/StaggerGrid";
import { AnimateIn } from "../components/motion/AnimateIn";

export function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Us"
        description="Meet the founders of El Albab Real Estate — Nigeria's first licensed real estate agency in Egypt."
      />

      <PageHero
        image={stockImages.aboutHero}
        imageAlt="El Albab Real Estate team"
        eyebrow="About Us"
        title={
          <>
            Meet <span className="text-gold">El Albab</span>
          </>
        }
        subtitle="Four Nigerian founders, licensed in Egypt — connecting Africa with Egypt's finest properties."
      />

      <Container className="py-10 sm:py-16 lg:py-24">
        <SectionHeading
          title="Our Story"
          subtitle="Four young Nigerian founders, licensed in Egypt, united by a vision to connect Africa with Egypt's finest properties."
        />
        <StaggerGrid className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {founders.map((founder) => (
            <article key={founder.name} className="text-center">
              <SafeImage
                src={founder.image}
                alt={founder.name}
                loading="lazy"
                className="mx-auto h-40 w-40 rounded-3xl object-cover"
              />
              <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-bold text-ink">
                {founder.name}
              </h3>
              <p className="text-sm font-medium text-gold">{founder.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{founder.bio}</p>
            </article>
          ))}
        </StaggerGrid>

        <div className="mt-20">
          <SectionHeading
            title="Video Messages from our CEO & Co-founders"
            subtitle="Watch our leadership team share insights, real estate investment advice, and El Albab's core values."
          />
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-neutral-100 bg-neutral-50 p-6 flex flex-col justify-between">
              <div>
                <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold text-ink mb-2">Introduction & Welcome</h4>
                <p className="text-xs text-neutral-500 mb-4">Message from our Co-founder on our vision & presence in Egypt.</p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm aspect-[16/9] bg-neutral-900">
                <video src={`${import.meta.env.BASE_URL}1.mp4`} controls preload="metadata" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="rounded-3xl border border-neutral-100 bg-neutral-50 p-6 flex flex-col justify-between">
              <div>
                <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold text-ink mb-2">Egypt's Market ROI</h4>
                <p className="text-xs text-neutral-500 mb-4">Co-founder explains ROI and market trends for international buyers.</p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm aspect-[16/9] bg-neutral-900">
                <video src={`${import.meta.env.BASE_URL}2.mp4`} controls preload="metadata" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="rounded-3xl border border-neutral-100 bg-neutral-50 p-6 flex flex-col justify-between">
              <div>
                <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold text-ink mb-2">Premium Support & Process</h4>
                <p className="text-xs text-neutral-500 mb-4">Detailed guide on purchasing and legal safety in Egyptian properties.</p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm aspect-[16/9] bg-neutral-900">
                <video src={`${import.meta.env.BASE_URL}3.mp4`} controls preload="metadata" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 lg:mt-20">
          <AnimateIn>
            <div className="rounded-3xl bg-neutral-50 p-6 sm:p-8">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-ink sm:text-2xl">
                Our Mission
              </h2>
              <p className="mt-4 leading-relaxed text-neutral-600">{mission}</p>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="rounded-3xl bg-ink p-6 text-white sm:p-8">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold sm:text-2xl">
                Our Vision
              </h2>
              <p className="mt-4 leading-relaxed text-neutral-300">{vision}</p>
            </div>
          </AnimateIn>
        </div>

        <div className="mt-20">
          <SectionHeading
            title="Why Choose El Albab Real Estate?"
            subtitle="What sets us apart in Egypt's competitive property market."
          />
          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-neutral-100 p-6 transition hover:border-gold/30 hover:shadow-md bg-white"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            ))}
          </StaggerGrid>
        </div>

        <div className="mt-20 rounded-3xl border border-neutral-100 bg-neutral-50 p-8 sm:p-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold uppercase tracking-wider text-ink sm:text-3xl text-center">
            Why Choose El Albab Real Estate Agency?
          </h2>
          <div className="mt-6 text-center">
            <div className="inline-block bg-gold px-6 py-3 rounded-xl shadow-xs">
              <span className="font-[family-name:var(--font-heading)] text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white block">
                Expertise You Trust, Success You Deserve
              </span>
            </div>
          </div>
          <div className="mt-8 max-w-4xl mx-auto space-y-6 text-base leading-relaxed text-neutral-600">
            <p>
              El Albab Real Estate Agency combines years of experience with a deep understanding of the real estate market. We are the first real estate firm to be licensed from Nigeria to practice in Egypt.
            </p>
            <p>
              Our personalized approach, attention to detail, and dedication to excellence make us the trusted choice for individuals and clients alike.
            </p>
            <p>
              As a dedicated real estate professional, we specialize in helping clients buy, sell, rent, and manage properties with confidence and peace of mind. Whether you're searching for your dream home, looking to maximize your property's value, or need expert management for your investment, we provide personalized guidance, market insight, and hands-on support every step of the way.
            </p>
            <p>
              What sets us apart is our commitment to transparency, trust, and results. We take the time to understand your unique goals, and we leverage strong market knowledge, negotiation skills, and a client-first approach to deliver the best possible outcomes.
            </p>
            <p className="font-semibold text-neutral-800">
              Choosing El Albab Real Estate Agency means choosing a partner who is reliable, detail-oriented, and invested in your success—because your property is more than just a transaction, it's your future.
            </p>
          </div>
          <div className="mt-12 text-center border-t border-neutral-200/60 pt-8">
            <span className="font-[family-name:var(--font-heading)] text-sm sm:text-base font-extrabold uppercase tracking-widest text-emerald block">
              Redefining Spaces • Elevating Lifestyles
            </span>
          </div>
        </div>
      </Container>
    </>
  );
}
