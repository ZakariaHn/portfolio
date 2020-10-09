import React, { useRef, useEffect } from "react";
import { TweenMax } from "gsap";
import ArchLogo from "./logos/Architecture";
const WebArchCard = () => {
  let cardItem = useRef(null);
  useEffect(() => {
    TweenMax.from(cardItem, { duration: 1, opacity: 0.1, delay: 1.2 });
  });
  const ref = (el) => {
    cardItem = el;
  };
  return (
    <div className="card" ref={ref}>
      <ArchLogo />
      <div className="card-body">
        <h5>ARCHITECTURE</h5>
        <p>
          Easy to navigate and logical page structure helps you find what you
          are looking for.
        </p>
      </div>
    </div>
  );
};

export default WebArchCard;
