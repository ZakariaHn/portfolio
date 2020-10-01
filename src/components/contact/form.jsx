import React, { useState } from "react";

const FormCard = () => {
  var date = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  const greet = `Have a good ${weekday[date.getDay()]}`;
  return <p className="goodBey">{greet}</p>;
};

export default FormCard;
