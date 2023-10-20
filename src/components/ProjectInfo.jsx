import React from 'react';

const ProjectInfo = ({ data }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-primary font-bold font-sans font-bold uppercase text-xs">{data.label}</h3>
      <ul>
        {data.content.map((item) => (
          <li key={item}>
            {data.link ? (
              <a className="link link-secondary font-bold" href={data.link} target="_blank">
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
