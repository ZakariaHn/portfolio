import React, { useEffect, useRef } from "react";
import { LiquidDistortionText } from "react-text-fun";

import { TweenMax } from "gsap";
const PageContent = () => {
  let h3 = useRef(null);
  let p1 = useRef(null);
  let p2 = useRef(null);
  let button = useRef(null);
  useEffect(() => {
    TweenMax.from(h3, { duration: 0.5, y: -20, opacity: 0, delay: 1.8 });
    TweenMax.from(p1, { duration: 0.5, y: -40, opacity: 0, delay: 2 });
    TweenMax.from(p2, { duration: 0.5, y: -80, opacity: 0, delay: 2.2 });
    TweenMax.from(button, { duration: 0.5, y: -160, opacity: 0, delay: 1.5 });
  });

  const h3Ref = (el) => {
    h3 = el;
  };
  const p1Ref = (el) => {
    p1 = el;
  };
  const p2Ref = (el) => {
    p2 = el;
  };
  const buttonRef = (el) => {
    button = el;
  };
  const openEmail = () =>
    (window.location.href = `mailto:zakaria.k.hamdan@gmail.com`);
  return (
    <div className="page-content">
      <h3 ref={h3Ref}>
        <LiquidDistortionText
          text="Let's communicate"
          fill="#8fb1c177"
          speed={0.2}
        />
      </h3>
      <p ref={p1Ref}>
        Whether you have a question or just want to say hi, I'll try my best to
        get back to you!
      </p>
      <p ref={p2Ref}>I'm also open for work if you'd like to hire me.</p>
      <button ref={buttonRef} onClick={openEmail}>
        Get in touch
      </button>
    </div>
  );
};

export default PageContent;
