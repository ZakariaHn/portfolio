import React, { useState } from "react";

const Circles = () => {
  let today = new Date(),
    time = today.getHours() + ":" + today.getMinutes(),
    hrs = today.getHours();

  let greet;
  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs < 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

  return (
    <div className="circles">
      <div className="greeting">
        <div id="lblGreetings">{greet}</div>
      </div>
      <div className="row big-circle">
        <div className="small-circle">{time}</div>
      </div>
    </div>
  );
};
export default Circles;
