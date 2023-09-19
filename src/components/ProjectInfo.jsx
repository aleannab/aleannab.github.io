import React from 'react';

const ProjectInfo = ({data}) => {
  return (
    <div className="flex flex-col">
      <h1 className="italic">{data.label}</h1>
      <ul>
        <li><a href={data.link} target="_blank">{data.content}</a></li>
      </ul>
    </div>
  );
}

export default ProjectInfo;