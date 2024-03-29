import React from 'react';
import "../styles/Projects.css"
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList'

function Projects(){
  return (
    <div className="projects">
      <h1 className="projectHeading">Check out my work!</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return ( 
          <ProjectItem key={project.id} id={idx} name={project.name} image={project.image}/> 
          );
        })}
      </div>
    </div>
  )
}

export default Projects