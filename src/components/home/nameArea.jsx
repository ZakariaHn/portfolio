import React, { useRef, useEffect } from "react";
import { TweenMax } from "gsap";
const NameArea = () => {
  let logoItem = useRef(null);
  useEffect(() => {
    TweenMax.from(logoItem, { duration: 1, y: 200, opacity: 1, delay: 2 });
  });
  return (
    <div
      className="nameArea"
      ref={(el) => {
        logoItem = el;
      }}
    >
      <div className="name-info">Hi, my name is Zakaria Hamdan</div>
      <p className="job-info">
        I'm Full-Stack Web Developer currenlty living in Germany.
      </p>
    </div>
  );
};

export default NameArea;
