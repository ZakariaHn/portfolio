import React from "react";
import { Link } from "react-router-dom";

const NavPicArea = () => {
  return (
    <div className="navigator">
      <div className={"imagedCircle"}></div>
      <div className="navBar">
        <Link to="/home">HOME</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/work">WORK</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </div>
  );
};

export default NavPicArea;
