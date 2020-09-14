import React from "react";
import galleryData from "../../pages/gallery.json";

const Gallery = () => {
  const renderGalleryDivs = () => {
    return galleryData.map(({ id, classes, url }) => (
      <div
        className={classes}
        key={id}
        onClick={() => {
          window.open(url);
        }}
      >
        <div className="overlay z"></div>
      </div>
    ));
  };
  return <div className="gallery">{renderGalleryDivs()}</div>;
};

export default Gallery;
