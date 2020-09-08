import React from "react";
import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <div className="navBar">
      <Link className="z" to="/home">
        HOME
      </Link>
      <Link className="z" to="/about">
        ABOUT
      </Link>
      <Link className="z" to="/services">
        SERVICES
      </Link>
      <Link className="z" to="/contact">
        WORK
      </Link>
    </div>
  );
};

export default navBar;
