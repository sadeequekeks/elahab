import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-emerald text-white hover:bg-emerald/90",
  secondary: "bg-ink text-white hover:bg-ink/90",
  outline: "border border-ink bg-transparent text-ink hover:bg-ink hover:text-white",
  ghost: "bg-white/90 text-ink hover:bg-white",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

const tapHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  onClick,
  type = "button",
  className = "",
  external,
}: ButtonProps) {
  const reduced = useReducedMotion();
  const base = `inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald ${variants[variant]} ${sizes[size]} ${className}`;
  const motionProps = reduced ? {} : tapHover;

  if (to) {
    return (
      <motion.div className="inline-flex" {...motionProps}>
        <Link to={to} className={base}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={base}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={base} {...motionProps}>
      {children}
    </motion.button>
  );
}
