import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility to merge tailwind classes
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * BlurReveal Component
 * Enters the viewport blurred and translates upward
 */
export const BlurReveal = ({ children, delay = 0, className, disabled = false }) => {
  return (
    <motion.div
      initial={disabled ? undefined : { opacity: 0, y: 20, filter: "blur(10px)" }}
      whileInView={disabled ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.2, 0.65, 0.3, 0.9],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

/**
 * ParallaxText Component
 * Moves text slightly slower than scroll speed
 */
export const ParallaxText = ({ children, baseVelocity = 100, className }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, baseVelocity]);

  return (
    <motion.div style={{ y }} className={cn("relative z-0", className)}>
      {children}
    </motion.div>
  );
};
