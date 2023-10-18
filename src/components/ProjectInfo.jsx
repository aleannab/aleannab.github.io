import React from 'react';

const ProjectInfo = ({ data }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-primary font-bold font-serif">{data.label}</h2>
      <ul>
        {data.content.map((item) => (
          <li key={item}>
            {data.link ? (
              <a className="link link-secondary" href={data.link} target="_blank">
                {item}
              </a>
            ) : (
              item
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectInfo;
