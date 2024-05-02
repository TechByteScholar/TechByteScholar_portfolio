import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectList.css';
import projectsData from '../projectsData.json'; // Correct path to the projects data

const ProjectList = () => {
  const { category } = useParams();
  const projects = projectsData.filter(project => project.category === category);

  return (
    <div className="project-list-container">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              View Code on GitHub
            </a>
            {/* You can add more project details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
