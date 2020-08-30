import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const AboutPage = () => {
  const pageVariants = {
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
      <div className="about-page">
        <div className="bio">
          <p className={`first`}>
            My abundant energy fuels me in the pursuit of many interests,
            hobbies, areas of study and artistic endeavor. Passionate about
            writing clean, quality, high-performance codes, making food and
            music.
          </p>
          <p className={`seconde`}>
            I create successful websites that are fast, easy to use, and built
            with best practices plus helping designers, small agencies and
            businesses bring their ideas to life.
          </p>
        </div>

        <div className="navigator">
          <div className={"imagedCircle"}></div>
          <div className="navBar">
            <Link to="/work">WORK</Link>
            <Link to="/services">SERVICES</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
