import React from "react";
import { Link } from "react-router-dom";
const navBar = () => {
  return (
    <div className="navBar">
      <Link to="/home">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/services">SERVICES</Link>
      <Link to="/work">WORK</Link>
    </div>
  );
};

export default navBar;
