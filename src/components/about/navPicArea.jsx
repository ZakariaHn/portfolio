import { Link } from "react-router-dom";
import React, { useRef, useEffect } from "react";
import { TweenMax } from "gsap";

const NavPicArea = () => {
  let bioItem1 = useRef(null);
  let bioItem2 = useRef(null);
  useEffect(() => {
    TweenMax.from(bioItem1, {
      duration: 1.5,
      opacity: 0,
      delay: 1,
    });
    TweenMax.from(bioItem2, {
      duration: 1,
      opacity: 0,
      y: -15,
      delay: 2.2,
    });
  });
  const ref1 = (el1) => {
    bioItem1 = el1;
  };
  const ref2 = (el2) => {
    bioItem2 = el2;
  };
  return (
    <div className="navigator" ref={ref1}>
      <div className={"imagedCircle"} ref={ref2}></div>
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
