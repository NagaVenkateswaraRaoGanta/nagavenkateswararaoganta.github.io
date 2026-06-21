import type { Transition, Variants, ViewportOptions } from "framer-motion";

const premiumEase = [0.22, 1, 0.36, 1] as const;

export const revealViewport: ViewportOptions = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -6%",
};

export const revealTransition: Transition = {
  duration: 0.6,
  ease: premiumEase,
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const staggeredCards: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.06,
      staggerChildren: 0.07,
    },
  },
};

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: premiumEase,
    },
  },
};
