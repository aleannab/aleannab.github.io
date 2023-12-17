import React from 'react';

const ProjectCardContent = ({ data }) => {
  return (
    <div className="group bg-accent rounded-lg aspect-3/1">
      <img
        className="w-full h-full top-0 left-0 absolute rounded-lg object-cover object-center group-hover:opacity-30"
        src={data.square}
        alt={`${data.name} thumbnail`}
      />
      <div className="card-body relative opacity-0 group-hover:opacity-100 w-full h-full object-center justify-center">
        <h2 className="card-title relative justify-center text-center text-white">{data.name}</h2>
      </div>
    </div>
  );
};

export default ProjectCardContent;
