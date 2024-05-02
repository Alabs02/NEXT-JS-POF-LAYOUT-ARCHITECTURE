import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";


const Fade: FC<{ children: ReactNode }> = ({ children }) => {
  const fade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.8 }}
      variants={fade}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
