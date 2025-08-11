import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-container">
      <h1>Education 🎓</h1>

      <div className="education-item">
        <h2>Bachelor's Degree in Computer Science</h2>
        <p>Gujarat Technological University,2023-current</p>
        <p>CGPA: 8.1/10</p>
      </div>

      <div className="education-item">
        <h2>Higher Secondary School</h2>
        <p>Mother Of Hope School Ashadham,2021-23</p>
        <p>Percentage: 74%</p>
      </div>

      <div className="education-item">
        <h2> Secondary School</h2>
        <p>Mother Of Hope School Ashadham ,2020-21</p>
        <p>Percentage: 92%</p>
      </div>
    </div>
  );
};

export default Education;
