import React from 'react';
import ProjectCard from './ProjectCard';
import projectData from '../data/projects';
import ladder from '../assets/temp/ladder.svg';
import squares from '../assets/temp/decorative-squares.svg';
import Decor from './Decor';

const ProjectList = () => {
  return (
    <div id="projects" className="min-h-screen relative flex flex-col w-full justify-center items-center">
      <Decor left={squares} right={ladder} />
      <div className="flex flex-col items-center justify-center max-w-7xl px-[15%]">
        <h1 className="text-6xl font-serif font-bold pb-10 text-primary text-shadow hidden-text">Projects</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectData.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
