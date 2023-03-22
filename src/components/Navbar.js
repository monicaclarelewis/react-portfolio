import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar () {
  return (
    <div class="navbar navbar-expand-lg navbar-light bg-light customNav navMain navbar-custom">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon toggleBtn"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto links navigate">
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/contact"> Contact </Link>
          </ul>
      </div>
    </div>
  );
}

export default Navbar