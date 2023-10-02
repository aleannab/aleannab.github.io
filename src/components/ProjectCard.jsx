import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ data }) => {
  return (
    <div className="card w-full relative shadow-xl hover:scale-105">
      <Link to={`/projects/${data.id}`} state={{ projectData: data }}>
        <div className="group bg-accent rounded-lg">
          <img className="w-full h-full top-0 left-0 absolute   rounded-lg object-cover object-center group-hover:opacity-30" src={data.hero} />
          <div className="card-body z-10 relative opacity-0 group-hover:opacity-100">
            <h2 className="card-title z-20 relative   justify-center text-white">{data.name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
