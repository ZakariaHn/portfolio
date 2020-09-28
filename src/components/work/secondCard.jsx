import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const secondCard = (props) => {
  return (
    <div className="secondCard">
      <div className="project">
        <div className="image">
          <div className="overlay z"></div>
        </div>
        <div className="project-content">
          <h3 className="project-title">project-name</h3>
          <div className="project-description">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
            </p>
          </div>
          <ul className="project-tech-list">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Three.js</li>
          </ul>
          <div className="project-links">
            <FontAwesomeIcon
              className="iconWork"
              icon={props.faGithub}
              onClick={() => {
                window.open("https://github.com/");
              }}
            />
            <FontAwesomeIcon
              className="iconWork"
              icon={props.faExternalLinkAlt}
              onClick={() => {
                window.open("https://github.com/");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default secondCard;
