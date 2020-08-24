import React from "react";

const Circles = () => {
  return (
    <div className="circles">
      <div className="greeting">
        <label id="lblGreetings"></label>
      </div>
      <div className="row big-circle">
        <div className="small-circle">
          <form name="clockform">
            <input type="text" name="clock" className="time-input" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Circles;
