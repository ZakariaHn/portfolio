import React, { useRef, useEffect } from "react";
import { DistortionText } from "react-text-fun";
import { TweenMax } from "gsap";
const Logo = () => {
  let logoItem = useRef(null);
  useEffect(() => {
    TweenMax.from(logoItem, { duration: 2, x: -500, opacity: 1 });
  });
  return (
    <div
      className={"logo"}
      ref={(el) => {
        logoItem = el;
      }}
    >
      <h4>
        <DistortionText text="Z H" fill="#c2363d" />
      </h4>
    </div>
  );
};

export default Logo;
