import React, { useRef, useEffect } from "react";
import { TweenMax } from "gsap";
import WebDesignLogo from "./logos/webDesign";

const WebDesignCard = () => {
  let cardItem = useRef(null);
  useEffect(() => {
    TweenMax.from(cardItem, { duration: 1.5, opacity: 0, delay: 0.8 });
  });
  const ref = (el) => {
    cardItem = el;
  };
  return (
    <div className="card" ref={ref}>
      <WebDesignLogo />
      <div className="card-body">
        <h5>WEB DESIGN</h5>
        <p>
          Working with you to develop a website strategy so that your website
          not only looks great, but works great too.
        </p>
      </div>
    </div>
  );
};

export default WebDesignCard;
