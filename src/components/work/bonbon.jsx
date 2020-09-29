import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const firstCard = (props) => {
  return (
    <div className="bonbon-card">
      <div className="project">
        <div className="image">
          <div className="overlay z"></div>
        </div>
        <div className="project-content">
          <h3 className="project-title fast-flicker">Bonbon</h3>
          <div className="project-description">
            <p>
              Little animated patterns made in order to practice CSS during
              learning time
            </p>
          </div>
          <ul className="project-tech-list">
            <li>HTML & CSS</li>
          </ul>
          <div className="project-links">
            <FontAwesomeIcon
              className="iconWork"
              icon={props.faGithub}
              onClick={() => {
                window.open("https://github.com/ZakariaHn/css-draws");
              }}
            />
            <FontAwesomeIcon
              className="iconWork"
              icon={props.faExternalLinkAlt}
              onClick={() => {
                window.open("https://zakariahn.github.io/css-draws/");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default firstCard;
