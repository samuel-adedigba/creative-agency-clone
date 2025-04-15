import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const cursorVariants = {
  default: {
    scale: 1,
    backgroundColor: "#ffffff",
  },
  hover: {
    scale: 1.5,
    backgroundColor: "#6366f1",
  },
  tap: {
    scale: 0.8,
    backgroundColor: "#4f46e5",
  },
};

export const Cursor: React.FC = () => {
  const [cursorVariant] = useState<keyof typeof cursorVariants>("default");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 150 });


  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12); // center the 24px cursor
      mouseY.set(e.clientY - 12);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);



  return (
    <>
      {/* Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          translateX: springX,
          translateY: springY,
        }}
        variants={cursorVariants}
        animate={cursorVariant}
      />
    </>
  );
};
