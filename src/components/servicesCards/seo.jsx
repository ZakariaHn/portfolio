import React, { useRef, useEffect } from "react";
import { TweenMax } from "gsap";
import SeoLogo from "./logos/Seo";
const SeoCard = () => {
  let cardItem = useRef(null);
  useEffect(() => {
    TweenMax.from(cardItem, { duration: 1, opacity: 0.1, delay: 1.4 });
  });
  const ref = (el) => {
    cardItem = el;
  };
  return (
    <div className="card" ref={ref}>
      <SeoLogo />
      <div className="card-body">
        <h5>SEO</h5>
        <p>
          Only having a website doesn't mean anyone will find it. I can help
          your website get found in the search engines.
        </p>
      </div>
    </div>
  );
};

export default SeoCard;
