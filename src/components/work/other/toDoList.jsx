import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const toDoList = (props) => {
  return (
    <div className="to-do-list">
      <h4>To Do List</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus vitae
        autem
      </p>
      <h6>JavaScript, React.js & SCSS</h6>
      <div className="project-links">
        <FontAwesomeIcon
          className="iconWork"
          icon={props.faGithub}
          onClick={() => {
            window.open("https://github.com/ZakariaHn/to-do-list-react");
          }}
        />
        <FontAwesomeIcon
          className="iconWork"
          icon={props.faExternalLinkAlt}
          onClick={() => {
            window.open("https://zakariahn.github.io/to-do-list-react/");
          }}
        />
      </div>
    </div>
  );
};

export default toDoList;
