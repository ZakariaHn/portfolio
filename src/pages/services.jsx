import React, { useState } from "react";
import WebDesignCard from "../components/servicesCards/webDesign";
import ResponisivnessCard from "../components/servicesCards/responsive";
import SeoCard from "../components/servicesCards/seo";
import WebArchCard from "../components/servicesCards/websiteArch";
import WebSupportCard from "../components/servicesCards/websiteSupport";
import WebHostingCard from "../components/servicesCards/websiteHosting";
import NavBar from "../components/servicesCards/navBar";
import { motion } from "framer-motion";

const ServicesPage = () => {
  const [transitions] = useState({
    pageVariants: {
      initial: {
        opacity: 0,
        y: "100vh",
        scale: 0.8,
      },
      in: {
        opacity: 1,
        y: 0,
        scale: 1,
      },
      out: {
        opacity: 0,
        y: "-100vh",
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
      style={pageStyle}
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="services-page"
    >
      <div className="row-up">
        <WebDesignCard />
        <ResponisivnessCard />
        <WebArchCard />
      </div>
      <div className="row-down">
        <SeoCard />
        <WebSupportCard />
        <WebHostingCard />
      </div>
      <NavBar />
    </motion.div>
  );
};

export default ServicesPage;
