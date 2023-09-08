import React from 'react';
import Project from './Project'

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col justify-center items-center p-10">
      <h1 className="text-6xl font-bold pb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Project title="Emerging Radiance" />
        <Project title="AR Stickers" />
        <Project title="The Luminary at BSU" />
        <Project title="VF Landing" />
      </div>
    </div>
  );
}

export default Projects;
