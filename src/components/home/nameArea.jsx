import React from "react";
import { gsap } from "gsap";
const NameArea = () => {
  gsap.from(".nameArea", { opacity: 0, duration: 2, y: -100 });
  return (
    <div className="nameArea">
      <div className={"name-info"}>I'm Zakaria Hamdan</div>
      <p className={"job-info"}>
        Full-Stack Web Developer currenlty living in Germany.
      </p>
    </div>
  );
};

export default NameArea;
