import React, { Fragment } from "react";
import NavBar from "../components/navBar";
import Circles from "../components/circles";
import NameArea from "../components/nameArea";
import ArrowDown from "../components/arrowDown";

const MainPage = () => {
  return (
    <div className="homePage">
      <div className="navLeft">
        <p class="sign">
          <span class="fast-flicker">A</span>bo<span class="flicker">u</span>t
        </p>
      </div>
      <div className="homePageRightSide">
        <NavBar></NavBar>
        <Circles></Circles>
        <NameArea></NameArea>
        <ArrowDown></ArrowDown>
      </div>
    </div>
  );
};

export default MainPage;
