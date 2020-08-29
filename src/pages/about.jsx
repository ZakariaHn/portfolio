import React from "react";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="bio">
        <p className={`first`}>
          My abundant energy fuels me in the pursuit of many interests, hobbies,
          areas of study and artistic endeavor. Passionate about writing clean,
          quality, high-performance codes, making food and music.
        </p>
        <p className={`seconde`}>
          I create successful websites that are fast, easy to use, and built
          with best practices plus helping designers, small agencies and
          businesses bring their ideas to life.
        </p>
      </div>

      <div className="navigator">
        <div className={"imagedCircle"}></div>
        <div className={"show_work-services-nav"}>
          <Link to="/work">WORK</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
