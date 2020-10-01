import React, { useEffect, useRef } from "react";
import { TweenMax } from "gsap";
const ShootingStars = () => {
  let shotingStars = useRef(null);
  useEffect(() => {
    TweenMax.from(shotingStars, {
      duration: 0.5,
      y: -20,
      opacity: 0,
      delay: 2.7,
    });
  });

  const shotingStarsRef = (el) => {
    shotingStars = el;
  };
  return (
    <div class="sky-container" ref={shotingStarsRef}>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
    </div>
  );
};

export default ShootingStars;
