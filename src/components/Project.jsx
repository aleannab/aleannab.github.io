import React from 'react';
import image from "../assets/temp.jpg";

const Project = ({title}) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Aenean ullamcorper quam ante, et eleifend libero laoreet a.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
  );
}

export default Project;