import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/home">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/work">WORK</Link>
      <Link to="/contact">CONTACT</Link>
    </div>
  );
};

export default NavBar;
