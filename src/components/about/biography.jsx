import React, { useRef, useEffect } from "react";
import { TweenMax } from "gsap";

const Biography = () => {
  let bioItem1 = useRef(null);
  let bioItem2 = useRef(null);
  useEffect(() => {
    TweenMax.from(bioItem1, {
      duration: 1.5,
      opacity: 0,
      y: 120,
      x: 160,
      delay: 1,
    });
    TweenMax.from(bioItem2, {
      duration: 1.5,
      opacity: 0,
      y: -100,
      x: -200,
      delay: 1,
    });
  });

  const ref1 = (el1) => {
    bioItem1 = el1;
  };
  const ref2 = (el2) => {
    bioItem2 = el2;
  };
  return (
    <div className="bio">
      <p className={`first`} ref={ref1}>
        My abundant energy fuels me in the pursuit of many interests, hobbies,
        areas of study and artistic endeavor. Passionate about writing clean,
        quality, high-performance codes and making food and music.
      </p>
      <p className={`seconde`} ref={ref2}>
        I create successful websites that are fast, easy to use, and built with
        best practices plus helping designers, small agencies and businesses
        bring their ideas to life.
      </p>
    </div>
  );
};

export default Biography;
