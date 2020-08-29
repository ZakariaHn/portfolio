import React from "react";
import Logo from "../components/home/logo";
import Circles from "../components/home/circles";
import NameArea from "../components/home/nameArea";
import NavLeft from "../components/home/navLeft";

const HomePage = () => {
  return (
    <div className="homePage">
      <NavLeft></NavLeft>
      <div className="homePageBody">
        <Logo />
        <Circles></Circles>
        <NameArea></NameArea>
      </div>
    </div>
  );
};

export default HomePage;
