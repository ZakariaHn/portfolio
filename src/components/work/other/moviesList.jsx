import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MoviesList = (props) => {
  return (
    <div className="movies-list">
      <h4>Movies List</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus vitae
        autem
      </p>
      <h6>JS, React.js & SCSS</h6>
      <div className="project-links">
        <FontAwesomeIcon
          className="iconWork"
          icon={props.faGithub}
          onClick={() => {
            window.open("https://github.com/ZakariaHn/movies-list");
          }}
        />
        <FontAwesomeIcon
          className="iconWork"
          icon={props.faExternalLinkAlt}
          onClick={() => {
            window.open("https://zakariahn.github.io/movies-list/");
          }}
        />
      </div>
    </div>
  );
};

export default MoviesList;
