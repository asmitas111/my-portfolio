import React from "react";

const Skills = () => {
  return (
    <div className="skills">
      <h2> My Skills </h2>
      <div className="container">
        <div className="skills-container">
          <div className="skills-name">
            <h4>Design</h4>
          </div>

          <div className="skills-name">
            <h4>Development</h4>
          </div>

          <div className="skills-name">
            <h4>Problem Solving</h4>
          </div>

          <div className="skills-name">
            <h4>User Experiences</h4>
          </div>
        </div>
      </div>
      <div className="btn">
        <button className="resume-button">
          <a
            href="https://drive.google.com/file/d/1R4FK9H6tsMY74x7DqmudzdVviHuXkYVl/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            download="resume.pdf"
          >
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Skills;
