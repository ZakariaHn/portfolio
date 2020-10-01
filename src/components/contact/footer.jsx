import React, { useEffect, useRef } from "react";
import { TweenMax } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  let footer = useRef(null);
  useEffect(() => {
    TweenMax.from(footer, { duration: 0.5, y: -20, opacity: 0, delay: 1.5 });
  });

  const footerRef = (el) => {
    footer = el;
  };
  return (
    <div className="footer" ref={footerRef}>
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
  );
};

export default Footer;
