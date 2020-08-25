import React from "react";
import NavBar from "../components/homePageComponents/navBar";
import Circles from "../components/homePageComponents/circles";
import NameArea from "../components/homePageComponents/nameArea";
import ArrowDown from "../components/homePageComponents/arrowDown";

const MainPage = () => {
  return (
    <div className="homePage">
      <div className="navLeft">
        <p className="animated">ABOUT</p>
      </div>
      <div className="homePageBody">
        <NavBar></NavBar>
        <Circles></Circles>
        <NameArea></NameArea>
        <ArrowDown></ArrowDown>
      </div>
    </div>
  );
};

export default MainPage;
