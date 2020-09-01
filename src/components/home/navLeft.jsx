import React from "react";
import { Link } from "react-router-dom";

const NavLeft = () => {
  return (
    <div className={"navLeft"}>
      <Link to="/about" className={"lblAbout"}>
        About
      </Link>
    </div>
  );
};

export default NavLeft;
