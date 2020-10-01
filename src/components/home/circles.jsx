import React, { useRef, useEffect } from "react";
import { TweenMax } from "gsap";

const Circles = () => {
  let circlesItem = useRef(null);
  const ref = (el) => {
    circlesItem = el;
  };
  useEffect(() => {
    TweenMax.from(circlesItem, {
      duration: 4,
      opacity: 0,
      y: -40,
      x: 40,
      delay: 1.8,
    });
  });

  let today = new Date(),
    time = today.getHours() + ":" + today.getMinutes(),
    hrs = today.getHours();

  let greet;
  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs < 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

  const renderSpan = () => {
    return greet.split("").map((letter, key) => (
      <span key={key} className="fast-flicker">
        {letter}
      </span>
    ));
  };

  return (
    <div className="circles" ref={ref}>
      <div className={"greeting"}>
        <div id="lblGreetings">{renderSpan()}</div>
      </div>
      <div className={"row big-circle"}>
        <div className={`row small-circle`}>{time}</div>
      </div>
    </div>
  );
};
export default Circles;
