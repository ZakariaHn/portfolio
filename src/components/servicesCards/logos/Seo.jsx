import React from "react";
const SeoLogo = () => {
  const classes = ["a", "b", "c", "d"].map((cl) => {
    return <div className={cl}></div>;
  });
  return <div className="container seo">{classes}</div>;
};

export default SeoLogo;
