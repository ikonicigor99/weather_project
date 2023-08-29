import React from "react";
import { motion } from "framer-motion";
export const VariantsBox = ({ children }) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="item" variants={item}>
        {children}
      </motion.div>
    </motion.div>
  );
};
