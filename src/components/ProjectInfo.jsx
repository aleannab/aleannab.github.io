import React from 'react';

const ProjectInfo = ({data}) => {
  return (
    <div className="flex flex-col">
      <h1 className="italic">{data.label}</h1>
      <ul>
        {data.content.map((item) => (
          <li><a href={data.link} target="_blank">{item}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectInfo;