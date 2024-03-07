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
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 gap-3 align-items-center justify-content-center" id={props.galleryID}>
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
                    <img src={image.src} alt={image.caption} className="img-fluid" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-sm-4 gap-10 align-items-center justify-content-center" id={props.galleryID}>
          {props.images.map((image, index) => (
            <a
              href={image.src3x}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              key={props.galleryID + '-' + index}
              target="_blank"
              rel="noreferrer"
            >
              <img src={image.thumb} alt="" className="img-fluid cursor-pointer rounded-lg transition duration-300 transform hover-scale-105" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyGallery;
