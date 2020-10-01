import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DistortionText } from "react-text-fun";
import { TweenMax } from "gsap";
const FirstCard = (props) => {
  let cardItem = useRef(null);
  const ref = (el) => {
    cardItem = el;
  };
  useEffect(() => {
    TweenMax.from(cardItem, { duration: 1.5, opacity: 0, delay: 1.2 });
  });

  return (
    <div className="zamagana-card" ref={ref}>
      <div className="project">
        <div className="image">
          <div className="overlay z"></div>
        </div>
        <div className="project-content">
          <h3 className="project-title">
            <DistortionText text="Zamagana" fill="#c2363d" speed={0.04} />
          </h3>
          <div className="project-description">
            <p>
              Zamagana is a browser based synthesizer, made during DCI's WEB
              Development Course/ 2019-2021 as a team project. It uses Tone.js
              API.
            </p>
          </div>
          <ul className="project-tech-list">
            <li>JavaScript</li>
            <li>HTML</li>
            <li>SASS</li>
            <li>React.js</li>
            <li>Tone.js</li>
          </ul>
          <div className="project-links">
            <FontAwesomeIcon
              className="iconWork"
              icon={props.faGithub}
              onClick={() => {
                window.open(
                  "https://github.com/ZakariaHn/zamagana-synthesizer"
                );
              }}
            />
            <FontAwesomeIcon
              className="iconWork"
              icon={props.faExternalLinkAlt}
              onClick={() => {
                window.open(
                  "https://zakariahn.github.io/zamagana-synthesizer/"
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
