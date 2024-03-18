import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';
import projectImage from '../../assets/Roadmap.PNG';

function ProjectCard({ title, description, github, live }) {
  return (
    <div className="project-card">
      {/* Use the img tag to display your image */}
      <img src={projectImage} alt={title} className="project-image"/>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-buttons">
          <Link to="/read-more" className="btn btn-primary">Read More</Link>
          <a href={github} className="btn btn-secondary">Github</a>
        </div>
      </div>
    </div>
  );
}


export default ProjectCard;
