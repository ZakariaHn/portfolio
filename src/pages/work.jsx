import React, { useState } from "react";
import { motion } from "framer-motion";
import Rosetta from "../components/work/rosetta";
import CssAnimations from "../components/work/bonbon";
import OtherProjects from "../components/work/other/others";
import Zamagana from "../components/work/zamagana";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faDiceD20,
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "../components/work/navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className="work-page-header">
        <FontAwesomeIcon className="icon" icon={faDiceD20} />
        <p>Things I made and others I co-made...</p>
      </div>
      <Zamagana faGithub={faGithub} faExternalLinkAlt={faExternalLinkAlt} />
      <Rosetta faGithub={faGithub} faExternalLinkAlt={faExternalLinkAlt} />
      <CssAnimations
        faGithub={faGithub}
        faExternalLinkAlt={faExternalLinkAlt}
      />
      <OtherProjects
        faGithub={faGithub}
        faExternalLinkAlt={faExternalLinkAlt}
      />
      <div className="contact">
        <div className="footer">
          <div className="socialMedia">
            <p>zakaria.k.hamdan@gmail.com</p>
            <div></div>
          </div>
          <div className="copyRights">
            <p>Built & designed by Zakaria Hamdan</p>
          </div>
          <div className="email">
            <p>zakaria.k.hamdan@gmail.com</p>
            <div></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkPage;
