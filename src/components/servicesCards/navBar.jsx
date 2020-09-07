import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navBar">
      <Link to={process.env.PUBLIC_URL + "/home"}>HOME</Link>
      <Link to={process.env.PUBLIC_URL + "/about"}>ABOUT</Link>
      <Link to={process.env.PUBLIC_URL + "/work"}>WORK</Link>
      <Link to={process.env.PUBLIC_URL + "/contact"}>CONTACT</Link>
    </div>
  );
};

export default NavBar;
