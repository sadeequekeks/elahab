import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { Variants } from "framer-motion";
import { fadeUp, resolveVariants, useMotionSafe } from "../../lib/motion";

interface MotionRevealProps {
  children: ReactNode;
  variant?: Variants;
  delay?: number;
  className?: string;
  as?: "p" | "h1" | "div";
}

/** Mount-time reveal (for heroes), not scroll-triggered */
export function MotionReveal({
  children,
  variant = fadeUp,
  delay = 0,
  className = "",
  as = "div",
}: MotionRevealProps) {
  const { reduced, transition } = useMotionSafe();
  const Component = motion[as];
  const variants = resolveVariants(variant, reduced);

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ ...transition, delay }}
    >
      {children}
    </Component>
  );
}
