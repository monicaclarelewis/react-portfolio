import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/projects.css"

function Projects(props) {
  return (
    <div class="card-deck row" id="projectContainer">
      <h1>My Work</h1>
      
      {/* Project 1 */}
      <div className="card col-lg-4 col-md-4 col-sm-12 workCard">
        <img className="card-img-top projectImage" src={require("./images/travelApp.png")} alt="" />
        <div className="card-body">
          <h2>Travel App</h2>
            <Link to="https://michalous.github.io/travel-app/" role="button" className="btn btn-link">
            Check it out!
            </Link>
            <Link to="https://github.com/Michalous/travel-app/branches" role="button" className="btn btn-link">
            Check it out on GitHub
            </Link>
        </div> 
      </div>

      {/* Project 2 */}
      <div className="card col-lg-4 col-md-4 col-sm-12 workCard">
        <img className="card-img-top projectImage" src={require("./images/passwordG.png")} alt="" />
        <div className="card-body">
          <h2>Password Generator</h2>
            <Link to="https://monicaclarelewis.github.io/password-generator/" role="button" className="btn btn-link">
            Check it out!
            </Link>
            <Link to="https://github.com/monicaclarelewis/password-generator" role="button" className="btn btn-link">
            Check it out on GitHub
            </Link>
        </div> 
      </div>

      {/* Project 3 */}
      <div className="card col-lg-4 col-md-4 col-sm-12 workCard">
        <img className="card-img-top projectImage" src={require("./images/workScheduler.png")} alt="" />
        <div className="card-body">
          <h2>Work Scheduler</h2>
            <Link to="https://monicaclarelewis.github.io/work-scheduler/" role="button" className="btn btn-link">
            Check it out!
            </Link>
            <Link to="https://github.com/monicaclarelewis/work-scheduler" role="button" className="btn btn-link">
            Check it out on GitHub
            </Link>
        </div> 
      </div>

      {/* Project 4 */}
      <div className="card col-lg-4 col-md-4 col-sm-12 workCard">
        <img className="card-img-top projectImage" src={require("./images/finances.png")} alt="" />
        <div className="card-body">
          <h2>JavaScript Finances</h2>
            <Link to="https://monicaclarelewis.github.io/Finances-using-JavaScript//" role="button" className="btn btn-link">
            Check it out!
            </Link>
            <Link to="https://github.com/monicaclarelewis/Finances-using-JavaScript" role="button" className="btn btn-link">
            Check it out on GitHub
            </Link>
        </div> 
      </div>

      {/* Project 5 */}
      <div className="card col-lg-4 col-md-4 col-sm-12 workCard">
        <img className="card-img-top projectImage" src={require("./images/BSPortfolio.png")} alt="" />
        <div className="card-body">
          <h2>Bootstrap Portfolio</h2>
            <Link to="https://monicaclarelewis.github.io/Monica-Lewis-Portfolio/" role="button" className="btn btn-link">
            Check it out!
            </Link>
            <Link to="https://github.com/monicaclarelewis/Monica-Lewis-Portfolio" role="button" className="btn btn-link">
            Check it out on GitHub
            </Link>
        </div> 
      </div>

      {/* Project 6 */}
      <div className="card col-lg-4 col-md-4 col-sm-12 workCard">
        <img className="card-img-top projectImage" src={require("./images/placeholder.jpeg")} alt="" />
        <div className="card-body">
          <h2>Coding Quiz</h2>
            <Link to="/" role="button" className="btn btn-link">
            Deployment coming soon!
            </Link>
            <Link to="https://github.com/monicaclarelewis/Code-Quiz" role="button" className="btn btn-link">
            Check it out on GitHub
            </Link>
        </div> 
      </div>



    </div>
  );
}
  
export default Projects;

