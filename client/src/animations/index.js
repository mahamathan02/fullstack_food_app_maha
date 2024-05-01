export const buttonclick = {
  whileTap: { scale: 0.9 },
};

export const fadeInOut = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const slidetop = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};

export const pulanimation = {
  scale: [1, 1.5, 1], // Scale values for the animation
  rotate: [0, 360], // Rotate values for the animation (360 degrees)
  transition: {
    duration: 0.8,
    ease: "easeInOut",
    loop: Infinity,
  },
};
