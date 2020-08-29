import React from "react";

const WorkPage = () => {
  const renderDivs = () => {
    return ["a", "b", "c", "d", "e", "f", "g", "h", "i"].map((i) => (
      <div className={i}></div>
    ));
  };
  return (
    <div className="works-page">
      <div className="gallery">{renderDivs()}</div>
    </div>
  );
};

export default WorkPage;
