import { useReducedMotion } from "framer-motion";
import type { Transition, Variants } from "framer-motion";

export const defaultTransition: Transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

export const fastTransition: Transition = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1],
};

export const viewportOnce = {
  once: true,
  margin: "-80px" as const,
};

const instant: Transition = { duration: 0 };

export function useMotionSafe() {
  const reduced = useReducedMotion();
  return {
    reduced: reduced ?? false,
    transition: reduced ? instant : defaultTransition,
    fastTransition: reduced ? instant : fastTransition,
  };
}

export function resolveVariants(
  variants: Variants,
  reduced: boolean,
): Variants {
  if (!reduced) return variants;
  return {
    hidden: { opacity: 1, y: 0, x: 0, scale: 1 },
    visible: { opacity: 1, y: 0, x: 0, scale: 1 },
  };
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1 },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};
