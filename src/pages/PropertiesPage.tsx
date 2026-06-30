import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { properties, priceRanges } from "../data/properties";
import { PropertyCard } from "../components/property/PropertyCard";
import {
  PropertyFilters,
  type PropertyFilterState,
} from "../components/property/PropertyFilters";
import { Container } from "../components/ui/Container";
import { PageMeta } from "../components/layout/PageMeta";
import { SectionHeading } from "../components/ui/SectionHeading";
import { AnimateIn } from "../components/motion/AnimateIn";
import { StaggerGrid } from "../components/motion/StaggerGrid";
import { fastTransition } from "../lib/motion";

const defaultFilters: PropertyFilterState = {
  type: "All",
  location: "All",
  priceRange: 0,
};

export function PropertiesPage() {
  const [filters, setFilters] = useState<PropertyFilterState>(defaultFilters);

  const filtered = useMemo(() => {
    const range = priceRanges[filters.priceRange];
    return properties.filter((p) => {
      if (filters.type !== "All" && p.type !== filters.type) return false;
      if (filters.location !== "All" && p.location !== filters.location) return false;
      if (p.price < range.min || p.price > range.max) return false;
      return true;
    });
  }, [filters]);

  const filterKey = `${filters.type}-${filters.location}-${filters.priceRange}`;

  return (
    <>
      <PageMeta
        title="Properties"
        description="Explore luxury apartments, villas, and commercial properties across Egypt."
      />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <Container className="py-8 sm:py-12 lg:py-16">
          <SectionHeading
            title="Explore Properties in Egypt"
            subtitle="Each listing offers exceptional quality, unique features, and prime locations across NAC, New Cairo, and the North Coast."
          />
          <AnimateIn delay={0.1}>
            <PropertyFilters filters={filters} onChange={setFilters} />
          </AnimateIn>
          <AnimateIn delay={0.15} className="mt-8 mb-12 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 md:p-8">
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-bold text-ink uppercase tracking-wider text-center md:text-left mb-6">
              Starting Prices & Entry Guidelines
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-5 border border-neutral-200/50 shadow-xs">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Residential</span>
                <h4 className="mt-1 font-[family-name:var(--font-heading)] text-base font-bold text-ink">Apartments</h4>
                <p className="mt-2 text-2xl font-extrabold text-gold">$75,000</p>
                <span className="text-xs text-neutral-500">Starting Price</span>
              </div>
              <div className="rounded-2xl bg-white p-5 border border-neutral-200/50 shadow-xs">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Luxury</span>
                <h4 className="mt-1 font-[family-name:var(--font-heading)] text-base font-bold text-ink">Villas</h4>
                <p className="mt-2 text-2xl font-extrabold text-gold">$250,000</p>
                <span className="text-xs text-neutral-500">Starting Price</span>
              </div>
              <div className="rounded-2xl bg-white p-5 border border-neutral-200/50 shadow-xs">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Business</span>
                <h4 className="mt-1 font-[family-name:var(--font-heading)] text-base font-bold text-ink">Commercial & Admin</h4>
                <p className="mt-2 text-2xl font-extrabold text-gold">$100,000</p>
                <span className="text-xs text-neutral-500">Starting Price</span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200/60 pt-6 text-sm text-neutral-600">
              <p className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald" />
                <strong>Payment Plan:</strong> Up to 10 Years installment schemes
              </p>
              <p className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald" />
                <strong>Delivery:</strong> Ready to move options up to 4 Years off-plan
              </p>
            </div>
          </AnimateIn>
          {filtered.length > 0 ? (
            <StaggerGrid
              key={filterKey}
              className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((property) => (
                <PropertyCard key={property.slug} property={property} />
              ))}
            </StaggerGrid>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={fastTransition}
                className="mt-16 rounded-3xl border border-dashed border-neutral-200 bg-neutral-50 py-16 text-center"
              >
                <p className="text-lg font-medium text-ink">No properties match your filters</p>
                <p className="mt-2 text-neutral-500">Try adjusting your search criteria.</p>
                <button
                  type="button"
                  onClick={() => setFilters(defaultFilters)}
                  className="mt-6 text-sm font-semibold text-emerald hover:underline"
                >
                  Clear all filters
                </button>
              </motion.div>
            </AnimatePresence>
          )}
        </Container>
      </div>
    </>
  );
}
