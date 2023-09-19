import React, { useState } from 'react';
import ProjectInfo from './ProjectInfo'
import image from "../assets/temp-banner.png";
import MyGallery from "./MyGallery";
import { useLocation } from 'react-router-dom';

const ProjectTemplate = () => {
  const location = useLocation();
  const { projectData } = location.state;

  const [name] = useState('React');

  const images = [
    {
      largeURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
      thumbnailURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
      width: 1875,
      height: 2500,
    },
    {
      largeURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
      thumbnailURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
      width: 1669,
      height: 2500,
    },
    {
      largeURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
      thumbnailURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
      width: 2500,
      height: 1666,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="max-w-5xl space-y-10">
        <img src={image} className="object-contain object-center justify-center rounded-lg shadow-2xl" />
        <h1 className="text-6xl font-bold text-center">{projectData.name}</h1>
        <p>{projectData.description}
        </p>
        <div className="flex w-full flex-col md:flex-row justify-between" >
        {projectData.details.map((detail) => (
          <ProjectInfo data={detail} />
        ))}
        </div>
        <MyGallery galleryID="my-test-gallery" images={images} />
      </div>
    </div>
  );
};

export default ProjectTemplate;