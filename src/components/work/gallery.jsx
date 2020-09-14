import React from "react";
import galleryData from "../../pages/gallery.json";
const Gallery = () => {
  const renderGalleryDivs = () => {
    return galleryData.map(({ cn, url }) => (
      <div
        className={cn}
        key={cn}
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
