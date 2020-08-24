import React, { Fragment } from "react";
import NavBar from "../components/navBar";
import Circles from "../components/circles";
import NameArea from "../components/nameArea";
import ArrowDown from "../components/arrowDown";
const MainPage = () => {
  return (
    <div className="homePage">
      <NavBar></NavBar>
      <Circles></Circles>
      <NameArea></NameArea>
      <ArrowDown></ArrowDown>
    </div>
  );
};

export default MainPage;
