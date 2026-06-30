import { MessageCircle, Phone } from "lucide-react";
import { site } from "../../data/site";
import { openWhatsApp } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { AnimateIn } from "../motion/AnimateIn";

export function ContactTeaser() {
  return (
    <section className="bg-ink py-12 sm:py-16 lg:py-24">
      <Container>
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Ready to Find Your Property?
          </h2>
          <p className="mt-3 text-base text-neutral-400 sm:mt-4 sm:text-lg">
            Most of our clients reach us on WhatsApp. Get a reply within hours —
            no forms, no waiting.
          </p>
          <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() =>
                openWhatsApp(
                  `Hello ${site.name}, I'm interested in your properties. Please assist me.`,
                )
              }
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full border-white text-white hover:bg-white hover:text-ink sm:w-auto"
              href={`tel:${site.phones[0].replace(/\s/g, "")}`}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </Button>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
