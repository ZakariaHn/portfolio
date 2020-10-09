import React, { useRef, useEffect } from "react";
import { TweenMax } from "gsap";
import ResponsiveLogo from "./logos/responsive";

const ResponisivnessCard = () => {
  let cardItem = useRef(null);
  useEffect(() => {
    TweenMax.from(cardItem, { duration: 1, opacity: 0.1, delay: 1 });
  });
  const ref = (el) => {
    cardItem = el;
  };
  return (
    <div className="card" ref={ref}>
      <ResponsiveLogo />
      <div className="card-body">
        <h5>RESPONSIVE</h5>
        <p>
          All of my websites are developed to look and perform beautifully on
          every device you are viewing it from.
        </p>
      </div>
    </div>
  );
};

export default ResponisivnessCard;
