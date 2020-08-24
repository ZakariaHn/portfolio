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
          <span class="fast-flicker">A</span>
          <span class="flicker">b</span>
          <span class="fast-flicker">o</span>
          <span class="flicker">u</span>
          <span class="fast-flicker">t</span>
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
