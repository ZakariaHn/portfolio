import React from "react";
import Logo from "../components/home/logo";
import Circles from "../components/home/circles";
import NameArea from "../components/home/nameArea";
import NavLeft from "../components/home/navLeft";
import { motion } from "framer-motion";

const HomePage = () => {
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
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="homePage">
        <NavLeft></NavLeft>
        <div className="homePageBody">
          <Logo />
          <Circles></Circles>
          <NameArea></NameArea>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
