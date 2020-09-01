import React from "react";

const renderDivs = () => {
  return ["a", "b", "c", "d", "e", "f", "g", "h", "i"].map((i) => (
    <div className={i}></div>
  ));
};

export default renderDivs;
