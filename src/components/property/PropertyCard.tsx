import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Bath, BedDouble, Maximize } from "lucide-react";
import type { Property } from "../../data/types";
import { formatPrice } from "../../lib/format";
import { SafeImage } from "../ui/SafeImage";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const reduced = useReducedMotion();
  const hoverProps = reduced
    ? {}
    : {
        whileHover: { y: -4, transition: { duration: 0.2 } },
      };

  return (
    <motion.article className="group min-w-0" {...hoverProps}>
      <Link to={`/properties/${property.slug}`} className="block">
        <div className="relative overflow-hidden rounded-3xl shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
          <SafeImage
            src={property.images[0]}
            alt={property.title}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-gold backdrop-blur">
            {formatPrice(property.price, property.currency)}
          </span>
        </div>
        <div className="mt-4">
          <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-ink transition group-hover:text-gold sm:text-lg lg:text-xl">
            {property.title}
          </h3>
          <p className="mt-1 line-clamp-1 text-sm text-neutral-500">{property.location}</p>
          {property.beds > 0 && (
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-neutral-600">
              <span className="flex items-center gap-1">
                <BedDouble className="h-4 w-4" />
                {property.beds} Beds
              </span>
              <span className="text-neutral-300">·</span>
              <span className="flex items-center gap-1">
                <Bath className="h-4 w-4" />
                {property.baths} Bath
              </span>
              <span className="text-neutral-300">·</span>
              <span className="flex items-center gap-1">
                <Maximize className="h-4 w-4" />
                {property.sqm} sqm
              </span>
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
