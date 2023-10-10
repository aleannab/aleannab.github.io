import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import ProjectInfo from './ProjectInfo';
import MyGallery from './MyGallery';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import '../styles/main.css';
import projects from '../data/projects.js';

const ProjectTemplate = () => {
  // Get the projectId from the URL
  const { projectId } = useParams();

  // Find the project that matches the projectId
  const projectData = projects.find((p) => p.id === parseInt(projectId, 10));

  if (!projectData) {
    // Handle the case where no matching project is found
    return <div>Project not found</div>;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden">
      <Navigation isMain={false} />
      <div className="flex items-center justify-center py-10 px-20">
        <div className="w-full max-w-5xl space-y-10 items-center justify-center py-[18%] px-[5%]">
          <div className="flex flex-col lg:flex-row items-center justify-between items-start gap-10">
            <img src={projectData.hero} className="max-w-sm border-8 border-primary rounded-lg shadow-2xl" />
            <div className="flex flex-col px-10">
              <h1 className="text-5xl font-bold text-center lg:text-left text-primary">{projectData.name}</h1>
              <p className="py-6 text-left">{projectData.description}</p>
              <div className="flex w-full flex-col md:flex-row justify-between">
                {projectData.details.map((detail) => (
                  <ProjectInfo data={detail} />
                ))}
              </div>
            </div>
          </div>
          {projectData.videos &&
            projectData.videos.length > 0 &&
            projectData.videos.map((video, index) => (
              <video
                className="w-full aspect-video rounded-lg "
                src={video.src}
                allow="fullscreen; picture-in-picture"
                allowFullScreen
                controls
              ></video>
            ))}
          {projectData.images && projectData.images.length > 0 && <MyGallery galleryID="my-test-gallery" images={projectData.images} />}
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate;
