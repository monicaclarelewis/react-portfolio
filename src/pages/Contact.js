import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.css'

function Contact(){
  return (
    <div className="contact">
      <h1 className="contactHeading">Get in touch!</h1>
      <p>
        Thank you for visiting my portfolio. Find out more and contact me via the buttons below.
      </p>
      <Link to="https://www.linkedin.com/in/monica-lewis-54811387/" role="button" className="btn btn-link">
        LinkedIn
      </Link>
      <Link to="https://github.com/monicaclarelewis" role="button" className="btn btn-link">
        GitHub
      </Link>
      <Link to="mailto:monicaclarelewis@hotmail.co.uk" role="button" className="btn btn-link">
        Get in touch via email
      </Link>
    </div>
  )
}

export default Contact
