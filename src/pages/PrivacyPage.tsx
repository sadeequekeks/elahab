import { site } from "../data/site";
import { Container } from "../components/ui/Container";
import { PageMeta } from "../components/layout/PageMeta";
import { AnimateIn } from "../components/motion/AnimateIn";

export function PrivacyPage() {
  return (
    <>
      <PageMeta
        title="Privacy Policy"
        description="How El Albab Real Estate handles your data and cookies."
      />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <Container className="py-8 sm:py-12 lg:py-16">
          <AnimateIn>
            <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-neutral-500">Last updated: May 2026</p>
          </AnimateIn>

          <AnimateIn delay={0.1} className="mt-6 max-w-3xl space-y-6 text-sm leading-relaxed text-neutral-600 sm:mt-8 sm:text-base">
            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-base font-bold text-ink sm:text-lg">
                Who we are
              </h2>
              <p className="mt-2">
                {site.name} ({site.email}) is a licensed real estate agency operating in
                Egypt, serving clients in Egypt, Nigeria, and internationally.
              </p>
            </section>
            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-base font-bold text-ink sm:text-lg">
                Cookies & similar technologies
              </h2>
              <p className="mt-2">
                <strong>Essential:</strong> We store your cookie preference locally in your
                browser so we do not show the consent banner again.
              </p>
              <p className="mt-2">
                <strong>Third-party (when you accept all):</strong> Google Maps embeds on
                property and contact pages may set cookies according to Google&apos;s policy.
                WhatsApp links open an external app or website governed by Meta&apos;s terms.
              </p>
            </section>
            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-base font-bold text-ink sm:text-lg">
                Information you provide
              </h2>
              <p className="mt-2">
                When you contact us via WhatsApp, phone, or our contact form, we receive the
                details you choose to share to respond to your inquiry. We do not sell your
                personal data.
              </p>
            </section>
            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-base font-bold text-ink sm:text-lg">
                Your choices
              </h2>
              <p className="mt-2">
                You may decline non-essential cookies via our banner. You can clear site data
                in your browser to reset preferences. For data requests, contact{" "}
                <a href={`mailto:${site.email}`} className="text-emerald hover:underline">
                  {site.email}
                </a>
                .
              </p>
            </section>
          </AnimateIn>
        </Container>
      </div>
    </>
  );
}
