import React, { useState } from 'react';
import ProjectInfo from './ProjectInfo'
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
      <div id="aboutme" className="flex flex-col lg:flex-row justify-between">
        <img src={projectData.hero} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="flex flex-col text-left p-6">
          <h1 className="text-5xl font-bold">{projectData.name}</h1>
          <p className="py-6">{projectData.description}</p>
          <div className="flex w-full flex-col md:flex-row justify-between" >
            {projectData.details.map((detail) => (
              <ProjectInfo data={detail} />
            ))}
          </div>
        </div>
      </div>
        
        {projectData.images && projectData.images.length > 0 && (
          <MyGallery galleryID="my-test-gallery" images={projectData.images} />
        )}
        {projectData.videos && projectData.videos.length > 0 && (
          projectData.videos.map((video, index) => (
            <iframe
              src={video.src}
              width="640"
              height="360"
              allow="fullscreen; picture-in-picture"
              allowFullScreen
              autoplay="false"
            ></iframe>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectTemplate;