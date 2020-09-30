import React, { useRef, useEffect } from "react";
import { DistortionText } from "react-text-fun";
import { TweenMax } from "gsap";
const Logo = () => {
  let logoItem = useRef(null);
  useEffect(() => {
    TweenMax.from(logoItem, { duration: 2, x: -500, opacity: 1 });
  });
  return (
    <h4>
      <DistortionText
        ref={(el) => {
          logoItem = el;
        }}
        className="logo"
        text="Z H"
        fill="#c2363d"
      />
    </h4>
  );
};

export default Logo;
