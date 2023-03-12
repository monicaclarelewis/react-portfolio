import React from "react";
import { NavLink } from 'react-router-dom';
import "./nav.css"

function nav() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="Home"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="ProjectPage"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="Contact"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default nav;
