import React from "react";
import { Link } from "react-router-dom";

const NavPicArea = () => {
  return (
    <div className="navigator">
      <div className={"imagedCircle"}></div>
      <div className="navBar">
        <Link className="z" to={process.env.PUBLIC_URL + "/home"}>
          HOME
        </Link>
        <Link className="z" to={process.env.PUBLIC_URL + "/services"}>
          SERVICES
        </Link>
        <Link className="z" to={process.env.PUBLIC_URL + "/work"}>
          WORK
        </Link>
        <Link className="z" to={process.env.PUBLIC_URL + "/contact"}>
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default NavPicArea;
