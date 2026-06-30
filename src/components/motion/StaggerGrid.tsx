import { motion } from "framer-motion";
import { Children, isValidElement, type ReactNode } from "react";
import {
  resolveVariants,
  staggerContainer,
  staggerItem,
  useMotionSafe,
  viewportOnce,
} from "../../lib/motion";

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
}

export function StaggerGrid({ children, className = "" }: StaggerGridProps) {
  const { reduced, transition } = useMotionSafe();
  const containerVariants = resolveVariants(staggerContainer, reduced);
  const itemVariants = resolveVariants(staggerItem, reduced);

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={containerVariants}
    >
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;
        return (
          <motion.div
            key={child.key ?? undefined}
            variants={itemVariants}
            transition={transition}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
