import React from "react";

const SupportLogo = () => {
  const classes = ["a", "b", "c", "d"].map((cl) => {
    return <div className={cl}></div>;
  });
  return <div className="container support">{classes}</div>;
};

export default SupportLogo;
