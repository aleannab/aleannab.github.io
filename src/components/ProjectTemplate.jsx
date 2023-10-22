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
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute pattern w-full h-full z-[-30]" />
      <div className="w-full flex flex-row-reverse max-w-6xl ">
        <Navigation isMain={false} />
      </div>
      <div className="flex flex-col w-full max-w-5xl space-y-10 items-center justify-center py-24 px-10">
        <div className="flex flex-col w-full lg:flex-row items-center justify-between items-start gap-10">
          <img
            src={projectData.hero}
            srcSet={`${projectData.hero2x} 2x, ${projectData.hero} 1x`}
            className="w-full max-w-xs border-2 border-info rounded-lg shadow-2xl"
            alt={`${projectData.name} hero image`}
          />
          <div className="flex flex-col w-full ">
            <h1 className="text-4xl font-serif font-bold text-center lg:text-left text-primary">{projectData.name}</h1>
            <p className="py-6 text-lg text-left whitespace-pre-line">{projectData.description}</p>
          </div>
        </div>
        <div className="flex w-full flex-col md:flex-row justify-between gap-5">
          {projectData.details.map((detail) => (
            <ProjectInfo key={detail.id} data={detail} />
          ))}
        </div>
        {projectData.videos &&
          projectData.videos.length > 0 &&
          projectData.videos.map((video, index) => (
            <div key={video.id} className="w-full">
              {video.src.startsWith('http') ? (
                <iframe className="w-full aspect-video rounded-lg" src={video.src} title={`Video ${index}`} allowFullScreen></iframe>
              ) : (
                <video className="w-full aspect-video rounded-lg" src={video.src} controls></video>
              )}
            </div>
          ))}
        {projectData.images && projectData.images.length > 0 && (
          <MyGallery galleryID="my-test-gallery" galleryType={projectData.galleryType} images={projectData.images} />
        )}
      </div>
    </div>
  );
};

export default ProjectTemplate;
