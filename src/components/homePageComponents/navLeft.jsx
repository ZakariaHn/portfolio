import React, { useState } from "react";

const NavLeft = (props) => {
  const [navLeft, setClass] = useState("min");
  const [AboutAnchore, setAboutAnchore] = useState("lblAbout");
  const [bio, setBio] = useState("hide");
  const [first_bio, set_first_bio] = useState("");
  const [seconde_bio, set_seconde_bio] = useState("");

  // Changes when opening the About section

  async function handle_nav_left_class() {
    await setClass("max");
    await handle_job_infos_class();
    await handle_About_first_step();
    await handle_bio_visibelity();
    await handle_first_bio();
    await handle_seconde_bio();
    // await hide_circle();
    // await hide_greeting();
    // await add_image();
    await translate_name();
    // await hide_span_name();
  }

  const handle_job_infos_class = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(props.setInfos("hide"));
      }, 1000);
    });
  };

  const handle_About_first_step = () => {
    setTimeout(() => {
      setAboutAnchore("hide");
    }, 500);
  };

  const handle_bio_visibelity = () => {
    setTimeout(() => {
      setBio("bio");
    }, 2000);
  };

  const handle_first_bio = () => {
    set_first_bio("first");
  };
  const handle_seconde_bio = () => {
    set_seconde_bio("seconde");
  };

  // const hide_circle = () => {};

  // const hide_greeting = () => {};

  // const add_image = () => {};

  const translate_name = () => {
    props.set_name("translateName");
    props.set_name_span("hide");
    props.set_big_circle("imagedCircle");
    props.set_greeting("hide");
    props.set_small_circle("hide");
  };

  // const hide_span_name = () => {};
  return (
    <div className={`navLeft ${navLeft}`}>
      <p className={`${bio} ${first_bio}`}>
        My abundant energy fuels me in the pursuit of many interests, hobbies,
        areas of study and artistic endeavor. Passionate about writing clean,
        quality, high-performance codes and cooking both good food and music
      </p>
      <p to="/about" onClick={handle_nav_left_class} className={AboutAnchore}>
        About
      </p>
      <p className={`${bio} ${seconde_bio}`}>
        I create successful websites that are fast, easy to use, and built with
        best practices plus helping designers, small agencies and businesses
        bring their ideas to life.
      </p>
    </div>
  );
};

export default NavLeft;
