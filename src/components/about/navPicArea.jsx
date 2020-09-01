import React from "react";
import { Link } from "react-router-dom";

const NavPicArea = () => {
  return (
    <div className="navigator">
      <div className={"imagedCircle"}></div>
      <div className="navBar">
        <Link className="z" to="/home">
          HOME
        </Link>
        <Link className="z" to="/services">
          SERVICES
        </Link>
        <Link className="z" to="/work">
          WORK
        </Link>
        <Link className="z" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default NavPicArea;
