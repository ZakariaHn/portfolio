import React from "react";
const Gallery = () => {
  const renderGalleryDivs = () => {
    return ["a", "b", "c", "d", "e", "f", "g", "h"].map((i) => (
      <div className={i} key={i}>
        <div className="overlay z"></div>
      </div>
    ));
  };
  return <div className="gallery">{renderGalleryDivs()}</div>;
};

export default Gallery;
