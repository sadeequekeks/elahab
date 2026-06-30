import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { Variants } from "framer-motion";
import {
  fadeUp,
  resolveVariants,
  useMotionSafe,
  viewportOnce,
} from "../../lib/motion";

interface AnimateInProps {
  children: ReactNode;
  variant?: Variants;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article";
}

export function AnimateIn({
  children,
  variant = fadeUp,
  delay = 0,
  className = "",
  as = "div",
}: AnimateInProps) {
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
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ ...transition, delay }}
    >
      {children}
    </Component>
  );
}
