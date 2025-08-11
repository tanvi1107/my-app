import React from 'react';
import './Project.css';

const projectsData = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects and skills.",
    tech: "React, CSS, Framer Motion",
    repo: "https://github.com/tanvi1107/portfolio",
    demo: "https://tanvi1107.github.io/portfolio/"

  },

  {
    title:"AQI - Air Quality Index",
    description: "A web application that provides real-time air quality index data using the OpenWeather", // <-- Add comma here
    tech: "Pandas, Numpy, Python, Streamlit, Seaborn, Matpoltlib",
    repo: "https://github.com/tanvi1107/AQI-AIR-QUALITY-INDEX-",
    demo: "https://tanvi1107-aqi-app.streamlit.app/"
  }
];

const Projects = () => {
  return (
    <section className="projects-container" aria-label="Projects Section">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <article key={index} className="project-card">
            <h2>{project.title}</h2>
            <p className="project-tech">{project.tech}</p>
            <p>{project.description}</p>
            <div className="project-links">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn">
                  Live Demo
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  GitHub Repo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
