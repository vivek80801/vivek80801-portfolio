import React from "react";
import projects from "../scss/components/projects.module.scss";

const Projects: React.FC = (): JSX.Element => {
  return (
    <div id="projects" className={projects.container}>
      <h1>my projects</h1>
      <div className={projects.projects}>
        <div className={projects.project}></div>
      </div>
    </div>
  );
};

export default Projects;

