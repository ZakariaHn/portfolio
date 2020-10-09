import React, { useRef, useEffect } from "react";
import { TweenMax } from "gsap";
import SupportLogo from "./logos/support";

const WebSupportCard = () => {
  let cardItem = useRef(null);
  useEffect(() => {
    TweenMax.from(cardItem, { duration: 1, opacity: 0.1, delay: 1.6 });
  });
  const ref = (el) => {
    cardItem = el;
  };
  return (
    <div className="card" ref={ref}>
      <SupportLogo />
      <div className="card-body">
        <h5>SUPPORT</h5>
        <p>
          Your website needs ongoing care to perform at its best. Don't make the
          "set it and forget it" mistake.
        </p>
      </div>
    </div>
  );
};

export default WebSupportCard;
