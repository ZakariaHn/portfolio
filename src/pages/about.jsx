import React, { useState } from "react";

import { motion } from "framer-motion";
import Biography from "../components/about/biography";
import NavPicArea from "../components/about/navPicArea";

const AboutPage = () => {
  const [transitions] = useState({
    pageVariants: {
      initial: {
        opacity: 0,
        scale: 0.2,
      },
      in: {
        opacity: 1,
        scale: 1,
      },
      out: {
        opacity: 0,
        scale: 2,
      },
    },
    pageTransition: {
      type: "tween",
      ease: "anticipate",
      duration: 1,
    },
    pageStyle: {
      position: "absolute",
    },
  });

  const { pageStyle, pageVariants, pageTransition } = transitions;

  return (
    <motion.div
      style={pageStyle}
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="about-page"
    >
      <Biography />
      <NavPicArea />
    </motion.div>
  );
};

export default AboutPage;
