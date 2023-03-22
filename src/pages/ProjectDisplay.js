import React from "react";
import { useParams, Link } from "react-router-dom";
import {ProjectList} from '../helpers/ProjectList'
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
  return (
    <div className="project">
        <h1> {project.name}</h1>
        <img src={project.image} alt="" />
        <Link className="linkBtn" to={project.deployed}>
          Check it out
        </Link>
        <Link className="linkBtn" to={project.GitHub}>
        Github
        </Link>
    </div>
  );
}

export default ProjectDisplay