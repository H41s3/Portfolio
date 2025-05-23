import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <h1 className="h1">
            <b>Emilio Joseph&nbsp;Calma</b>. <br /> Aspiring Software Engineer
          </h1>

          <p className="h3">
            Specializing in <abbr title="Accessibility">Software</abbr> Development
          </p>

          <div className="btn-group">
            <Link to="/contact" className="btn btn-primary">Contact Me</Link>
            <Link to="/about" className="btn btn-secondary">About Me</Link>
          </div>
        </div>

        <div className="right">
          <div className="pattern-bg"></div>
          <div className="img-box">
            <img src="/images/sanji.png" alt="me" className="hero-img" />
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;