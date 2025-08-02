import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

export const AnimatedLogo = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");

    const interval = setInterval(async () => {
      await controls.start("hidden");
      await controls.start("visible");
    }, 2500);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <motion.svg
      width="35"
      height="43"
      viewBox="0 0 35 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate={controls}
    >
      {/* Top Line */}
      <motion.path
        d="M0 2H35"
        stroke="currentColor"
        strokeWidth="4"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
      />

      {/* Bottom Line */}
      <motion.path
        d="M0 40.5518H35"
        stroke="currentColor"
        strokeWidth="4"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
          },
        }}
      />

      {/* Diagonal Line */}
      <motion.path
        d="M21.4375 2L7 20.8276L21.4375 41"
        stroke="currentColor"
        strokeWidth="4"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.2, ease: "easeInOut", delay: 0.4 },
          },
        }}
      />
    </motion.svg>
  );
};
