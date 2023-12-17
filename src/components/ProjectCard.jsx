import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCardContent from './ProjectCardContent';

const ProjectCard = ({ data }) => {
  return data.externalLink ? (
    <div className="w-full bg-info border-2 border-info rounded-lg shadow-xl z-20 ">
      <div className="card w-full relative">
        <a href={`${data.externalLink}`} target="_blank">
          <ProjectCardContent data={data} />
        </a>
      </div>
    </div>
  ) : (
    <div className="w-full bg-info border-2 border-info rounded-lg shadow-xl z-20 ">
      <div className="card w-full relative">
        <Link to={`/projects/${data.id}`} state={{ projectData: data }}>
          <ProjectCardContent data={data} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
