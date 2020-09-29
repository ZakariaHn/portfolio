import React, { useState } from "react";
import { motion } from "framer-motion";
import Rosetta from "../components/work/rosetta";
import CssAnimations from "../components/work/bonbon";
import Zamagana from "../components/work/zamagana";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/work/navBar";
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
      <Navbar />
      <Zamagana faGithub={faGithub} faExternalLinkAlt={faExternalLinkAlt} />
      <Rosetta faGithub={faGithub} faExternalLinkAlt={faExternalLinkAlt} />
      <CssAnimations
        faGithub={faGithub}
        faExternalLinkAlt={faExternalLinkAlt}
      />
    </motion.div>
  );
};

export default WorkPage;
