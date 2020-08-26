import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/homePageComponents/navBar";
import Circles from "../components/homePageComponents/circles";
import NameArea from "../components/homePageComponents/nameArea";
import ArrowDown from "../components/homePageComponents/arrowDown";

const HomePage = () => {
  const [initialClass, setClass] = useState("min");
  const [jobInfos, setInfos] = useState("job-info");

  const handleNavLeftClass = () => {
    setClass("max");
    setTimeout(() => {
      handleJobInfosClass();
    }, 600);
  };
  const handleJobInfosClass = () => {
    setInfos("hideJobInfos");
  };

  return (
    <div className="homePage">
      <div className={`navLeft ${initialClass}`}>
        <p to="/about" onClick={handleNavLeftClass} className="lblAbout">
          About
        </p>
      </div>
      <div className="homePageBody">
        <NavBar></NavBar>
        <Circles></Circles>
        <NameArea jobInfos={jobInfos}></NameArea>
        <ArrowDown></ArrowDown>
      </div>
    </div>
  );
};

export default HomePage;
