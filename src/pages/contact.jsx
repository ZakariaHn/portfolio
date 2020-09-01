import React, { useState } from "react";
import Form from "../components/contact/form";
import { motion } from "framer-motion";
import NavBar from "../components/contact/navBar";

const ContactPage = () => {
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
      <div className="contact-page">
        <div className="a">
          <p>LET'S COMUNICATE</p>
        </div>
        <div className="b">
          <Form />
        </div>
        <div className="c">
          <div></div>
        </div>
        <NavBar />
      </div>
    </motion.div>
  );
};

export default ContactPage;

//   let day=new Date()
//                       let days=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
//                       document.getElementById('goodday').innerHTML ="Have a good " + days[day.getDay()]
{
  /* <div className="good-day">
<label id="goodday"></label>
</div> */
}
