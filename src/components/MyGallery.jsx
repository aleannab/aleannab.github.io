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
    <div>
      {props.galleryType === 'phone' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center" id={props.galleryID}>
          {props.images.map((image, index) => (
            <a
              href={image.src}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              key={props.galleryID + '-' + index}
              target="_blank"
              rel="noreferrer"
            >
              <div className="mockup-phone">
                <div className="camera"></div>
                <div className="display">
                  <div className="artboard artboard-demo">
                    <img src={image.src} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center justify-center" id={props.galleryID}>
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
                src={image.src} //TODO: update to thumbnails
                alt=""
                className="cursor-pointer w-full h-auto rounded-lg transition duration-300 transform hover:scale-105"
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyGallery;
