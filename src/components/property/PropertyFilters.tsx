import { motion, useReducedMotion } from "framer-motion";
import type { PropertyLocation, PropertyType } from "../../data/types";
import { propertyLocations, propertyTypes, priceRanges } from "../../data/properties";
import { FilterPills } from "../ui/FilterPills";

export interface PropertyFilterState {
  type: PropertyType | "All";
  location: PropertyLocation | "All";
  priceRange: number;
}

interface PropertyFiltersProps {
  filters: PropertyFilterState;
  onChange: (filters: PropertyFilterState) => void;
}

export function PropertyFilters({ filters, onChange }: PropertyFiltersProps) {
  const reduced = useReducedMotion();

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-3 text-sm font-semibold text-ink">Property Type</p>
        <FilterPills
          options={propertyTypes}
          value={filters.type}
          onChange={(type) => onChange({ ...filters, type })}
          layoutId="filterType"
        />
      </div>
      <div>
        <p className="mb-3 text-sm font-semibold text-ink">Location</p>
        <FilterPills
          options={propertyLocations}
          value={filters.location}
          onChange={(location) => onChange({ ...filters, location })}
          layoutId="filterLocation"
        />
      </div>
      <div>
        <p className="mb-3 text-sm font-semibold text-ink">Price Range</p>
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {priceRanges.map((range, index) => {
            const isActive = filters.priceRange === index;
            return (
              <button
                key={range.label}
                type="button"
                onClick={() => onChange({ ...filters, priceRange: index })}
                className={`relative shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-ink text-white"
                    : "border-neutral-200 bg-white text-ink hover:border-gold"
                }`}
              >
                {isActive && !reduced && (
                  <motion.span
                    layoutId="filterPrice"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    style={{ zIndex: -1 }}
                  />
                )}
                {isActive && reduced && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-ink" />
                )}
                <span className="relative z-10">{range.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
