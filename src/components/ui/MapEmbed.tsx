import { ExternalLink, MapPin } from "lucide-react";
import { useCookieConsent } from "../../context/CookieConsentContext";

interface MapEmbedProps {
  src: string;
  title: string;
  address?: string;
  externalUrl?: string;
  className?: string;
}

export function MapEmbed({
  src,
  title,
  address,
  externalUrl,
  className = "h-64 sm:h-80",
}: MapEmbedProps) {
  const { status } = useCookieConsent();
  const openUrl = externalUrl ?? "https://maps.google.com";

  if (status !== "accepted") {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 px-4 py-8 text-center sm:px-6 sm:py-10 ${className}`}
      >
        <MapPin className="h-8 w-8 text-gold" />
        <p className="mt-3 text-sm font-medium text-ink">Map preview requires cookies</p>
        <p className="mt-1 max-w-xs text-xs text-neutral-500">
          Accept cookies to load Google Maps, or open the location externally.
        </p>
        {address && <p className="mt-2 text-sm text-neutral-600">{address}</p>}
        <a
          href={openUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald hover:underline"
        >
          Open in Google Maps
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <iframe
      title={title}
      src={src}
      className={`w-full border-0 ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
