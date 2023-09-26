import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const MyGallery = (props) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-10"
      id={props.galleryID}
    >
      {props.images.map((image, index) => (
        <a
          href={image.src}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={props.galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={image.src} //update
            alt=""
            className="cursor-pointer w-full h-auto rounded-lg transition duration-300 transform hover:scale-105"
          />
        </a>
      ))}
    </div>
  );
};

export default MyGallery;
