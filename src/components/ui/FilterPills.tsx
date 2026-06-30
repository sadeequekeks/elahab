import { motion, useReducedMotion } from "framer-motion";

interface FilterPillsProps<T extends string> {
  options: readonly T[];
  value: T | "All";
  onChange: (value: T | "All") => void;
  allLabel?: string;
  layoutId?: string;
}

export function FilterPills<T extends string>({
  options,
  value,
  onChange,
  allLabel = "All",
  layoutId = "activeFilter",
}: FilterPillsProps<T>) {
  const items: (T | "All")[] = ["All", ...options];
  const reduced = useReducedMotion();

  return (
    <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 snap-x snap-mandatory scrollbar-hide sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
      {items.map((item) => {
        const isActive = value === item;
        return (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item)}
            className={`relative shrink-0 snap-start rounded-full border px-5 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald ${
              isActive
                ? "border-ink text-white"
                : "border-neutral-200 bg-white text-ink hover:border-gold hover:text-gold"
            }`}
          >
            {isActive && !reduced && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 rounded-full bg-ink"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                style={{ zIndex: -1 }}
              />
            )}
            {isActive && reduced && (
              <span className="absolute inset-0 -z-10 rounded-full bg-ink" />
            )}
            <span className="relative z-10">{item === "All" ? allLabel : item}</span>
          </button>
        );
      })}
    </div>
  );
}
