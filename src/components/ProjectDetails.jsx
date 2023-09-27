import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects.js'; // Import your projects data

const ProjectDetails = () => {
  // Get the projectId from the URL
  const { projectId } = useParams();

  // Find the project that matches the projectId
  const project = projects.find((p) => p.id === parseInt(projectId, 10));

  if (!project) {
    // Handle the case where no matching project is found
    return <div>Project not found</div>;
  }

  // Render the project details
  return (
    <div>
      <h2>{project.name}</h2>
      {/* Render other project details here */}
    </div>
  );
};

export default ProjectDetails;
