import React from 'react';
import ProjectCard from './ProjectCard'
import projectData from '../data/projects'

const ProjectList = () => {
  return (
    <div id="projects" className="flex flex-col justify-center items-center p-10">
      <h1 className="text-6xl font-bold pb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map((project) => (
          <ProjectCard data={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
