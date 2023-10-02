import React from 'react';
import ProjectCard from './ProjectCard';
import projectData from '../data/projects';
import illustration from '../assets/temp/character-illustration.png';

const ProjectList = () => {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center p-10 w-full max-w-5xl"
    >
      <h1 className="text-6xl font-bold pb-10 text-primary">Projects</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectData.map((project) => (
          <ProjectCard data={project} />
        ))}
      </div>
      <img src={illustration} className="max-auto max-w-xs" />
    </div>
  );
};

export default ProjectList;
