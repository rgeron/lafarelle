"use client";

import { motion, type Transition } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

interface AnimatedElementProps {
  /**
   * Variant of the animation to play.
   * - "float": gentle float on both X/Y axis.
   * - "pulse": subtle scale/opacity pulse.
   * - "expandX": expand horizontally from left to right.
   */
  variant: "float" | "pulse" | "expandX";
  /** Animation duration in seconds */
  duration?: number;
  /** Animation delay in seconds */
  delay?: number;
  /** CSS class name */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
  /** Child elements */
  children?: ReactNode;
}

export function AnimatedElement({
  variant,
  duration,
  delay = 0,
  className = "",
  style,
  children,
}: AnimatedElementProps) {
  let initial: Record<string, number> | undefined = undefined;
  let animate: Record<string, number | number[]> = {};
  let transition: Transition = {};
  let mergedStyle = style;

  switch (variant) {
    case "float":
      animate = { y: [0, -8, 0], x: [0, 3, 0] };
      transition = {
        duration: duration ?? 6,
        repeat: Infinity,
        ease: "easeInOut",
      };
      break;
    case "pulse":
      animate = { scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] };
      transition = {
        duration: duration ?? 4,
        repeat: Infinity,
        ease: "easeInOut",
      };
      break;
    case "expandX":
      initial = { scaleX: 0 };
      animate = { scaleX: 1 };
      transition = { duration: duration ?? 1.2, delay, ease: "easeInOut" };
      mergedStyle = { ...style, transformOrigin: "left" };
      break;
    default:
      animate = {};
      transition = {};
  }

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
      style={mergedStyle}
    >
      {children}
    </motion.div>
  );
}
