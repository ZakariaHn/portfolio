import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./scss/main.scss";
import classNames from "classnames";

const Cursor = () => {
  const [clicked, setClicked] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };

  const addEventListeners = () => {
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const cursorClasses = classNames("cursor", {
    "cursor--hidden": hidden,
    "cursor--clicked": clicked,
    "cursor--link-hovered": linkHovered,
  });

  return (
    <div
      className={cursorClasses}
      className="cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="right"></div>
      <div className="inner"></div>
      <div className="left"></div>
    </div>
  );
};
ReactDOM.render(
  <BrowserRouter>
    <App />
    <Cursor />
  </BrowserRouter>,
  document.getElementById("root")
);
