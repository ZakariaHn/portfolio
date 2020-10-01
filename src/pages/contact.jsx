import React, { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/contact/navBar";
import Footer from "../components/contact/footer";
import ShootingStars from "../components/contact/shootingStars";
import PageContent from "../components/contact/pageContent";
const ContactPage = () => {
  const [transitions] = useState({
    pageVariants: {
      initial: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8,
      },
      in: {
        opacity: 1,
        x: 0,
        scale: 1,
      },
      out: {
        opacity: 0,
        x: "100vw",
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
      className="contact-page"
    >
      <NavBar />
      <PageContent />
      <ShootingStars />
      <Footer />
    </motion.div>
  );
};

export default ContactPage;
