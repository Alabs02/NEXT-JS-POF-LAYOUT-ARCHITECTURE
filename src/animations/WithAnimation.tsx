import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";

type TWithAnimation = {
  children: ReactNode;
  animationType: "fade" | "slide";
};

const WithAnimation: FC<TWithAnimation> = ({ animationType, children }) => {
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slide: {
      hidden: { y: -50, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.5 }}
      variants={variants[animationType]}
    >
      {children}
    </motion.div>
  );
};

export default WithAnimation;
