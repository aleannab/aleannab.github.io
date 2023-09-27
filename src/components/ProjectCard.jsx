import React from 'react';
import { Link } from "react-router-dom";

const ProjectCard = ({data}) => {
  return (
    <div className="card shadow-xl w-full relative hover:scale-105"><Link to={`/projects/${data.id}`} state={{ projectData: data }}>
      <div className="group">
      <img className="absolute top-0 left-0 w-full h-full group-hover:opacity-50 rounded-lg object-cover object-center" src={data.hero}/>
      <div className="card-body relative z-10 opacity-0 group-hover:opacity-100">
        <h2 className="relative z-20 card-title justify-center text-white">{data.name}</h2>
      </div>
      </div>
      </Link>
    </div>

  );
}

export default ProjectCard;