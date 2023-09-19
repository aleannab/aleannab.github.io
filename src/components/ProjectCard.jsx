import React from 'react';
import { Link } from "react-router-dom";

const ProjectCard = ({data}) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <div className="card-actions justify-end">
          <Link to={`/projects/${data.id}`}
            state={{projectData: data}}>
            <button className="btn btn-primary">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;