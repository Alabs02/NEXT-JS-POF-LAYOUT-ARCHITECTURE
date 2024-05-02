import React, { FC, ReactNode, useMemo } from "react";
import { motion } from "framer-motion";

const Slide: FC<{ children: ReactNode, type?: 'horizontal' | 'vertical' }> = ({ children, type }) => {
  const slideY = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const slideX = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const getType = useMemo(() => {
    switch (type) {
      case 'vertical':
        return slideY;
      case 'horizontal':
        return slideX;    
      default:
        return slideY;
    }
  }, []);


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.5 }}
      variants={getType}
    >
      {children}
    </motion.div>
  );
};

export default Slide;
