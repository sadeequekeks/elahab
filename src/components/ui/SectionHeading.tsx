import type { ReactNode } from "react";
import { AnimateIn } from "../motion/AnimateIn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
  animate?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  action,
  className = "",
  animate = true,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  const content = (
    <div
      className={`mb-8 flex flex-col gap-4 sm:mb-10 md:mb-12 md:flex-row md:items-end md:justify-between ${
        align === "center" ? "md:flex-col md:items-center" : ""
      } ${className}`}
    >
      <div className={`min-w-0 max-w-2xl ${alignClass}`}>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-ink sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:mt-3 sm:text-base md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0 self-start md:self-auto">{action}</div>}
    </div>
  );

  if (!animate) return content;

  return <AnimateIn>{content}</AnimateIn>;
}
