import React, { useRef, useEffect } from "react";
import { TweenMax } from "gsap";

const ResponisivnessCard = () => {
  let cardItem = useRef(null);
  useEffect(() => {
    TweenMax.from(cardItem, { duration: 1.5, opacity: 0.2, delay: 1 });
  });
  const ref = (el) => {
    cardItem = el;
  };
  return (
    <div className="card" ref={ref}>
      <div className="container thethird">
        <div className="earth" />
        <div className="moon" />
      </div>
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
