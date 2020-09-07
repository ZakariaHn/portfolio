import React from "react";
import { Link } from "react-router-dom";

const NavLeft = () => {
  return (
    <div className={"navLeft"}>
      <Link to={process.env.PUBLIC_URL + "/about"} className={"z lblAbout"}>
        About
      </Link>
    </div>
  );
};

export default NavLeft;
