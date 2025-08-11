import React from "react";
import "./About.css";
import ProfilePic from "../assets/Profile.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src={ProfilePic} alt="Profile" className="about-pic" />
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            I’m a curious and driven <strong>tech enthusiast</strong> exploring
            the worlds of <strong>data analysis</strong> and{" "}
            <strong>web development</strong>.
          </p>
          <p>
            I’ve completed a 1-month internship in <strong>web designing</strong> 
            at <em>Spark To Ideas</em>, where I worked on building responsive
            and visually appealing web interfaces.
          </p>
          <p>
            Skilled in <strong>Python</strong>, <strong>SQL</strong>,{" "}
            <strong>Power BI</strong>, <strong>HTML</strong>,{" "}
            <strong>CSS</strong>, <strong>JavaScript</strong>, and{" "}
            <strong>React</strong>, I enjoy solving real-world problems—
            whether it’s drawing insights from data or creating seamless digital experiences.
          </p>
          <p>
            I’m currently <strong>open to internship and entry-level opportunities</strong> 
            where I can keep learning, contribute meaningfully, and grow with a passionate team.
          </p>

          <h2>Skills</h2>
          <ul className="skills-list">
            <li>Python</li>
            <li>SQL</li>
            <li>Power BI</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Web Design</li>
            <li>Data Analysis</li>
            <li>Responsive Design</li>
            <li>Tailwind</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
