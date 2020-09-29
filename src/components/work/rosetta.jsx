import React, { useRef, useEffect } from "react";
import { LiquidDistortionText } from "react-text-fun";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TweenMax } from "gsap";

const SecondCard = (props) => {
  let cardItem = useRef(null);
  useEffect(() => {
    TweenMax.from(cardItem, { duration: 1.5, opacity: 0, delay: 1.4 });
  });
  const ref = (el) => {
    cardItem = el;
  };
  return (
    <div className="rosetta-card" ref={ref}>
      <div className="project">
        <div className="image">
          <div className="overlay z"></div>
        </div>
        <div className="project-content">
          <h3 className="project-title">
            <LiquidDistortionText text="Rosetta" fill="#c2363d" speed={0.2} />
          </h3>
          <div className="project-description">
            <p>
              Virtual library project, made as a team project during DCI's WEB
              Development Course/ 2019-2021. This project uses Google Books API
              and Designed according to MVC Pattern.
            </p>
          </div>
          <ul className="project-tech-list">
            <li>JavaScript</li>
            <li>HTML</li>
            <li>SASS</li>
          </ul>
          <div className="project-links">
            <FontAwesomeIcon
              className="iconWork"
              icon={props.faGithub}
              onClick={() => {
                window.open(
                  "https://github.com/ZakariaHn/Rosetta-books-finder"
                );
              }}
            />
            <FontAwesomeIcon
              className="iconWork"
              icon={props.faExternalLinkAlt}
              onClick={() => {
                window.open(
                  "https://zakariahn.github.io/Rosetta-books-finder/"
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
