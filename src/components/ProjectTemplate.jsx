import React, { useState } from 'react';
import ProjectInfo from './ProjectInfo'
import image from "../assets/temp-banner.png";
import MyGallery from "./MyGallery";
import { useLocation } from 'react-router-dom';
import '../styles/main.css';

const ProjectTemplate = () => {
  const location = useLocation();
  const { projectData } = location.state;

  const [name] = useState('React');

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="max-w-5xl space-y-10">
        <img src={image} className="object-contain object-center justify-center rounded-lg shadow-2xl" />
        <h1 className="text-6xl font-bold text-center">{projectData.name}</h1>
        <p className="caption">{projectData.description}
        </p>
        <div className="flex w-full flex-col md:flex-row justify-between" >
        {projectData.details.map((detail) => (
          <ProjectInfo data={detail} />
        ))}
        </div>
        <MyGallery galleryID="my-test-gallery" images={projectData.images} />
        {projectData.videoUrl && (
          <iframe
            src={projectData.videoUrl}
            width="640"
            height="360"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default ProjectTemplate;