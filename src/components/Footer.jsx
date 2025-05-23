import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="wrapper">
          <Link to="/" className="footer-logo">
            <img src="/images/ejc.png" alt="SimpleBlog Logo" width="250" className="logo-light" />
            <img src="/images/ejc.png" alt="SimpleBlog Logo" width="250" className="logo-dark" />
          </Link>
          <p className="footer-text">
            I am deeply passionate about advancing my expertise in the field of Software Development. 
            I am dedicated to continually expanding my knowledge and honing my skills in these area, 
            driven by a commitment to excellence and innovation.
          </p>
        </div>

        <div className="wrapper">
          <p className="footer-title">Quick Links</p>
          <ul>
            <li><Link to="/about" className="footer-link">About Me</Link></li>
            <li><Link to="/contact" className="footer-link">Contact Me</Link></li>
          </ul>
        </div>

        <div className="wrapper">
          <p className="footer-title">Address</p>
          <ul>
            <li>
              <a href="#" className="footer-link">Melbourne, Victoria, Australia</a>
            </li>
          </ul>
        </div>
      </div>

      <p className="copyright">
        &copy; Copyright 2024 <Link to="/">EJC</Link>
      </p>
    </footer>
  );
};

export default Footer;