import React from "react";
import { Link } from "react-router-dom";

const WorkPage = () => {
  const renderDivs = () => {
    return ["a", "b", "c", "d", "e", "f", "g", "h", "i"].map((i) => (
      <div className={i}></div>
    ));
  };
  return (
    <div className="works-page">
      <div className={"show_work-services-nav"}>
        <Link to="/services">SERVICES</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
      <div className="gallery">{renderDivs()}</div>
    </div>
  );
};

export default WorkPage;
