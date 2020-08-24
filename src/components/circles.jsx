import React, { useState } from "react";

const Circles = () => {
  let today = new Date(),
    time = today.getHours() + ":" + today.getMinutes();
  let myDate = new Date();
  let hrs = myDate.getHours();
  let greet;
  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs < 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";
  const [greeting, changeGreat] = useState(greet);
  const [date, change] = useState(time);

  return (
    <div className="circles">
      <div className="greeting">
        <div id="lblGreetings">{greeting}</div>
      </div>
      <div className="row big-circle">
        <div className="small-circle">{date}</div>
      </div>
    </div>
  );
};
export default Circles;
