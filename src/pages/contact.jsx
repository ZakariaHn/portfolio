import React, { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/contact/navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
  const openEmail = () =>
    (window.location.href = `mailto:zakaria.k.hamdan@gmail.com`);

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
      <div className="text">
        <h3>Let's communicate</h3>
        <p>
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <p>I'm also open for work if you'd like to hire me.</p>
        <button onClick={openEmail}>Get in touch</button>
      </div>

      <div class="sky-container">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
      </div>

      <div className="footer">
        <div className="socialMedia">
          <FontAwesomeIcon
            className="iconWork"
            icon={faGithub}
            onClick={() => {
              window.open("https://github.com/");
            }}
          />
          <FontAwesomeIcon
            className="iconWork"
            icon={faLinkedin}
            onClick={() => {
              window.open("https://www.linkedin.com/in/zak-h/");
            }}
          />
        </div>
        <div className="copyRights">
          <p>Built & designed by Zakaria Hamdan</p>
        </div>
        <div className="email">
          <p>zakaria.k.hamdan@gmail.com</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
