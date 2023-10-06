import React from 'react';
import ProjectCard from './ProjectCard';
import projectData from '../data/projects';
import ladder from '../assets/temp/ladder.svg';

const ProjectList = () => {
  return (
    <div id="projects" className="relative flex flex-col w-full max-w-5xl">
      <div className="flex flex-col justify-center items-center pb-[18%] px-[5%] w-full">
        <img src={ladder} class="absolute w-1/4 bottom-0 right-0 z-30 drop-shadow-xl" />
        <h1 className="text-6xl font-serif font-bold pb-10 text-primary text-shadow">Projects</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectData.map((project) => (
            <ProjectCard data={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
