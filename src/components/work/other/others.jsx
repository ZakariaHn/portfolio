import React from "react";
import ToDoList from "./toDoList";
import MoviesList from "./moviesList";

const OtherProjects = (props) => {
  const { faGithub, faExternalLinkAlt } = props;
  return (
    <div className="other-projects">
      <ToDoList faGithub={faGithub} faExternalLinkAlt={faExternalLinkAlt} />

      <MoviesList faGithub={faGithub} faExternalLinkAlt={faExternalLinkAlt} />
    </div>
  );
};

export default OtherProjects;
