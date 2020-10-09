import React, { useRef, useEffect } from "react";
import HostingLogo from "./logos/hosting";
import { TweenMax } from "gsap";

const WebHostingCard = () => {
  let cardItem = useRef(null);
  useEffect(() => {
    TweenMax.from(cardItem, { duration: 1, opacity: 0.1, delay: 1.8 });
  });
  const ref = (el) => {
    cardItem = el;
  };
  return (
    <div className="card" ref={ref}>
      <HostingLogo />
      <div className="card-body">
        <h5>HOSTING</h5>
        <p>
          As your provider,taking care of all daily hosting operations: software
          updates, server management and email hosting.
        </p>
      </div>
    </div>
  );
};

export default WebHostingCard;
