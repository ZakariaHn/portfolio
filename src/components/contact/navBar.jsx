import React from "react";
import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <div className="navBar">
      <Link className="z" to={process.env.PUBLIC_URL + "/home"}>
        HOME
      </Link>
      <Link className="z" to={process.env.PUBLIC_URL + "/about"}>
        ABOUT
      </Link>
      <Link className="z" to={process.env.PUBLIC_URL + "/services"}>
        SERVICES
      </Link>
      <Link className="z" to={process.env.PUBLIC_URL + "/work"}>
        WORK
      </Link>
    </div>
  );
};

export default navBar;
