import React, { useState, useEffect } from 'react';
import Navigation from './Navigation'
import ProjectInfo from './ProjectInfo'
import MyGallery from "./MyGallery";
import Footer from "./Footer"
import { useParams } from 'react-router-dom';
import '../styles/main.css';
import projects from '../data/projects.js'

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
    <div>
      <Navigation isMain={false} />
      <div className="max-w-full flex items-center justify-center">
        <div className="p-10 w-auto max-w-5xl space-y-12">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <img src={projectData.hero} className="max-w-sm rounded-lg shadow-2xl" />
            <div className="w-auto p-6">
              <h1 className="text-5xl font-bold text-center lg:text-left text-primary">{projectData.name}</h1>
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
      <Footer />
    </div>
  );
};

export default ProjectTemplate;