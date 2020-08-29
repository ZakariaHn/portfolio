import React from "react";

import { Link } from "react-router-dom";

const Circles = (props) => {
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
    <div className="circles">
      <div className={props.greeting}>
        <div id="lblGreetings">{renderSpan()}</div>
      </div>
      <div className={`row ${props.big_circle}`}>
        <div className={`row ${props.small_circle}`}>{time}</div>
      </div>
      <div className={props.navigator}>
        <Link to="/work">WORK</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </div>
  );
};
export default Circles;
