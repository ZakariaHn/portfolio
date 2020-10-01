import React from "react";
import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <div className="nav-bar-contact">
      <Link className="z" to="/Home">
        HOME
      </Link>
      <Link className="z" to="/about">
        ABOUT
      </Link>
      <Link className="z" to="/services">
        SERVICES
      </Link>
      <Link className="z" to="/work">
        WORK
      </Link>
    </div>
  );
};

export default navBar;
