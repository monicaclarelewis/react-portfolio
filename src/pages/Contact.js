import React from 'react';
import { Link } from 'react-router-dom';

function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Thank you for visiting my portfolio. Find out more and contact me via the buttons below.
      </p>
      <Link to="https://www.linkedin.com/in/monica-lewis-54811387/" role="button" className="btn btn-link">
        LinkedIn
      </Link>
      <Link to="/" role="button" className="btn btn-link">
        CV
      </Link>
      <Link to="mailto:monicaclarelewis@hotmail.co.uk" role="button" className="btn btn-link">
        Get in touch via email
      </Link>
    </div>
  );
}

export default Contact;