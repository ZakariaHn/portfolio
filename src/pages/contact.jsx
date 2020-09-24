import React, { useState } from "react";
import Form from "../components/contact/form";
import { motion } from "framer-motion";
import NavBar from "../components/contact/navBar";
import { FliesText } from "react-text-fun";

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
      <div className="a">
        <p>
          <FliesText
            text="LET'S COMUNICATE"
            fontSize={65}
            fill="black"
            fontWeight="bold"
            cellWidth={0.03}
            speed={1}
            dodge={false}
            paddingTop={20}
            dodgeY={0.05}
            dodgeSpread={0.1}
          />
        </p>
      </div>
      <div className="b">
        <Form />
      </div>
      <div className="c" />
      <NavBar />
    </motion.div>
  );
};

export default ContactPage;
