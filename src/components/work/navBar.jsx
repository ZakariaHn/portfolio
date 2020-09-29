import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { TweenMax } from "gsap";
const NavBar = () => {
  let cardItem = useRef(null);
  useEffect(() => {
    TweenMax.from(cardItem, { duration: 1.5, opacity: 0, delay: 1 });
  });
  const ref = (el) => {
    cardItem = el;
  };
  return (
    <div className="nav-bar-work" ref={ref}>
      <Link to="/home">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/Services">SERVICES</Link>
      <Link to="/contact">CONTACT</Link>
    </div>
  );
};

export default NavBar;
