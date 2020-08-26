import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/homePageComponents/navBar";
import Circles from "../components/homePageComponents/circles";
import NameArea from "../components/homePageComponents/nameArea";
import ArrowDown from "../components/homePageComponents/arrowDown";
import NavLeft from "../components/homePageComponents/navLeft";

const HomePage = () => {
  const [jobInfos, setInfos] = useState("job-info");
  const [small_circle, set_small_circle] = useState("small-circle");
  const [greeting, set_greeting] = useState("greeting");
  const [big_circle, set_big_circle] = useState("big-circle");
  const [name, set_name] = useState("name-info");
  const [name_span, set_name_span] = useState("");

  return (
    <div className="homePage">
      <NavLeft
        setInfos={setInfos}
        set_small_circle={set_small_circle}
        set_greeting={set_greeting}
        set_big_circle={set_big_circle}
        set_name={set_name}
        set_name_span={set_name_span}
      ></NavLeft>
      <div className="homePageBody">
        <NavBar></NavBar>
        <Circles
          small_circle={small_circle}
          big_circle={big_circle}
          greeting={greeting}
        ></Circles>
        <NameArea
          jobInfos={jobInfos}
          name={name}
          name_span={name_span}
        ></NameArea>
        <ArrowDown></ArrowDown>
      </div>
    </div>
  );
};

export default HomePage;
