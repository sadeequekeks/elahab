import { Link } from "react-router-dom";
import { useCookieConsent } from "../../context/CookieConsentContext";
import { Button } from "../ui/Button";

export function CookieConsent() {
  const { bannerVisible, accept, decline } = useCookieConsent();

  if (!bannerVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-neutral-200 bg-white/95 p-4 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md sm:p-5"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="min-w-0 flex-1 pr-2">
          <p className="font-[family-name:var(--font-heading)] text-sm font-bold text-ink sm:text-base">
            We value your privacy
          </p>
          <p className="mt-1 text-xs leading-relaxed text-neutral-600 sm:text-sm">
            We use essential cookies to run this site. Embedded maps (Google) and
            WhatsApp links may use third-party services. See our{" "}
            <Link to="/privacy" className="font-medium text-emerald underline-offset-2 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button
            variant="outline"
            size="sm"
            onClick={decline}
            className="w-full sm:w-auto"
          >
            Essential only
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={accept}
            className="w-full sm:w-auto"
          >
            Accept all
          </Button>
        </div>
      </div>
    </div>
  );
}
