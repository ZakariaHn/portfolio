import React, { useState } from "react";
import NavBar from "../components/home/logo";
import Circles from "../components/home/circles";
import NameArea from "../components/home/nameArea";
import NavLeft from "../components/home/navLeft";

const HomePage = () => {
  const [jobInfos, set_infos] = useState("job-info");
  const [small_circle, set_small_circle] = useState("small-circle");
  const [greeting, set_greeting] = useState("greeting");
  const [big_circle, set_big_circle] = useState("big-circle");
  const [name, set_name] = useState("name-info");
  const [name_span, set_name_span] = useState("");
  const [navigator, set_navigator] = useState("work-services-nav");

  return (
    <div className="homePage">
      <NavLeft
        set_name={set_name}
        set_infos={set_infos}
        set_greeting={set_greeting}
        set_navigator={set_navigator}
        set_name_span={set_name_span}
        set_big_circle={set_big_circle}
        set_small_circle={set_small_circle}
      ></NavLeft>
      <div className="homePageBody">
        <NavBar></NavBar>
        <Circles
          small_circle={small_circle}
          big_circle={big_circle}
          greeting={greeting}
          navigator={navigator}
        ></Circles>
        <NameArea
          jobInfos={jobInfos}
          name={name}
          name_span={name_span}
        ></NameArea>
      </div>
    </div>
  );
};

export default HomePage;
