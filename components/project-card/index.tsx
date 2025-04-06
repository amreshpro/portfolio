import React from 'react';
import './style.css'; // Link the CSS

const ProjectCard = ({ title="", imageUrl='', codeLink='', liveLink='',description='' }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className="btn code-btn">
            🔗 Code
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn live-btn">
            🌐 Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
