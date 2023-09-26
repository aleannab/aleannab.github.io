import React, { useState } from 'react';
import ProjectInfo from './ProjectInfo'
import MyGallery from "./MyGallery";
import Footer from "./Footer"
import { useLocation } from 'react-router-dom';
import '../styles/main.css';

const ProjectTemplate = () => {
  const location = useLocation();
  const { projectData } = location.state;

  const [name] = useState('React');

  return (
    <div>
    <div className="max-w-full flex items-center justify-center">
      <div className="p-10 w-auto max-w-5xl space-y-12">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <img src={projectData.hero} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="w-auto p-6">
            <h1 className="text-5xl font-bold text-center lg:text-left">{projectData.name}</h1>
            <p className="py-6 text-left">{projectData.description}</p>
            <div className="flex w-full flex-col md:flex-row justify-between" >
              {projectData.details.map((detail) => (
                <ProjectInfo data={detail} />
              ))}
            </div>
          </div>
        </div>
        {projectData.videos && projectData.videos.length > 0 && (
          projectData.videos.map((video, index) => (
              <iframe className="w-full aspect-video rounded-lg "
                src={video.src}
                allow="fullscreen; picture-in-picture"
                allowFullScreen
                title="Video"
              ></iframe>
          ))
        )}
        {projectData.images && projectData.images.length > 0 && (
          <MyGallery galleryID="my-test-gallery" images={projectData.images} />
        )}
        
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ProjectTemplate;