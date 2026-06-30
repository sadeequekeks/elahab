import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { pageTransition, resolveVariants, useMotionSafe } from "../../lib/motion";

export function PageTransition() {
  const location = useLocation();
  const { reduced, fastTransition } = useMotionSafe();
  const variants = resolveVariants(pageTransition, reduced);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, reduced]);

  if (reduced) {
    return <Outlet />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={fastTransition}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}
