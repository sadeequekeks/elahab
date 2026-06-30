import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useCookieConsent } from "../../context/CookieConsentContext";
import { openWhatsApp } from "../../lib/whatsapp";

export function WhatsAppFab() {
  const { bannerVisible } = useCookieConsent();
  const reduced = useReducedMotion();

  const positionClass = bannerVisible
    ? "bottom-[calc(7.5rem+env(safe-area-inset-bottom))] sm:bottom-[calc(6.5rem+env(safe-area-inset-bottom))]"
    : "bottom-[calc(1.25rem+env(safe-area-inset-bottom))] sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom))]";

  return (
    <motion.button
      type="button"
      onClick={() =>
        openWhatsApp(
          "Hello El Albab Real Estate, I would like to inquire about your properties.",
        )
      }
      className={`fixed right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-emerald text-white shadow-lg hover:bg-emerald/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald sm:right-6 sm:h-14 sm:w-14 ${positionClass}`}
      aria-label="Chat on WhatsApp"
      initial={reduced ? false : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
      whileHover={reduced ? undefined : { scale: 1.08 }}
      whileTap={reduced ? undefined : { scale: 0.95 }}
    >
      {!reduced && (
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-emerald"
          animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
          aria-hidden
        />
      )}
      <MessageCircle className="relative h-6 w-6 sm:h-7 sm:w-7" />
    </motion.button>
  );
}
