import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WorkPage = () => {
  const [transitions] = useState({
    pageVariants: {
      initial: {
        opacity: 0,
        y: "-100vh",
        scale: 0.8,
      },
      in: {
        opacity: 1,
        y: 0,
        scale: 1,
      },
      out: {
        opacity: 0,
        y: "100vh",
        scale: 1.2,
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

  const renderDivs = () => {
    return ["a", "b", "c", "d", "e", "f", "g", "h", "i"].map((i) => (
      <div className={i}></div>
    ));
  };

  const { pageStyle, pageVariants, pageTransition } = transitions;
  return (
    <motion.div
      style={pageStyle}
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="works-page">
        <div className="navBar">
          <Link to="/home">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
        <div className="gallery">{renderDivs()}</div>
      </div>
    </motion.div>
  );
};

export default WorkPage;
