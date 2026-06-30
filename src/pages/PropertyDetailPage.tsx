import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Bath, BedDouble, Check, MapPin, Maximize, MessageCircle, Phone } from "lucide-react";
import { getPropertyBySlug } from "../data/properties";
import { site } from "../data/site";
import { formatPrice } from "../lib/format";
import {
  buildPropertyInquiryMessage,
  openWhatsApp,
} from "../lib/whatsapp";
import { stockImages } from "../lib/images";
import { Container } from "../components/ui/Container";
import { PageMeta } from "../components/layout/PageMeta";
import { Button } from "../components/ui/Button";
import { SafeImage } from "../components/ui/SafeImage";
import { MapEmbed } from "../components/ui/MapEmbed";
import { useCookieConsent } from "../context/CookieConsentContext";
import { AnimateIn } from "../components/motion/AnimateIn";
import { StaggerGrid } from "../components/motion/StaggerGrid";
import { fastTransition } from "../lib/motion";

export function PropertyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const property = slug ? getPropertyBySlug(slug) : undefined;
  const [activeImage, setActiveImage] = useState(0);
  const { bannerVisible } = useCookieConsent();

  if (!property) {
    return <Navigate to="/properties" replace />;
  }

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`;
  const mapsExternalUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(property.location)}`;
  const downPayment =
    (property.price * property.paymentPlan.downPaymentPercent) / 100;

  return (
    <>
      <PageMeta
        title={property.title}
        description={property.description.slice(0, 160)}
      />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <Container className="py-6 pb-28 sm:py-8 sm:pb-12 lg:pb-12">
          <Link
            to="/properties"
            className="text-sm font-medium text-emerald hover:underline"
          >
            ← Back to Properties
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-3xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={fastTransition}
                  >
                    <SafeImage
                      src={property.images[activeImage]}
                      alt={property.title}
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mt-4 flex gap-3 overflow-x-auto">
                {property.images.map((img, i) => (
                  <motion.button
                    key={img}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`shrink-0 overflow-hidden rounded-xl border-2 transition ${
                      activeImage === i ? "border-gold" : "border-transparent"
                    }`}
                  >
                    <SafeImage
                      src={img}
                      alt=""
                      className="h-20 w-28 object-cover"
                      loading="lazy"
                    />
                  </motion.button>
                ))}
              </div>

              <div className="mt-8">
                <span className="rounded-full bg-emerald/10 px-3 py-1 text-xs font-semibold text-emerald">
                  {property.type}
                </span>
                <h1 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
                  {property.title}
                </h1>
                <p className="mt-2 flex items-center gap-2 text-neutral-600">
                  <MapPin className="h-4 w-4" />
                  {property.location}
                </p>
                {property.beds > 0 && (
                  <div className="mt-4 flex flex-wrap gap-4 text-neutral-600">
                    <span className="flex items-center gap-1">
                      <BedDouble className="h-4 w-4" />
                      {property.beds} Beds
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      {property.baths} Bath
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize className="h-4 w-4" />
                      {property.sqm} sqm
                    </span>
                  </div>
                )}
                <p className="mt-6 leading-relaxed text-neutral-600">
                  {property.description}
                </p>

                <h2 className="mt-10 font-[family-name:var(--font-heading)] text-xl font-bold text-ink">
                  Amenities
                </h2>
                <StaggerGrid className="mt-4 grid gap-2 sm:grid-cols-2">
                  {property.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-neutral-600">
                      <Check className="h-4 w-4 shrink-0 text-emerald" />
                      {a}
                    </li>
                  ))}
                </StaggerGrid>

                <h2 className="mt-10 font-[family-name:var(--font-heading)] text-xl font-bold text-ink">
                  Payment Plan
                </h2>
                <div className="mt-4 overflow-x-auto rounded-2xl border border-neutral-200">
                  <table className="w-full min-w-[280px] text-sm">
                    <tbody>
                      <tr className="border-b border-neutral-100 bg-neutral-50">
                        <td className="px-4 py-3 font-medium text-ink">Down Payment</td>
                        <td className="px-4 py-3 text-neutral-600">
                          {property.paymentPlan.downPaymentPercent}% —{" "}
                          {formatPrice(downPayment, property.currency)}
                        </td>
                      </tr>
                      <tr className="border-b border-neutral-100">
                        <td className="px-4 py-3 font-medium text-ink">Installment Period</td>
                        <td className="px-4 py-3 text-neutral-600">
                          {property.paymentPlan.installmentYears} years
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-ink">Notes</td>
                        <td className="px-4 py-3 text-neutral-600">
                          {property.paymentPlan.notes}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="mt-10 font-[family-name:var(--font-heading)] text-xl font-bold text-ink">
                  Floor Plan
                </h2>
                <SafeImage
                  src={stockImages.floorPlan}
                  alt="Floor plan placeholder"
                  loading="lazy"
                  className="mt-4 w-full rounded-2xl border border-neutral-200 object-cover"
                />

                <h2 className="mt-10 font-[family-name:var(--font-heading)] text-xl font-bold text-ink">
                  Location
                </h2>
                <div className="mt-4 overflow-hidden rounded-2xl">
                  <MapEmbed
                    src={mapSrc}
                    title="Property location map"
                    address={property.location}
                    externalUrl={mapsExternalUrl}
                  />
                </div>
              </div>
            </div>

            <AnimateIn delay={0.15} className="hidden lg:col-span-1 lg:block">
              <div className="sticky top-20 rounded-3xl border border-neutral-100 bg-white p-6 shadow-lg xl:top-24">
                <p className="text-sm text-neutral-500">Price</p>
                <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-gold">
                  {formatPrice(property.price, property.currency)}
                </p>
                <div className="mt-6 space-y-3">
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() =>
                      openWhatsApp(buildPropertyInquiryMessage(property.title))
                    }
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Inquire on WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    href={`tel:${site.phones[0].replace(/\s/g, "")}`}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </Button>
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() =>
                      openWhatsApp(
                        `Hello El Albab, I'd like to schedule a viewing for: ${property.title}`,
                      )
                    }
                  >
                    Schedule Viewing
                  </Button>
                </div>
              </div>
            </AnimateIn>
          </div>
        </Container>

        {/* Mobile sticky CTA */}
        <div
          className={`fixed inset-x-0 z-30 border-t border-neutral-200 bg-white/95 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden ${
            bannerVisible ? "bottom-[7.25rem] sm:bottom-[6.5rem]" : "bottom-0"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center gap-3 px-1">
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs text-neutral-500">Price</p>
              <p className="truncate font-[family-name:var(--font-heading)] text-lg font-bold text-gold">
                {formatPrice(property.price, property.currency)}
              </p>
            </div>
            <Button
              variant="primary"
              size="sm"
              className="shrink-0"
              onClick={() =>
                openWhatsApp(buildPropertyInquiryMessage(property.title))
              }
            >
              <MessageCircle className="mr-1.5 h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
