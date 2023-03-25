import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar () {
  return (
    <div className="navbar navbar-expand-lg customNav navMain navbar-custom myNav">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/contact"> Contact </Link>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto links navigate">
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/contact"> Contact </Link>
          </ul>
      </div>
    </div>
  );
}

export default Navbar