import React from "react";
import WebDesignCard from "../components/servicesCards/webDesign";
import ResponisivnessCard from "../components/servicesCards/responsive";
import SeoCard from "../components/servicesCards/seo";
import WebArchCard from "../components/servicesCards/websiteArch";
import WebSupportCard from "../components/servicesCards/websiteSupport";
import WebHostingCard from "../components/servicesCards/websiteHosting";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesPage = () => {
  const pageVariants = {
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
  };
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1,
  };

  const pageStyle = {
    position: "absolute",
  };
  return (
    <motion.div
      style={pageStyle}
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="services-page">
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
        <div className="navBar">
          <Link to="/home">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/work">WORK</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
