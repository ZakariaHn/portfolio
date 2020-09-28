import React, { useState } from "react";
import { motion } from "framer-motion";
import FirstCard from "../components/work/firstCard";
import SecondCard from "../components/work/secondCard";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

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

  const { pageStyle, pageVariants, pageTransition } = transitions;

  return (
    <motion.div
      exit="out"
      animate="in"
      initial="out"
      className="works-page"
      style={pageStyle}
      variants={pageVariants}
      transition={pageTransition}
    >
      <FirstCard faGithub={faGithub} faExternalLinkAlt={faExternalLinkAlt} />
      <SecondCard faGithub={faGithub} faExternalLinkAlt={faExternalLinkAlt} />
    </motion.div>
  );
};

export default WorkPage;
