import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard'; // Updated import path for sibling directory
import selfieImage from '../../assets/Hamodi.jpg'; // Updated import path for assets directory
import './LandingPage.css';

function LandingPage() {

    const projects = [
        {
          title: "Roadmap",
          description: "A simple application for creating daily roadmaps.",
          github: "https://github.com/Mosles/mosles.github.io/",
          live: "https://project1.com",
        },
        // ... other projects
      ];
      

    return (
      <div>
        <div className="top-header-section">
          <div className="selfie-container">
            <img src={selfieImage} alt="Hamodi Jaafary" className="selfie-image" />
          </div>
          <div className="title-container">
            <h1 className="landing-title">Hamodi Jaafary</h1>
            <p className="landing-subtitle">Junior Fullstack Developer</p>
          </div>
        </div>
      
        <div className="projects-section">
        <div className="container">
          <div className="row">
   {projects.map((project, index) => (
    <div className="col-md-4 d-flex justify-content-center" key={index}>
  <ProjectCard
    title={project.title}
    description={project.description}
    github={project.github}
    live={project.live}
  />
</div>

))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;